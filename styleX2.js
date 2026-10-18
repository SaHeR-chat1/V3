/* =====================================================
   TigerHost - الكود الكامل (CSS + JavaScript) في ملف واحد
   ===================================================== */

/* ---------- 1) حقن الـ CSS داخل الصفحة ---------- */
(function injectStyles() {
  if (document.getElementById('th-custom-style')) return; // منع التكرار

  // String.raw ضروري كي تبقى رموز مثل \f075 كما هي
  var css = String.raw`
#lonline .uzr { border-color: #0096ae40 !important; background: radial-gradient(circle at 100% 0, rgba(195, 118, 216, .12), transparent 43%), linear-gradient(135deg, #fff 0, #fbf7fc 56%, #f3ebf6 100%) !important; border: 1px solid rgba(139, 83, 155, .18) !important; border-right: 3px solid #b66bc6 !important; box-shadow: inset 0 1px 0 rgba(255, 255, 255, .94), 0 2px 6px rgba(66, 35, 75, .08) !important; padding: 1px; margin: 3px 0px 9px 2px !important; color: #ba5d8261 !important; font-family: fanni; overflow: hidden; width: 99% !important; border-radius: 5px !important; }
#tlogins .u-pic{ border-width: 1px !important; margin-right: 5PX; background-image: none; width: 41px!important; max-width: 41px!important; height: 43px!important; max-height: 43px!important; margin-left: 1px; background-size: cover; border-radius: 3px !important; padding: 0; margin-top: -1px !important; min-width: 41px; min-height: 43px; }
.nav-tabs > li > a { border: none !important; margin: 0; height: 34px !important; text-align: center; padding: 9px 0 !important; font-family: 'el messiri', sans-serif; border: 0 !important; color: #eadbed !important; border-color: rgba(218, 163, 233, .3) !important; background: linear-gradient(180deg, #43284c 0, #302039 55%, #24182a 100%) !important; box-shadow: inset 0 1px 0 rgba(255, 255, 255, .09), 0 1px 3px rgba(30, 15, 35, .2) !important; text-shadow: 0 1px 2px rgba(0, 0, 0, .48) !important; }
#tlogins .th-login-tabs { gap: 4px; }
.nav-tabs > li > a::before { display: none !important; }
.nav-tabs > li.active > a{ color: #fff !important; border-color: rgba(237, 193, 248, .68) !important; background: linear-gradient(135deg, #b569c5 0, #9451a5 38%, #723e82 72%, #573061 100%) !important; }
.nav-tabs { display: flex; width: 100% !important; padding: 0 !important; margin: 0 !important; list-style: none; justify-content: flex-start !important; gap: 1px; align-items: center; border: 0; }
.nav-tabs > li{ flex:1 1 0; margin:0 !important; padding:0 !important; min-width:0; background: linear-gradient(180deg, #2a1932 0, #201526 55%, #17101c 100%) !important; border-color: rgba(211, 151, 229, .3) !important; box-shadow: inset 0 1px 0 rgba(255, 255, 255, .07), 0 2px 8px rgba(53, 27, 62, .18) !important; border-radius: 30px !important; }
.nav-tabs > li > a{ width:100% !important; margin:0 !important; }
#u1, #u2, #u3, #pass1, #pass2 { width: 95% !important; padding: 0 !important; border-style: solid !important; border-right: 7px solid !important; border-left: 7px solid !important; font-family: el messiri, FontAwesome !important; height: 26px; border-left-style: double !important; border-right-style: double !important; margin: 5px auto !important; display: block; text-align: center; background: linear-gradient(180deg, #fff, #faf6fb) !important; color: #3e3042 !important; border-color: #d7c3dc !important; box-shadow: inset 0 1px 2px rgba(64, 35, 72, .055), 0 1px 2px rgba(69, 37, 77, .04) !important; outline: 0 !important; }
#tlogins .tab-content { height: 108px !important; background: linear-gradient(180deg, #2a1932 0, #201526 55%, #17101c 100%) !important; border-color: rgba(211, 151, 229, .3) !important; box-shadow: inset 0 1px 0 rgba(255, 255, 255, .07), 0 2px 8px rgba(53, 27, 62, .18) !important; }
#tlogins button.btn { width: 37%; padding: 0 !important; height: 32px; border-radius: 15px 15px 15px 15px !important; border: 1px solid #ffffff69 !important; margin: -24px auto !important; display: block; text-align: center; color: #fff !important; border-color: rgba(111, 55, 126, .48) !important; background: linear-gradient(135deg, #a45bb6 0, #854696 40%, #683675 72%, #4e2958 100%) !important; box-shadow: inset 0 1px 0 rgba(255, 255, 255, .24), 0 2px 6px rgba(79, 36, 91, .21) !important; font-family: 'el messiri', sans-serif; margin-top: 4px !important; }
#tlogins > div.btn-primary.mini.fl{ top: -1px !important; box-shadow: inset 0 1px 0 rgba(255, 255, 255, .07), 0 2px 8px rgba(53, 27, 62, .18) !important; position: relative; margin-top: 2px; border-radius: 3px !important; background: linear-gradient(90deg, #1b1220 0, #34203d 36%, #64386f 72%, #9854a8 100%) !important; border-color: rgba(218, 161, 234, .42) !important; }
#tlogins #s1::before { font-family: 'FontAwesome'; }
#loginstat, #tlogins #s1{ color: #fff !important; pointer-events: none; width: 38% !important; font-size: 14px !important; padding: 0 !important; height: 24px!important; margin: 2px 5px 2px 0!important; text-align: center; background: #0d1c2500; font-family: 'el messiri'; }
#loginstat { border-right: 4px #f8f9fa solid !important; }
#l2 > span{ color: #fff!important; }
#tlogins > a{ display:none }
.miniBtn { background: rgba(255, 255, 255, 0.08); color: #fff; padding: 4px 10px; border-radius: 16px; font-size: 11px!important; text-decoration: none; border: 1px solid rgb(221 170 11 / 37%); transition: 0.2s; font-weight: 600; white-space: nowrap; display: inline-flex; align-items: center; justify-content: center; width: 15%; }
#room > div.div_d2_box > div.tablebox.footer.d-flex.fl.light > button.fa.fa-send.fl.btn.btn-primary{ margin-top: -1px; border-radius: 0 45px 37px 40px !important; border-radius: 3px; padding-left: 3px; font-size: 14px; margin-left: 8px!important; position: relative; border-color: #0000001f; margin-top: 2px; left: -3px; padding-right: 4px; border-color: #0000001f !important; }
#room > div.div_d2_box > div.tablebox.footer.d-flex.fl.light > button.fa.fa-sign-out.fl.btn.btn-primary{ padding: 2px 5px !important; box-shadow: inset 0 1px 0 rgb(255 255 255 / .15), 0 1px 1px rgb(0 0 0 / .075) !important; border-radius: 3px !important; margin-left: 0px !important; border: 1px solid #245580; border-color: #245580 !important; margin-left: 2px; margin-top: 2px; height: 29px!important; }
#tbox{ margin-bottom: 4px; height: 22px!important; min-height: 26px; margin-top: 3px !important; border-radius: 3px !important; max-height: 26px; direction: rtl; border-color: #73686D !important; vertical-align: bottom; padding: .1em .3em!important; border: 1px solid lightgrey !important; overflow: hidden; }
#wall > div.tablebox.light.d-flex > textarea{ margin-bottom: 4px; height: 22px!important; min-height: 26px!important; margin-top: 3px !important; border-radius: 3px !important; max-height: 26px; direction: rtl; border-color: #73686D !important; vertical-align: bottom; padding: .1em .3em!important; border: 1px solid lightgrey !important; overflow: hidden; }
div.div_d2_box > div.tablebox.footer.d-flex.fl.light > button.fr.uploadP.label-primary.fa.fa-th-list.fl{ margin-left: 5px; width: 26px; height: 27px; margin-top: 4px; }
#d2  div.fl.fa.fa-sign-in.btn.btn-primary.dots.roomh.border.corner{ padding: 4px 22px!important; max-width: 180px!important; font-size: 14px!important; border-radius: 5px; min-width: 60px!important; cursor: pointer; font-family: 'el messiri'; }
#d2bc .uzr.d-flex.mm { border-radius: 0 14px 0 14px!important; padding: 2px 1px!important; box-shadow: 0 0 5px 0 #000; background: repeating-linear-gradient(45deg, rgb(255 255 255 / .8), #ffffff 100px, #ffffffb0 0, #fff6f699 200px), repeating-linear-gradient(-45deg, rgb(255 255 255 / .5), rgb(255 255 255 / .93) 100px, #b3adadd1 0, #ffffffe6 200px); left: 6px; width: 95%!important; color: #0f0202; /* min-height: 88px; */ }
#d2bc{ display: flex; align-items: center; flex-direction: column; align-content: center; }
#d2bc{ -ms-overflow-style:none; scrollbar-width:none; gap: 8px; }
#d2bc::-webkit-scrollbar{ width:0; height:0; display:none; }
#d2bc .u-msg.break{ display: flex; justify-content: center; align-items: center; flex-direction: column; overflow: hidden; flex-wrap: wrap; overflow-wrap: anywhere; word-break: break-word; white-space: normal; }
#wall .Del_com{/* gap: 27px; */direction: rtl;margin-top: 17px;display: flex;align-items: center;justify-content: space-between;width: 100%;min-width: 100%;}
#wall .Del_com .fa-heart{ border-radius: 8px !important; color: #fff; background-color: red; border-color: #fff0; font-size: 13px!important; }
#wall .Del_com .comm { border-color: #050505; border-radius: 6px !important; min-width: 49px; font-size: 13px !important; display: flex; gap: 4px; align-items: center; }
#wall .Del_com .comm::before{ content:"\f075" !important; font-family:FontAwesome !important; font-style:normal !important; font-weight:400 !important; }
#wall .Del_com .comm::after{ content:" تعليق"; font-family:Arial,sans-serif !important; font-size:11px; }
#wall .Del_com .fa-times{ color: #FFF; background-color: #050505; border: 0; height: 23px; width: 19px !important; font-size: 13px !important; display: flex; border-radius: 5px; }
#wall .uzr .fitimg{ width: 47px!important; height: 45px; max-height: 45px!important; max-width: 47px!important; }
#dpnl > label{ text-align: center; font-variant: JIS90; color: #fff !important; font-size: .6rem; font-weight: 900; word-wrap: break-word; padding: 4px; margin: 0 0 20px; border-radius: 59px 0 68px 0!important; width: 130px; margin-left: 79px!important; background: linear-gradient(-45deg, #cc31cc, pink, #4997d0, #4caf50); background-size: 400% 400%; font-family: 'el messiri'; }
#wall > div.tablebox.light.d-flex > button.fa.fa-send.sndbc.fl.btn.btn-primary,#ytIcon,#wall > div.tablebox.light.d-flex > button.fr.fa.fa-share-alt.sndfilebc.fl.btn.btn-primary{ font-family: 'el messiri'; height: 29px; border-radius: 5px!important; padding: 4px!important; }
#wall > div.tablebox.light.d-flex > button.fa.fa-send.sndbc.fl.btn.btn-primary::before,#ytIcon::before,#wall > div.tablebox.light.d-flex > button.fr.fa.fa-share-alt.sndfilebc.fl.btn.btn-primary::before{ font-family: 'FontAwesome'; }
.mic_chat{ border-radius: 48px; /* height: 2.4rem; */ /* position: relative; */ background-image: url(https://d.top4top.io/p_32905x0jq1.jpg) !important; background-size: 100% 100%; background-position: center; background-repeat: no-repeat; text-align: center; /* top: 8px; */ }
#mic_chat .borderr { position: absolute; content: ""; top: -3px; margin-top: 0; margin-left: -20px; width: 40px; height: 40px; border-radius: 50px; background: url(https://f.top4top.io/p_3290sy6kn1.jpg) 100% 100% / 100% 100% no-repeat !important; }
.mic_chat > div{ /* display: flex; */ align-items: center; justify-content: center; flex-direction: row; width: 100%; gap: 3px; }
#mutedmicstop{ background-color: #E91E63!important; }
#mutedmicplay{ background-color: #FFA000!important; }
#mutedmicstop,#mutedmicplay{ border-radius: 50%!important; width: 42px!important; height: 42px!important; padding: 0!important; margin: 0!important; margin-left: 11px!important; margin-top: 3px!important; }
#mutedmicstop > span::before,#mutedmicplay> span::before{ font-size:25px; font-weight:400px!important }
#mutedmicstop > span,#mutedmicplay > span {margin-top: -8px!important;}
#settings .label{ font-family: 'el messiri'; }
#settings .label{cursor: pointer;text-align: center;height: 32px;line-height: 19px!important;font-weight: 700;position: relative;margin-bottom: .2rem!important;border-radius: 0 45px 37px 40px !important;border: 1px solid #FFE0F6 !important;}
#settings .tc .fa-ban::before, #settings .tc .fa-ban::before {    content: "مغلق \f058" !important; font-size: 16px; float: left; left: -4px; top: -4px; color: #fefffc; cursor: pointer; border: 1px solid #000; width: 80px; line-height: 20px; position: relative; border-radius: 0 45px 37px 40px !important; background-color: #fc1b0b; padding: 3px; }
#dpnl{ min-width: 287px !important; max-width: 287px !important; }
.rmr .u-pic{ width: 42px!important; height: 42px!important; max-width: 42px!important; max-height: 42px!important; min-height: 45px!important; min-width: 43px!important; }
.rmr .uc{ background-color#ff00!important; background: linear-gradient(180deg, #2a1932 0, #201526 55%, #17101c 100%) !important; border-color: rgba(211, 151, 229, .3) !important; box-shadow: inset 0 1px 0 rgba(255, 255, 255, .07), 0 2px 8px rgba(53, 27, 62, .18) !important; color: #ffffff; padding: 0!important; min-width: 52px!important; border-radius: 2px!important; padding: 2px!important; }
#rooms .room{ display: flex; justify-content: center; position: relative; background: #fff; border: 1px solid #e6e6fa; padding: .2rem .05rem; cursor: pointer!important; margin: 0px .05rem -1px; zoom: .89; }
#rooms > div.rmr > div.nosel.d-flex.room > div.d-flex.flex-grow-1{ display: flex; align-items: center; }
#d2 .uzr .fitimg{ min-width: 45px!important; max-width: 45px!important; }
#users .fl.hand.nosel.uzr.uhtml{ margin-bottom:4px!important; border: 1px solid #d2d2d2; border-radius:4px!important; padding:5px }
#users .u-pic{ max-height: 40px!important; }
.bgg .footer .btn, .bgg .footer .call, .bgg .footer .microphone, .bgg .footer .stopmico, .bgg .footer .sndfile, .bgg .footer .sndpm{ height: 30px !important; font-size: 14px !important; border-radius: 6px !important; margin: 2px 3px !important; text-align: center; }
.bgg .footer .emo{ width:28px !important; height:28px !important; padding:2px !important; margin:2px 3px !important; }
.bgg .footer{ padding:3px !important; background: #595959; }
.bgg .footer textarea.tbox{ min-height:30px !important; height:30px !important; padding:5px 8px !important; font-size:13px !important; line-height:18px !important; }
.bgg .head{ height: 31px !important; padding:2px 3px !important; }
.bgg .head .btn, .bgg .head .label{ width:26px !important; height:26px !important; line-height:26px !important; padding:0 !important; font-size:13px !important; border-radius:6px !important; margin:1px 2px !important; }
.bgg .head .uzr{ margin:2px !important; width:65% !important; }
.bgg .head .ustat{ width:3px !important; height:18px !important; }
.bgg .head .u-topic{ font-size:12px !important; padding:1px 6px !important; border-radius:4px !important; line-height:18px !important; }
.bgg .fitimg.u-pic{ max-height: 40px!important; max-width: 40px!important; min-width: 40px!important; height: 40px!important; min-height: 40px!important; max-height: 40px!important; }
.bgg div.btn.minix.btn-primary.fa.fa-times.fr{ border-radius: 5px!important; }
label.fl.hand.fa.border.fa-user::before,.bgg .head .ustat{ display:none !important; content:none !important; }
.cc .head .u-pic{ width:10px !important; height:10px !important; min-width:10px !important; min-height:10px !important; max-height:10px !important; margin-right:3px !important; border-radius:999px!important }
.cc .uzr.uhtml{ margin:3px 0 !important; border-radius:5px !important; }
.cc .uzr.uhtml .u-pic{ width:35px !important; height:35px !important; min-width:35px !important; min-height:35px !important; max-width:35px !important; max-height:35px !important; border:1px solid rgba(148,163,184,.7) !important; border-radius:5px !important; margin:3px 6px 3px 4px !important; }
.cc .uzr.uhtml > .d-flex{ gap:3px !important; }
.uzr.uhtml .ustat{ height: 8px !important; min-heigh: 8px !important; max-height: 8px !important; border-radius:50px!important; width: 8px !important; min-width: 8px !important; max-width: 8px !important; margin-right: 5px; }
#upro center,.profile-card-modern,#upro .light{ background: #f5f5f5; }
#upro .borderg{ background: #ffffff; border-radius: 5px!important; font-family: 'el messiri'; font-weight: 600!important; font-size: 14px!important; }
#upro .borderg::before{ font-family: 'FontAwesome'; margin-right: 2px; }
.profile-cover.fitimg{ }
.change-cover-btn{ }
.profile-content{ }
.profile-picture{ }
#upro > div > div > div.modal-header.label-primary > label{ background: #fff; color: #000; padding: 3px!important; border-radius: 3px; }
#upro > div > div > div.modal-header.label-primary > span{ background: #c02323; }
#upro > div > div > div.modal-header.label-primary > span .fa-times{font-size: 11px!important;}
#upro > div > div > div.modal-body > div.light.fl.pro.center.break > center > center > label > div.ui--all.ui-shadow.fr.u-room > div{ padding: 3px!important; font-family: 'el messiri'; }
#upro > div > div > div.modal-body > div.light.fl.pro.center.break > center > center > label > div.ui--all.ui-shadow.fr.u-room > div > img{ max-width: 15px!important; margin-right: 3px; }
#users > div > label,#rooms > div.nosel.d-flex.label-primary.fl.bgg > button,#usearch,.cc > div.label.border.mini.label-danger.fr.fa.fa-times{ font-family: 'el messiri'; border-radius: 3px!important; }
#rooms > div.nosel.d-flex.label-primary.fl.bgg > button::before,.cc > div.label.border.mini.label-danger.fr.fa.fa-times::before{ font-family:'FontAwesome' ; margin-right:2px }
.mic_chat > div > .micborder { border-radius: 50px; border: 1px solid #fff; width: 43px; height: 43px; }
.daymsg, .welcpic { padding: 1px!important; margin-top: 2px!important; border-radius: 2px!important; background-color: rgb(0 77 255 / 10%) !important; }
.daymsg .u-msg, .welcpic .u-msg{ font-family: 'el messiri'; font-size: 13px!important; }
.th-d0-wall:before { content: "\f044"; font-family: FontAwesome; }
.fa-users::before{ content: "\f19c"!important; font-family: FontAwesome }
#wall#wall#wall .Del_com { margin-top: 8px !important; }
#tlogins > div.label.th-login-topbar.d-flex.fl{ display:none; }
#tlogins .tab-content > .active { border-radius: 1px 1px 15px 15px; width: 100% !important; height: 102px !important; font-size: 14px !important; color: #fff; padding: 0 0 !important; background-color: #0d1c25 !important; border: 1px solid #000; box-shadow: none; height: 140px !important; background: #ff00 !important; border: 0; }
.nav-tabs { width: 99% !important; }
#tlogins .fa-eye, .th-stealth-btn { color: #9a56ab; }
#login-btn-holder{ width:100% !important; padding:3px !important; box-sizing:border-box !important; background:linear-gradient(180deg,#321437,#1c0c21) !important; display:grid !important; grid-template-columns:repeat(8,1fr) !important; gap:2px !important; }
#dahabLoginDecor, .dahabTopIconsBar, .dahabSideBtns{ display:contents !important; }
#login-btn-holder>.login-btn-holder__btn, .dahabIconBtn, .dahabSideBtn{ min-width:0 !important; width:100% !important; height:31px !important; min-height:31px !important; max-height:31px !important; margin:0 !important; padding:2px 1px !important; border:1px solid #69446f !important; border-radius:5px !important; background:linear-gradient(180deg,#51255c,#2c1233) !important; color:#fff !important; text-decoration:none !important; display:flex !important; flex-direction:column !important; align-items:center !important; justify-content:center !important; gap:1px !important; overflow:hidden !important; box-sizing:border-box !important; font-size:7px !important; line-height:9px !important; font-weight:bold !important; white-space:nowrap !important; text-align:center !important; box-shadow: inset 0 1px 0 rgba(255,255,255,.16), 0 1px 2px rgba(0,0,0,.3) !important; }
#login-btn-holder>.login-btn-holder__btn:before, .dahabIconBtn i, .dahabSideBtn i{ font-size:11px !important; line-height:11px !important; color:#eee !important; margin:0 !important; padding:0 !important; }
.dahabAccessibleText, .dahabSideText{ display:block !important; width:100% !important; min-width:0 !important; margin:0 !important; padding:0 !important; font-size:7px !important; line-height:9px !important; white-space:nowrap !important; overflow:hidden !important; text-overflow:ellipsis !important; text-align:center !important; color:#fff !important; }
.dahabSideIcon{ display:flex !important; align-items:center !important; justify-content:center !important; width:100% !important; height:11px !important; line-height:11px !important; margin:0 !important; padding:0 !important; }
.dahabIconBtn:hover, .dahabSideBtn:hover, #login-btn-holder>.login-btn-holder__btn:hover{ background:linear-gradient(180deg,#74457f,#48204f) !important; color:#fff !important; }
#tlogins .fa:before{ display:inline-block ; font-style:normal !important; font-weight:normal !important; line-height:1 !important; text-align:center !important; }
.fa-facebook:before{ content:"f" !important; font-weight:bold !important; }
.fa-music:before{ content:"♫" !important; }
.fa-star-half-o:before{ content:"★" !important; }
.fa-phone:before{ content:"☎" !important; }
.fa-envelope:before{ content:"✉" !important; }
.fa-commenting:before{ content:"●" !important; }
.fa-mobile:before{ content:"▯" !important; }
.fa-address-book:before{ content:"▣" !important; }
.fa-at:before{ content:"@" !important; font-weight:bold !important; }
.fa-map-marker:before{ content:"●" !important; }
.fa-globe:before{ content:"◉" !important; }
.fa-film:before{ content:"▤" !important; }
.fa-trophy:before{ content:"♛" !important; }
.fa-star:before{ content:"★" !important; }
.dahabIconBtn .fa:before, .dahabSideBtn .fa:before, #login-btn-holder>.login-btn-holder__btn:before{ font-size:11px !important; color:#fff !important; }
@media(max-width:500px){
  #login-btn-holder{ grid-template-columns:repeat(8,1fr) !important; gap:2px !important; padding:2px !important; }
  #login-btn-holder>.login-btn-holder__btn, .dahabIconBtn, .dahabSideBtn{ height:31px !important; min-height:31px !important; max-height:31px !important; font-size:6px !important; line-height:8px !important; padding:2px 0 !important; }
  .dahabAccessibleText, .dahabSideText{ font-size:6px !important; line-height:8px !important; }
  #login-btn-holder>.login-btn-holder__btn:before, .dahabIconBtn i, .dahabSideBtn i, .dahabIconBtn .fa:before, .dahabSideBtn .fa:before{ font-size:10px !important; line-height:10px !important; }
}
.uploadP { border-radius: 0 45px 37px 40px !important; }
#d0{ width:100% !important; height:38px !important; min-height:38px !important; max-height:38px !important; padding:0 !important; margin:0 !important; display:flex !important; align-items:stretch !important; border:0 !important; overflow:hidden !important; box-sizing:border-box !important; }
#d0>button:not(.filter_notf){ flex:1 1 0 !important; width:auto !important; min-width:0 !important; height:38px !important; min-height:38px !important; max-height:38px !important; margin:0 !important; padding:0 !important; border:0 !important; border-radius:0 !important; background:transparent !important; box-shadow:none !important; color:#ccc !important; float:none !important; position:relative !important; display:flex !important; align-items:center !important; justify-content:center !important; text-align:center !important; font-size:0 !important; line-height:38px !important; box-sizing:border-box !important; overflow:visible !important; outline:none !important; }
#d0>button:not(.filter_notf):before{ margin:0 !important; padding:0 !important; font-size:18px !important; line-height:38px !important; color:inherit !important; position:static !important; width:auto !important; height:auto !important; }
#d0>button:not(.filter_notf):hover{ background:rgba(255,255,255,.05) !important; color:#fff !important; }
#d0>.th-d0-users{ color:#38a7ff !important; }
#d0>.th-d0-chats{ color:#cb65ee !important; }
#d0>.th-d0-rooms{ color:#21d6b5 !important; }
#d0>.th-d0-wall{ color:#d2d7db !important; }
#d0>.th-d0-settings{ color:#aeb8c0 !important; }
#d0>button:not(.filter_notf).active, #d0>button:not(.filter_notf):focus{ background:linear-gradient(180deg,#70433d,#573240) !important; }
#d0 .busers, #d0 .pmc, #d0 .bwall{ position:absolute !important; top:1px !important; left:50% !important; margin-left:7px !important; min-width:auto !important; width:auto !important; height:auto !important; padding:0 2px !important; background:transparent !important; border:0 !important; border-radius:0 !important; color:#fff !important; font-family:Arial,sans-serif !important; font-size:9px !important; font-weight:bold !important; line-height:10px !important; text-shadow:0 1px 2px #000 !important; z-index:2 !important; }
#d0>br{ display:none !important; }
#d0>button:not(.filter_notf).label{ border:0 !important; }
#d0>button:not(.filter_notf).label-primary{ background-color:transparent !important; }
#d0>button.th-d0-users:not(.filter_notf):before{ color:#38a7ff !important; }
#d0>button.th-d0-chats:not(.filter_notf):before{ color:#cb65ee !important; }
#d0>button.th-d0-rooms:not(.filter_notf):before{ color:#21d6b5 !important; }
#d0>button.th-d0-wall:not(.filter_notf):before{ color:#d2d7db !important; }
#d0>button.th-d0-settings:not(.filter_notf):before{ color:#92934b!important; content: "\f1de" !important; }
#settings .th-color-label { height: 24px !important; }
.fa-sign-in::before { content: "\f090"; margin-right: 3px; font-family: 'FontAwesome'; }
.th-room-count { background-color: var(--bg-primary); border-radius: 4px !important; }
.fa-microphone:before{ content:'\f130'; font-family:FontAwesome !important; font-style:normal !important; font-weight:400 !important; }
#rooms .th-room-mics{ display:flex; justify-content:center; align-items:center; gap:1px; margin-top:1px; white-space:nowrap; }
#rooms .th-room-mics .fa{ font-size:19px !important; color:#000 !important; padding:0 !important; margin:0 !important; width:auto !important; height:auto !important; line-height:11px !important; margin-top:3px !important; }
#d2 .uzr.mm { padding: 0 0 0 2px !important; border-bottom: 1px solid #f8f8f8; outline: none !important; }
#login-btn-holder .th-brand-signature { grid-column: 1 / -1 !important; width: 100% !important; height: 37px; display: flex !important; align-items: center; justify-content: center; gap: 10px; position: relative; overflow: hidden; box-sizing: border-box; border: 1px solid #9b7949; border-radius: 5px; background: linear-gradient(135deg, #1a101d 0%, #432449 50%, #1a101d 100%); box-shadow: inset 0 1px 0 #ffffff22, 0 2px 8px #00000044; margin-bottom: 3px; white-space: nowrap; }
#login-btn-holder .th-brand-signature::before, #login-btn-holder .th-brand-signature::after { content: ""; flex: 1; max-width: 50px; height: 1px; background: linear-gradient(90deg, transparent, #e5bd78, transparent); }
#login-btn-holder .th-brand-designer { color: #d6b882; font-family: Georgia, serif; font-size: 11px; font-style: italic; letter-spacing: 1px; text-shadow: 0 1px 3px #000; }
#login-btn-holder .th-brand-name { color: #ffe0a0; font-size: 16px; font-weight: bold; text-shadow: 0 0 9px #d4a45b77, 0 1px 2px #000; letter-spacing: .4px; }
@media (max-width: 500px) {
  #login-btn-holder .th-brand-signature { gap: 5px; }
  #login-btn-holder .th-brand-name { font-size: 13px; }
  #login-btn-holder .th-brand-designer { font-size: 9px; }
}
#TH_PM_EMPTY{ display:none!important }
#chats{ background-size: 100% 100%; background-image: linear-gradient(rgba(48, 32, 57, 0.5), rgba(48, 32, 57, 0.5)), url(https://i.ibb.co/bg7dR1BW/Gemini-Generated-Image-pw0qcupw0qcupw0q-1.jpg); }
`;

  var style = document.createElement('style');
  style.id = 'th-custom-style';
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
})();


