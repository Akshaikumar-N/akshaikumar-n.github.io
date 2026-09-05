/* =====================================================================
   Renders SITE (from content.js) into the page and wires up
   interactions. You shouldn't need to edit this file — see
   content.js to change what appears on the site.
   ===================================================================== */

(function () {
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  /* ---------------------------------------------------------
     Identity: name, role, bio, title, socials
     --------------------------------------------------------- */
  function renderIdentity() {
    document.title = `${SITE.name} — ${SITE.role}`;

    ['nav-name', 'hero-name', 'footer-name'].forEach((id) => {
      const node = document.getElementById(id);
      if (node) node.textContent = SITE.name;
    });

    const role = document.getElementById('hero-role');
    if (role) role.textContent = SITE.role;

    const bio = document.getElementById('hero-bio');
    if (bio) bio.textContent = SITE.bio;

    $$('.js-github').forEach((a) => (a.href = SITE.socials.github));
    $$('.js-linkedin').forEach((a) => (a.href = SITE.socials.linkedin));
    $$('.js-email').forEach((a) => {
      a.href = `mailto:${SITE.socials.email}`;
      if (a.tagName === 'A' && a.classList.contains('contact__email')) {
        a.textContent = SITE.socials.email;
      }
    });
  }

  /* ---------------------------------------------------------
     Empty-state helper
     --------------------------------------------------------- */
  function emptyState(container, message) {
    container.appendChild(el('div', 'empty-state', message));
  }

  /* ---------------------------------------------------------
     Skills — spec-sheet rows
     --------------------------------------------------------- */
  function renderSkills() {
    const container = document.getElementById('skills-list');
    if (!container || !SITE.skills) return;

    SITE.skills.forEach((group) => {
      const row = el('div', 'skill-row');
      row.appendChild(el('div', 'skill-row__label', group.category));

      const items = el('div', 'skill-row__items');
      group.items.forEach((item) => items.appendChild(el('span', 'chip', item)));
      row.appendChild(items);

      container.appendChild(row);
    });
  }

  /* ---------------------------------------------------------
     Projects
     --------------------------------------------------------- */
  function renderProjects() {
    const container = document.getElementById('projects-list');
    if (!container || !SITE.projects) return;

    if (SITE.projects.length === 0) {
      emptyState(container, 'No projects added yet — add entries in content.js and they will appear here.');
      return;
    }

    SITE.projects.forEach((p) => {
      const row = el('div', 'row');

      const top = el('div', 'row__top');
      top.appendChild(el('h3', 'row__title', p.title));
      row.appendChild(top);

      if (p.tags && p.tags.length) {
        const tags = el('div', 'row__tags');
        p.tags.forEach((t) => tags.appendChild(el('span', 'chip', t)));
        row.appendChild(tags);
      }

      row.appendChild(el('p', 'row__desc', p.description));

      const link = el('a', 'link-underline row__link', 'View project');
      link.href = p.link || '#';
      if (p.link && p.link !== '#') {
        link.target = '_blank';
        link.rel = 'noopener';
      }
      row.appendChild(link);

      container.appendChild(row);
    });
  }

  /* ---------------------------------------------------------
     Certificates
     --------------------------------------------------------- */
  function renderCertificates() {
    const container = document.getElementById('certificates-list');
    if (!container || !SITE.certificates) return;

    if (SITE.certificates.length === 0) {
      emptyState(container, 'No certificates added yet — add entries in content.js and they will appear here.');
      return;
    }

    SITE.certificates.forEach((c) => {
      const row = el('div', 'row');
      const top = el('div', 'row__top');
      top.appendChild(el('h3', 'row__title', c.title));
      if (c.meta) top.appendChild(el('span', 'row__meta', c.meta));
      row.appendChild(top);

      if (c.link) {
        const link = el('a', 'link-underline row__link', 'View credential');
        link.href = c.link;
        link.target = '_blank';
        link.rel = 'noopener';
        row.appendChild(link);
      }

      container.appendChild(row);
    });
  }

  /* ---------------------------------------------------------
     Experience
     --------------------------------------------------------- */
  function renderExperience() {
    const container = document.getElementById('experience-list');
    if (!container || !SITE.experience) return;

    if (SITE.experience.length === 0) {
      emptyState(container, 'Experience will appear here once added to content.js.');
      return;
    }

    SITE.experience.forEach((x) => {
      const row = el('div', 'row');
      const top = el('div', 'row__top');
      top.appendChild(el('h3', 'row__title', x.title));
      if (x.meta) top.appendChild(el('span', 'row__meta', x.meta));
      row.appendChild(top);

      if (x.description) row.appendChild(el('p', 'row__desc', x.description));
      container.appendChild(row);
    });
  }

  /* ---------------------------------------------------------
     Hobbies
     --------------------------------------------------------- */
  function renderHobbies() {
    const container = document.getElementById('hobbies-list');
    if (!container || !SITE.hobbies) return;

    if (SITE.hobbies.length === 0) {
      emptyState(container, 'Hobbies will appear here once added to content.js.');
      return;
    }

    SITE.hobbies.forEach((h) => container.appendChild(el('span', 'hobby-chip', h)));
  }

  /* ---------------------------------------------------------
     Nav: scrolled shadow line + active section highlight
     --------------------------------------------------------- */
  function setupNavScroll() {
    const nav = document.getElementById('nav');
    if (!nav) return;

    const onScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const links = $$('#nav-links a');
    const sections = links
      .map((a) => document.querySelector(a.getAttribute('href')))
      .filter(Boolean);

    if (!sections.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = `#${entry.target.id}`;
          links.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === id));
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
  }

  /* ---------------------------------------------------------
     Mobile menu toggle
     --------------------------------------------------------- */
  function setupMobileNav() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-mobile');
    if (!toggle || !menu) return;

    const close = () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
    };

    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    $$('a', menu).forEach((a) => a.addEventListener('click', close));
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  /* ---------------------------------------------------------
     Copy email button
     --------------------------------------------------------- */
  function setupCopyEmail() {
    const btn = document.getElementById('copy-email-btn');
    if (!btn) return;

    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(SITE.socials.email);
        const original = btn.textContent;
        btn.textContent = 'Copied';
        setTimeout(() => (btn.textContent = original), 1600);
      } catch (err) {
        // Clipboard API unavailable — the email link still works as a fallback.
      }
    });
  }

  /* ---------------------------------------------------------
     Footer year
     --------------------------------------------------------- */
  function setYear() {
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
  }

  /* ---------------------------------------------------------
     Init
     --------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    renderIdentity();
    renderSkills();
    renderProjects();
    renderCertificates();
    renderExperience();
    renderHobbies();
    setupNavScroll();
    setupMobileNav();
    setupCopyEmail();
    setYear();
  });
})();
