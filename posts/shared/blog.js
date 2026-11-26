(function () {
  function applyLang(lang) {
    var target = (lang === "en" || lang === "zh") ? lang : "zh";
    document.body.setAttribute("data-lang", target);
    document.documentElement.lang = target === "en" ? "en" : "zh-CN";
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-set-lang") === target);
    });
    try { localStorage.setItem("sst_blog_lang", target); } catch (e) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    var params = new URLSearchParams(window.location.search);
    var urlLang = params.get("lang");
    var saved = null;
    try { saved = localStorage.getItem("sst_blog_lang"); } catch (e) {}
    var initial = urlLang || saved || "zh";
    applyLang(initial);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-set-lang"));
      });
    });

    if (typeof renderMathInElement === "function") {
      renderMathInElement(document.body, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }
  });
})();
