 /* ==========================================
   CHATSAL.COM | شات عسل
   External Login Interface Only

   تصميم عسلي مودرن وناعم
   اللون الأساسي: #805832

   لا يغير واجهة الشات الداخلية
   ========================================== */


/* ==========================================
   01 - الألوان والحاوية الخارجية
   ========================================== */

#tlogins {
    --asal-main: #805832;
    --asal-dark: #624024;
    --asal-hover: #956B42;
    --asal-gold: #C5A67F;

    --asal-bg: #FFFAF3;
    --asal-light: #FFFDF9;
    --asal-soft: #F5EBDD;
    --asal-border: #E9DBC3;

    --asal-text: #655548;
    --asal-muted: #95816D;
    --asal-green: #287554;

    background: var(--asal-bg) !important;
    color: var(--asal-text) !important;

    border-color: var(--asal-border) !important;
}

#tlogins,
#tlogins * {
    box-sizing: border-box;
}


/* ==========================================
   02 - الشريط العلوي
   ========================================== */

#tlogins .th-login-topbar {
    background: var(--asal-main) !important;
    color: #FFFFFF !important;

    border: 0 !important;
    border-bottom: 2px solid var(--asal-gold) !important;

    min-height: 43px;
}

/* اسم الموقع */

#tlogins .th-login-topbar h1 {
    color: #FFFFFF !important;

    font-size: 14px !important;
    font-weight: 700 !important;
    line-height: 1.5 !important;

    text-shadow: none !important;
}

/* شعار شات عسل */

#tlogins .th-login-logo {
    border-radius: 6px !important;
    margin-left: 5px;
}

/* زر تحديث الصفحة */

#tlogins .th-login-topbar .fa-refresh {
    background: #986C43 !important;
    color: #FFFFFF !important;

    border: 1px solid #B59069 !important;
    border-radius: 6px !important;

    font-size: 17px !important;
    box-shadow: none !important;
}

#tlogins .th-login-topbar .fa-refresh:hover {
    background: var(--asal-dark) !important;
}


/* ==========================================
   03 - البنر الرئيسي
   ========================================== */

#tlogins .th-login-banner-slot {
    display: block !important;
    float: none !important;
    clear: both !important;

    width: 100% !important;

    height: auto !important;
    max-height: none !important;

    margin: 0 0 5px !important;
    padding: 3px !important;

    background: var(--asal-main) !important;

    border: 0 !important;
    border-bottom: 2px solid var(--asal-gold) !important;

    overflow: hidden !important;
}

/* صورة البنر */

#tlogins .th-login-banner-slot
.th-login-banner-defer {
    display: block !important;
    float: none !important;

    width: 100% !important;
    height: auto !important;
    max-height: none !important;

    margin: 0 !important;
    padding: 0 !important;

    object-fit: contain !important;
    object-position: center !important;

    border: 0 !important;
    border-radius: 4px !important;
}


/* ==========================================
   04 - تبويبات تسجيل الدخول
   ========================================== */

#tlogins .th-login-tabs {
    display: flex !important;

    width: 100% !important;
    gap: 4px !important;

    margin: 0 !important;
    padding: 5px !important;

    background: var(--asal-bg) !important;

    border: 0 !important;
    border-bottom: 1px solid var(--asal-border) !important;
}

#tlogins .th-login-tabs > li {
    flex: 1 1 0 !important;
    float: none !important;

    min-width: 0 !important;
    margin: 0 !important;
}

/* الزوار - الأعضاء - التسجيل */

#tlogins .th-login-tabs > li > a {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    width: 100% !important;
    min-height: 34px !important;

    margin: 0 !important;
    padding: 7px 3px !important;

    background: var(--asal-soft) !important;
    color: #725139 !important;

    border: 1px solid var(--asal-border) !important;
    border-radius: 6px !important;

    font-size: 11px !important;
    font-weight: 700 !important;
    line-height: 1.4 !important;

    text-align: center !important;
    text-decoration: none !important;
    white-space: normal !important;

    box-shadow: none !important;
}

