import DATA from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initTypingEffect();
  initMathCanvas();
  renderTimeline();
  renderProjects('all');
  renderCertificates();
  initScrollReveal();
  setupEventListeners();
});

/* ==========================================================================
   THEME & COLOR SCHEME MANAGEMENT
   ========================================================================== */
function initTheme() {
  const html = document.documentElement;
  const body = document.body;

  // Dark/Light Mode
  const savedTheme = localStorage.getItem('theme-mode') || 'dark';
  if (savedTheme === 'light') {
    html.classList.add('light-mode');
    updateThemeIcon('light');
  } else {
    html.classList.remove('light-mode');
    updateThemeIcon('dark');
  }

  // Accent Color
  const savedAccent = localStorage.getItem('theme-accent') || 'emerald';
  setAccentColor(savedAccent);
}

function updateThemeIcon(mode) {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  
  if (mode === 'light') {
    // Show Moon icon (to switch to dark mode)
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
  } else {
    // Show Sun icon (to switch to light mode)
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
  }
}

function toggleThemeMode() {
  const html = document.documentElement;
  if (html.classList.contains('light-mode')) {
    html.classList.remove('light-mode');
    localStorage.setItem('theme-mode', 'dark');
    updateThemeIcon('dark');
  } else {
    html.classList.add('light-mode');
    localStorage.setItem('theme-mode', 'light');
    updateThemeIcon('light');
  }
  // Redraw canvas on theme change to ensure colors match
  triggerCanvasRedraw();
}

