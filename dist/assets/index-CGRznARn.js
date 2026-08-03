(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const f=[{name:"Burger King",category:"Fast Food",rating:"4.8",icon:"🍔",logoText:"BURGER KING"},{name:"Domino's Pizza",category:"Pizza & Italian",rating:"4.9",icon:"🍕",logoText:"DOMINO'S"},{name:"Subway",category:"Healthy & Subs",rating:"4.7",icon:"🥪",logoText:"SUBWAY"},{name:"McDonald's",category:"Burgers & Fries",rating:"4.8",icon:"🍟",logoText:"MCDONALD'S"},{name:"KFC",category:"Crispy Chicken",rating:"4.8",icon:"🍗",logoText:"KFC"},{name:"Pizza Hut",category:"Pan Pizza",rating:"4.7",icon:"🍕",logoText:"PIZZA HUT"},{name:"Taco Bell",category:"Mexican & Tacos",rating:"4.8",icon:"🌮",logoText:"TACO BELL"}],b=[{id:"food-delivery",title:"AI Ultra Delivery",desc:"Hyper-optimized food routing delivering gourmet meals in 15 minutes flat using autonomous AI dispatchers.",icon:"zap",tag:"Sub-15 Min"},{id:"instant-grocery",title:"Instant Grocery",desc:"10,000+ dark store items delivered within 10 minutes. Organic produce, dairy, and daily essentials.",icon:"shopping-bag",tag:"10 Min Darkstore"},{id:"cloud-kitchen",title:"Cloud Kitchen Incubator",desc:"AI demand forecasting powered kitchens producing fresh, chef-curated meals directly for delivery.",icon:"chef-hat",tag:"Exclusive Brands"},{id:"corporate-catering",title:"Corporate AI Catering",desc:"Automated group food ordering for tech startups & enterprise teams with individual dietary AI customization.",icon:"briefcase",tag:"B2B Solutions"},{id:"meal-subscription",title:"Smart Meal Subscription",desc:"Personalized daily meal plans cooked by expert nutritionists and delivered based on your biometric schedule.",icon:"calendar",tag:"Auto-Pilot"},{id:"healthy-food-plans",title:"Biometric Healthy Plans",desc:"Macro-tracked meal boxes customized to fit Keto, Vegan, Paleo, or high-protein fitness goals.",icon:"heart-pulse",tag:"Macro Tracked"},{id:"late-night-delivery",title:"24/7 Night Owl Express",desc:"All-night delivery service serving late-night coders, gamers, and party hosts with zero surge fees.",icon:"moon",tag:"24x7 Active"},{id:"event-catering",title:"VIP Event Catering",desc:"On-demand live pop-up kitchens and mobile AI food stations for luxury events, parties, and launches.",icon:"sparkles",tag:"Concierge Level"}],x=[{title:"AI Food Recommendation Engine",desc:"Analyses your historical cravings, local weather, biological clock, and biometric targets to recommend the exact dish you desire.",icon:"brain-circuit",metric:"99.4% Craving Match Rate"},{title:"Predictive Real-time Tracking",desc:"Sub-second GPS telemetry and machine learning prediction model showing exact kitchen cook time and courier location.",icon:"map-pin",metric:"Millisecond GPS Precision"},{title:"Live Autonomous Map Navigation",desc:"Autonomous drone and e-bike fleet connected via cloud telemetry for obstacle-free ultra-fast delivery routes.",icon:"navigation",metric:"35% Faster Route Times"},{title:"Conversational Voice Ordering",desc:"Order your favorite pizza or custom bowl in under 5 seconds using natural voice prompts or AI Assistant commands.",icon:"mic",metric:"< 3 Sec Voice Order"},{title:"Scheduled Smart Deliveries",desc:"Set recurring delivery slots for breakfasts, office lunches, or workout meals with automated AI kitchen queuing.",icon:"clock",metric:"0 Min Delay Guarantee"},{title:"AI Group Meal Splitter",desc:"Host group dinners effortlessly. QuickBite AI splits bills, accommodates dietary restrictions, and combines orders.",icon:"users",metric:"Instant Split Pay"},{title:"1-Click AI Reordering",desc:"Intelligent quick reorder widget that auto-customizes your frequent orders based on current restaurant offers.",icon:"refresh-cw",metric:"One Click Fast Checkout"},{title:"Biometric Cashless Payment",desc:"Instant biometrics, Apple Pay, Google Pay, and web3 crypto payments with zero-friction encrypted security.",icon:"shield-check",metric:"100% Encrypted"},{title:"AI Micronutrient Analyzer",desc:"Scan any meal photo or dish to instantly see calories, protein breakdown, allergens, and micronutrient scores.",icon:"activity",metric:"Realtime Macro Scanner"}],y=[{step:"01",title:"Smart Restaurant & Dish Selection",desc:"Browse 5000+ top-rated restaurants or let QuickBite AI suggest meals tailored to your mood, diet, and budget.",icon:"search"},{step:"02",title:"AI Craving & Macro Optimization",desc:"Our neural net optimizes ingredients, checks for allergens, and pairs your meal with live instant discount coupons.",icon:"cpu"},{step:"03",title:"Autonomous Fleet Dispatch",desc:"The kitchen receives exact timing triggers while an electric bike or drone is pre-dispatched to minimize idle wait time.",icon:"send"},{step:"04",title:"Sub-Second Live Map Telemetry",desc:"Track your food live with 3D map rendering, real-time temperature telemetry, and live camera feed option.",icon:"map"},{step:"05",title:"Hot & Fresh Instant Enjoyment",desc:"Receive piping hot gourmet food at your doorstep in under 15 minutes with eco-friendly zero-waste packaging.",icon:"smile"}],v=[{title:"Neural Network Routing",desc:"Bypasses city traffic bottlenecks with real-time dynamic traffic rerouting models.",icon:"route"},{title:"Guaranteed Lowest Delivery Time",desc:"Average delivery time of 14.2 minutes across top tier metro cities.",icon:"timer"},{title:"Thermal Sealed Freshness",desc:"Smart temperature-controlled delivery boxes keep hot meals at 75°C and frozen desserts at -5°C.",icon:"thermometer"},{title:"100% Verified Clean Kitchens",desc:"Every partner restaurant undergoes 45-point hygienic audits with live kitchen camera streams.",icon:"check-circle"},{title:"24/7 AI Concierge Support",desc:"Zero waiting human-level AI customer service resolves order issues in under 10 seconds.",icon:"headset"},{title:"100% Biodegradable Eco Packaging",desc:"Zero single-use plastic. Plant-based compostable food containers and cutlery.",icon:"leaf"}],w=[{name:"Alex Rivera",role:"Senior Staff Engineer, Linear",review:"QuickBite AI completely ruined regular food delivery apps for me. Getting hot sushi delivered in 12 minutes during a late-night coding sprint feels like magic!",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",rating:5,city:"San Francisco"},{name:"Elena Rostova",role:"Product Designer, Airbnb",review:"The UI design and fluid live map animations are incredible. The AI nutrition analyzer has been a game changer for maintaining my fitness macros effortlessly.",avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",rating:5,city:"New York"},{name:"Marcus Vance",role:"Founder, TechScale Labs",review:"We use QuickBite Corporate Catering for our entire 120-person team lunch every day. Individual dietary restrictions are handled automatically by their AI model.",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",rating:5,city:"Austin"}],I=[{name:"Basic",priceMonthly:"$0",priceAnnual:"$0",period:"forever free",desc:"Standard ultra-fast delivery with AI recommendations.",features:["Standard AI Dish Recommendations","Live Order Telemetry Tracking","Standard Delivery Speeds (25 min)","Standard Customer Support","Standard Payment Gateways"],cta:"Get Started Free",popular:!1},{name:"QuickBite Pro",priceMonthly:"$9.99",priceAnnual:"$7.99",period:"per month",desc:"For foodies who want zero delivery fees & priority AI dispatch.",features:["Unlimited $0 Delivery Fees on All Orders","Sub-15 Minute Priority Autonomous Dispatch","AI Micronutrient & Macro Photo Scanner","10% Instant Cashback on Darkstore Grocery","24/7 Priority VIP AI Concierge Support","Exclusive Secret Menu Access"],cta:"Start 14-Day Free Trial",popular:!0},{name:"QuickBite VIP / Family",priceMonthly:"$19.99",priceAnnual:"$15.99",period:"per month",desc:"Ultimate group & family perks with personalized nutritionist AI.",features:["Everything in Pro Tier for up to 5 Accounts","Personalized AI Nutritionist & Meal Planner","Exclusive Chef Pop-Up Table Reservations","Zero Surge Pricing Guaranteed Forever","Dedicated Drone Emergency Fast-Track","Annual $100 Grocery Credit Voucher"],cta:"Join VIP Membership",popular:!1}],h=[{id:1,title:"How Neural Networks Reduced Urban Delivery Times by 42%",category:"AI & Tech",date:"Aug 02, 2026",readTime:"4 min read",snippet:"Discover how QuickBite AI processes millions of traffic telemetry data points per second to predict delivery friction before it happens.",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600"},{id:2,title:"The Rise of Zero-Emission Drone Delivery in Dense Metropolises",category:"Logistics",date:"Jul 28, 2026",readTime:"5 min read",snippet:"Exploring how quiet autonomous drones deliver hot gourmet dishes directly to city rooftop pads and balcony drop zones.",image:"https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=600"},{id:3,title:"Precision Nutrition: Meal Planning Powered by Biometric AI",category:"Health & Wellness",date:"Jul 20, 2026",readTime:"6 min read",snippet:"Why static calorie counting is dead. How AI macro scanners tailor meals to your daily blood glucose and workout strain.",image:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=600"}],k=[{question:"How does QuickBite AI achieve 15-minute food delivery?",answer:"We combine predictive AI kitchen queueing with neighborhood dark fulfillment hubs and electric bike/drone fleets. Our algorithms pre-assign couriers before your food finishes cooking."},{question:"What is the AI Micronutrient Scanner?",answer:"Our built-in computer vision scanner lets you snap a picture of any meal. In under 2 seconds, it calculates total calories, protein, fat, carbohydrates, and allergen indicators."},{question:"Are there any surge pricing fees during rain or rush hour?",answer:"QuickBite Pro & VIP members enjoy zero surge pricing guaranteed. For standard users, our AI routing prevents extreme surge spikes through dynamic load balancing."},{question:"How does Corporate AI Catering work for teams?",answer:"Companies set budget allowances per employee. Our AI sends automated order prompts, gathers dietary preferences, consolidates the office delivery into a single eco-friendly batch, and issues one itemized monthly invoice."},{question:"Is QuickBite packaging eco-friendly?",answer:"100%! All meals are packaged in zero-plastic, plant-based cassava compostable containers with insulated thermal linings that biodegrade naturally within 90 days."}],A=[{title:"Senior AI Logistics Research Engineer",team:"AI & ML",location:"San Francisco / Remote",type:"Full-Time"},{title:"Staff Full-Stack Engineer (Node/React/Rust)",team:"Platform",location:"New York / Remote",type:"Full-Time"},{title:"Lead Product Designer - Mobile Experience",team:"Design",location:"London / Remote",type:"Full-Time"},{title:"Director of Autonomous Fleet Operations",team:"Operations",location:"Austin, TX",type:"Full-Time"}];function E(){const t=document.getElementById("cursor-glow");t&&window.addEventListener("mousemove",e=>{t.style.left=`${e.clientX}px`,t.style.top=`${e.clientY}px`})}function T(){const t=document.getElementById("scroll-progress");t&&window.addEventListener("scroll",()=>{const e=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.scrollHeight-document.documentElement.clientHeight,o=e/n*100;t.style.width=`${o}%`})}function $(){const t=document.querySelectorAll(".reveal"),e=new IntersectionObserver(n=>{n.forEach(o=>{o.isIntersecting&&o.target.classList.add("active")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});t.forEach(n=>e.observe(n))}function B(){const t=document.querySelectorAll(".stat-counter"),e=new IntersectionObserver((n,o)=>{n.forEach(r=>{if(r.isIntersecting){const i=r.target,a=parseInt(i.getAttribute("data-target"),10),s=i.getAttribute("data-suffix")||"";let c=0;const u=Math.ceil(a/(2e3/16)),p=setInterval(()=>{c+=u,c>=a&&(c=a,clearInterval(p)),i.innerText=`${c.toLocaleString()}${s}`},16);o.unobserve(i)}})},{threshold:.5});t.forEach(n=>e.observe(n))}function M(){document.querySelectorAll(".tilt-card").forEach(e=>{e.addEventListener("mousemove",n=>{const o=e.getBoundingClientRect(),r=n.clientX-o.left,i=n.clientY-o.top,a=o.width/2,s=o.height/2,c=(i-s)/s*-8,d=(r-a)/a*8;e.style.transform=`perspective(1000px) rotateX(${c}deg) rotateY(${d}deg) scale3d(1.02, 1.02, 1.02)`}),e.addEventListener("mouseleave",()=>{e.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"})})}function S(){document.querySelectorAll(".btn-ripple").forEach(t=>{t.addEventListener("click",function(e){const n=this.getBoundingClientRect(),o=document.createElement("span"),r=Math.max(n.width,n.height),i=r/2;o.style.width=o.style.height=`${r}px`,o.style.left=`${e.clientX-n.left-i}px`,o.style.top=`${e.clientY-n.top-i}px`,o.classList.add("ripple");const a=this.querySelector(".ripple");a&&a.remove(),this.appendChild(o)})})}function L(){const t=document.getElementById("hero-canvas");if(!t)return;const e=t.getContext("2d");let n=t.width=t.parentElement.offsetWidth,o=t.height=t.parentElement.offsetHeight;window.addEventListener("resize",()=>{t.parentElement&&(n=t.width=t.parentElement.offsetWidth,o=t.height=t.parentElement.offsetHeight)});const r=Array.from({length:45},()=>({x:Math.random()*n,y:Math.random()*o,radius:Math.random()*2+1,color:Math.random()>.5?"#FF6B00":"#FF914D",vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,alpha:Math.random()*.5+.2}));function i(){e.clearRect(0,0,n,o),r.forEach(a=>{a.x+=a.vx,a.y+=a.vy,(a.x<0||a.x>n)&&(a.vx*=-1),(a.y<0||a.y>o)&&(a.vy*=-1),e.beginPath(),e.arc(a.x,a.y,a.radius,0,Math.PI*2),e.fillStyle=a.color,e.globalAlpha=a.alpha,e.fill()});for(let a=0;a<r.length;a++)for(let s=a+1;s<r.length;s++){const c=r[a].x-r[s].x,d=r[a].y-r[s].y,u=Math.sqrt(c*c+d*d);u<120&&(e.beginPath(),e.moveTo(r[a].x,r[a].y),e.lineTo(r[s].x,r[s].y),e.strokeStyle="#FF6B00",e.globalAlpha=(1-u/120)*.15,e.lineWidth=.5,e.stroke())}requestAnimationFrame(i)}i()}let g=!1;function l(t="click"){if(g)try{const e=new(window.AudioContext||window.webkitAudioContext),n=e.createOscillator(),o=e.createGain();n.connect(o),o.connect(e.destination),t==="click"?(n.type="sine",n.frequency.setValueAtTime(600,e.currentTime),n.frequency.exponentialRampToValueAtTime(1200,e.currentTime+.05),o.gain.setValueAtTime(.15,e.currentTime),o.gain.exponentialRampToValueAtTime(.01,e.currentTime+.05),n.start(),n.stop(e.currentTime+.05)):t==="success"&&(n.type="triangle",n.frequency.setValueAtTime(440,e.currentTime),n.frequency.exponentialRampToValueAtTime(880,e.currentTime+.12),o.gain.setValueAtTime(.2,e.currentTime),o.gain.exponentialRampToValueAtTime(.01,e.currentTime+.12),n.start(),n.stop(e.currentTime+.12))}catch(e){console.error("AudioContext error:",e)}}function C(){g=!g;const t=document.getElementById("sound-toggle-btn");t&&(t.innerText=g?"🔊 Sound: ON":"🔇 Sound: OFF",t.classList.toggle("text-brand-orange",g)),m(g?"Audio sound FX enabled!":"Audio muted")}function m(t,e="info"){let n=document.getElementById("toast-container");n||(n=document.createElement("div"),n.id="toast-container",n.className="fixed bottom-6 right-6 z-[10000] flex flex-col gap-3 pointer-events-none",document.body.appendChild(n));const o=document.createElement("div");o.className="pointer-events-auto flex items-center gap-3 px-5 py-4 rounded-xl glass-panel border border-brand-orange/40 text-white shadow-2xl transition-all duration-300 transform translate-y-4 opacity-0";const r=e==="success"?"✨":"⚡";o.innerHTML=`
    <span class="text-xl">${r}</span>
    <span class="font-medium text-sm text-gray-100">${t}</span>
  `,n.appendChild(o),requestAnimationFrame(()=>{o.classList.remove("translate-y-4","opacity-0")}),setTimeout(()=>{o.classList.add("translate-y-4","opacity-0"),setTimeout(()=>o.remove(),300)},3500)}function P(){const t=document.getElementById("ai-recommender-form"),e=document.getElementById("ai-recommender-result");if(!t||!e)return;const n={coding:{dish:"Neural Cyber Ramen & Spicy Salmon Gyoza",restaurant:"Ramen X-Lab",calories:"680 kcal",protein:"42g Protein",eta:"11 Mins",matchScore:"99.8%",desc:"Rich tonkotsu broth infused with black garlic, high omega-3 wild salmon, and brain-boosting L-theanine micro-toppings.",price:"$18.50"},gym:{dish:"Anabolic Grass-Fed Steak & Quinoa Power Bowl",restaurant:"Macro Craft Kitchen",calories:"750 kcal",protein:"65g Protein",eta:"13 Mins",matchScore:"99.4%",desc:"Seared tenderloin steak, avocado, roasted sweet potato, white quinoa, and cold-pressed extra virgin olive oil drizzle.",price:"$21.00"},comfort:{dish:"Artisanal Double Truffle Smash Burger & Loaded Fries",restaurant:"Smash & Co.",calories:"890 kcal",protein:"38g Protein",eta:"12 Mins",matchScore:"98.9%",desc:"Aged Angus beef smashed on cast iron, black truffle aioli, melted aged cheddar on toasted brioche.",price:"$16.90"},vegan:{dish:"Superfood Acai & Dragonfruit Crunch Bowl",restaurant:"Green Engine Bio-Kitchen",calories:"450 kcal",protein:"18g Protein",eta:"9 Mins",matchScore:"99.2%",desc:"Organic acai pulp, chia seed pudding, cacao nibs, toasted coconut flakes, and fresh blueberry drizzle.",price:"$14.50"}};t.addEventListener("submit",o=>{o.preventDefault(),l("click");const r=document.getElementById("ai-mood-select").value,i=n[r]||n.coding;e.innerHTML=`
      <div class="p-6 rounded-2xl glass-panel skeleton h-64 flex flex-col justify-between">
        <div class="h-6 w-1/3 bg-gray-700/50 rounded"></div>
        <div class="h-4 w-2/3 bg-gray-700/50 rounded"></div>
        <div class="h-10 w-full bg-gray-700/50 rounded"></div>
      </div>
    `,setTimeout(()=>{l("success"),e.innerHTML=`
        <div class="p-6 rounded-2xl glass-panel border border-brand-orange/40 bg-brand-dark/90 shadow-2xl relative overflow-hidden transition-all animate-float">
          <div class="absolute top-0 right-0 bg-gradient-to-l from-brand-orange to-brand-peach text-white text-xs font-bold px-4 py-1 rounded-bl-xl shadow-lg">
            ${i.matchScore} AI Craving Match
          </div>
          <div class="flex items-center gap-3 text-xs text-brand-peach uppercase tracking-widest font-semibold mb-2">
            <span>⚡ AI Recommendation Generated</span>
            <span>•</span>
            <span>${i.restaurant}</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">${i.dish}</h3>
          <p class="text-sm text-gray-300 mb-4 leading-relaxed">${i.desc}</p>
          
          <div class="grid grid-cols-3 gap-3 mb-5 p-3 rounded-xl bg-white/5 border border-white/10 text-center text-xs">
            <div>
              <span class="block text-gray-400">Calories</span>
              <span class="font-bold text-brand-orange">${i.calories}</span>
            </div>
            <div>
              <span class="block text-gray-400">Protein</span>
              <span class="font-bold text-brand-peach">${i.protein}</span>
            </div>
            <div>
              <span class="block text-gray-400">Drone ETA</span>
              <span class="font-bold text-green-400">${i.eta}</span>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-2xl font-bold text-white">${i.price}</span>
            <button onclick="window.triggerOrderModal('${i.dish}', '${i.price}')" class="btn-glow-orange btn-ripple px-5 py-2.5 rounded-xl font-semibold text-sm text-white flex items-center gap-2">
              <span>Order Now</span>
              <span>🚀</span>
            </button>
          </div>
        </div>
      `},600)})}function D(){if(!document.getElementById("live-map-sim"))return;let e=0;const n=document.getElementById("sim-eta"),o=document.getElementById("sim-temp"),r=document.getElementById("sim-distance"),i=document.getElementById("sim-progress-line"),a=document.getElementById("sim-drone-marker"),s=document.getElementById("sim-log-console"),c=["00:01 - AI Kitchen received order #QB-9082","00:03 - Autonomous Chef Station preparing ingredients","00:05 - Thermal packaging sealed at 76.5°C","00:08 - Drone QB-Alpha-7 dispatched from Dark Hub #04","00:10 - Sky Corridor cleared by Urban Traffic AI","00:12 - Approaching customer rooftop dropzone","00:14 - Precision landing winch lowering thermal capsule","00:15 - Order Delivered successfully! 🚀"];setInterval(()=>{e=(e+1.2)%100,i&&(i.style.width=`${e}%`),a&&(a.style.left=`${e}%`);const d=Math.max(1,Math.ceil(15-e/100*14)),u=Math.max(.1,2.4-e/100*2.3).toFixed(1);n&&(n.innerText=`${d} mins`),r&&(r.innerText=`${u} km`),o&&(o.innerText=`${(75.5+Math.sin(e)*.8).toFixed(1)}°C`);const p=Math.min(c.length-1,Math.floor(e/100*c.length));s&&c[p]&&(s.innerText=`SYS TELEMETRY: ${c[p]}`)},300)}function F(){window.openNutritionModal=function(t="Gourmet Steak Bowl"){l("click");const e=document.getElementById("nutrition-modal");if(!e)return;e.classList.remove("hidden"),e.classList.add("flex");const n=document.getElementById("nutrition-modal-title");n&&(n.innerText=t)},window.closeNutritionModal=function(){const t=document.getElementById("nutrition-modal");t&&(t.classList.add("hidden"),t.classList.remove("flex"))}}function O(){window.triggerOrderModal=function(t="AI Chef Selection",e="$15.90"){l("click"),m(`Added ${t} to QuickBite AI Instant Order!`,"success");const n=document.getElementById("order-modal");if(!n)return;n.classList.remove("hidden"),n.classList.add("flex");const o=document.getElementById("modal-order-item"),r=document.getElementById("modal-order-price");o&&(o.innerText=t),r&&(r.innerText=e)},window.closeOrderModal=function(){const t=document.getElementById("order-modal");t&&(t.classList.add("hidden"),t.classList.remove("flex"))},window.confirmOrderPayment=function(t){t.preventDefault(),l("success"),m("🚀 Order Placed! Autonomous Drone QB-88 dispatched.","success"),window.closeOrderModal()}}function R(){const t=document.getElementById("chat-widget-toggle"),e=document.getElementById("chat-widget-drawer"),n=document.getElementById("chat-widget-close"),o=document.getElementById("chat-widget-form"),r=document.getElementById("chat-widget-messages");if(!t||!e)return;t.addEventListener("click",()=>{l("click"),e.classList.toggle("hidden")}),n&&n.addEventListener("click",()=>e.classList.add("hidden"));const i=["Hello! I am QuickBite AI Assistant. I can track your active orders, suggest meals based on macros, or upgrade your membership!","Your active order #QB-9082 is currently aboard Drone QB-Alpha-7. ETA is 6 minutes 14 seconds!","QuickBite Pro members get $0 delivery fees, priority drone dispatch, and free macro photo scanning!","I've tailored a custom meal plan for high productivity: Protein Ramen with omega-3 salmon!"];o&&r&&o.addEventListener("submit",a=>{a.preventDefault();const s=document.getElementById("chat-widget-input"),c=s.value.trim();if(!c)return;l("click");const d=document.createElement("div");d.className="self-end bg-brand-orange/30 border border-brand-orange/40 text-white text-xs px-3.5 py-2.5 rounded-2xl rounded-tr-none max-w-[85%] mb-2 shadow",d.innerText=c,r.appendChild(d),s.value="",r.scrollTop=r.scrollHeight,setTimeout(()=>{l("success");const u=document.createElement("div");u.className="self-start bg-white/10 border border-white/10 text-gray-200 text-xs px-3.5 py-2.5 rounded-2xl rounded-tl-none max-w-[85%] mb-2 shadow",u.innerText=i[Math.floor(Math.random()*i.length)],r.appendChild(u),r.scrollTop=r.scrollHeight},700)})}document.addEventListener("DOMContentLoaded",()=>{console.log("⚡ QuickBite AI Billion-Dollar Platform Initialized"),E(),T(),$(),B(),M(),S(),L(),P(),D(),F(),O(),R(),z(),q(),H(),N(),j(),G(),Q(),V(),Y(),W(),K(),U()});window.toggleSound=C;function z(){const t=document.getElementById("restaurant-marquee-track");if(!t)return;const e=f.map(n=>`
    <div class="flex items-center gap-3 px-8 py-3 rounded-full glass-panel border border-white/10 hover:border-brand-orange/40 transition-all cursor-pointer group">
      <span class="text-2xl transform group-hover:scale-125 transition-transform">${n.icon}</span>
      <div>
        <span class="font-bold text-sm text-white group-hover:text-brand-orange transition-colors">${n.logoText}</span>
        <span class="text-[10px] text-gray-400 block">${n.category} • ⭐ ${n.rating}</span>
      </div>
    </div>
  `).join("");t.innerHTML=e+e}function q(){const t=document.getElementById("services-grid");if(!t)return;const e={zap:"⚡","shopping-bag":"🛍️","chef-hat":"👨‍🍳",briefcase:"💼",calendar:"📅","heart-pulse":"🥗",moon:"🌙",sparkles:"✨"};t.innerHTML=b.map(n=>`
    <div class="glow-card tilt-card p-6 rounded-2xl glass-panel relative flex flex-col justify-between group">
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-2xl text-brand-orange group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-lg">
            ${e[n.icon]||"🚀"}
          </div>
          <span class="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-brand-orange/20 text-brand-peach border border-brand-orange/30">
            ${n.tag}
          </span>
        </div>
        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">${n.title}</h3>
        <p class="text-sm text-gray-400 leading-relaxed mb-4">${n.desc}</p>
      </div>
      <button onclick="window.triggerOrderModal('${n.title}', '$12.00+')" class="text-xs font-bold text-brand-peach hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-all">
        <span>Explore Service</span>
        <span>→</span>
      </button>
    </div>
  `).join("")}function H(){const t=document.getElementById("features-grid");if(!t)return;const e={"brain-circuit":"🧠","map-pin":"📍",navigation:"🛰️",mic:"🎙️",clock:"⏱️",users:"👥","refresh-cw":"🔄","shield-check":"🔒",activity:"📊"};t.innerHTML=x.map((n,o)=>`
    <div class="glow-card tilt-card p-6 rounded-2xl glass-panel border border-white/5 relative group hover:border-brand-orange/50 transition-all">
      <div class="flex items-start justify-between mb-3">
        <span class="text-3xl p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-brand-orange/20 transition-all">${e[n.icon]||"⚡"}</span>
        <span class="text-[10px] font-mono text-gray-400">0${o+1} // SYS</span>
      </div>
      <h3 class="text-lg font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">${n.title}</h3>
      <p class="text-xs text-gray-400 leading-relaxed mb-4">${n.desc}</p>
      <div class="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold text-brand-peach">
        <span>${n.metric}</span>
        <span class="text-gray-500 group-hover:text-white transition-colors">ACTIVE</span>
      </div>
    </div>
  `).join("")}function N(){const t=document.getElementById("how-it-works-timeline");t&&(t.innerHTML=y.map(e=>`
    <div class="relative flex flex-col items-center text-center group">
      <div class="w-16 h-16 rounded-2xl glass-panel border border-brand-orange/40 flex items-center justify-center text-2xl font-black text-brand-orange mb-4 shadow-xl group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
        ${e.step}
      </div>
      <h4 class="text-lg font-bold text-white mb-2">${e.title}</h4>
      <p class="text-xs text-gray-400 leading-relaxed max-w-xs">${e.desc}</p>
    </div>
  `).join(""))}function j(){const t=document.getElementById("why-choose-us-grid");if(!t)return;const e={route:"🗺️",timer:"⏱️",thermometer:"🌡️","check-circle":"🛡️",headset:"🎧",leaf:"🌿"};t.innerHTML=v.map(n=>`
    <div class="p-5 rounded-2xl glass-panel border border-white/10 flex items-start gap-4 hover:border-brand-orange/40 transition-all group">
      <div class="text-2xl p-3 rounded-xl bg-brand-orange/10 border border-brand-orange/30 text-brand-orange group-hover:scale-110 transition-transform">
        ${e[n.icon]||"✨"}
      </div>
      <div>
        <h4 class="text-base font-bold text-white mb-1 group-hover:text-brand-orange transition-colors">${n.title}</h4>
        <p class="text-xs text-gray-400 leading-relaxed">${n.desc}</p>
      </div>
    </div>
  `).join("")}function G(){const t=document.getElementById("testimonials-grid");t&&(t.innerHTML=w.map(e=>`
    <div class="glow-card p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-1 text-brand-orange mb-3">
          ${"⭐".repeat(e.rating)}
        </div>
        <p class="text-sm text-gray-300 italic mb-6 leading-relaxed">"${e.review}"</p>
      </div>
      <div class="flex items-center gap-3 pt-4 border-t border-white/10">
        <img src="${e.avatar}" alt="${e.name}" class="w-11 h-11 rounded-full object-cover border-2 border-brand-orange/50 shadow" />
        <div>
          <h5 class="text-sm font-bold text-white">${e.name}</h5>
          <span class="text-xs text-gray-400 block">${e.role} • ${e.city}</span>
        </div>
      </div>
    </div>
  `).join(""))}function Q(){const t=document.getElementById("pricing-grid"),e=document.getElementById("pricing-billing-toggle");if(!t)return;let n=!1;function o(){t.innerHTML=I.map(r=>{const i=n?r.priceAnnual:r.priceMonthly;return`
        <div class="glow-card p-8 rounded-3xl glass-panel relative flex flex-col justify-between ${r.popular?"border-2 border-brand-orange shadow-2xl bg-brand-orange/5":"border border-white/10"}">
          ${r.popular?'<div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-orange to-brand-peach text-white text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">Most Popular</div>':""}
          <div>
            <h4 class="text-2xl font-bold text-white mb-2">${r.name}</h4>
            <p class="text-xs text-gray-400 mb-6">${r.desc}</p>
            <div class="flex items-baseline gap-1 mb-6">
              <span class="text-4xl font-extrabold text-white">${i}</span>
              <span class="text-xs text-gray-400">/${r.period}</span>
            </div>
            <ul class="space-y-3 mb-8 text-xs text-gray-300">
              ${r.features.map(a=>`
                <li class="flex items-center gap-2">
                  <span class="text-brand-orange font-bold">✓</span>
                  <span>${a}</span>
                </li>
              `).join("")}
            </ul>
          </div>
          <button onclick="window.triggerOrderModal('${r.name} Plan Registration', '${i}')" class="${r.popular?"btn-glow-orange text-white":"glass-panel text-white hover:border-brand-orange"} w-full py-3.5 rounded-xl font-bold text-sm text-center btn-ripple transition-all">
            ${r.cta}
          </button>
        </div>
      `}).join("")}o(),e&&e.addEventListener("change",r=>{n=r.target.checked,l("click"),o()})}function V(){const t=document.getElementById("blog-grid");t&&(t.innerHTML=h.map(e=>`
    <article class="glow-card rounded-2xl glass-panel overflow-hidden border border-white/10 group cursor-pointer" onclick="window.openArticleModal(${e.id})">
      <div class="relative h-48 overflow-hidden">
        <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div class="absolute top-3 left-3 bg-brand-dark/80 backdrop-blur text-brand-peach text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
          ${e.category}
        </div>
      </div>
      <div class="p-6">
        <div class="flex items-center justify-between text-[11px] text-gray-400 mb-2">
          <span>${e.date}</span>
          <span>${e.readTime}</span>
        </div>
        <h4 class="text-lg font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">${e.title}</h4>
        <p class="text-xs text-gray-400 line-clamp-2 leading-relaxed">${e.snippet}</p>
      </div>
    </article>
  `).join(""),window.openArticleModal=function(e){l("click");const n=h.find(o=>o.id===e);n&&m(`Opening article: "${n.title}"`,"info")})}function Y(){const t=document.getElementById("faq-accordion");t&&(t.innerHTML=k.map((e,n)=>`
    <div class="rounded-2xl glass-panel border border-white/10 overflow-hidden transition-all">
      <button onclick="window.toggleFaq(${n})" class="w-full p-5 text-left flex items-center justify-between text-white font-bold text-base hover:text-brand-orange transition-colors">
        <span>${e.question}</span>
        <span id="faq-icon-${n}" class="text-xl transform transition-transform text-brand-orange">+</span>
      </button>
      <div id="faq-ans-${n}" class="hidden p-5 pt-0 text-xs text-gray-400 leading-relaxed border-t border-white/5">
        ${e.answer}
      </div>
    </div>
  `).join(""),window.toggleFaq=function(e){l("click");const n=document.getElementById(`faq-ans-${e}`),o=document.getElementById(`faq-icon-${e}`);if(n&&o){const r=n.classList.contains("hidden");n.classList.toggle("hidden"),o.innerText=r?"−":"+",o.style.transform=r?"rotate(180deg)":"rotate(0deg)"}})}function W(){const t=document.getElementById("careers-list");t&&(t.innerHTML=A.map(e=>`
    <div class="p-5 rounded-2xl glass-panel border border-white/10 flex items-center justify-between hover:border-brand-orange/40 transition-all group">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="text-[10px] uppercase font-bold text-brand-peach bg-brand-orange/20 px-2.5 py-0.5 rounded-md border border-brand-orange/30">${e.team}</span>
          <span class="text-[10px] text-gray-400">${e.type}</span>
        </div>
        <h5 class="text-base font-bold text-white group-hover:text-brand-orange transition-colors">${e.title}</h5>
        <span class="text-xs text-gray-400">${e.location}</span>
      </div>
      <button onclick="window.applyJob('${e.title}')" class="px-4 py-2 rounded-xl text-xs font-bold bg-white/10 text-white hover:bg-brand-orange hover:text-white transition-all btn-ripple">
        Apply Now
      </button>
    </div>
  `).join(""),window.applyJob=function(e){l("click"),m(`Application started for: ${e}`,"success")})}function K(){const t=document.getElementById("main-navbar"),e=document.getElementById("mobile-menu-toggle"),n=document.getElementById("mobile-menu");window.addEventListener("scroll",()=>{window.scrollY>40?(t==null||t.classList.add("glass-nav","py-3"),t==null||t.classList.remove("py-5")):(t==null||t.classList.remove("glass-nav"),t==null||t.classList.add("py-5"))}),e&&n&&e.addEventListener("click",()=>{l("click"),n.classList.toggle("hidden")})}function U(){const t=document.getElementById("contact-form");t&&t.addEventListener("submit",n=>{n.preventDefault(),l("success"),m("✨ Thank you! Your message has been routed to QuickBite AI Concierge.","success"),t.reset()});const e=document.getElementById("newsletter-form");e&&e.addEventListener("submit",n=>{n.preventDefault(),l("success"),m("🎉 Subscribed to QuickBite AI Insider Newsletter!","success"),e.reset()})}
