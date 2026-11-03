(function () {
    "use strict";

    if (document.getElementById("jawall-links")) return;

    var css = `
    #jawall-links {
        direction:rtl;
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        gap:7px;
        margin:10px auto;
        padding:5px;
        width:100%;
        box-sizing:border-box
    }
    #jawall-links * {box-sizing:border-box}
    #jawall-links .jawall-btn {
        display:flex;
        align-items:center;
        justify-content:center;
        gap:7px;
        flex:1 1 130px;
        max-width:190px;
        min-width:0;
        min-height:40px;
        margin:0!important;
        padding:6px 9px!important;
        border:0!important;
        border-radius:10px!important;
        color:#fff!important;
        font-size:13px;
        font-weight:bold;
        text-align:center;
        text-decoration:none!important;
        line-height:1.4;
        box-shadow:0 2px 5px rgba(0,0,0,.10)
    }
    #jawall-links .jawall-icon {
        display:inline-flex;
        align-items:center;
        justify-content:center;
        flex-shrink:0;
        width:26px;
        height:26px;
        border-radius:50%;
        background:rgba(255,255,255,.2);
        font-size:15px
    }
    #jawall-links .jawall-label {overflow-wrap:anywhere}
    #jawall-links #jawall22 {background:linear-gradient(120deg,#f472b6,#be185d)!important}
    #jawall-links #jawall23 {background:linear-gradient(120deg,#4ade80,#059669)!important}
    #jawall-links #jawall24 {background:linear-gradient(120deg,#60a5fa,#1d4ed8)!important}
    #jawall-links #jawall25 {background:linear-gradient(120deg,#a78bfa,#6d28d9)!important}
    #jawall-links #jawall26 {background:linear-gradient(120deg,#2dd4bf,#0f766e)!important}
    #jawall-links #jawall27 {background:linear-gradient(120deg,#fbbf24,#ea580c)!important}
    @media(max-width:600px) {
        #jawall-links {gap:6px}
        #jawall-links .jawall-btn {
            flex:1 1 calc(50% - 6px);
            max-width:calc(50% - 3px);
            min-height:38px;
            padding:5px!important;
            font-size:12px;
            gap:5px
        }
        #jawall-links .jawall-icon {
            width:24px;
            height:24px;
            font-size:14px
        }
    }
    `;

    var items = [
        ["jawall22","✦","الاشتراكات","https://xn----ymcbkl8b7g4a.com/subs.html"],
        ["jawall23","⚖","القوانين","https://xn----ymcbkl8b7g4a.com/rules.html"],
        ["jawall24","▤","من نحن","https://xn----ymcbkl8b7g4a.com/about.html"],
        ["jawall25","♢","سياسة الخصوصية","https://xn----ymcbkl8b7g4a.com/privacy.html"],
        ["jawall26","☏","الأسئلة الشائعة","https://xn----ymcbkl8b7g4a.com/FAQ.html"],
        ["jawall27","☎","اتصل بنا","https://xn----ymcbkl8b7g4a.com/contact.html"]
    ];

    function init() {
        if (document.getElementById("jawall-links")) return;

        var target = document.querySelector(".nav-tabs");
        if (!target || !target.parentNode) return;

        var style = document.createElement("style");
        style.id = "jawall-links-style";
        style.textContent = css;
        document.head.appendChild(style);

        var nav = document.createElement("nav");
        nav.id = "jawall-links";
        nav.setAttribute("aria-label", "روابط الموقع");

        var fragment = document.createDocumentFragment();

        items.forEach(function (item) {
            var a = document.createElement("a");
            a.id = item[0];
            a.className = "btn minix jawall-btn";
            a.href = item[3];
            a.target = "_blank";
            a.rel = "noopener noreferrer";

            var icon = document.createElement("span");
            icon.className = "jawall-icon";
            icon.setAttribute("aria-hidden", "true");
            icon.textContent = item[1];

            var label = document.createElement("span");
            label.className = "jawall-label";
            label.textContent = item[2];

            a.appendChild(icon);
            a.appendChild(label);
            fragment.appendChild(a);
        });

        nav.appendChild(fragment);
        target.parentNode.insertBefore(nav, target);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, {once:true});
    } else {
        init();
    }
})();