/* التبويب النشط */

#tlogins .th-login-tabs > li.active > a,
#tlogins .th-login-tabs > li.active > a:hover,
#tlogins .th-login-tabs > li.active > a:focus {
    background: var(--asal-main) !important;
    color: #FFFFFF !important;

    border-color: var(--asal-main) !important;

    box-shadow:
        inset 0 -2px 0 var(--asal-gold) !important;
}

/* المرور على التبويب */

#tlogins .th-login-tabs > li:not(.active) > a:hover {
    background: #EEDFCB !important;
}


/* ==========================================
   05 - منطقة تسجيل الدخول
   ========================================== */

#tlogins .th-login-content {
    width: 100% !important;

    padding: 9px 6px !important;

    background: var(--asal-bg) !important;
    border: 0 !important;
}

#tlogins .th-login-pane {
    width: 100% !important;
}

/* النماذج */

#tlogins .th-login-pane form {
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
}

/* لا نغير ظهور التبويبات أو وظائفها */


/* ==========================================
   06 - حقول الإدخال
   ========================================== */

#tlogins .th-login-input {
    min-height: 36px !important;

    padding: 8px 10px !important;

    background: #FFFFFF !important;
    color: var(--asal-dark) !important;

    border: 1px solid #DDC9AD !important;
    border-radius: 6px !important;

    font-size: 12px !important;
    line-height: 1.4 !important;

    outline: none !important;
    box-shadow: none !important;
}

/* النص الافتراضي */

#tlogins .th-login-input::placeholder {
    color: #A08D78 !important;
    opacity: 1 !important;
}

/* عند تحديد الحقل */

#tlogins .th-login-input:focus {
    background: #FFFFFF !important;
    border-color: var(--asal-gold) !important;

    box-shadow:
        0 0 0 2px rgba(197,166,127,.16) !important;
}


/* ==========================================
   07 - أزرار الدخول
   ========================================== */

#tlogins .th-login-btn {
    min-height: 36px !important;

    margin: 0 3px !important;
    padding: 8px 15px !important;

    background: var(--asal-main) !important;
    color: #FFFFFF !important;

    border: 1px solid var(--asal-main) !important;
    border-radius: 6px !important;

    font-size: 12px !important;
    font-weight: 700 !important;

    cursor: pointer !important;
    box-shadow: none !important;
}

#tlogins .th-login-btn:hover {
    background: var(--asal-hover) !important;
    border-color: var(--asal-hover) !important;
}

#tlogins .th-login-btn:active {
    background: var(--asal-dark) !important;
}


/* ==========================================
   08 - زر العين والتخفي
   ========================================== */

/*
   زر العين الأصلي:

   .th-stealth-btn

   عند وجود label-info
   = التخفي مفعل

   بدون label-info
   = التخفي متوقف

   CSS فقط، دون تغيير onclick
*/

/* التخفي متوقف */

#tlogins .th-stealth-btn {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;

    min-width: 37px !important;
    min-height: 36px !important;

    margin: 0 2px !important;
    padding: 8px !important;

    background: #EEE7DC !important;
    color: #7A6C5B !important;

    border: 1px solid #D8CBB9 !important;
    border-radius: 6px !important;

    font-size: 16px !important;
    line-height: 1 !important;

    box-shadow: none !important;
    cursor: pointer !important;
}

/* التخفي مفعل - أخضر */

#tlogins .th-stealth-btn.label-info {
    background: var(--asal-green) !important;
    color: #FFFFFF !important;

    border-color: #216448 !important;
}

/* مرور المؤشر عند الإيقاف */

#tlogins .th-stealth-btn:not(.label-info):hover {
    background: #E2D8CA !important;
}

/* مرور المؤشر عند التفعيل */

#tlogins .th-stealth-btn.label-info:hover {
    background: #216448 !important;
}

