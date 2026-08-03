// QuickBite AI - Interactive AI Widgets & Tools Engine

let isSoundEnabled = false;

// Audio Synthesizer via Web Audio API (Zero external mp3 files needed)
export function playSound(type = 'click') {
  if (!isSoundEnabled) return;
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } else if (type === 'success') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.12);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.12);
    }
  } catch (e) {
    console.error('AudioContext error:', e);
  }
}

export function toggleSoundState() {
  isSoundEnabled = !isSoundEnabled;
  const btn = document.getElementById('sound-toggle-btn');
  if (btn) {
    btn.innerText = isSoundEnabled ? '🔊 Sound: ON' : '🔇 Sound: OFF';
    btn.classList.toggle('text-brand-orange', isSoundEnabled);
  }
  showToast(isSoundEnabled ? 'Audio sound FX enabled!' : 'Audio muted');
}

// Toast Notification System
export function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-6 right-6 z-[10000] flex flex-col gap-3 pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `pointer-events-auto flex items-center gap-3 px-5 py-4 rounded-xl glass-panel border border-brand-orange/40 text-white shadow-2xl transition-all duration-300 transform translate-y-4 opacity-0`;
  
  const icon = type === 'success' ? '✨' : '⚡';
  toast.innerHTML = `
    <span class="text-xl">${icon}</span>
    <span class="font-medium text-sm text-gray-100">${message}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Interactive AI Food Recommender Widget Controller
export function initAiRecommender() {
  const form = document.getElementById('ai-recommender-form');
  const resultCard = document.getElementById('ai-recommender-result');

  if (!form || !resultCard) return;

  const mockRecommendations = {
    coding: {
      dish: "Neural Cyber Ramen & Spicy Salmon Gyoza",
      restaurant: "Ramen X-Lab",
      calories: "680 kcal",
      protein: "42g Protein",
      eta: "11 Mins",
      matchScore: "99.8%",
      desc: "Rich tonkotsu broth infused with black garlic, high omega-3 wild salmon, and brain-boosting L-theanine micro-toppings.",
      price: "$18.50"
    },
    gym: {
      dish: "Anabolic Grass-Fed Steak & Quinoa Power Bowl",
      restaurant: "Macro Craft Kitchen",
      calories: "750 kcal",
      protein: "65g Protein",
      eta: "13 Mins",
      matchScore: "99.4%",
      desc: "Seared tenderloin steak, avocado, roasted sweet potato, white quinoa, and cold-pressed extra virgin olive oil drizzle.",
      price: "$21.00"
    },
    comfort: {
      dish: "Artisanal Double Truffle Smash Burger & Loaded Fries",
      restaurant: "Smash & Co.",
      calories: "890 kcal",
      protein: "38g Protein",
      eta: "12 Mins",
      matchScore: "98.9%",
      desc: "Aged Angus beef smashed on cast iron, black truffle aioli, melted aged cheddar on toasted brioche.",
      price: "$16.90"
    },
    vegan: {
      dish: "Superfood Acai & Dragonfruit Crunch Bowl",
      restaurant: "Green Engine Bio-Kitchen",
      calories: "450 kcal",
      protein: "18g Protein",
      eta: "9 Mins",
      matchScore: "99.2%",
      desc: "Organic acai pulp, chia seed pudding, cacao nibs, toasted coconut flakes, and fresh blueberry drizzle.",
      price: "$14.50"
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    playSound('click');

    const mood = document.getElementById('ai-mood-select').value;
    const rec = mockRecommendations[mood] || mockRecommendations.coding;

    // Show loading skeleton first
    resultCard.innerHTML = `
      <div class="p-6 rounded-2xl glass-panel skeleton h-64 flex flex-col justify-between">
        <div class="h-6 w-1/3 bg-gray-700/50 rounded"></div>
        <div class="h-4 w-2/3 bg-gray-700/50 rounded"></div>
        <div class="h-10 w-full bg-gray-700/50 rounded"></div>
      </div>
    `;

    setTimeout(() => {
      playSound('success');
      resultCard.innerHTML = `
        <div class="p-6 rounded-2xl glass-panel border border-brand-orange/40 bg-brand-dark/90 shadow-2xl relative overflow-hidden transition-all animate-float">
          <div class="absolute top-0 right-0 bg-gradient-to-l from-brand-orange to-brand-peach text-white text-xs font-bold px-4 py-1 rounded-bl-xl shadow-lg">
            ${rec.matchScore} AI Craving Match
          </div>
          <div class="flex items-center gap-3 text-xs text-brand-peach uppercase tracking-widest font-semibold mb-2">
            <span>⚡ AI Recommendation Generated</span>
            <span>•</span>
            <span>${rec.restaurant}</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">${rec.dish}</h3>
          <p class="text-sm text-gray-300 mb-4 leading-relaxed">${rec.desc}</p>
          
          <div class="grid grid-cols-3 gap-3 mb-5 p-3 rounded-xl bg-white/5 border border-white/10 text-center text-xs">
            <div>
              <span class="block text-gray-400">Calories</span>
              <span class="font-bold text-brand-orange">${rec.calories}</span>
            </div>
            <div>
              <span class="block text-gray-400">Protein</span>
              <span class="font-bold text-brand-peach">${rec.protein}</span>
            </div>
            <div>
              <span class="block text-gray-400">Drone ETA</span>
              <span class="font-bold text-green-400">${rec.eta}</span>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-2xl font-bold text-white">${rec.price}</span>
            <button onclick="window.triggerOrderModal('${rec.dish}', '${rec.price}')" class="btn-glow-orange btn-ripple px-5 py-2.5 rounded-xl font-semibold text-sm text-white flex items-center gap-2">
              <span>Order Now</span>
              <span>🚀</span>
            </button>
          </div>
        </div>
      `;
    }, 600);
  });
}

// Live Autonomous Delivery Simulator Engine
export function initDeliverySimulator() {
  const container = document.getElementById('live-map-sim');
  if (!container) return;

  let progress = 0;
  const etaElem = document.getElementById('sim-eta');
  const tempElem = document.getElementById('sim-temp');
  const distanceElem = document.getElementById('sim-distance');
  const progressLine = document.getElementById('sim-progress-line');
  const droneMarker = document.getElementById('sim-drone-marker');
  const logConsole = document.getElementById('sim-log-console');

  const logs = [
    "00:01 - AI Kitchen received order #QB-9082",
    "00:03 - Autonomous Chef Station preparing ingredients",
    "00:05 - Thermal packaging sealed at 76.5°C",
    "00:08 - Drone QB-Alpha-7 dispatched from Dark Hub #04",
    "00:10 - Sky Corridor cleared by Urban Traffic AI",
    "00:12 - Approaching customer rooftop dropzone",
    "00:14 - Precision landing winch lowering thermal capsule",
    "00:15 - Order Delivered successfully! 🚀"
  ];

  setInterval(() => {
    progress = (progress + 1.2) % 100;
    
    if (progressLine) progressLine.style.width = `${progress}%`;
    if (droneMarker) droneMarker.style.left = `${progress}%`;

    const remainingMins = Math.max(1, Math.ceil(15 - (progress / 100) * 14));
    const remainingKm = Math.max(0.1, (2.4 - (progress / 100) * 2.3)).toFixed(1);
    
    if (etaElem) etaElem.innerText = `${remainingMins} mins`;
    if (distanceElem) distanceElem.innerText = `${remainingKm} km`;
    if (tempElem) tempElem.innerText = `${(75.5 + Math.sin(progress) * 0.8).toFixed(1)}°C`;

    const logIndex = Math.min(logs.length - 1, Math.floor((progress / 100) * logs.length));
    if (logConsole && logs[logIndex]) {
      logConsole.innerText = `SYS TELEMETRY: ${logs[logIndex]}`;
    }
  }, 300);
}

// AI Nutrition Photo Analyzer Modal Handler
export function initNutritionAnalyzer() {
  window.openNutritionModal = function (dishName = 'Gourmet Steak Bowl') {
    playSound('click');
    const modal = document.getElementById('nutrition-modal');
    if (!modal) return;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    const titleElem = document.getElementById('nutrition-modal-title');
    if (titleElem) titleElem.innerText = dishName;
  };

  window.closeNutritionModal = function () {
    const modal = document.getElementById('nutrition-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  };
}

// Quick Order Modal Handler
export function initOrderModal() {
  window.triggerOrderModal = function (itemName = 'AI Chef Selection', price = '$15.90') {
    playSound('click');
    showToast(`Added ${itemName} to QuickBite AI Instant Order!`, 'success');

    const modal = document.getElementById('order-modal');
    if (!modal) return;

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    const itemElem = document.getElementById('modal-order-item');
    const priceElem = document.getElementById('modal-order-price');

    if (itemElem) itemElem.innerText = itemName;
    if (priceElem) priceElem.innerText = price;
  };

  window.closeOrderModal = function () {
    const modal = document.getElementById('order-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  };

  window.confirmOrderPayment = function (e) {
    e.preventDefault();
    playSound('success');
    showToast('🚀 Order Placed! Autonomous Drone QB-88 dispatched.', 'success');
    window.closeOrderModal();
  };
}

// Interactive Live AI Chat Widget
export function initChatWidget() {
  const toggleBtn = document.getElementById('chat-widget-toggle');
  const chatDrawer = document.getElementById('chat-widget-drawer');
  const closeBtn = document.getElementById('chat-widget-close');
  const chatForm = document.getElementById('chat-widget-form');
  const chatMessages = document.getElementById('chat-widget-messages');

  if (!toggleBtn || !chatDrawer) return;

  toggleBtn.addEventListener('click', () => {
    playSound('click');
    chatDrawer.classList.toggle('hidden');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => chatDrawer.classList.add('hidden'));
  }

  const botResponses = [
    "Hello! I am QuickBite AI Assistant. I can track your active orders, suggest meals based on macros, or upgrade your membership!",
    "Your active order #QB-9082 is currently aboard Drone QB-Alpha-7. ETA is 6 minutes 14 seconds!",
    "QuickBite Pro members get $0 delivery fees, priority drone dispatch, and free macro photo scanning!",
    "I've tailored a custom meal plan for high productivity: Protein Ramen with omega-3 salmon!"
  ];

  if (chatForm && chatMessages) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('chat-widget-input');
      const text = input.value.trim();
      if (!text) return;

      playSound('click');

      // Add user message
      const userMsg = document.createElement('div');
      userMsg.className = 'self-end bg-brand-orange/30 border border-brand-orange/40 text-white text-xs px-3.5 py-2.5 rounded-2xl rounded-tr-none max-w-[85%] mb-2 shadow';
      userMsg.innerText = text;
      chatMessages.appendChild(userMsg);

      input.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;

      // Bot reply simulation
      setTimeout(() => {
        playSound('success');
        const botMsg = document.createElement('div');
        botMsg.className = 'self-start bg-white/10 border border-white/10 text-gray-200 text-xs px-3.5 py-2.5 rounded-2xl rounded-tl-none max-w-[85%] mb-2 shadow';
        botMsg.innerText = botResponses[Math.floor(Math.random() * botResponses.length)];
        chatMessages.appendChild(botMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 700);
    });
  }
}
