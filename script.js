// ═══════════════════════════════════════
// SATU ATAP COFFEE — script.js
// ═══════════════════════════════════════

// ── MENU DATA ──
const MENU = {
  coffee: [
    { emoji: '☕', name: 'Signature Latte',    desc: 'House blend espresso dengan steamed milk dan caramel hint yang subtle.',        price: 'Rp 32K', tag: 'Favorit' },
    { emoji: '🌙', name: 'Satu Atap Signature', desc: 'Blend eksklusif kami — sebuah cerita dalam satu cangkir.',                    price: 'Rp 38K', tag: 'Must Try' },
    { emoji: '🧊', name: 'Cold Brew Citrus',    desc: '18 jam cold brew dengan sentuhan jeruk dan sedikit fizz.',                    price: 'Rp 35K', tag: 'Refreshing' },
    { emoji: '🍂', name: 'Brown Sugar Latte',   desc: 'Espresso, brown sugar syrup, dan susu oat yang hangat dan nyaman.',           price: 'Rp 34K', tag: 'Cozy' },
    { emoji: '🌅', name: 'Sunset Filter',       desc: 'Single origin pour over — cocok dinikmati sambil melihat sore.',              price: 'Rp 40K', tag: 'Premium' },
    { emoji: '🫧', name: 'Creamy Espresso',     desc: 'Double shot espresso dengan foam susu manis di atasnya.',                    price: 'Rp 30K', tag: 'Classic' },
  ],
  noncoffee: [
    { emoji: '🍵', name: 'Matcha Latte',       desc: 'Ceremonial grade matcha dengan susu segar, creamy dan tidak terlalu pahit.',  price: 'Rp 36K', tag: 'Favorit' },
    { emoji: '🌿', name: 'Pandan Milk',         desc: 'Susu segar dengan ekstrak pandan segar — aroma yang menenangkan.',           price: 'Rp 28K', tag: 'Lokal' },
    { emoji: '🍋', name: 'Yuzu Soda',           desc: 'Soda yuzu segar dengan citrus burst yang menyegarkan di setiap tegukan.',    price: 'Rp 30K', tag: 'Segar' },
    { emoji: '🫐', name: 'Berry Smoothie',      desc: 'Mixed berries blended dengan yogurt dan madu — sehat dan enak.',             price: 'Rp 34K', tag: 'Healthy' },
    { emoji: '🍫', name: 'Dark Choco Milk',     desc: 'Dark chocolate 70% dengan steamed milk dan pinch of sea salt.',              price: 'Rp 32K', tag: 'Rich' },
    { emoji: '🥤', name: 'House Lemonade',      desc: 'Lemon segar, rosemary syrup, dan soda — klasik yang tidak pernah salah.',    price: 'Rp 26K', tag: 'Classic' },
  ],
  food: [
    { emoji: '🍜', name: 'Satu Atap Noodle',   desc: 'Mie telur dengan kuah kaldu sapi pekat, topping ayam, dan soft boiled egg.', price: 'Rp 55K', tag: 'Signature' },
    { emoji: '🥟', name: 'Wonton Soup',         desc: 'Wonton isi udang dalam kuah bening gurih dengan bawang putih goreng.',      price: 'Rp 48K', tag: 'Favorit' },
    { emoji: '🍳', name: 'Brunch Plate',        desc: 'Dua telur, toast sourdough, sautéed mushroom, dan salad segar.',            price: 'Rp 62K', tag: 'Brunch' },
    { emoji: '🥗', name: 'Garden Bowl',         desc: 'Nasi merah, tempe goreng, sayuran panggang, dan sambal matah.',             price: 'Rp 52K', tag: 'Healthy' },
    { emoji: '🧆', name: 'Crispy Wonton',       desc: 'Wonton goreng renyah dengan saus asam manis dan chili oil.',                price: 'Rp 38K', tag: 'Snack' },
    { emoji: '🍞', name: 'Avocado Toast',        desc: 'Sourdough panggang dengan alpukat, telur poach, dan lemon zest.',           price: 'Rp 58K', tag: 'Brunch' },
  ],
  special: [
    { emoji: '🌙', name: 'Buka Puasa Bundle',   desc: 'Noodle atau Wonton + minuman pilihan. Cocok untuk berbuka bersama.',        price: 'Rp 100K++', tag: '/person' },
    { emoji: '☀️', name: 'Morning Ritual Set',  desc: 'Filter coffee + brunch plate — mulai pagi dengan tenang.',                  price: 'Rp 90K',    tag: 'Set' },
    { emoji: '🎉', name: 'Group Package',        desc: 'Paket makan bersama untuk 5+ orang, termasuk snack dan minuman.',          price: 'Hubungi', tag: 'Custom' },
    { emoji: '🎂', name: 'Birthday Package',     desc: 'Dekorasi meja, kue, dan paket makan spesial untuk merayakan hari istimewa.',price: 'Hubungi', tag: 'Event' },
    { emoji: '📸', name: 'Pamer-Ah Package',     desc: 'Ruang eksklusif untuk pameran dan showcase karya — by appointment.',       price: 'Hubungi', tag: 'Event' },
    { emoji: '🌅', name: 'Sunset Chaser Set',    desc: 'Dua minuman + snack ringan, nikmati view sore terbaik dari Lt.2.',         price: 'Rp 75K',    tag: 'For Two' },
  ],
};