/* التركيز */

#tlogins .th-stealth-btn:focus-visible {
    outline: 2px solid var(--asal-gold) !important;
    outline-offset: 2px !important;
}

/*
   لا نلمس #stealth
   ولا جافاسكربت زر العين.
*/


/* ==========================================
   09 - القسم الترحيبي
   أهلًا بك في شات عسل
   ========================================== */

#tlogins #asal-welcome {
    display: flow-root !important;
    float: none !important;
    clear: both !important;

    width: calc(100% - 8px) !important;

    margin: 8px 4px 5px !important;
    padding: 6px !important;

    box-sizing: border-box !important;

    direction: rtl !important;
    text-align: right !important;

    background: rgba(255,250,243,.96) !important;
    color: var(--asal-text) !important;

    border: 1px solid var(--asal-border) !important;
    border-radius: 8px !important;

    box-shadow:
        0 1px 4px rgba(80,55,30,.05) !important;

    line-height: 1.6 !important;
}

/* العنوان */

#tlogins #asal-welcome > h2 {
    margin: 0 0 7px !important;
    padding: 7px 5px !important;

    background: var(--asal-main) !important;
    color: #FFFFFF !important;

    border: 0 !important;
    border-radius: 5px !important;

    font-size: 12px !important;
    font-weight: 700 !important;
    line-height: 1.4 !important;
    text-align: center !important;
}

/* المقدمة */

#tlogins #asal-welcome > p {
    margin: 4px 2px 8px !important;
    padding: 0 !important;

    background: transparent !important;
    color: var(--asal-text) !important;

    font-size: 11px !important;
    line-height: 1.7 !important;
}

#tlogins #asal-welcome strong {
    color: var(--asal-main) !important;
    font-weight: 700 !important;
}


/* ==========================================
   10 - المميزات الثلاث
   ========================================== */

#tlogins #asal-welcome .asal-features {
    display: grid !important;
    grid-template-columns:
        repeat(3, minmax(0,1fr)) !important;

    gap: 4px !important;

    margin: 0 0 7px !important;
    padding: 0 !important;
}

/* كل ميزة */

#tlogins #asal-welcome .asal-feature {
    min-width: 0 !important;
    padding: 6px 2px !important;

    background: var(--asal-soft) !important;
    color: #725139 !important;

    border: 1px solid #E8DAC6 !important;
    border-radius: 5px !important;

    font-size: 10px !important;
    font-weight: 600 !important;
    line-height: 1.4 !important;
    text-align: center !important;
}

/* الأيقونات */

#tlogins #asal-welcome .asal-feature i {
    display: block !important;
    margin-bottom: 3px !important;

    font-size: 14px !important;
    color: var(--asal-main) !important;
}


/* ==========================================
   11 - اكتشف المزيد
   ========================================== */

#tlogins #asal-welcome details {
    margin: 0 !important;
    padding: 0 !important;

    background: #FFFFFF !important;

    border: 1px solid var(--asal-border) !important;
    border-radius: 5px !important;

    overflow: hidden !important;
}

/* زر اكتشف المزيد */

#tlogins #asal-welcome summary {
    display: block !important;
    position: relative !important;

    margin: 0 !important;
    padding: 8px 24px !important;

    background: #F8F0E5 !important;
    color: var(--asal-main) !important;

    border: 0 !important;

    font-size: 11px !important;
    font-weight: 700 !important;
    line-height: 1.4 !important;
    text-align: center !important;

    cursor: pointer !important;
    list-style: none !important;
}

/* إخفاء السهم الافتراضي */

#tlogins #asal-welcome
summary::-webkit-details-marker {
    display: none !important;
}

#tlogins #asal-welcome
summary::marker {
    content: "";
}

/* سهم التوسيع */

