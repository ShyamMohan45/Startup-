// QuickBite AI - Main Application Bundle Entry

import {
  restaurantPartners,
  servicesData,
  aiFeaturesData,
  howItWorksSteps,
  whyChooseUsData,
  testimonialsData,
  pricingPlans,
  blogArticles,
  faqItems,
  jobPostings
} from './data.js';

import {
  initCursorGlow,
  initScrollProgress,
  initScrollReveal,
  initCounterAnimations,
  initTiltEffect,
  initRippleEffect,
  initHeroCanvas
} from './animations.js';

import {
  initAiRecommender,
  initDeliverySimulator,
  initNutritionAnalyzer,
  initOrderModal,
  initChatWidget,
  toggleSoundState,
  showToast,
  playSound
} from './ai-widgets.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('⚡ QuickBite AI Billion-Dollar Platform Initialized');

  // Initialize Core Animation Systems
  initCursorGlow();
  initScrollProgress();
  initScrollReveal();
  initCounterAnimations();
  initTiltEffect();
  initRippleEffect();
  initHeroCanvas();

  // Initialize Interactive AI Modules
  initAiRecommender();
  initDeliverySimulator();
  initNutritionAnalyzer();
  initOrderModal();
  initChatWidget();

  // Render Dynamic Data Components
  renderRestaurantMarquee();
  renderServices();
  renderAiFeatures();
  renderHowItWorks();
  renderWhyChooseUs();
  renderTestimonials();
  renderPricing();
  renderBlog();
  renderFaq();
  renderCareers();

  // Bind Navbar & Global Event Handlers
  bindNavHandlers();
  bindModalHandlers();
});

// Sound Toggle Button Handler
window.toggleSound = toggleSoundState;

// Render Restaurant Marquee
function renderRestaurantMarquee() {
  const container = document.getElementById('restaurant-marquee-track');
  if (!container) return;

  const html = restaurantPartners.map(p => `
    <div class="flex items-center gap-3 px-8 py-3 rounded-full glass-panel border border-white/10 hover:border-brand-orange/40 transition-all cursor-pointer group">
      <span class="text-2xl transform group-hover:scale-125 transition-transform">${p.icon}</span>
      <div>
        <span class="font-bold text-sm text-white group-hover:text-brand-orange transition-colors">${p.logoText}</span>
        <span class="text-[10px] text-gray-400 block">${p.category} • ⭐ ${p.rating}</span>
      </div>
    </div>
  `).join('');

  // Duplicate for smooth seamless loop
  container.innerHTML = html + html;
}

// Render Services Section Grid
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;

  const iconsMap = {
    'zap': '⚡',
    'shopping-bag': '🛍️',
    'chef-hat': '👨‍🍳',
    'briefcase': '💼',
    'calendar': '📅',
    'heart-pulse': '🥗',
    'moon': '🌙',
    'sparkles': '✨'
  };

  container.innerHTML = servicesData.map(s => `
    <div class="glow-card tilt-card p-6 rounded-2xl glass-panel relative flex flex-col justify-between group">
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-2xl text-brand-orange group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-lg">
            ${iconsMap[s.icon] || '🚀'}
          </div>
          <span class="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-brand-orange/20 text-brand-peach border border-brand-orange/30">
            ${s.tag}
          </span>
        </div>
        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">${s.title}</h3>
        <p class="text-sm text-gray-400 leading-relaxed mb-4">${s.desc}</p>
      </div>
      <button onclick="window.triggerOrderModal('${s.title}', '$12.00+')" class="text-xs font-bold text-brand-peach hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-all">
        <span>Explore Service</span>
        <span>→</span>
      </button>
    </div>
  `).join('');
}

// Render AI Features Grid
function renderAiFeatures() {
  const container = document.getElementById('features-grid');
  if (!container) return;

  const featureIcons = {
    'brain-circuit': '🧠',
    'map-pin': '📍',
    'navigation': '🛰️',
    'mic': '🎙️',
    'clock': '⏱️',
    'users': '👥',
    'refresh-cw': '🔄',
    'shield-check': '🔒',
    'activity': '📊'
  };

  container.innerHTML = aiFeaturesData.map((f, i) => `
    <div class="glow-card tilt-card p-6 rounded-2xl glass-panel border border-white/5 relative group hover:border-brand-orange/50 transition-all">
      <div class="flex items-start justify-between mb-3">
        <span class="text-3xl p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-brand-orange/20 transition-all">${featureIcons[f.icon] || '⚡'}</span>
        <span class="text-[10px] font-mono text-gray-400">0${i + 1} // SYS</span>
      </div>
      <h3 class="text-lg font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">${f.title}</h3>
      <p class="text-xs text-gray-400 leading-relaxed mb-4">${f.desc}</p>
      <div class="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold text-brand-peach">
        <span>${f.metric}</span>
        <span class="text-gray-500 group-hover:text-white transition-colors">ACTIVE</span>
      </div>
    </div>
  `).join('');
}