// ── RENDER MENU ──
function renderMenu(cat) {
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = '';
  MENU[cat].forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'mc rev';
    el.style.transitionDelay = (i * 0.05) + 's';
    el.innerHTML = `
      <div class="mc-emoji">${item.emoji}</div>
      <div class="mc-name">${item.name}</div>
      <div class="mc-desc">${item.desc}</div>
      <div class="mc-foot">
        <span class="mc-price">${item.price}</span>
        <span class="mc-tag">${item.tag}</span>
      </div>`;
    grid.appendChild(el);
  });
  setTimeout(observeAll, 40);
}

// ── TABS ──
document.querySelectorAll('.mtab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.mtab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderMenu(tab.dataset.cat);
  });
});

// ── LOADER ──
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('out');
    renderMenu('coffee');
    observeAll();
  }, 2000);
});

// ── SCROLL REVEAL ──
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

function observeAll() {
  document.querySelectorAll('.rev:not(.in)').forEach(el => revObs.observe(el));
}

// ── NAV STICKY ──
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('stuck', window.scrollY > 60);
});

// ── MOBILE MENU ──
let mobOpen = false;

function toggleMob() {
  mobOpen = !mobOpen;
  document.getElementById('mob').classList.toggle('open', mobOpen);
  const h1 = document.getElementById('h1');
  const h2 = document.getElementById('h2');
  h1.style.transform = mobOpen ? 'translateY(6px) rotate(45deg)'  : '';
  h2.style.transform = mobOpen ? 'translateY(-6px) rotate(-45deg)' : '';
}

function closeMob() {
  mobOpen = false;
  document.getElementById('mob').classList.remove('open');
  document.getElementById('h1').style.transform = '';
  document.getElementById('h2').style.transform = '';
}

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = a.getAttribute('href');
    if (!t || t === '#') return;
    e.preventDefault();
    const el = document.querySelector(t);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  });
});

// ── PARALLAX on hero image ──
const heroImg = document.getElementById('heroImg');
if (heroImg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroImg.style.transform = `scale(1.05) translateY(${y * 0.15}px)`;
    }
  });
}

// ── GALLERY TILT MICRO-INTERACTION ──
document.querySelectorAll('.gi').forEach(gi => {
  gi.addEventListener('mousemove', e => {
    const r = gi.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 4;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * 4;
    gi.style.transform = `perspective(600px) rotateX(${-y}deg) rotateY(${x}deg)`;
  });
  gi.addEventListener('mouseleave', () => {
    gi.style.transform = '';
  });
});