/* ---------- 2) حقن شريط الأزرار والعلامة التجارية ---------- */
$(`
<div id="login-btn-holder">
  <div class="th-brand-signature" dir="ltr">
    <span class="th-brand-designer">Dsesgin~</span>
    <b class="th-brand-name">『 Jawwl.chat 』🐅!</b>
  </div>
  <a href="/contact.html" rel="nofollow noopener" class="login-btn-holder__btn fa fa-facebook btn btn-primary">اتصل بنا</a>
  <a href="/rules.html" class="login-btn-holder__btn fa fa-music btn btn-default">القوانين</a>
  <a href="/sub.html" class="login-btn-holder__btn fa fa-star-half-o btn btn-primary">الإشتراكات</a>
  <a href="/FAQ.html" class="login-btn-holder__btn fa fa-user btn btn-default">دليل الاستخدام</a>

  <nav id="dahabLoginDecor" aria-label="روابط شات جوال">

    <div class="dahabTopIconsBar">

      <a href="chatjawal.ps/jerusalem" class="dahabIconBtn" aria-label="شات القدس" title="شات القدس ">
        <i class="fa fa-phone" aria-hidden="true"></i>
        <span class="dahabAccessibleText">القدس</span>
      </a>

      <a href="chatjawal.ps/ramallah" class="dahabIconBtn" aria-label="شات رام الله" title="شات رام الله">
        <i class="fa fa-envelope" aria-hidden="true"></i>
        <span class="dahabAccessibleText">رام الله</span>
      </a>

      <a href="chatjawal.ps/nablus" class="dahabIconBtn" aria-label="شات نابلس" title="شات نابلس">
        <i class="fa fa-commenting" aria-hidden="true"></i>
        <span class="dahabAccessibleText">نابلس</span>
      </a>

      <a href="chatjawal.ps/hebron" class="dahabIconBtn" aria-label="شات الخليل" title="شات الخليل">
        <i class="fa fa-user" aria-hidden="true"></i>
        <span class="dahabAccessibleText">الخليل</span>
      </a>

      <a href="chatjawal.ps/gaza" class="dahabIconBtn" aria-label="شات غزة" title="شات غزة">
        <i class="fa fa-mobile" aria-hidden="true"></i>
        <span class="dahabAccessibleText">غزة</span>
      </a>

      <a href="chatjawal.ps/bethlehem" class="dahabIconBtn" aria-label="شات بيت لحم" title="شات بيت لحم">
        <i class="fa fa-address-book" aria-hidden="true"></i>
        <span class="dahabAccessibleText">بيت لحم</span>
      </a>

      <a href="chatjawal.ps/nazareth" class="dahabIconBtn" aria-label="شات الناصرة" title="شات الناصرة">
        <i class="fa fa-at" aria-hidden="true"></i>
        <span class="dahabAccessibleText">الناصرة</span>
      </a>

      <a href="chatjawal.ps/tulkarm" class="dahabIconBtn" aria-label="شات طولكرم" title="شات طولكرم">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
        <span class="dahabAccessibleText">طولكرم</span>
      </a>

      <a href="chatjawal.ps/qalqilya" class="dahabIconBtn" aria-label="شات قلقيلية" title="شات قلقيلية  ">
        <i class="fa fa-globe" aria-hidden="true"></i>
        <span class="dahabAccessibleText">قلقيلية</span>
      </a>

    </div>

    <div class="dahabSideBtns">

      <a href="chatjawal.ps/jenin" class="dahabSideBtn" title="شات جنين">
        <span class="dahabSideIcon"><i class="fa fa-film" aria-hidden="true"></i></span>
        <span class="dahabSideText">جنين</span>
      </a>

      <a href="chatjawal.ps/salfit" class="dahabSideBtn" title="شات سلفيت ">
        <span class="dahabSideIcon"><i class="fa fa-trophy" aria-hidden="true"></i></span>
        <span class="dahabSideText">سلفيت</span>
      </a>

      <a href="chatjawal.ps/tubas" class="dahabSideBtn" title="شات طوباس ">
        <span class="dahabSideIcon"><i class="fa fa-star" aria-hidden="true"></i></span>
        <span class="dahabSideText">طوباس</span>
      </a>

    </div>

  </nav>
</div>
`).insertBefore('.nav.nav-tabs');


/* ---------- 3) إضافة أيقونات الميكروفون لعدّاد الغرف ---------- */
$(function () {
  var MICS_HTML = `
    <div class="th-room-mics">
      <i class="fa fa-microphone"></i>
      <i class="fa fa-microphone"></i>
      <i class="fa fa-microphone"></i>
      <i class="fa fa-microphone"></i>
      <i class="fa fa-microphone"></i>
    </div>`;

  function addMics(el) {
    $(el).find('.th-room-count.fa-microphone')
      .addBack('.th-room-count.fa-microphone')
      .each(function () {
        var $this = $(this);
        if (!$this.next('.th-room-mics').length) {
          $this.after(MICS_HTML);
        }
      });
  }

  var rooms = document.getElementById('rooms');
  if (rooms) {
    addMics(rooms);

    // مراقبة أي عناصر جديدة تُضاف لقائمة الغرف
    new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        m.addedNodes.forEach(function (node) {
          if (node.nodeType === 1) addMics(node);
        });
      });
    }).observe(rooms, { childList: true, subtree: true });
  }
});
