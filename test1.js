(function () {
    "use strict";

    /* إعدادات الموقع */
    var SITE = "https://chatsawa.com/";
    var NAME = "شات سوا";
    var TITLE = "شات سوا | شات صوتي وكتابي بدون تسجيل للجوال";
    var DESCRIPTION =
        "يجمع شات سوا محبي الدردشة والسوالف من العراق والسعودية والكويت والإمارات وفلسطين والأردن ومصر وسوريا ولبنان والمغرب والجزائر وتونس وبقية الدول العربية. يمكن للزوار التعارف وتبادل الأحاديث عبر الغرف الصوتية والكتابية مباشرة من الجوال، دون الحاجة إلى إنشاء حساب.";

    var SECTION_ID = "sawa-community-info";
    var STYLE_ID = "sawa-community-style";
    var SCHEMA_ID = "sawa-home-schema";

    /* التشغيل في الرئيسية فقط */
    if (location.pathname !== "/" &&
        location.pathname !== "") return;

    /* البيانات المنظمة */
    function addSchema() {
        document.querySelectorAll(
            'script[data-schema="sawa-home-schema"]'
        ).forEach(function (node) {
            node.remove();
        });

        var script = document.createElement("script");
        script.type = "application/ld+json";
        script.dataset.schema = SCHEMA_ID;

        script.textContent = JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Organization",
                    "@id": SITE + "#organization",
                    "name": NAME,
                    "url": SITE
                },
                {
                    "@type": "WebSite",
                    "@id": SITE + "#website",
                    "url": SITE,
                    "name": NAME,
                    "alternateName": [
                        "دردشة سوا",
                        "Chat Sawa"
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

        document.head.appendChild(script);
    }

    /* تصميم خاص بشات سوا */
    function addStyles() {
        if (document.getElementById(STYLE_ID)) return;

        var style = document.createElement("style");
        style.id = STYLE_ID;

        style.textContent = `
            #sawa-community-info {
                width: calc(100% - 6px);
                margin: 4px 3px;
                padding: 9px;
                box-sizing: border-box;
                clear: both;
                direction: rtl;
                text-align: right;
                background: #fff;
                color: #514658;
                border: 1px solid #e6dce8;
                border-top: 3px solid #67436f;
                border-radius: 8px;
                font-size: 12px;
                line-height: 1.65;
            }

            #sawa-community-info h2 {
                margin: 0 0 3px;
                color: #67436f;
                text-align: center;
                font-size: 14px;
                font-weight: 700;
                line-height: 1.5;
            }

            #sawa-community-info .sawa-tagline {
                display: block;
                margin-bottom: 7px;
                text-align: center;
                color: #866c8d;
                font-size: 11px;
            }

            #sawa-community-info p {
                margin: 0 0 7px;
                color: #5b5260;
                font-size: 12px;
                line-height: 1.65;
            }

            #sawa-community-info details {
                margin-top: 7px;
                border: 1px solid #e5dae8;
                border-radius: 7px;
                background: #faf7fb;
                overflow: hidden;
            }

            #sawa-community-info summary {
                cursor: pointer;
                padding: 8px;
                text-align: center;
                font-weight: 700;
                font-size: 12px;
                color: #67436f;
                line-height: 1.5;
            }

            #sawa-community-info details[open] summary {
                background: #f1eaf3;
                border-bottom: 1px solid #e5dae8;
            }

            #sawa-community-info .sawa-more {
                padding: 8px 9px;
                background: #fff;
            }

            #sawa-community-info h3 {
                margin: 10px 0 3px;
                padding-right: 8px;
                border-right: 3px solid #96709f;
                color: #67436f;
                font-size: 12px;
                font-weight: 700;
                line-height: 1.5;
            }

            #sawa-community-info .sawa-more h3:first-child {
                margin-top: 1px;
            }

            #sawa-community-info .sawa-links {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 5px;
                margin-top: 9px;
            }

            #sawa-community-info .sawa-links a {
                display: inline-block;
                padding: 6px 9px;
                background: #f5f0f6;
                border: 1px solid #e3d6e7;
                border-radius: 6px;
                color: #67436f;
                font-size: 11px;
                font-weight: 600;
                text-decoration: none;
                line-height: 1.4;
            }

            #sawa-community-info .sawa-links a:hover {
                background: #ece2ef;
            }

            @media (max-width: 380px) {
                #sawa-community-info {
                    padding: 7px;
                }

                #sawa-community-info .sawa-links a {
                    padding: 6px 7px;
                    font-size: 10px;
                }
            }
        `;

        document.head.appendChild(style);
    }

    /* محتوى مجتمع سوا العربي */
    function renderCommunity() {
        var target = document.querySelector("#tlogins");
        if (!target) return false;

        if (document.getElementById(SECTION_ID)) {
            return true;
        }

        var section = document.createElement("section");
        section.id = SECTION_ID;
        section.dir = "rtl";
        section.setAttribute(
            "aria-label",
            "حول شات سوا ومجتمعه العربي"
        );

        section.innerHTML = `
            <h2>حول شات سوا</h2>

            <span class="sawa-tagline">
                مجتمع عربي للدردشة والسوالف والتعارف
            </span>

            <p>
                يجمع شات سوا محبي الدردشة والسوالف
                من العراق والسعودية والكويت والإمارات
                وفلسطين والأردن ومصر وسوريا ولبنان
                والمغرب والجزائر وتونس وبقية الدول العربية.
                يمكن للزوار التعارف وتبادل الأحاديث
                عبر الغرف الصوتية والكتابية مباشرة
                من الجوال، دون الحاجة إلى إنشاء حساب.
            </p>

            <details>
                <summary>
                    اكتشف مجتمع شات سوا ومميزاته
                </summary>

                <div class="sawa-more">

                    <h3>شات سوا للتعارف والسوالف</h3>
                    <p>
                        يوفر شات سوا مساحة للمحادثات
                        اليومية وتبادل الآراء والاهتمامات،
                        والتعرف على أشخاص جدد من
                        مختلف المجتمعات العربية
                        داخل غرف الدردشة المتاحة.
                    </p>

                    <h3>شات سوا في السعودية والخليج</h3>
                    <p>
                        يمكن للمهتمين بالسوالف الخليجية
                        استخدام شات سوا للتواصل مع
                        مشاركين من السعودية والكويت
                        والإمارات وقطر والبحرين وعُمان،
                        وتبادل الأحاديث في الغرف العامة.
                    </p>

                    <h3>دردشة سوا للعراق وبلاد الشام</h3>
                    <p>
                        يرحب شات سوا بالمستخدمين من
                        العراق وفلسطين والأردن وسوريا
                        ولبنان، ويوفر مساحة للتعارف
                        والنقاش والتواصل الكتابي
                        والصوتي بين المشاركين.
                    </p>

                    <h3>سوا مصر والمغرب العربي</h3>
                    <p>
                        يستطيع زوار مصر والمغرب
                        والجزائر وتونس وليبيا
                        استخدام شات سوا للمشاركة
                        في المحادثات وتبادل السوالف
                        والتعرف على مستخدمين
                        من دول عربية مختلفة.
                    </p>

                    <h3>غرف دردشة صوتية وكتابية</h3>
                    <p>
                        يتيح الموقع تبادل الرسائل النصية
                        والمشاركة باستخدام المايك
                        داخل الغرف التي تدعم الصوت،
                        لتختار طريقة التواصل
                        المناسبة لك.
                    </p>

                    <h3>شات سوا للجوال بدون تسجيل</h3>
                    <p>
                        تستطيع الدخول باسم مستعار
                        مباشرة من متصفح الجوال
                        أو الكمبيوتر، دون الحاجة
                        إلى إنشاء حساب لبدء الدردشة.
                    </p>

                    <h3>كيف تبدأ في شات سوا؟</h3>
                    <p>
                        افتح الصفحة الرئيسية، واختر
                        دخول الزوار، ثم اكتب اسمًا
                        مستعارًا وابدأ بالمشاركة
                        في الغرف والمحادثات المتاحة.
                    </p>

                    <h3>القوانين والخصوصية والعضويات</h3>
                    <p>
                        يوفر شات سوا صفحات مستقلة
                        توضح قواعد المشاركة والخصوصية
                        وشروط الاستخدام، بالإضافة إلى
                        معلومات الاشتراكات والعضويات.
                    </p>

                </div>
            </details>

            <nav class="sawa-links"
                 aria-label="روابط شات سوا">
                <a href="/about">عن شات سوا</a>
                <a href="/rules">القوانين</a>
                <a href="/privacy">الخصوصية</a>
                <a href="/terms">الشروط</a>
                <a href="/subscriptions">العضويات</a>
            </nav>
        `;

        var loginArea = target.querySelector(
            ".tab-content"
        );

        if (loginArea && loginArea.parentNode) {
            loginArea.parentNode.insertBefore(
                section,
                loginArea.nextSibling
            );
        } else {
            target.appendChild(section);
        }

        return true;
    }

    /* تشغيل آمن */
    function start() {
        addSchema();
        addStyles();

        if (renderCommunity()) return;

        var observer = new MutationObserver(function () {
            if (renderCommunity()) {
                observer.disconnect();
            }
        });

        observer.observe(document.documentElement, {
            childList: true,
            subtree: true
        });

        setTimeout(function () {
            observer.disconnect();
        }, 15000);
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            start,
            { once: true }
        );
    } else {
        start();
    }
})();