#tlogins #asal-welcome summary::after {
    content: "⌄";

    position: absolute;
    left: 10px;
    top: 50%;

    transform: translateY(-50%);

    color: var(--asal-main);
    font-size: 17px;
    line-height: 1;
}

/* عند الفتح */

#tlogins #asal-welcome
details[open] > summary {
    background: var(--asal-main) !important;
    color: #FFFFFF !important;
}

#tlogins #asal-welcome
details[open] > summary::after {
    content: "⌃";
    color: #FFFFFF !important;
}

/* المرور */

#tlogins #asal-welcome
details > summary:hover {
    background: #F0E4D1 !important;
}

#tlogins #asal-welcome
details[open] > summary:hover {
    background: var(--asal-hover) !important;
}

/* التركيز */

#tlogins #asal-welcome
summary:focus-visible {
    outline: 2px solid var(--asal-gold) !important;
    outline-offset: -2px !important;
}


/* ==========================================
   12 - محتوى المعلومات الموسعة
   ========================================== */

#tlogins #asal-welcome .asal-more {
    margin: 0 !important;
    padding: 9px !important;

    background: #FFFCF8 !important;
    border-top: 1px solid var(--asal-border) !important;
}

/* العناوين */

#tlogins #asal-welcome .asal-more h3 {
    margin: 9px 0 4px !important;
    padding-right: 7px !important;

    background: transparent !important;
    color: var(--asal-dark) !important;

    border: 0 !important;
    border-right: 3px solid var(--asal-gold) !important;

    font-size: 11px !important;
    font-weight: 700 !important;
    line-height: 1.5 !important;
}

#tlogins #asal-welcome
.asal-more h3:first-child {
    margin-top: 0 !important;
}

/* الفقرات */

#tlogins #asal-welcome .asal-more p {
    margin: 0 0 8px !important;
    padding: 0 !important;

    background: transparent !important;
    color: var(--asal-text) !important;

    font-size: 11px !important;
    line-height: 1.7 !important;
}

#tlogins #asal-welcome
.asal-more p:last-child {
    margin-bottom: 0 !important;
}


/* ==========================================
   13 - عداد المتواجدين الخارجي
   ========================================== */

#tlogins [title="المتواجدين الآن"] {
    background: var(--asal-main) !important;
    color: #FFFFFF !important;

    border-top: 1px solid var(--asal-gold) !important;
}

/* كلمة متصل */

#tlogins #loginstat {
    background: var(--asal-main) !important;
    color: #FFFFFF !important;

    border: 0 !important;

    font-size: 12px !important;
    font-weight: 700 !important;
}

/* العدد الحقيقي */

#tlogins #s1 {
    background: var(--asal-green) !important;
    color: #FFFFFF !important;

    border: 0 !important;

    font-size: 12px !important;
    font-weight: 700 !important;

    font-variant-numeric: tabular-nums;
}


/* ==========================================
   14 - المتواجدون في صفحة الدخول
   ========================================== */

#tlogins #lonline {
    background: var(--asal-light) !important;
    border-color: var(--asal-border) !important;
}

/*
   لا نغير:
   أسماء الأعضاء
   ألوان أسمائهم
   صورهم
   زخارفهم
   رتبهم
   حالاتهم الشخصية
*/


/* ==========================================
   15 - حقوق الموقع
   ========================================== */

#tlogins .cop {
    background: #F8F1E8 !important;
    color: #806E5C !important;

    border-color: var(--asal-border) !important;

    font-size: 11px !important;
    line-height: 1.5 !important;
}

#tlogins .cop a:not([rel="help"]) {
    color: var(--asal-main) !important;
    text-decoration: none !important;
}


/* ==========================================
   16 - التوافق مع الجوال
   ========================================== */

