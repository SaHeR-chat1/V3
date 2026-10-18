(function(){
  // التحقق من أن الشريط غير موجود مسبقاً في الصفحة
  if(document.getElementById('_custom_app_banner')) return;

  // 1. روابط التحميل الخاصة بك (استبدلها بروابط تطبيقك الفعلية)
  var androidDownloadUrl = "https://dir.chatjawal.net/ChatPalestine.apk"; // رابط الأندرويد
  var iosDownloadUrl     = "https://chatdaffa.com";     // رابط الآيفون

  // التحقق من نوع جهاز الزائر ليوجه الرابط تلقائياً
  var isIOS = /iPad|iPhone|iPod/i.test(navigator.userAgent) || 
              (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var finalDownloadUrl = isIOS ? iosDownloadUrl : androidDownloadUrl;

  // 2. إضافة التنسيقات والألوان (CSS) والتأثيرات الانتقالية
  var style = document.createElement('style');
  style.textContent =
    '#_custom_app_banner {' +
    '  position: fixed; bottom: 0; left: 0; right: 0; z-index: 999999;' +
    '  background: linear-gradient(160deg, #0d1f35, #0a1628);' +
    '  border-top: 1px solid rgba(255, 255, 255, 0.1);' +
    '  padding: 12px 16px;' +
    '  padding-bottom: max(12px, env(safe-area-inset-bottom));' +
    '  display: flex; align-items: center; justify-content: space-between; gap: 12px;' +
    '  box-shadow: 0 -4px 24px rgba(0,0,0,0.6);' +
    '  font-family: Cairo, sans-serif; direction: rtl;' +
    '  transition: opacity 0.5s ease, transform 0.5s ease;' + // تأثير الاختفاء التدريجي
    '  animation: bannerSlideUp .4s ease-out;' +
    '}' +
    '@keyframes bannerSlideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }' +
    '#_custom_app_banner ._banner_icon {' +
    '  width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;' +
    '  background: linear-gradient(135deg, #1a8fe0, #0954B5);' +
    '  display: flex; align-items: center; justify-content: center; font-size: 22px;' +
    '  box-shadow: 0 4px 12px rgba(9, 84, 181, 0.4);' +
    '}' +
    '#_custom_app_banner ._banner_text {' +
    '  flex: 1; min-width: 0; text-align: right;' +
    '}' +
    '#_custom_app_banner ._banner_text b {' +
    '  display: block; color: #ffffff; font-size: 14px; font-weight: 700; margin-bottom: 2px;' +
    '}' +
    '#_custom_app_banner ._banner_text small {' +
    '  display: block; color: rgba(255, 255, 255, 0.6); font-size: 11px;' +
    '}' +
    '#_custom_app_banner ._banner_btn {' +
    '  background: linear-gradient(135deg, #1a8fe0, #0954B5);' +
    '  color: #ffffff !important; border: none; border-radius: 20px;' +
    '  padding: 8px 18px; font-weight: 700; font-size: 13px; text-decoration: none;' +
    '  cursor: pointer; flex-shrink: 0; white-space: nowrap;' +
    '  box-shadow: 0 4px 12px rgba(9, 84, 181, 0.4); transition: transform 0.2s;' +
    '}' +
    '#_custom_app_banner ._banner_btn:active { transform: scale(0.95); }' +
    '#_custom_app_banner ._banner_close {' +
    '  background: rgba(255, 255, 255, 0.08); border: none;' +
    '  color: rgba(255, 255, 255, 0.5); width: 28px; height: 28px;' +
    '  border-radius: 50%; cursor: pointer; font-size: 14px;' +
    '  flex-shrink: 0; display: flex; align-items: center; justify-content: center;' +
    '}' +
    '#_custom_app_banner ._banner_close:hover { color: #fff; background: rgba(255,255,255,0.15); }';
  document.head.appendChild(style);

  // 3. بناء هيكل الـ HTML الخاص بالشريط الإعلاني
  var bannerContainer = document.createElement('div');
  bannerContainer.id = '_custom_app_banner';

  bannerContainer.innerHTML =
    '<div class="_banner_icon">📲</div>' +
    '<div class="_banner_text">' +
    '  <b>ثبّت التطبيق</b>' +
    '  <small>أسرع · بدون متصفح · يعمل دائماً</small>' +
    '</div>' +
    '<a href="' + finalDownloadUrl + '" target="_blank" class="_banner_btn">تثبيت التطبيق</a>' +
    '<button class="_banner_close" id="_close_banner_btn">✕</button>';

  document.body.appendChild(bannerContainer);

  // دالة مخصصة لحذف الإعلان مع تأثير اختفاء سلس
  function removeBannerSmoothly() {
    var banner = document.getElementById('_custom_app_banner');
    if (banner) {
      banner.style.opacity = '0';
      banner.style.transform = 'translateY(100%)';
      setTimeout(function() {
        if (banner) banner.remove();
      }, 500); // الانتظار نصف ثانية حتى ينتهي تأثير الأنيكيشن ثم الحذف تماماً
    }
  }

  // 4. إمكانية الإغلاق اليدوي فوراً عند الضغط على زر (✕)
  document.getElementById('_close_banner_btn').addEventListener('click', function() {
    removeBannerSmoothly();
  });

  // 5. المؤقت التلقائي لإخفاء الإعلان تماماً بعد دقيقة واحدة (60 ثانية)
  setTimeout(function(){
    removeBannerSmoothly();
  }, 60000);

})();