// Render How It Works Timeline
function renderHowItWorks() {
  const container = document.getElementById('how-it-works-timeline');
  if (!container) return;

  container.innerHTML = howItWorksSteps.map((step) => `
    <div class="relative flex flex-col items-center text-center group">
      <div class="w-16 h-16 rounded-2xl glass-panel border border-brand-orange/40 flex items-center justify-center text-2xl font-black text-brand-orange mb-4 shadow-xl group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
        ${step.step}
      </div>
      <h4 class="text-lg font-bold text-white mb-2">${step.title}</h4>
      <p class="text-xs text-gray-400 leading-relaxed max-w-xs">${step.desc}</p>
    </div>
  `).join('');
}

// Render Why Choose Us Split Grid
function renderWhyChooseUs() {
  const container = document.getElementById('why-choose-us-grid');
  if (!container) return;

  const icons = {
    'route': '🗺️',
    'timer': '⏱️',
    'thermometer': '🌡️',
    'check-circle': '🛡️',
    'headset': '🎧',
    'leaf': '🌿'
  };

  container.innerHTML = whyChooseUsData.map(w => `
    <div class="p-5 rounded-2xl glass-panel border border-white/10 flex items-start gap-4 hover:border-brand-orange/40 transition-all group">
      <div class="text-2xl p-3 rounded-xl bg-brand-orange/10 border border-brand-orange/30 text-brand-orange group-hover:scale-110 transition-transform">
        ${icons[w.icon] || '✨'}
      </div>
      <div>
        <h4 class="text-base font-bold text-white mb-1 group-hover:text-brand-orange transition-colors">${w.title}</h4>
        <p class="text-xs text-gray-400 leading-relaxed">${w.desc}</p>
      </div>
    </div>
  `).join('');
}

// Render Testimonials Carousel Cards
function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;

  container.innerHTML = testimonialsData.map(t => `
    <div class="glow-card p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-1 text-brand-orange mb-3">
          ${'⭐'.repeat(t.rating)}
        </div>
        <p class="text-sm text-gray-300 italic mb-6 leading-relaxed">"${t.review}"</p>
      </div>
      <div class="flex items-center gap-3 pt-4 border-t border-white/10">
        <img src="${t.avatar}" alt="${t.name}" class="w-11 h-11 rounded-full object-cover border-2 border-brand-orange/50 shadow" />
        <div>
          <h5 class="text-sm font-bold text-white">${t.name}</h5>
          <span class="text-xs text-gray-400 block">${t.role} • ${t.city}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Pricing Section & Billing Toggle
function renderPricing() {
  const container = document.getElementById('pricing-grid');
  const toggle = document.getElementById('pricing-billing-toggle');

  if (!container) return;

  let isAnnual = false;

  function updatePricingCards() {
    container.innerHTML = pricingPlans.map(plan => {
      const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
      return `
        <div class="glow-card p-8 rounded-3xl glass-panel relative flex flex-col justify-between ${plan.popular ? 'border-2 border-brand-orange shadow-2xl bg-brand-orange/5' : 'border border-white/10'}">
          ${plan.popular ? `<div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-orange to-brand-peach text-white text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">Most Popular</div>` : ''}
          <div>
            <h4 class="text-2xl font-bold text-white mb-2">${plan.name}</h4>
            <p class="text-xs text-gray-400 mb-6">${plan.desc}</p>
            <div class="flex items-baseline gap-1 mb-6">
              <span class="text-4xl font-extrabold text-white">${price}</span>
              <span class="text-xs text-gray-400">/${plan.period}</span>
            </div>
            <ul class="space-y-3 mb-8 text-xs text-gray-300">
              ${plan.features.map(f => `
                <li class="flex items-center gap-2">
                  <span class="text-brand-orange font-bold">✓</span>
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>
          </div>
          <button onclick="window.triggerOrderModal('${plan.name} Plan Registration', '${price}')" class="${plan.popular ? 'btn-glow-orange text-white' : 'glass-panel text-white hover:border-brand-orange'} w-full py-3.5 rounded-xl font-bold text-sm text-center btn-ripple transition-all">
            ${plan.cta}
          </button>
        </div>
      `;
    }).join('');
  }

  updatePricingCards();

  if (toggle) {
    toggle.addEventListener('change', (e) => {
      isAnnual = e.target.checked;
      playSound('click');
      updatePricingCards();
    });
  }
}

