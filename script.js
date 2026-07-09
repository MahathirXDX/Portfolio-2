/* =========================================================
   PORTFOLIO SCRIPT
   Everything on this page is rendered from the JSON files:
   profile.json, contact.json, services.json, learning.json,
   skills.json, projects.json, achievements.json
   To update the site, edit those files only \u2014 never this one.
   ========================================================= */

(function () {
  "use strict";

  /* ---------- Small inline icon set (no external icon library) ---------- */
  const ICONS = {
    layout: '<path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M9 21V9"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/>',
    code: '<path d="M9 18l-6-6 6-6"/><path d="M15 6l6 6-6 6"/>',
    github: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
    terminal: '<path d="M4 17l6-5-6-5"/><path d="M12 19h8"/>',
    bug: '<rect x="8" y="6" width="8" height="12" rx="4"/><path d="M8 10H4M8 14H4M16 10h4M16 14h4M12 6V3M9 4l1.5 2M15 4l-1.5 2"/>',
    python: '<path d="M12 2c-2.5 0-4 1-4 3v2h4"/><path d="M12 22c2.5 0 4-1 4-3v-2h-4"/><path d="M8 7H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h3"/><path d="M16 17h3a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-3"/><circle cx="9.5" cy="4.5" r=".6"/><circle cx="14.5" cy="19.5" r=".6"/>',
    javascript: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 13v3.2c0 1.2-1.6 1.2-2 .3M13 12.5c0 1 1 1 1.8 1.3s2 .8 1.4 1.9-2.7 1-3.2-.1"/>',
    c: '<circle cx="12" cy="12" r="9"/><path d="M15 9.5a3.5 3.5 0 1 0 0 5"/>',
    java: '<path d="M9 18c-1 1 0 2 2 2s5-1 5-2-2-1-2-2M8 14c-3 1-3 3 1 3.5M13 3c1 2-3 3-2 6M9.5 12c3 1 6 .5 6.5-1"/>',
    html: '<path d="M4 3l1.5 17L12 22l6.5-2L20 3z"/><path d="M8 8h8l-.4 4.5H9M8.4 12.5L8.8 17l3.2 1 3.2-1 .3-3.5"/>',
    css: '<path d="M4 3l1.5 17L12 22l6.5-2L20 3z"/><path d="M16 8H8l.3 3.5h7.2L15.2 15 12 16l-3.2-1-.2-2"/>',
    git: '<circle cx="6" cy="6" r="2.2"/><circle cx="6" cy="18" r="2.2"/><circle cx="17" cy="12" r="2.2"/><path d="M6 8.2V15.8M8 6.5h4.5A3.5 3.5 0 0 1 16 10v0"/>',
    database: '<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><circle cx="17" cy="8.5" r="2.6"/><path d="M15.5 14.3c2.7.3 5 2.3 5 5.7"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16z"/><path d="M4 19a2.5 2.5 0 0 1 2.5-2.5H20"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
    message: '<path d="M4 5h16v11H8l-4 4z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 6.5l9 6.5 9-6.5"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7.5 10v7M7.5 7.2v.1M11.5 17v-4.5c0-1.6 1-2.5 2.3-2.5s2.2.9 2.2 2.5V17"/>',
    facebook: '<path d="M14 21v-8h2.7l.4-3.2H14V7.7c0-.9.3-1.6 1.7-1.6H17V3.2A22 22 0 0 0 14.6 3c-2.4 0-4.1 1.5-4.1 4.2v2.6H8v3.2h2.5V21z"/>',
    trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0V4z"/><path d="M8 5H5a3 3 0 0 0 3 5M16 5h3a3 3 0 0 1-3 5"/><path d="M12 13v3M9 20h6M10 16.5h4l.5 3.5h-5z"/>',
    award: '<circle cx="12" cy="8" r="5.5"/><path d="M8.5 12.8L7 21l5-2.5L17 21l-1.5-8.2"/>',
    certificate: '<rect x="3" y="4" width="18" height="13" rx="2"/><circle cx="12" cy="17.5" r="0" /><path d="M9.5 21l2.5-2 2.5 2v-4h-5z"/><circle cx="12" cy="9.5" r="2.5"/>',
    folder: '<path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4l2 2.5h9A1.5 1.5 0 0 1 21 9v9.5A1.5 1.5 0 0 1 19.5 20h-15A1.5 1.5 0 0 1 3 18.5z"/>',
    external: '<path d="M14 4h6v6"/><path d="M20 4L10 14"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  };

  function icon(name, size = 20) {
    const path = ICONS[name] || ICONS.code;
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
  }

  /* ---------- Utility: turn a Google Drive share link into a direct image URL ---------- */
  function resolveImageUrl(url) {
    if (!url) return "";
    const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
    if (driveMatch) {
      return `https://drive.google.com/uc?export=view&id=${driveMatch[1]}`;
    }
    const openMatch = url.match(/drive\.google\.com\/open\?id=([^&]+)/);
    if (openMatch) {
      return `https://drive.google.com/uc?export=view&id=${openMatch[1]}`;
    }
    return url; // GitHub raw URLs and any other direct URL pass through untouched
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str ?? "";
    return div.innerHTML;
  }

  /* ---------- Fetch helper ---------- */
  async function loadJSON(path) {
    try {
      const res = await fetch(path, { cache: "no-store" });
      if (!res.ok) throw new Error(`Failed to load ${path}`);
      return await res.json();
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  /* ---------- Reveal-on-scroll ---------- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ---------- Progress bar animation (fills once visible) ---------- */
  function initProgressBars() {
    const bars = document.querySelectorAll(".progress-fill[data-target]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.style.width = el.dataset.target + "%";
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    bars.forEach((b) => io.observe(b));
  }

  /* ================= RENDER: PROFILE / HERO ================= */
  function renderProfile(profile) {
    if (!profile) return;
    document.title = `${profile.fullName} \u2014 CSE Student & Developer`;
    document.getElementById("heroName").textContent = profile.fullName;
    document.getElementById("heroIntro").textContent = profile.intro;
    document.getElementById("heroAvailability").textContent = profile.availability || "Open to opportunities";

    const photo = document.getElementById("heroPhoto");
    photo.src = resolveImageUrl(profile.photo);
    photo.alt = `Photo of ${profile.fullName}`;

    startTyping(profile.roles && profile.roles.length ? profile.roles : ["Developer"]);
  }

  /* ---------- Typing animation ---------- */
  function startTyping(roles) {
    const el = document.getElementById("typedText");
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
      const current = roles[roleIndex];

      if (!deleting) {
        charIndex++;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1400); // pause at full word
          return;
        }
      } else {
        charIndex--;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(tick, deleting ? 40 : 90);
    }
    tick();
  }

  /* ================= RENDER: CONTACT ================= */
  function renderContact(contact) {
    if (!contact) return;
    const linkDefs = [
      { key: "email", icon: "mail", label: contact.email, href: contact.email ? `mailto:${contact.email}` : null },
      { key: "github", icon: "github", label: "GitHub", href: contact.github },
      { key: "linkedin", icon: "linkedin", label: "LinkedIn", href: contact.linkedin },
      { key: "facebook", icon: "facebook", label: "Facebook", href: contact.facebook },
    ].filter((l) => l.href);

    const contactLinksEl = document.getElementById("contactLinks");
    contactLinksEl.innerHTML = linkDefs
      .map(
        (l) => `
      <a class="contact-link" href="${escapeHtml(l.href)}" target="_blank" rel="noopener noreferrer">
        ${icon(l.icon, 18)}<span>${escapeHtml(l.label)}</span>
      </a>`
      )
      .join("");

    const footerLinksEl = document.getElementById("footerLinks");
    footerLinksEl.innerHTML = linkDefs
      .map(
        (l) => `
      <a href="${escapeHtml(l.href)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(l.key)}">
        ${icon(l.icon, 17)}
      </a>`
      )
      .join("");
  }

  /* ================= RENDER: SERVICES ================= */
  function renderServices(services) {
    if (!Array.isArray(services)) return;
    const grid = document.getElementById("servicesGrid");
    grid.innerHTML = services
      .map(
        (s, i) => `
      <div class="card reveal" style="--delay:${(i % 3) * 90}ms">
        <div class="service-icon">${icon(s.icon, 22)}</div>
        <h3 class="service-title">${escapeHtml(s.title)}</h3>
        <p class="service-desc">${escapeHtml(s.description)}</p>
      </div>`
      )
      .join("");
  }

  /* ================= RENDER: LEARNING TIMELINE ================= */
  function renderLearning(items) {
    if (!Array.isArray(items)) return;
    const list = document.getElementById("timelineList");
    list.innerHTML = items
      .map((item, i) => {
        const status = item.status || "in-progress";
        const statusLabel = status.replace("-", " ");
        return `
      <div class="timeline-item reveal" data-status="${escapeHtml(status)}" style="--delay:${(i % 4) * 80}ms">
        <span class="timeline-dot"></span>
        <div class="timeline-card card">
          <div class="timeline-head">
            <span class="timeline-title">${escapeHtml(item.title)}</span>
            <span class="status-badge ${escapeHtml(status)}">${escapeHtml(statusLabel)}</span>
          </div>
          <p class="timeline-desc">${escapeHtml(item.description)}</p>
          <div class="progress-track">
            <div class="progress-fill" data-target="${Number(item.progress) || 0}"></div>
          </div>
          <div class="progress-label">${Number(item.progress) || 0}%</div>
        </div>
      </div>`;
      })
      .join("");
  }

  /* ================= RENDER: SKILLS ================= */
  function renderSkills(skills) {
    if (!skills || typeof skills !== "object") return;
    const wrap = document.getElementById("skillsCategories");
    const categories = Object.keys(skills);
    wrap.innerHTML = categories
      .map((cat, ci) => {
        const rows = (skills[cat] || [])
          .map(
            (sk) => `
        <div class="skill-row">
          <div class="skill-row-head">
            <span class="skill-icon">${icon(sk.icon, 18)}</span>
            <span class="skill-name">${escapeHtml(sk.name)}</span>
            <span class="skill-percent">${Number(sk.progress) || 0}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" data-target="${Number(sk.progress) || 0}"></div>
          </div>
        </div>`
          )
          .join("");
        return `
        <div class="card skill-category reveal" style="--delay:${(ci % 2) * 100}ms">
          <h3 class="skill-category-title">${escapeHtml(cat)}</h3>
          ${rows}
        </div>`;
      })
      .join("");
  }

  /* ================= RENDER: PROJECTS ================= */
  function renderProjects(projects) {
    if (!Array.isArray(projects)) return;
    const grid = document.getElementById("projectsGrid");
    if (!projects.length) {
      grid.innerHTML = `<p class="section-sub">New projects are on the way \u2014 check back soon.</p>`;
      return;
    }
    grid.innerHTML = projects
      .map((p, i) => {
        const status = p.status || "completed";
        const tech = (p.technologies || [])
          .map((t) => `<span class="tech-tag">${escapeHtml(t)}</span>`)
          .join("");
        const githubBtn = p.github
          ? `<a class="btn btn-ghost btn-sm" href="${escapeHtml(p.github)}" target="_blank" rel="noopener noreferrer">${icon("github", 16)} Code</a>`
          : "";
        const demoBtn = p.liveDemo
          ? `<a class="btn btn-primary btn-sm" href="${escapeHtml(p.liveDemo)}" target="_blank" rel="noopener noreferrer">${icon("external", 16)} Live Demo</a>`
          : "";
        const dateLabel = formatDate(p.date);

        return `
      <div class="card project-card reveal" style="--delay:${(i % 2) * 100}ms">
        <div class="project-media">
          <img src="${resolveImageUrl(p.screenshot)}" alt="${escapeHtml(p.title)} screenshot" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22250%22%3E%3Crect width=%22400%22 height=%22250%22 fill=%22%230d131b%22/%3E%3C/svg%3E'" />
          <span class="project-status status-badge ${escapeHtml(status)}">${escapeHtml(status.replace("-", " "))}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${escapeHtml(p.title)}</h3>
          <p class="project-desc">${escapeHtml(p.description)}</p>
          <div class="project-tech">${tech}</div>
          <div class="project-meta">
            <span>${icon("calendar", 14)} ${dateLabel}</span>
          </div>
          <div class="project-actions">${githubBtn}${demoBtn}</div>
        </div>
      </div>`;
      })
      .join("");
  }

  function formatDate(dateStr) {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    if (parts.length < 2) return dateStr;
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const m = parseInt(parts[1], 10) - 1;
    return `${months[m] || parts[1]} ${parts[0]}`;
  }

  /* ================= RENDER: ACHIEVEMENTS ================= */
  const ACHIEVEMENT_ICONS = {
    Certificates: "certificate",
    Competitions: "trophy",
    Hackathons: "award",
    "Open Source": "code",
    Awards: "trophy",
  };

  function renderAchievements(items) {
    if (!Array.isArray(items)) return;
    const wrap = document.getElementById("achievementsWrap");
    if (!items.length) {
      wrap.innerHTML = `<p class="section-sub">Nothing to show yet \u2014 first achievement coming soon.</p>`;
      return;
    }
    const groups = {};
    items.forEach((it) => {
      const cat = it.category || "Other";
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(it);
    });

    wrap.innerHTML = Object.keys(groups)
      .map(
        (cat) => `
      <div class="achievement-group reveal">
        <h3 class="achievement-group-title">${escapeHtml(cat)}</h3>
        <div class="achievement-list">
          ${groups[cat]
            .map(
              (a) => `
            <div class="card achievement-item">
              <div class="achievement-icon">${icon(ACHIEVEMENT_ICONS[cat] || "award", 19)}</div>
              <div>
                <div class="achievement-title">${escapeHtml(a.title)}</div>
                <div class="achievement-meta">${escapeHtml(a.issuer || "")}</div>
                <div class="achievement-date">${formatDate(a.date)}</div>
                ${a.link ? `<a href="${escapeHtml(a.link)}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm" style="margin-top:10px;">${icon("external", 14)} View</a>` : ""}
              </div>
            </div>`
            )
            .join("")}
        </div>
      </div>`
      )
      .join("");
  }

  /* ---------- UI wiring: nav, scroll-top, preloader, footer meta ---------- */
  function initNav() {
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    menu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initScrollTop() {
    const btn = document.getElementById("scrollTop");
    window.addEventListener("scroll", () => {
      btn.classList.toggle("visible", window.scrollY > 500);
    });
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function initFooterMeta() {
    document.getElementById("footerYear").textContent = new Date().getFullYear();
    const updated = document.lastModified ? new Date(document.lastModified) : new Date();
    const label = updated.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
    document.getElementById("footerUpdated").textContent = `Last updated: ${label}`;
  }

  function hidePreloader() {
    const el = document.getElementById("preloader");
    el.classList.add("hidden");
    setTimeout(() => el.remove(), 600);
  }

  /* ---------- Boot ---------- */
  async function init() {
    initNav();
    initScrollTop();
    initFooterMeta();

    const [profile, contact, services, learning, skills, projects, achievements] = await Promise.all([
      loadJSON("profile.json"),
      loadJSON("contact.json"),
      loadJSON("services.json"),
      loadJSON("learning.json"),
      loadJSON("skills.json"),
      loadJSON("projects.json"),
      loadJSON("achievements.json"),
    ]);

    renderProfile(profile);
    renderContact(contact);
    renderServices(services);
    renderLearning(learning);
    renderSkills(skills);
    renderProjects(projects);
    renderAchievements(achievements);

    // Re-run reveal + progress bar observers now that content exists
    initReveal();
    initProgressBars();

    hidePreloader();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
