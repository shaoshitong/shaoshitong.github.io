/* ==========================================================================
   AV-Gen Engineering Field Guide — Navigation, TOC, Copy & Synced Video JS
   ========================================================================== */

const CHAPTERS = [
  { group: "全景入门", num: "00", file: "index.html", title: "总览与音视频生成全景图" },
  { group: "数据与控制", num: "01", file: "01-data-collection.html", title: "数据收集与清洗流水线" },
  { group: "数据与控制", num: "02", file: "02-data-problems.html", title: "数据暗坑：图文视频联合预训练" },
  { group: "数据与控制", num: "03", file: "03-pe-models.html", title: "PE 模型：Prompt Enhancer 与 Perception Encoder" },
  { group: "数据与控制", num: "04", file: "04-caption-and-control.html", title: "Caption 本质、好坏标准与精确控制" },
  { group: "架构与训练", num: "05", file: "05-architecture-moe-dense.html", title: "模型架构：3D-VAE、音画一体与 MoE vs Dense" },
  { group: "架构与训练", num: "06", file: "06-multistage-training.html", title: "多阶段训练：Pretrain→Midtrain→SFT→RL→蒸馏" },
  { group: "架构与训练", num: "07", file: "07-t2v-to-v2v-cascade.html", title: "级联生成：先 T2V 低分再 V2V 高分" },
  { group: "推理与智能体", num: "08", file: "08-inference-acceleration.html", title: "推理加速：量化、稀疏注意力、缓存与并行" },
  { group: "推理与智能体", num: "09", file: "09-agentic-video-pipeline.html", title: "LLM 智能体视频生成（Qwen-Image → MMX-H3）" },
  { group: "实验室与书单", num: "10", file: "10-video-showcase-lab.html", title: "音视频案例实验室与同步对比" },
  { group: "实验室与书单", num: "11", file: "11-references-reading-list.html", title: "延伸阅读：论文、GitHub.io、博客与知乎精选" }
];

document.addEventListener("DOMContentLoaded", () => {
  const currentFile = window.location.pathname.split("/").pop() || "index.html";
  renderSidebar(currentFile);
  renderPager(currentFile);
  buildTOC();
  initReadingProgress();
  initCopyButtons();
  initSyncedVideoComparators();
  initMobileMenu();
  initKeyboardNav(currentFile);
});

function renderSidebar(currentFile) {
  const navRoot = document.getElementById("sidebar-nav");
  if (!navRoot) return;

  const groups = {};
  CHAPTERS.forEach(ch => {
    if (!groups[ch.group]) groups[ch.group] = [];
    groups[ch.group].push(ch);
  });

  let html = "";
  Object.entries(groups).forEach(([groupName, items]) => {
    html += `<div class="nav-group"><div class="nav-group-title">${groupName}</div>`;
    items.forEach(item => {
      const active = item.file === currentFile ? "active" : "";
      html += `
        <a class="nav-item ${active}" href="${item.file}" data-title="${item.title.toLowerCase()} ${item.num}">
          <span class="nav-num">${item.num}</span>
          <span>${item.title}</span>
        </a>`;
    });
    html += `</div>`;
  });
  navRoot.innerHTML = html;

  const searchInput = document.getElementById("sidebar-filter");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      navRoot.querySelectorAll(".nav-item").forEach(a => {
        const text = a.getAttribute("data-title") || "";
        a.style.display = text.includes(q) ? "flex" : "none";
      });
    });
  }
}

function renderPager(currentFile) {
  const pager = document.getElementById("chapter-pager");
  if (!pager) return;
  const idx = CHAPTERS.findIndex(c => c.file === currentFile);
  if (idx === -1) return;

  const prev = idx > 0 ? CHAPTERS[idx - 1] : null;
  const next = idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1] : null;

  pager.innerHTML = `
    ${prev ? `
      <a class="pager-link prev" href="${prev.file}">
        <span class="pager-dir">← 上一章 (${prev.num})</span>
        <span class="pager-title">${prev.title}</span>
      </a>` : `<div></div>`}
    ${next ? `
      <a class="pager-link next" href="${next.file}">
        <span class="pager-dir">下一章 (${next.num}) →</span>
        <span class="pager-title">${next.title}</span>
      </a>` : `<div></div>`}
  `;
}