function setAccentColor(accent) {
  const body = document.body;
  body.className = body.className.replace(/\btheme-\S+/g, '');
  
  if (accent !== 'emerald') {
    body.classList.add(`theme-${accent}`);
  }
  
  localStorage.setItem('theme-accent', accent);
  
  // Highlight active dot in menu
  document.querySelectorAll('.color-dot').forEach(dot => {
    if (dot.dataset.color === accent) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  triggerCanvasRedraw();
}

function triggerCanvasRedraw() {
  const canvas = document.getElementById('mathCanvas');
  if (canvas && canvas.dispatchEvent) {
    canvas.dispatchEvent(new Event('themechange'));
  }
}

/* ==========================================================================
   MOBILE NAVIGATION
   ========================================================================== */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
}

/* ==========================================================================
   HERO TYPING EFFECT
   ========================================================================== */
function initTypingEffect() {
  const roles = [
    "Profesor de Matemática",
    "Desarrollador Frontend",
    "Entusiasta de la Robótica"
  ];
  let currentRoleIdx = 0;
  let currentCharIdx = 0;
  let isDeleting = false;
  const roleEl = document.getElementById('heroRole');
  
  if (!roleEl) return;
  
  function type() {
    const currentText = roles[currentRoleIdx];
    
    if (isDeleting) {
      currentCharIdx--;
    } else {
      currentCharIdx++;
    }
    
    roleEl.textContent = currentText.substring(0, currentCharIdx);
    
    let typeSpeed = isDeleting ? 40 : 85;
    
    if (!isDeleting && currentCharIdx === currentText.length) {
      typeSpeed = 2200; // Hold full text
      isDeleting = true;
    } else if (isDeleting && currentCharIdx === 0) {
      isDeleting = false;
      currentRoleIdx = (currentRoleIdx + 1) % roles.length;
      typeSpeed = 400; // Pause before typing next
    }
    
    setTimeout(type, typeSpeed);
  }
  
  type();
}

/* ==========================================================================
   INTERACTIVE MATH CANVAS
   ========================================================================== */
function initMathCanvas() {
  const canvas = document.getElementById('mathCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width, height;
  let mouse = { x: 0, y: 0, rawX: 0, rawY: 0, active: false };
  let origin = { x: 0, y: 0 };
  let t = 0; // time variable for animations
  let gridSpacing = 60;
  
  // Set dimensions and handle HDPI screens
  function resize() {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    width = canvas.width = rect.width * dpr;
    height = canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    // Position origin in middle-right of canvas for best aesthetics
    origin.x = rect.width * 0.65;
    origin.y = rect.height * 0.5;
  }
  
  resize();
  window.addEventListener('resize', resize);
  
  // Handle mouse tracking
  const container = canvas.parentElement;
  container.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.rawX = e.clientX - rect.left;
    mouse.rawY = e.clientY - rect.top;
    
    // Convert to relative coordinates where center is 0, 0
    mouse.x = mouse.rawX - origin.x;
    mouse.y = origin.y - mouse.rawY; // invert y for math cartesian plane
    mouse.active = true;
  });
  
  container.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  // Get accent and grid colors from CSS Variables dynamically
  let accentColor, gridColor, textColor, circleColor;
  
  function updateColors() {
    const style = getComputedStyle(document.body);
    accentColor = style.getPropertyValue('--accent').trim();
    
    const isLight = document.documentElement.classList.contains('light-mode');
    gridColor = isLight ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.03)';
    textColor = isLight ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.3)';
    circleColor = isLight ? 'rgba(0, 0, 0, 0.02)' : 'rgba(255, 255, 255, 0.015)';
  }
  
  updateColors();
  canvas.addEventListener('themechange', updateColors);
  
  // Animation Loop
  function draw() {
    t += 0.015;
    ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
    
    const rectWidth = canvas.width / (window.devicePixelRatio || 1);
    const rectHeight = canvas.height / (window.devicePixelRatio || 1);
    
    // 1. Draw Cartesian Grid Lines
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    
    // Vertical grid lines
    let startX = origin.x % gridSpacing;
    for (let x = startX; x < rectWidth; x += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, rectHeight);
      ctx.stroke();
    }
    
    // Horizontal grid lines
    let startY = origin.y % gridSpacing;
    for (let y = startY; y < rectHeight; y += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(rectWidth, y);
      ctx.stroke();
    }
    
    // 2. Draw Main Axes
    ctx.strokeStyle = textColor;
    ctx.lineWidth = 1.5;
    
    // X Axis
    ctx.beginPath();
    ctx.moveTo(0, origin.y);
    ctx.lineTo(rectWidth, origin.y);
    ctx.stroke();
    
    // Y Axis
    ctx.beginPath();
    ctx.moveTo(origin.x, 0);
    ctx.lineTo(origin.x, rectHeight);
    ctx.stroke();
    
    // Axis Markers/Values
    ctx.fillStyle = textColor;
    ctx.font = '10px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    
    // Numbers on X Axis
    for (let x = startX; x < rectWidth; x += gridSpacing * 2) {
      const val = Math.round((x - origin.x) / gridSpacing);
      if (val !== 0) {
        ctx.fillText(val, x, origin.y + 4);
      }
    }
    
    // Numbers on Y Axis
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let y = startY; y < rectHeight; y += gridSpacing * 2) {
      const val = Math.round((origin.y - y) / gridSpacing);
      if (val !== 0) {
        ctx.fillText(val, origin.x - 6, y);
      }
    }
    
    // Origin marker
    ctx.fillText('0', origin.x - 6, origin.y + 8);
    
    // 3. Draw Trigonometric Unit Circle
    const circleRadius = gridSpacing * 3; // Circle with radius = 3 units
    ctx.beginPath();
    ctx.arc(origin.x, origin.y, circleRadius, 0, Math.PI * 2);
    ctx.fillStyle = circleColor;
    ctx.fill();
    ctx.strokeStyle = isColorLight(accentColor) ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.06)';
    ctx.stroke();
    
    // 4. Draw Animated Sine Wave y = A * sin(B * x + t)
    ctx.beginPath();
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 2;
    ctx.shadowBlur = 10;
    ctx.shadowColor = accentColor;
    
    let wavePoints = [];
    for (let px = -origin.x; px < rectWidth - origin.x; px += 2) {
      // Dynamic mathematical formula:
      // y = amplitude * sin(frequency * x + time) * envelope
      // Envelope dampens the wave as it goes far left
      const envelope = Math.exp(-Math.pow(px / (rectWidth * 0.4), 2));
      const py = 120 * Math.sin(px / 70 - t) * envelope;
      wavePoints.push({ x: px + origin.x, y: origin.y - py });
    }
    
    if (wavePoints.length > 0) {
      ctx.beginPath();
      ctx.moveTo(wavePoints[0].x, wavePoints[0].y);
      for (let i = 1; i < wavePoints.length; i++) {
        ctx.lineTo(wavePoints[i].x, wavePoints[i].y);
      }
      ctx.stroke();
    }
    ctx.shadowBlur = 0; // reset shadow
    
    // 5. Draw Dynamic Vector Tracking Point
    let px, py;
    if (mouse.active) {
      px = mouse.rawX;
      py = mouse.rawY;
    } else {
      // Lissajous curve movement when idle
      const lx = 2.5 * Math.cos(t * 0.5) * gridSpacing;
      const ly = 1.8 * Math.sin(t * 1.1) * gridSpacing;
      px = origin.x + lx;
      py = origin.y - ly;
    }
    
    // Vector Line from center to point
    ctx.beginPath();
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(px, py);
    ctx.stroke();
    ctx.setLineDash([]); // reset line dash
    
    // Component Lines (Projections to axes)
    ctx.strokeStyle = textColor;
    ctx.lineWidth = 0.8;
    ctx.setLineDash([2, 4]);
    
    // X projection
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(px, origin.y);
    ctx.stroke();
    
    // Y projection
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(origin.x, py);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Draw tracking dot
    ctx.beginPath();
    ctx.arc(px, py, 6, 0, Math.PI * 2);
    ctx.fillStyle = accentColor;
    ctx.fill();
    ctx.strokeStyle = textColor;
    ctx.stroke();
    
    // Draw coordinate label near the point
    const mathX = ((px - origin.x) / gridSpacing).toFixed(2);
    const mathY = ((origin.y - py) / gridSpacing).toFixed(2);
    
    ctx.fillStyle = accentColor;
    ctx.font = 'bold 11px monospace';
    ctx.textAlign = px > origin.x ? 'left' : 'right';
    ctx.textBaseline = py > origin.y ? 'top' : 'bottom';
    
    const offset = 10;
    const labelX = px + (px > origin.x ? offset : -offset);
    const labelY = py + (py > origin.y ? offset : -offset);
    
    ctx.fillText(`P(${mathX}, ${mathY})`, labelX, labelY);
    
    requestAnimationFrame(draw);
  }
  
  function isColorLight(color) {
    // Utility check for transparency styling
    return document.documentElement.classList.contains('light-mode');
  }
  
  draw();
}