@media (max-width: 420px) {

    #tlogins .th-login-tabs {
        gap: 3px !important;
        padding: 4px !important;
    }

    #tlogins .th-login-tabs > li > a {
        font-size: 10px !important;
        padding: 6px 2px !important;
    }

    #tlogins .th-login-content {
        padding: 7px 4px !important;
    }

    #tlogins #asal-welcome {
        margin-top: 6px !important;
        padding: 5px !important;
    }

    #tlogins #asal-welcome > h2 {
        padding: 6px 4px !important;
        font-size: 12px !important;
    }

    #tlogins #asal-welcome .asal-feature {
        padding: 5px 1px !important;
        font-size: 9px !important;
    }

    #tlogins #asal-welcome .asal-more {
        padding: 7px !important;
    }
}


/* ==========================================
   17 - تقليل الحركة
   ========================================== */

@media (prefers-reduced-motion: reduce) {

    #tlogins .th-login-tabs a,
    #tlogins .th-login-btn,
    #tlogins .th-stealth-btn,
    #tlogins #asal-welcome summary {
        transition: none !important;
    }
}


/* ==========================================
   نهاية CSS واجهة شات عسل

   لا توجد قواعد للشات الداخلي:
   #room
   #rooms
   #users
   .mic_chat

   جميع التعديلات خارجية فقط
   ========================================== */

/* مسافة خفيفة فوق قسم أهلًا بك في شات عسل */

#tlogins #asal-welcome {
    margin-top: 16px !important;
}

@media (max-width: 420px) {
    #tlogins #asal-welcome {
        margin-top: 14px !important;
    }
}
    </style>
        
