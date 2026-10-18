(function(){
// 1. التحقق والتسجيل لـ Service Worker
if('serviceWorker' in navigator){
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('/sw.js?v=40', {scope: '/'})
      .then(function(reg){
        reg.addEventListener('updatefound', function(){
          var nw = reg.installing; 
          if(!nw) return;
          nw.addEventListener('statechange', function(){
            // إصلاح دالة تحديث السيرفس وركر فوراً
            if(nw.state === 'installed' && navigator.serviceWorker.controller) {
              if (nw.postMessage) {
                nw.postMessage({action: 'SKIP_WAITING'});
              }
            }
          });
        });
      }).catch(function(e){ console.warn('[SW]', e); });

    var _r = false;
    navigator.serviceWorker.addEventListener('controllerchange', function(){
      if(_r) return;
      _r = true;
      var _isIOSsw = /iPad|iPhone|iPod/i.test(navigator.userAgent) ||
                     (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      if (_isIOSsw) {
        console.log('[SW] controllerchange — iOS: silent update, no reload');
        return;
      }
      console.log('[SW] controllerchange — update ready');
      if (typeof Swal !== 'undefined') {
        setTimeout(function(){
          Swal.fire({
            toast: true, position: 'top', icon: 'info',
            title: 'تحديث جديد متاح', text: 'اضغط تحديث لتطبيقه',
            showConfirmButton: true, confirmButtonText: 'تحديث',
            showCancelButton: true, cancelButtonText: 'لاحقاً',
            timer: 15000, timerProgressBar: true
          }).then(function(res){ if(res.isConfirmed) window.location.reload(); });
        }, 1000);
      }
    });
  });
}

// 2. إصلاحات العرض لمتصفحات الهواتف
window.addEventListener('pageshow', function(e) {
  setTimeout(function(){
    if(typeof fixSize === 'function') fixSize();
  }, e.persisted ? 350 : 150);
});

// 3. إعدادات شريط تثبيت التطبيق PWA
var _iOS    = /iPad|iPhone|iPod/i.test(navigator.userAgent) ||
              (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
var _droid  = /Android/i.test(navigator.userAgent);
var _alone  = window.matchMedia('(display-mode:standalone)').matches ||
              window.navigator.standalone === true;
var _prompt = null;

// التقاط حدث التثبيت التلقائي (مدعوم في أندرويد وكروم)
window.addEventListener('beforeinstallprompt', function(e){
  e.preventDefault();
  _prompt = e;
  if(!_alone && !localStorage.getItem('_pwa_dismissed')) {
    setTimeout(_show, 1500);
  }
});

window.addEventListener('appinstalled', function(){ _hide(true); });

// دالة التشغيل عند الضغط على زر التثبيت
window.installPWA = function(){
  if(!_prompt) return;
  _prompt.prompt();
  _prompt.userChoice.then(function(){ _prompt = null; _hide(true); });
};

window._hidePWA = function(){ _hide(true); };

// دالة بناء وإظهار شريط التثبيت أسفل الشاشة
function _show(){
  if(document.getElementById('_pb')) return;
  if(_alone) return;
  if(localStorage.getItem('_pwa_dismissed')) return; // عدم الإظهار إذا أغلقه المستخدم سابقاً

  var st = document.createElement('style');
  st.textContent =
    '#_pb{position:fixed;bottom:0;left:0;right:0;z-index:999999;'+
    'background:linear-gradient(160deg,#0d1f35,#0a1628);'+
    'border-top:1px solid rgba(255,255,255,0.07);'+
    'padding:12px 14px;'+
    'padding-bottom:max(12px,env(safe-area-inset-bottom));'+
    'display:flex;align-items:center;gap:10px;'+
    'box-shadow:0 -4px 24px rgba(0,0,0,0.55);font-family:Cairo,sans-serif;'+
    'direction:rtl;animation:_pbu .35s ease;}'+
    '@keyframes _pbu{from{transform:translateY(100%)}to{transform:translateY(0)}}'+
    '#_pb ._pi{width:46px;height:46px;border-radius:12px;flex-shrink:0;'+
    'background:linear-gradient(135deg,#1a8fe0,#0954B5);'+
    'display:flex;align-items:center;justify-content:center;font-size:22px;'+
    'box-shadow:0 3px 12px rgba(9,84,181,0.45);}'+
    '#_pb ._pt{flex:1;min-width:0;text-align:right;}'+
    '#_pb ._pt b{display:block;color:#fff;font-size:14px;font-weight:700;}'+
    '#_pb ._pt small{display:block;color:rgba(255,255,255,0.5);font-size:11px;margin-top:2px;}'+
    '#_pb ._pt em{display:block;color:rgba(255,255,255,0.7);font-size:11px;margin-top:3px;font-style:normal;}'+
    '#_pb ._btn{background:linear-gradient(135deg,#1a8fe0,#0954B5);color:#fff;border:none;'+
    'border-radius:20px;padding:9px 18px;font-weight:700;font-size:13px;'+
    'cursor:pointer;font-family:Cairo,sans-serif;flex-shrink:0;white-space:nowrap;'+
    'box-shadow:0 3px 12px rgba(9,84,181,0.5); }'+
    '#_pb ._x{background:rgba(255,255,255,0.07);border:none;'+
    'color:rgba(255,255,255,0.45);width:28px;height:28px;'+
    'border-radius:50%;cursor:pointer;font-size:15px;'+
    'flex-shrink:0;display:flex;align-items:center;justify-content:center;}';
  document.head.appendChild(st);

  var d = document.createElement('div'); 
  d.id = '_pb';
  
  // تخصيص النص بناءً على نظام التشغيل لضمان عمله عند الجميع
  var hint = '';
  var btn = '';
  
  if (_iOS) {
    hint = '<em>اضغط على زر المشاركة <span style="font-size:14px">⎋</span> ثم "إضافة إلى الشاشة الرئيسية"</em>';
  } else {
    btn = '<button class="_btn" onclick="installPWA()">📲 تثبيت</button>';
  }

  d.innerHTML =
    '<div class="_pi">📲</div>'+
    '<div class="_pt">'+
      '<b>ثبّت التطبيق على هاتفك</b>'+
      '<small>أسرع · بدون متصفح · يعمل دائماً</small>'+
      hint+
    '</div>'+
    btn+
    '<button class="_x" onclick="window._hidePWA()">✕</button>';
  
  document.body.appendChild(d);
}

// دالة إخفاء الشريط وحفظ خيار المستخدم
function _hide(save){
  var b = document.getElementById('_pb');
  if(b) b.remove();
  if(save) {
    try { localStorage.setItem('_pwa_dismissed', 'true'); } catch(e){}
  }
}

// إظهار الشريط للأجهزة التي لا تدعم الحدث التلقائي (مثل iOS) بعد تحميل الصفحة
window.addEventListener('load', function(){
  if(!_alone && _iOS && !localStorage.getItem('_pwa_dismissed')) {
    setTimeout(_show, 2500);
  }
});
})();