/* ==========================================================================
   TIMELINE (EXPERIENCE & EDUCATION) MANAGEMENT
   ========================================================================== */
function renderTimeline() {
  const expContainer = document.getElementById('experienceTimeline');
  const eduContainer = document.getElementById('educationTimeline');
  
  if (expContainer && DATA.experience) {
    expContainer.innerHTML = DATA.experience.map(item => `
      <div class="timeline-item reveal">
        <div class="timeline-dot"></div>
        <div class="timeline-content card-glass">
          <div class="timeline-header">
            <span class="timeline-period">${item.period}</span>
            <h3 class="timeline-role">${item.role}</h3>
            <h4 class="timeline-company">${item.company}</h4>
          </div>
          <p class="timeline-desc">${item.description}</p>
        </div>
      </div>
    `).join('');
  }
  
  if (eduContainer && DATA.education) {
    eduContainer.innerHTML = DATA.education.map(item => `
      <div class="timeline-item reveal">
        <div class="timeline-dot"></div>
        <div class="timeline-content card-glass">
          <div class="timeline-header">
            <span class="timeline-period">${item.year}</span>
            <h3 class="timeline-role">${item.degree}</h3>
            <h4 class="timeline-company">${item.institution}</h4>
          </div>
          <p class="timeline-desc">${item.details}</p>
        </div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   PROJECTS SECTION MANAGEMENT
   ========================================================================== */
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  const filtered = filter === 'all' 
    ? DATA.projects 
    : DATA.projects.filter(p => p.category === filter);
    
  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card-glass project-card reveal';
    
    const techTags = p.tech.map(t => `<span class="project-tech-tag">${t}</span>`).join('');
    
    card.innerHTML = `
      <div class="project-card-header">
        <span class="project-category-badge">${p.category === 'web' ? 'Desarrollo Web' : 'Matemática & Educación'}</span>
        <h3 class="project-title">${p.title}</h3>
      </div>
      <p class="project-description">${p.description}</p>
      <div class="project-tech-list">
        ${techTags}
      </div>
      <div class="project-links">
        <a href="${p.demo}" target="_blank" class="btn-card-link">
          Ver Proyecto
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
        </a>
      </div>
    `;
    
    grid.appendChild(card);
  });
  
  // Re-observe newly added reveal cards
  initScrollReveal();
}

/* ==========================================================================
   CERTIFICATES SEARCH & PAGINATION
   ========================================================================== */
let certSearchQuery = '';
let certCategoryFilter = 'all';
let certCurrentPage = 1;
const certItemsPerPage = 8;

function renderCertificates() {
  const grid = document.getElementById('certificatesGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  // Filter
  const filtered = DATA.certificates.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(certSearchQuery.toLowerCase());
    const matchesCategory = certCategoryFilter === 'all' || c.category === certCategoryFilter;
    return matchesSearch && matchesCategory;
  });
  
  // Paginate
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / certItemsPerPage) || 1;
  
  // Bounds check page index
  if (certCurrentPage > totalPages) certCurrentPage = totalPages;
  if (certCurrentPage < 1) certCurrentPage = 1;
  
  const startIndex = (certCurrentPage - 1) * certItemsPerPage;
  const endIndex = Math.min(startIndex + certItemsPerPage, totalItems);
  const pageItems = filtered.slice(startIndex, endIndex);
  
  // Render empty state if needed
  if (pageItems.length === 0) {
    grid.innerHTML = `<div class="no-results">No se encontraron certificados con esos filtros.</div>`;
    updatePaginationControls(0, 0);
    return;
  }
  
  pageItems.forEach(c => {
    const card = document.createElement('div');
    card.className = 'card-glass certificate-card reveal';
    
    card.innerHTML = `
      <h4>${c.title}</h4>
      <div class="certificate-card-footer">
        <span class="certificate-tag">${getFriendlyCertCategoryName(c.category)}</span>
        <a href="${c.path}" target="_blank" class="btn-cert-link">
          Ver PDF
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
        </a>
      </div>
    `;
    
    grid.appendChild(card);
  });
  
  updatePaginationControls(certCurrentPage, totalPages);
  initScrollReveal();
}

function updatePaginationControls(current, total) {
  const prevBtn = document.getElementById('certPrevPage');
  const nextBtn = document.getElementById('certNextPage');
  const info = document.getElementById('certPageInfo');
  
  if (prevBtn) prevBtn.disabled = current <= 1;
  if (nextBtn) nextBtn.disabled = current >= total;
  if (info) info.textContent = `${current} / ${total}`;
}

function getFriendlyCertCategoryName(cat) {
  const mappings = {
    javascript: 'JS & TS',
    backend: 'Backend',
    frontend: 'Frontend',
    design: 'Diseño',
    math: 'Matemática',
    logic: 'Lógica',
    english: 'Inglés',
    tools: 'Herramientas',
    other: 'General'
  };
  return mappings[cat] || cat;
}

/* ==========================================================================
   SCROLL REVEAL (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve once revealed to keep scrolling fast
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  reveals.forEach(r => observer.observe(r));
}

/* ==========================================================================
   EVENT LISTENERS & BINDINGS
   ========================================================================== */
function setupEventListeners() {
  // Theme Toggle Button
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleThemeMode);
  }

  // Accent Color Picker Trigger
  const colorBtn = document.getElementById('colorPickerBtn');
  const colorDropdown = document.getElementById('colorDropdown');
  if (colorBtn && colorDropdown) {
    colorBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      colorDropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      colorDropdown.classList.remove('show');
    });
  }

  // Accent Dots Choice
  document.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const color = dot.dataset.color;
      setAccentColor(color);
      colorDropdown.classList.remove('show');
    });
  });

  // Projects Filter Buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      renderProjects(filter);
    });
  });

  // Certificate Search Input
  const certSearchInput = document.getElementById('certSearch');
  if (certSearchInput) {
    certSearchInput.addEventListener('input', (e) => {
      certSearchQuery = e.target.value;
      certCurrentPage = 1; // Reset to page 1 on query
      renderCertificates();
    });
  }

  // Certificate Category Select
  const certCatSelect = document.getElementById('certCategorySelect');
  if (certCatSelect) {
    certCatSelect.addEventListener('change', (e) => {
      certCategoryFilter = e.target.value;
      certCurrentPage = 1; // Reset to page 1 on filter change
      renderCertificates();
    });
  }

  // Certificate Pagination Actions
  const certPrev = document.getElementById('certPrevPage');
  const certNext = document.getElementById('certNextPage');
  
  if (certPrev) {
    certPrev.addEventListener('click', () => {
      if (certCurrentPage > 1) {
        certCurrentPage--;
        renderCertificates();
        document.getElementById('certificados').scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  
  if (certNext) {
    certNext.addEventListener('click', () => {
      certCurrentPage++;
      renderCertificates();
      document.getElementById('certificados').scrollIntoView({ behavior: 'smooth' });
    });
  }
}