(function () {
    "use strict";

    /* =========================================
       شات عسل | chatasal.com
       نسخة نظيفة - SEO + واجهة ترحيبية

       - أيقونات SVG موحدة
       - تصميم صغير ومرتب
       - حماية من تكرار المحتوى
       - واجهة الدخول الخارجية فقط
       ========================================= */

    var SITE = "https://chatasal.com/";
    var ABOUT_ID = "asal-welcome";
    var STYLE_ID = "asal-welcome-style";
    var SCHEMA_ID = "chatasal-website-schema";

    var TITLE =
        "شات عسل | دردشة عسل وشات عربي صوتي وكتابي بدون تسجيل";

    var DESCRIPTION =
        "شات عسل مساحة عربية للسوالف والتعارف وتكوين صداقات جديدة. ادخل دردشة عسل مجانا باسم مستعار وبدون تسجيل، وتواصل عبر غرف شات كتابية وصوتية من الجوال والكمبيوتر.";

    /* =========================================
       1 - بيانات SEO المنظمة
       ========================================= */

    function addSchema() {

        document.querySelectorAll(
            'script#chatasal-website-schema,' +
            'script[data-schema="chatasal-website-schema"]'
        ).forEach(function (element) {
            element.remove();
        });

        var schema = document.createElement("script");

        schema.id = SCHEMA_ID;
        schema.type = "application/ld+json";

        schema.setAttribute(
            "data-schema",
            "chatasal-website-schema"
        );

        schema.textContent = JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Organization",
                    "@id": SITE + "#organization",
                    "name": "شات عسل",
                    "url": SITE
                },
                {
                    "@type": "WebSite",
                    "@id": SITE + "#website",
                    "url": SITE,
                    "name": "شات عسل",
                    "alternateName": [
                        "دردشة عسل",
                        "عسل شات",
                        "Chat Asal"
                    ],
                    "description": DESCRIPTION,
                    "inLanguage": "ar",
                    "publisher": {
                        "@id": SITE + "#organization"
                    }
                },
                {
                    "@type": "WebPage",
                    "@id": SITE + "#webpage",
                    "url": SITE,
                    "name": TITLE,
                    "description": DESCRIPTION,
                    "inLanguage": "ar",
                    "isPartOf": {
                        "@id": SITE + "#website"
                    },
                    "about": {
                        "@id": SITE + "#organization"
                    }
                }
            ]
        });

        document.head.appendChild(schema);
    }

    /* =========================================
       2 - التصميم الترحيبي
       ========================================= */

    function addStyles() {

        var oldStyle = document.getElementById(
            STYLE_ID
        );

        if (oldStyle) {
            oldStyle.remove();
        }

        var style = document.createElement("style");

        style.id = STYLE_ID;

        style.textContent = `

            /* القسم الرئيسي */

            #tlogins #asal-welcome {
                display: flow-root;
                float: none;
                clear: both;

                width: calc(100% - 8px);
                margin: 16px 4px 5px;
                padding: 6px;

                box-sizing: border-box;
                direction: rtl;
                text-align: right;

                background: rgba(255,250,243,.96);
                color: #655548;

                border: 1px solid #E9DBC3;
                border-radius: 8px;

                line-height: 1.65;
            }

            /* العنوان */

            #tlogins #asal-welcome > h2 {
                margin: 0 0 7px;
                padding: 7px 5px;

                background: #805832;
                color: #FFFFFF;

                border: 0;
                border-radius: 5px;

                font-size: 12px;
                font-weight: 700;
                line-height: 1.4;
                text-align: center;
            }

            /* النص الظاهر */

            #tlogins #asal-welcome > p {
                margin: 4px 2px 8px;
                padding: 0;

                color: #655548;
                font-size: 11px;
                line-height: 1.7;
            }

            #tlogins #asal-welcome strong {
                color: #805832;
                font-weight: 700;
            }

            /* =================================
               المميزات الثلاث
               ================================= */

            #tlogins #asal-welcome .asal-features {
                display: grid;
                grid-template-columns:
                    repeat(3, minmax(0, 1fr));

                gap: 4px;
                margin: 0 0 7px;
                padding: 0;
            }

            #tlogins #asal-welcome .asal-feature {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                min-width: 0;
                min-height: 63px;

                margin: 0;
                padding: 6px 3px;

                background: #F5EBDD;
                color: #725139;

                border: 1px solid #E8DAC6;
                border-radius: 5px;

                text-align: center;

                font-size: 10px;
                font-weight: 600;
                line-height: 1.4;
            }

            /* أيقونات SVG المضمونة */

            #tlogins #asal-welcome
            .asal-feature svg {
                display: block !important;
                flex: 0 0 auto;

                width: 19px !important;
                height: 19px !important;

                min-width: 19px;
                min-height: 19px;

                margin: 0 auto 5px;

                fill: none;
                stroke: #805832;
                stroke-width: 1.8;

                stroke-linecap: round;
                stroke-linejoin: round;

                opacity: 1;
                visibility: visible;
            }

            #tlogins #asal-welcome
            .asal-feature span {
                display: block;
                width: 100%;

                color: #725139;
                font-size: 10px;
                font-weight: 600;

                text-align: center;
                white-space: nowrap;
            }

            /* =================================
               صندوق اكتشف المزيد
               ================================= */

            #tlogins #asal-welcome details {
                margin: 0;
                padding: 0;

                background: #FFFFFF;

                border: 1px solid #E9DBC3;
                border-radius: 5px;

                overflow: hidden;
            }

            #tlogins #asal-welcome summary {
                display: block;
                position: relative;

                margin: 0;
                padding: 8px 24px;

                background: #F8F0E5;
                color: #805832;

                font-size: 11px;
                font-weight: 700;
                line-height: 1.4;
                text-align: center;

                cursor: pointer;
                list-style: none;
            }

            #tlogins #asal-welcome
            summary::-webkit-details-marker {
                display: none;
            }

            #tlogins #asal-welcome
            summary::marker {
                content: "";
            }

            #tlogins #asal-welcome
            summary::after {
                content: "⌄";

                position: absolute;
                left: 10px;
                top: 50%;

                transform: translateY(-50%);

                color: #805832;

                font-size: 17px;
                line-height: 1;
            }

            #tlogins #asal-welcome
            details[open] > summary::after {
                content: "⌃";
            }

            #tlogins #asal-welcome
            summary:hover {
                background: #F0E4D1;
            }

            #tlogins #asal-welcome
            summary:focus-visible {
                outline: 2px solid #805832;
                outline-offset: -2px;
            }

            /* =================================
               محتوى المعلومات الإضافية
               ================================= */

            #tlogins #asal-welcome .asal-more {
                margin: 0;
                padding: 9px;

                background: #FFFCF8;
                border-top: 1px solid #E9DBC3;
            }

            #tlogins #asal-welcome
            .asal-more h3 {
                margin: 9px 0 4px;
                padding-right: 7px;

                background: transparent;
                color: #68492F;

                border-right: 3px solid #C5A67F;

                font-size: 11px;
                font-weight: 700;
                line-height: 1.5;
            }

            #tlogins #asal-welcome
            .asal-more h3:first-child {
                margin-top: 0;
            }

            #tlogins #asal-welcome
            .asal-more p {
                margin: 0 0 8px;
                padding: 0;

                color: #655548;

                font-size: 11px;
                line-height: 1.7;
            }

            #tlogins #asal-welcome
            .asal-more p:last-child {
                margin-bottom: 0;
            }

            /* =================================
               توافق الجوال
               ================================= */

            @media (max-width: 420px) {

                #tlogins #asal-welcome {
                    margin-top: 14px;
                    padding: 5px;
                }

                #tlogins #asal-welcome .asal-feature {
                    min-height: 60px;
                    padding: 5px 2px;
                }

                #tlogins #asal-welcome
                .asal-feature svg {
                    width: 18px !important;
                    height: 18px !important;

                    min-width: 18px;
                    min-height: 18px;
                }

                #tlogins #asal-welcome
                .asal-feature span {
                    font-size: 9px;
                }

                #tlogins #asal-welcome .asal-more {
                    padding: 7px;
                }
            }
        `;

        document.head.appendChild(style);
    }

    /* =========================================
       3 - المحتوى الترحيبي
       ========================================= */

    function addWelcome() {

        var login = document.getElementById(
            "tlogins"
        );

        if (!login) {
            return false;
        }

        /* إزالة المحتوى القديم إن وجد */

        [
            "custom-site-info",
            "custom-faq-section"
        ].forEach(function (id) {

            var old = login.querySelector(
                "#" + id
            );

            if (old) {
                old.remove();
            }
        });

        /* تجنب إنشاء نسختين */

        if (document.getElementById(ABOUT_ID)) {
            return true;
        }

        var section = document.createElement("section");

        section.id = ABOUT_ID;
        section.setAttribute("dir", "rtl");

        section.setAttribute(
            "aria-label",
            "معلومات عن شات عسل"
        );

        section.innerHTML = `

            <h2>أهلًا بك في شات عسل</h2>

            <p>
                <strong>شات عسل</strong>
                مساحة عربية للسوالف والتعارف
                وتكوين صداقات جديدة.
                ادخل <strong>دردشة عسل</strong>
                باسم مستعار وبدون تسجيل،
                وتواصل عبر الغرف الكتابية
                والصوتية من الجوال أو الكمبيوتر.
            </p>

            <!-- المميزات الثلاث بأيقونات متناسقة -->

            <div class="asal-features"
                 aria-label="مميزات شات عسل">

                <!-- دردشة كتابية -->

                <div class="asal-feature">

                    <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true">

                        <path
                            d="M21 11.5a8.4 8.4 0 0 1-9 8.5
                               9 9 0 0 1-4-.9L3 21l1.9-5
                               A9 9 0 1 1 21 11.5Z"/>

                        <path d="M8 10h8M8 14h5"/>

                    </svg>

                    <span>دردشة كتابية</span>

                </div>

                <!-- غرف صوتية -->

                <div class="asal-feature">

                    <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true">

                        <rect
                            x="9"
                            y="2"
                            width="6"
                            height="13"
                            rx="3"/>

                        <path
                            d="M5 10v2a7 7 0 0 0 14 0v-2"/>

                        <path d="M12 19v3M8 22h8"/>

                    </svg>

                    <span>غرف صوتية</span>

                </div>

                <!-- دخول للجوال -->

                <div class="asal-feature">

                    <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true">

                        <rect
                            x="6"
                            y="2"
                            width="12"
                            height="20"
                            rx="2.5"/>

                        <path d="M6 5h12"/>

                        <path d="M6 18h12"/>

                        <circle
                            cx="12"
                            cy="20"
                            r=".7"
                            fill="#805832"
                            stroke="none"/>

                    </svg>

                    <span>دخول للجوال</span>

                </div>

            </div>

            <!-- معلومات أكثر -->

            <details>

                <summary>
                    اكتشف المزيد عن شات عسل
                </summary>

                <div class="asal-more">

                    <h3>دردشة عسل والسوالف العربية</h3>
                    <p>
                        شات عسل مساحة للتواصل
                        وتبادل السوالف والاهتمامات
                        مع أشخاص جدد من مختلف
                        الدول العربية. يمكنك
                        اختيار الغرفة المناسبة
                        والمشاركة في الأحاديث
                        الموجودة.
                    </p>

                    <h3>شات عربي بدون تسجيل</h3>
                    <p>
                        يوفر شات عسل خيار دخول
                        الزوار باسم مستعار،
                        دون الحاجة إلى إنشاء
                        حساب جديد. اختر اسمًا
                        مناسبًا، ثم ادخل إلى
                        غرف الدردشة المتاحة.
                    </p>

                    <h3>شات كتابي عربي</h3>
                    <p>
                        تتيح الغرف الكتابية
                        تبادل الرسائل والمشاركة
                        في الحوارات اليومية،
                        وهي مناسبة لمن يفضل
                        التواصل بالنصوص
                        والسوالف العربية.
                    </p>

                    <h3>غرف دردشة صوتية</h3>
                    <p>
                        يدعم شات عسل التواصل
                        الصوتي باستخدام المايك
                        في الغرف التي توفر
                        هذه الخاصية، بحسب
                        إعدادات الغرفة
                        والصلاحيات المتاحة.
                    </p>

                    <h3>شات عسل للجوال والكمبيوتر</h3>
                    <p>
                        يمكنك استخدام دردشة عسل
                        مباشرة من متصفح الهاتف
                        أو الكمبيوتر دون تنزيل
                        تطبيق منفصل، والتنقل
                        بين الغرف المتاحة.
                    </p>

                    <h3>التعارف وتكوين الصداقات</h3>
                    <p>
                        يتيح الموقع فرصة
                        للسوالف والتعارف
                        وتبادل الاهتمامات
                        المشتركة في أجواء
                        اجتماعية ودية، مع
                        احترام جميع المشاركين.
                    </p>

                    <h3>الخصوصية أثناء الدردشة</h3>
                    <p>
                        تجنب مشاركة كلمات المرور
                        والبيانات الشخصية
                        الحساسة، واحترم خصوصية
                        الآخرين والتزم بقوانين
                        الموقع والغرف.
                    </p>

                </div>

            </details>
        `;

        /* وضع القسم بعد تبويبات الدخول وحقولها */

        var loginArea = login.querySelector(
            ".th-login-content, .tab-content"
        );

        if (loginArea && loginArea.parentNode) {

            loginArea.insertAdjacentElement(
                "afterend",
                section
            );

        } else {

            login.appendChild(section);
        }

        return true;
    }

    /* =========================================
       4 - التشغيل
       ========================================= */

    function init() {

        addSchema();
        addStyles();

        if (addWelcome()) {
            return;
        }

        var attempts = 0;

        var timer = setInterval(function () {

            attempts++;

            if (addWelcome() || attempts >= 30) {
                clearInterval(timer);
            }

        }, 400);
    }

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            init,
            { once: true }
        );

    } else {

        init();
    }

})();