function buildTOC() {
  const tocList = document.getElementById("toc-list");
  const article = document.querySelector(".article-container");
  if (!tocList || !article) return;

  const headings = article.querySelectorAll("h2, h3");
  if (!headings.length) return;

  let html = "";
  headings.forEach((h, i) => {
    if (!h.id) {
      h.id = "sec-" + i;
    }
    const cls = h.tagName === "H3" ? "toc-h3" : "";
    html += `<li><a href="#${h.id}" class="${cls}">${h.textContent}</a></li>`;
  });
  tocList.innerHTML = html;

  const tocLinks = tocList.querySelectorAll("a");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tocLinks.forEach(l => l.classList.remove("active"));
        const activeLink = tocList.querySelector(`a[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  }, { rootMargin: "-70px 0px -70% 0px", threshold: 0.05 });

  headings.forEach(h => observer.observe(h));
}

function initReadingProgress() {
  const bar = document.getElementById("reading-progress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
    bar.style.width = pct + "%";
  }, { passive: true });
}

function initCopyButtons() {
  document.querySelectorAll("pre").forEach(pre => {
    const btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.textContent = "复制";
    btn.addEventListener("click", () => {
      const code = pre.querySelector("code");
      const text = code ? code.innerText : pre.innerText;
      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = "已复制 ✓";
        setTimeout(() => (btn.textContent = "复制"), 1600);
      });
    });
    pre.appendChild(btn);
  });
}

function initSyncedVideoComparators() {
  document.querySelectorAll(".sync-compare-box").forEach(box => {
    const videos = Array.from(box.querySelectorAll("video"));
    const playBtn = box.querySelector("[data-sync-play]");
    const restartBtn = box.querySelector("[data-sync-restart]");
    const muteBtn = box.querySelector("[data-sync-mute]");
    const scrubber = box.querySelector(".sync-scrubber");
    const timeLabel = box.querySelector(".sync-time");
    if (!videos.length || !playBtn) return;

    const fmt = (s) => {
      if (!isFinite(s)) return "0:00";
      const m = Math.floor(s / 60);
      const sec = Math.floor(s % 60).toString().padStart(2, "0");
      return `${m}:${sec}`;
    };

    const master = videos[0];

    playBtn.addEventListener("click", () => {
      const isPaused = master.paused;
      videos.forEach(v => {
        if (isPaused) {
          v.currentTime = master.currentTime;
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      });
      playBtn.textContent = isPaused ? "⏸ 同步暂停" : "▶ 同步播放";
    });

    if (restartBtn) {
      restartBtn.addEventListener("click", () => {
        videos.forEach(v => {
          v.currentTime = 0;
          v.play().catch(() => {});
        });
        playBtn.textContent = "⏸ 同步暂停";
      });
    }

    if (muteBtn) {
      let audioMode = 0; // 0: left unmuted, 1: right unmuted, 2: all muted
      muteBtn.addEventListener("click", () => {
        audioMode = (audioMode + 1) % 3;
        if (audioMode === 0) {
          videos.forEach((v, i) => (v.muted = i !== 0));
          muteBtn.textContent = "🔊 听左侧音频";
        } else if (audioMode === 1) {
          videos.forEach((v, i) => (v.muted = i !== 1));
          muteBtn.textContent = "🔊 听右侧音频";
        } else {
          videos.forEach(v => (v.muted = true));
          muteBtn.textContent = "🔇 全部静音";
        }
      });
    }

    if (scrubber) {
      scrubber.addEventListener("input", () => {
        const dur = master.duration || 5;
        const target = (parseFloat(scrubber.value) / 100) * dur;
        videos.forEach(v => {
          if (isFinite(v.duration)) {
            v.currentTime = Math.min(target, v.duration - 0.05);
          }
        });
      });
    }

    master.addEventListener("timeupdate", () => {
      if (scrubber && master.duration) {
        scrubber.value = (master.currentTime / master.duration) * 100;
      }
      if (timeLabel) {
        timeLabel.textContent = `${fmt(master.currentTime)} / ${fmt(master.duration)}`;
      }
    });

    master.addEventListener("ended", () => {
      playBtn.textContent = "▶ 同步播放";
    });
  });
}

function initMobileMenu() {
  const btn = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  if (!btn || !sidebar) return;
  btn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}

function initKeyboardNav(currentFile) {
  const idx = CHAPTERS.findIndex(c => c.file === currentFile);
  if (idx === -1) return;
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.key === "[" && idx > 0) {
      window.location.href = CHAPTERS[idx - 1].file;
    } else if (e.key === "]" && idx < CHAPTERS.length - 1) {
      window.location.href = CHAPTERS[idx + 1].file;
    }
  });
}
