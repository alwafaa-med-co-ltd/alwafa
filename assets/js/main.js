/**
 * AL-WAFA'A Medical Co. - Main JavaScript Controller
 * Handles language detection, header/footer management, and slider functionality
 */

(function() {
  'use strict';

  // ===== Configuration =====
  const CONFIG = {
    // Language detection keywords for contact pages
    contactKeywords: [
      'contact', 'contact-us', 'contactus', 'contact.html', 'contact-us.html',
      'اتصل', 'اتصل بنا', 'اتصل-بنا', 'اتصال', 'تواصل', 'تواصل-معنا'
    ],
    
    // Slider settings
    slider: {
      autoplay: true,
      interval: 3500,
      pauseOnHover: true,
      pauseOnFocus: true
    },
    
    // Asset paths
    assets: {
      headerConfig: {
        "ar": {
          "labelText": "شركة الوفاء الطبية المحدودة",
          "slides": [
            { "src": "assets/images/wafa-ar-1.webp", "alt": "شريحة 1 — الوفاء", "loading": "eager" },
            { "src": "assets/images/wafa-ar-2.webp", "alt": "شريحة 2 — الوفاء" },
            { "src": "assets/images/wafa-ar-3.webp", "alt": "شريحة 3 — الوفاء" },
            { "src": "assets/images/wafa-ar-4.webp", "alt": "شريحة 4 — الوفاء" },
            { "src": "assets/images/wafa-ar-5.webp", "alt": "شريحة 5 — الوفاء" },
            { "src": "assets/images/wafa-ar-6.webp", "alt": "شريحة 6 — الوفاء" },
            { "src": "assets/images/wafa-ar-7.webp", "alt": "شريحة 7 — الوفاء" },
            { "src": "assets/images/wafa-ar-8.webp", "alt": "شريحة 8 — الوفاء" },
            { "src": "assets/images/wafa-ar-9.webp", "alt": "شريحة 9 — الوفاء" },
            { "src": "assets/images/wafa-ar-10.webp", "alt": "شريحة 10 — الوفاء" },
            { "src": "assets/images/wafa-ar-11.webp", "alt": "شريحة 11 — الوفاء" },
            { "src": "assets/images/wafa-ar-12.webp", "alt": "شريحة 12 — الوفاء" }
          ],
          "toplabel": {
            "desktop": "assets/images/toplabel-ar.webp",
            "mobile": "assets/images/toplabel-ar-m.webp",
            "alt": "شريط الوفاء"
          }
        },
        "en": {
          "labelText": "Al-Wafa'a Medical Co., Ltd.",
          "slides": [
            { "src": "assets/images/wafa-en-1.webp", "alt": "Slide 1 — Wafa", "loading": "eager" },
            { "src": "assets/images/wafa-en-2.webp", "alt": "Slide 2 — Wafa" },
            { "src": "assets/images/wafa-en-3.webp", "alt": "Slide 3 — Wafa" },
            { "src": "assets/images/wafa-en-4.webp", "alt": "Slide 4 — Wafa" },
            { "src": "assets/images/wafa-en-5.webp", "alt": "Slide 5 — Wafa" },
            { "src": "assets/images/wafa-en-6.webp", "alt": "Slide 6 — Wafa" },
            { "src": "assets/images/wafa-en-7.webp", "alt": "Slide 7 — Wafa" },
            { "src": "assets/images/wafa-en-8.webp", "alt": "Slide 8 — Wafa" },
            { "src": "assets/images/wafa-en-9.webp", "alt": "Slide 9 — Wafa" },
            { "src": "assets/images/wafa-en-10.webp", "alt": "Slide 10 — Wafa" },
            { "src": "assets/images/wafa-en-11.webp", "alt": "Slide 11 — Wafa" },
            { "src": "assets/images/wafa-en-12.webp", "alt": "Slide 12 — Wafa" }
          ],
          "toplabel": {
            "desktop": "assets/images/toplabel-en.webp",
            "mobile": "assets/images/toplabel-en-m.webp",
            "alt": "Wafa label"
          }
        }
      },
      
      footerData: {
        "ar": {
          "heading": "عنـواننــا الكـامــل",
          "company": "شركة الوفاء الطبية المحدودة",
          "address": "شــارع الـزبيــــري<br>شارع رقم 4 جنوب كوبري باب البلقاء<br>صنعاء , الجمهورية اليمنية.",
          "pobox": "ص.ب.الصندوق:",
          "background": "assets/images/footerba-ar.webp",
          "logo": "assets/images/logo.svg",
          "rights": "جميع الحقوق محفوظة © شركة الوفاء الطبية المحدودة",
          "phones": [
            { "label": "هاتف أرضي 1", "value": "01/514194", "tel": "+967-1-514194" },
            { "label": "هاتف أرضي 2", "value": "01/247777", "tel": "+967-1-247777" },
            { "label": "فاكس 1", "value": "01/504646", "tel": "+967-1-504646" },
            { "label": "فاكس 2", "value": "01/240153", "tel": "+967-1-240153" },
            { "label": "موبايل", "value": "781117299", "tel": "+967-781117299" },
            { "label": "هاتف أرضي 3", "value": "01/513899", "tel": "+967-1-513899" }
          ],
          "misc": [
            { "icon": "fa-solid fa-globe", "html": "الموقع الإلكتروني: <strong style=\"direction:ltr;font-family:Roboto, sans-serif;\">www.alwafaamedical.com</strong>" },
            { "icon": "fa-solid fa-envelope", "html": "البريد الإلكتروني: <strong><a href=\"mailto:info@alwafaamedical.com\" style=\"color:inherit;\">info@alwafaamedical.com</a></strong>" },
            { "icon": "fa-solid fa-envelope", "html": "<a href=\"mailto:khalil.alahlasi@alwafaamedical.com\" style=\"color:inherit;\">khalil.alahlasi@alwafaamedical.com</a>" }
          ]
        },
        "en": {
          "heading": "Our Full Address",
          "company": "AL-WAFA'A MEDICAL CO., LTD",
          "address": "AL-Zubieri Street<br>St. No. 4, south of Bab Al-Balaqa Bridge<br>Sana'a, Republic of Yemen.",
          "pobox": "P.O. Box:",
          "background": "assets/images/footerba-en.webp",
          "logo": "assets/images/logo-en.svg",
          "rights": "© All rights reserved — AL-WAFA'A MEDICAL CO., LTD",
          "phones": [
            { "label": "Phone 1", "value": "00967-1-514194", "tel": "+967-1-514194" },
            { "label": "Phone 2", "value": "00967-1-247777", "tel": "+967-1-247777" },
            { "label": "Fax 1", "value": "00967-1-504646", "tel": "+967-1-504646" },
            { "label": "Fax 2", "value": "00967-1-240153", "tel": "+967-1-240153" },
            { "label": "Mobile", "value": "00967-781117299", "tel": "+967-781117299" },
            { "label": "Phone 3", "value": "00967-1-513899", "tel": "+967-1-513899" }
          ],
          "misc": [
            { "icon": "fa-solid fa-globe", "html": "Website: <strong style=\"direction:ltr;\"><a href=\"https://www.alwafaamedical.com\" style=\"color:inherit;\">www.alwafaamedical.com</a></strong>" },
            { "icon": "fa-solid fa-envelope", "html": "Email: <strong><a href=\"mailto:info@alwafaamedical.com\" style=\"color:inherit;\">info@alwafaamedical.com</a></strong>" },
            { "icon": "fa-solid fa-envelope", "html": "<a href=\"mailto:khalil.alahlasi@alwafaamedical.com\" style=\"color:inherit;\">khalil.alahlasi@alwafaamedical.com</a>" }
          ]
        }
      }
    }
  };

  // ===== Language Detection =====
  function detectPageLanguage() {
    const html = document.documentElement;
    const htmlLang = (html.getAttribute('lang') || '').trim().toLowerCase();
    
    if (htmlLang) {
      if (htmlLang.startsWith('ar')) return 'ar';
      if (htmlLang.startsWith('en')) return 'en';
    }
    
    // Fallback to dir attribute
    const dir = (html.getAttribute('dir') || '').toLowerCase();
    if (dir === 'rtl') return 'ar';
    if (dir === 'ltr') return 'en';
    
    // Navigator fallback
    if (navigator.language) {
      if (navigator.language.startsWith('ar')) return 'ar';
      if (navigator.language.startsWith('en')) return 'en';
    }
    
    // Default Arabic
    return 'ar';
  }

  // ===== Contact Page Detection =====
  function isContactPage() {
    const path = (location.pathname || '').toLowerCase();
    const title = (document.title || '').toLowerCase();
    
    return CONFIG.contactKeywords.some(keyword => {
      const k = keyword.toLowerCase();
      return path.includes(k) || title.includes(k);
    });
  }

  // ===== Header Management =====
  function loadHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (!headerPlaceholder) return;

    // Skip header on contact pages
    if (isContactPage()) {
      headerPlaceholder.style.display = 'none';
      return;
    }

    fetch('partials/header.html')
      .then(response => response.text())
      .then(html => {
        headerPlaceholder.innerHTML = html;
        initializeHeader();
      })
      .catch(error => {
        console.warn('Could not load header:', error);
        // Fallback to inline header
        createFallbackHeader();
      });
  }

  function createFallbackHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (!headerPlaceholder) return;

    headerPlaceholder.innerHTML = `
      <header class="site-header" role="banner">
        <section class="hero" role="region" aria-label="Main slider">
          <div class="slides" id="slider" tabindex="0" aria-live="polite"></div>
          <div class="top-label" id="top-label" role="img">
            <img id="toplabel-img" src="" alt="" loading="eager" width="620" height="284">
          </div>
          <div class="label-text" id="label-text" role="button" tabindex="0"></div>
          <div id="slider-live" class="visually-hidden" aria-live="polite"></div>
        </section>
      </header>
    `;
    
    initializeHeader();
  }

  function initializeHeader() {
    const lang = detectPageLanguage();
    const config = CONFIG.assets.headerConfig[lang];
    
    if (!config) {
      console.warn('No header configuration found for language:', lang);
      return;
    }

    // Set page title label
    setPageSpecificLabel();
    
    // Initialize slider
    initializeSlider(config.slides);
    
    // Initialize top label
    initializeTopLabel(config.toplabel);
    
    // Add label click functionality
    initializeLabelInteraction();
  }

  function setPageSpecificLabel() {
    const labelEl = document.getElementById('label-text');
    if (!labelEl) return;

    const lang = detectPageLanguage();
    const pathname = window.location.pathname.toLowerCase();
    
    const labels = {
      ar: {
        'index.html': 'شركة الوفاء الطبية المحدودة',
        'about.html': 'نبذة عن الشركة',
        'services.html': 'خــدمـاتنـــــا',
        'strategy.html': 'استراتيجياتنا',
        'position.html': 'المكــــانة',
        'commitments.html': 'التزاماتنــــــــا',
        'management.html': 'الإدارة',
        'success.html': 'نجــــــاح الشــــركة',
        'brands.html': 'العلامات التجارية',
        'conclusion.html': 'ختـــــــامـــاً'
      },
      en: {
        'index.html': 'Al-Wafa\'a Medical Co., Ltd.',
        'about.html': 'About the company',
        'services.html': 'Our Services',
        'strategy.html': 'Business Strategy',
        'position.html': 'Ranking',
        'commitments.html': 'Our Commitments',
        'management.html': 'Management',
        'success.html': 'Corporation\'s Success',
        'brands.html': 'Brands',
        'conclusion.html': 'In Conclusion'
      }
    };

    // Find matching page
    let pageLabel = labels[lang]['index.html']; // default
    
    for (const page in labels[lang]) {
      if (pathname.includes(page)) {
        pageLabel = labels[lang][page];
        break;
      }
    }

    labelEl.textContent = pageLabel;
  }

  // ===== Slider Management =====
  function initializeSlider(slides) {
    const slider = document.getElementById('slider');
    if (!slider || !slides) return;

    // Clear existing slides
    slider.innerHTML = '';

    // Add slides
    slides.forEach((slide, index) => {
      const img = document.createElement('img');
      img.className = 'slide' + (index === 0 ? ' is-active' : '');
      img.src = slide.src;
      img.alt = slide.alt;
      img.loading = slide.loading || 'lazy';
      img.width = 1650;
      img.height = 800;
      img.setAttribute('role', 'group');
      img.setAttribute('aria-roledescription', 'slide');
      img.setAttribute('aria-label', `${slide.alt} - ${index + 1} من ${slides.length}`);
      img.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');
      
      if (index !== 0) {
        img.style.visibility = 'hidden';
      }

      slider.appendChild(img);
    });

    initializeSliderControls();
  }

  function initializeSliderControls() {
    const slider = document.getElementById('slider');
    if (!slider) return;

    const slides = Array.from(slider.querySelectorAll('.slide'));
    if (!slides.length) return;

    // Create live region for screen readers
    let live = document.getElementById('slider-live');
    if (!live) {
      live = document.createElement('div');
      live.id = 'slider-live';
      live.className = 'visually-hidden';
      live.setAttribute('aria-live', 'polite');
      live.setAttribute('aria-atomic', 'true');
      document.body.appendChild(live);
    }

    let current = 0;
    let timer = null;
    const interval = CONFIG.slider.interval;

    function updateLive(index) {
      live.textContent = slides[index] ? slides[index].alt || `شريحة ${index + 1}` : '';
    }

    function show(index) {
      const idx = ((index % slides.length) + slides.length) % slides.length;
      
      slides.forEach((slide, i) => {
        const active = i === idx;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', active ? 'false' : 'true');
        slide.style.visibility = active ? 'visible' : 'hidden';
        slide.style.opacity = active ? '1' : '0';
        if (slide.loading !== undefined) {
          slide.loading = active ? 'eager' : 'lazy';
        }
      });
      
      current = idx;
      updateLive(current);
    }

    function next() { show(current + 1); }
    function prev() { show(current - 1); }

    function start() {
      stop();
      if (CONFIG.slider.autoplay) {
        timer = setInterval(next, interval);
      }
    }

    function stop() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    // Event listeners
    if (CONFIG.slider.pauseOnHover) {
      slider.addEventListener('mouseenter', stop);
      slider.addEventListener('mouseleave', start);
    }

    if (CONFIG.slider.pauseOnFocus) {
      slider.addEventListener('focusin', stop);
      slider.addEventListener('focusout', start);
    }

    // Keyboard navigation
    slider.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        stop();
        if (e.key === 'ArrowLeft') prev();
        else next();
        start();
      }
    });

    // Touch support
    let startX = null;
    slider.addEventListener('touchstart', e => {
      startX = e.changedTouches ? e.changedTouches[0].clientX : null;
    }, { passive: true });

    slider.addEventListener('touchend', e => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) {
        if (dx > 0) prev();
        else next();
      }
      startX = null;
    }, { passive: true });

    // Connect navigation buttons
    const btnNext = document.getElementById('next-slide');
    const btnPrev = document.getElementById('prev-slide');
    
    if (btnNext) {
      btnNext.addEventListener('click', (e) => {
        e.preventDefault();
        stop();
        next();
        start();
      });
    }
    
    if (btnPrev) {
      btnPrev.addEventListener('click', (e) => {
        e.preventDefault();
        stop();
        prev();
        start();
      });
    }

    // Start slider
    updateLive(0);
    start();

    // Expose API for debugging
    window.__wafa_slider = { show, next, prev, start, stop, slides };
  }

  // ===== Top Label Management =====
  function initializeTopLabel(config) {
    if (!config) return;

    const imgEl = document.getElementById('toplabel-img');
    const container = document.getElementById('top-label');
    
    if (!imgEl || !container) {
      console.warn('Top-label elements missing');
      return;
    }

    const preloaded = { desktop: false, mobile: false };
    
    function preload(src, key) {
      try {
        const img = new Image();
        img.src = src;
        img.onload = () => preloaded[key] = true;
        img.onerror = () => preloaded[key] = false;
      } catch (e) {
        preloaded[key] = false;
      }
    }

    preload(config.desktop, 'desktop');
    preload(config.mobile, 'mobile');

    let pendingOnLoad = null;
    
    function fadeToSrc(newSrc) {
      if (!newSrc) return;
      
      const current = imgEl.getAttribute('src') || '';
      if (current === newSrc) return;
      
      if (pendingOnLoad) {
        imgEl.removeEventListener('load', pendingOnLoad);
      }

      imgEl.style.transition = 'opacity 0.22s ease-in-out';
      imgEl.style.opacity = '0';
      
      pendingOnLoad = function onload() {
        imgEl.removeEventListener('load', onload);
        pendingOnLoad = null;
        requestAnimationFrame(() => {
          imgEl.style.opacity = '1';
        });
      };
      
      imgEl.addEventListener('load', pendingOnLoad);
      imgEl.src = newSrc;
      imgEl.alt = config.alt;

      // Fallback timer
      const fallbackTimer = setTimeout(() => {
        if (!imgEl.naturalWidth && newSrc !== config.desktop) {
          imgEl.src = config.desktop;
        }
        clearTimeout(fallbackTimer);
      }, 1200);
    }

    imgEl.addEventListener('error', () => {
      console.warn('Top-label image failed to load, applying fallback');
      if (!imgEl.src.includes(config.desktop)) {
        imgEl.src = config.desktop;
      }
    });

    function setTopLabel() {
      const isMobile = window.matchMedia('(max-width: 640px)').matches;
      
      if (isMobile) {
        container.classList.add('is-mobile');
      } else {
        container.classList.remove('is-mobile');
      }
      
      const target = isMobile ? config.mobile : config.desktop;
      fadeToSrc(target);
      
      // Preload if not already done
      if (isMobile && !preloaded.mobile) {
        preload(config.mobile, 'mobile');
      }
      if (!isMobile && !preloaded.desktop) {
        preload(config.desktop, 'desktop');
      }
    }

    // Event listeners
    window.addEventListener('load', setTopLabel);
    window.addEventListener('resize', debounce(setTopLabel, 120));
    window.addEventListener('orientationchange', setTopLabel);

    // Media query listener
    try {
      const mq = window.matchMedia('(max-width: 640px)');
      if (typeof mq.addEventListener === 'function') {
        mq.addEventListener('change', setTopLabel);
      } else if (typeof mq.addListener === 'function') {
        mq.addListener(setTopLabel);
      }
    } catch (e) {
      // Ignore
    }

    // Initial call
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(setTopLabel, 60);
    }
  }

  // ===== Label Interaction =====
  function initializeLabelInteraction() {
    const label = document.getElementById('label-text');
    if (!label) return;

    function scrollToMain() {
      const main = document.getElementById('main');
      if (main) {
        main.scrollIntoView({ behavior: 'smooth' });
      }
    }

    label.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        scrollToMain();
      }
    });

    label.addEventListener('click', scrollToMain);
  }

  // ===== Footer Management =====
  function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) return;

    // Skip footer on contact pages
    if (isContactPage()) {
      footerPlaceholder.style.display = 'none';
      return;
    }

    fetch('partials/footer.html')
      .then(response => response.text())
      .then(html => {
        footerPlaceholder.innerHTML = html;
        initializeFooter();
      })
      .catch(error => {
        console.warn('Could not load footer:', error);
        createFallbackFooter();
      });
  }

  function createFallbackFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) return;

    const lang = detectPageLanguage();
    const data = CONFIG.assets.footerData[lang];

    footerPlaceholder.innerHTML = `
      <footer class="site-footer" role="contentinfo">
        <div class="footer-inner">
          <div class="footer-contacts">
            <div class="heading">
              <div class="icon-circle-sm"><i class="fa-solid fa-location-dot"></i></div>
              <h3>${data.heading}</h3>
            </div>
            <div class="company-name">${data.company}</div>
            <p class="address">${data.address}</p>
            <div class="po-box-row">
              <div class="icon-outer"><div class="icon-inner globe"><i class="fa-solid fa-inbox"></i></div></div>
              <div>${data.pobox} <span class="num">20637</span></div>
            </div>
            <div class="phones-list" id="footer-phones"></div>
            <div class="misc-list" id="footer-misc"></div>
          </div>
          <div class="footer-logo">
            <img src="${data.logo}" alt="Logo" onerror="this.src='assets/images/logo.svg'">
          </div>
        </div>
        <div class="footer-rights">${data.rights}</div>
      </footer>
    `;

    initializeFooter();
  }

  function initializeFooter() {
    const lang = detectPageLanguage();
    const data = CONFIG.assets.footerData[lang];
    
    if (!data) return;

    // Set background image
    const footer = document.querySelector('.site-footer');
    if (footer) {
      footer.style.backgroundImage = `url("${data.background}")`;
      footer.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    }

    // Populate dynamic content
    populateFooterContent(data);
  }

  function populateFooterContent(data) {
    // Update text content
    const heading = document.getElementById('footer-heading');
    const company = document.getElementById('footer-company');
    const address = document.getElementById('footer-address');
    const pobox = document.getElementById('footer-pobox');
    const rights = document.getElementById('footer-rights');
    const logo = document.getElementById('footer-logo');

    if (heading) heading.textContent = data.heading;
    if (company) company.textContent = data.company;
    if (address) address.innerHTML = data.address;
    if (pobox) pobox.innerHTML = `${data.pobox} <span class="num">20637</span>`;
    if (rights) rights.textContent = data.rights;
    if (logo) {
      logo.src = data.logo;
      logo.alt = data.company;
    }

    // Populate phones
    const phonesContainer = document.getElementById('footer-phones');
    if (phonesContainer && data.phones) {
      phonesContainer.innerHTML = '';
      
      data.phones.forEach(phone => {
        const item = document.createElement('div');
        item.className = 'phone-item';
        item.setAttribute('aria-label', phone.label);
        
        const iconClass = getPhoneIconClass(phone.label);
        const innerClass = getPhoneInnerClass(phone.label);
        
        item.innerHTML = `
          <div class="icon-outer" aria-hidden="true">
            <div class="icon-inner ${innerClass}">
              <i class="fa-solid ${iconClass}"></i>
            </div>
          </div>
          <div class="num">
            <a href="tel:${phone.tel}" style="color:inherit;">${phone.value}</a>
          </div>
        `;
        
        phonesContainer.appendChild(item);
      });
    }

    // Populate misc info
    const miscContainer = document.getElementById('footer-misc');
    if (miscContainer && data.misc) {
      miscContainer.innerHTML = '';
      
      data.misc.forEach(item => {
        const row = document.createElement('div');
        row.className = 'misc-row';
        row.innerHTML = `
          <div class="icon-outer" aria-hidden="true">
            <div class="icon-inner globe">
              <i class="${item.icon}"></i>
            </div>
          </div>
          <div class="text">${item.html}</div>
        `;
        
        miscContainer.appendChild(row);
      });
    }
  }

  function getPhoneIconClass(label) {
    if (/fax/i.test(label) || /فاكس/i.test(label)) return 'fa-fax';
    if (/mobile/i.test(label) || /موبايل/i.test(label)) return 'fa-mobile-screen-button';
    return 'fa-phone';
  }

  function getPhoneInnerClass(label) {
    if (/fax/i.test(label) || /فاكس/i.test(label)) return 'fax';
    if (/mobile/i.test(label) || /موبايل/i.test(label)) return 'mobile';
    return 'phone';
  }

  // ===== Utility Functions =====
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // ===== Initialization =====
  function init() {
    // Load header and footer
    loadHeader();
    loadFooter();

    // Add global accessibility improvements
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('user-tabbed');
      }
    });

    // Add smooth scrolling for anchor links
    document.addEventListener('click', (e) => {
      if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

    // Initialize brand animations if on brands page
    if (window.location.pathname.includes('brands')) {
      initializeBrandAnimations();
    }
  }

  function initializeBrandAnimations() {
    const items = Array.from(document.querySelectorAll('.brand-item'));
    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseFloat(el.getAttribute('style')?.match(/--delay:\s*([\d.]+)s/)?.[1] || '0');
          el.style.animationDelay = delay + 's';
          el.classList.add('visible');
          observer.unobserve(el);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    items.forEach(item => observer.observe(item));
  }

  // ===== Auto-start =====
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose utilities globally for debugging
  window.WafaUtils = {
    detectPageLanguage,
    isContactPage,
    CONFIG
  };

})();