(function(){function check(){document.querySelectorAll(".th-upro-pro").forEach(p=>{let n=p.querySelector(".th-upro-profile-name"),b=p.querySelector(".ulike");if(n&&b){let hide=n.textContent.trim()==="+٩٦٦";if(hide)b.style.setProperty("display","none","important");else b.style.removeProperty("display")}})}new MutationObserver(check).observe(document.documentElement,{childList:true,subtree:true,characterData:true});check()})();

(function(){var s=document.createElement("script");s.src="https://nexarab.github.io/chat-scripts/istabraq-profile.js";document.head.appendChild(s)})();
(function(){var s=document.createElement("script");s.src="https://nexarab.github.io/chat-scripts/sh-pearl-profile.js";document.head.appendChild(s)})();
(function(){var s=document.createElement("script");s.src="https://nexarab.github.io/chat-scripts/saudi-emerald-profile.js";document.head.appendChild(s)})();
(function(){var s=document.createElement("script");s.src="https://nexarab.github.io/chat-scripts/fex-golden-melody.js";document.head.appendChild(s)})();

(function(){var s=document.createElement("script");s.src="https://nexarab.github.io/chat-scripts/itti-profile-standalone.js";document.head.appendChild(s)})();
(function(){var s=document.createElement("script");s.src="https://nexarab.github.io/chat-scripts/itti-hide-likes.js";document.head.appendChild(s)})();