// Render Blog Articles Grid
function renderBlog() {
  const container = document.getElementById('blog-grid');
  if (!container) return;

  container.innerHTML = blogArticles.map(article => `
    <article class="glow-card rounded-2xl glass-panel overflow-hidden border border-white/10 group cursor-pointer" onclick="window.openArticleModal(${article.id})">
      <div class="relative h-48 overflow-hidden">
        <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div class="absolute top-3 left-3 bg-brand-dark/80 backdrop-blur text-brand-peach text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
          ${article.category}
        </div>
      </div>
      <div class="p-6">
        <div class="flex items-center justify-between text-[11px] text-gray-400 mb-2">
          <span>${article.date}</span>
          <span>${article.readTime}</span>
        </div>
        <h4 class="text-lg font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">${article.title}</h4>
        <p class="text-xs text-gray-400 line-clamp-2 leading-relaxed">${article.snippet}</p>
      </div>
    </article>
  `).join('');

  window.openArticleModal = function (articleId) {
    playSound('click');
    const article = blogArticles.find(a => a.id === articleId);
    if (!article) return;

    showToast(`Opening article: "${article.title}"`, 'info');
  };
}

// Render FAQ Accordion
function renderFaq() {
  const container = document.getElementById('faq-accordion');
  if (!container) return;

  container.innerHTML = faqItems.map((faq, index) => `
    <div class="rounded-2xl glass-panel border border-white/10 overflow-hidden transition-all">
      <button onclick="window.toggleFaq(${index})" class="w-full p-5 text-left flex items-center justify-between text-white font-bold text-base hover:text-brand-orange transition-colors">
        <span>${faq.question}</span>
        <span id="faq-icon-${index}" class="text-xl transform transition-transform text-brand-orange">+</span>
      </button>
      <div id="faq-ans-${index}" class="hidden p-5 pt-0 text-xs text-gray-400 leading-relaxed border-t border-white/5">
        ${faq.answer}
      </div>
    </div>
  `).join('');

  window.toggleFaq = function (index) {
    playSound('click');
    const ans = document.getElementById(`faq-ans-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);

    if (ans && icon) {
      const isHidden = ans.classList.contains('hidden');
      ans.classList.toggle('hidden');
      icon.innerText = isHidden ? '−' : '+';
      icon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
    }
  };
}

// Render Careers Board
function renderCareers() {
  const container = document.getElementById('careers-list');
  if (!container) return;

  container.innerHTML = jobPostings.map(job => `
    <div class="p-5 rounded-2xl glass-panel border border-white/10 flex items-center justify-between hover:border-brand-orange/40 transition-all group">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="text-[10px] uppercase font-bold text-brand-peach bg-brand-orange/20 px-2.5 py-0.5 rounded-md border border-brand-orange/30">${job.team}</span>
          <span class="text-[10px] text-gray-400">${job.type}</span>
        </div>
        <h5 class="text-base font-bold text-white group-hover:text-brand-orange transition-colors">${job.title}</h5>
        <span class="text-xs text-gray-400">${job.location}</span>
      </div>
      <button onclick="window.applyJob('${job.title}')" class="px-4 py-2 rounded-xl text-xs font-bold bg-white/10 text-white hover:bg-brand-orange hover:text-white transition-all btn-ripple">
        Apply Now
      </button>
    </div>
  `).join('');

  window.applyJob = function (jobTitle) {
    playSound('click');
    showToast(`Application started for: ${jobTitle}`, 'success');
  };
}

// Bind Global Navbar Navigation & Sticky Scroll Effect
function bindNavHandlers() {
  const navbar = document.getElementById('main-navbar');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('glass-nav', 'py-3');
      navbar?.classList.remove('py-5');
    } else {
      navbar?.classList.remove('glass-nav');
      navbar?.classList.add('py-5');
    }
  });

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      playSound('click');
      mobileMenu.classList.toggle('hidden');
    });
  }
}

// Bind Modal Handlers & Contact Form
function bindModalHandlers() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      playSound('success');
      showToast('✨ Thank you! Your message has been routed to QuickBite AI Concierge.', 'success');
      contactForm.reset();
    });
  }

  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      playSound('success');
      showToast('🎉 Subscribed to QuickBite AI Insider Newsletter!', 'success');
      newsletterForm.reset();
    });
  }
}
