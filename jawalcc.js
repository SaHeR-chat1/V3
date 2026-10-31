function () {
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
