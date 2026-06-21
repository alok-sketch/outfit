// Outfit Planner Landing Page - Interactive Logic (LIGHT THEME & SVG ICONS)

// SVGs Database Generators
const SVG_TEMPLATES = {
  // Tops
  knit: (color) => `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="clothing-icon-svg"><path d="M4 9h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9z"/><path d="M4 9V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2"/><path d="M20 9V5a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v2"/><path d="M9 7h6"/></svg>`,
  blouse: (color) => `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="clothing-icon-svg"><path d="M6 3h12l2 6v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9l2-6z"/><path d="M12 3v6M9 9h6"/></svg>`,
  jacket: (color) => `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="clothing-icon-svg"><path d="M5 3h14v17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3z"/><path d="M12 3v19M9 7h6M9 11h6"/><rect x="7" y="14" width="3" height="3" rx="0.5"/><rect x="14" y="14" width="3" height="3" rx="0.5"/></svg>`,
  
  // Bottoms
  slacks: (color) => `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="clothing-icon-svg"><path d="M6 3h12v19l-5-2-5 2V3z"/><path d="M12 3v15"/></svg>`,
  shorts: (color) => `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="clothing-icon-svg"><path d="M6 3h12v11l-5-1.5-5 1.5V3z"/><path d="M12 3v9.5"/></svg>`,
  skirt: (color) => `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="clothing-icon-svg"><path d="M8 3h8l4 17H4L8 3z"/><path d="M8 3v17M12 3v17M16 3v17"/></svg>`,
  
  // Shoes
  sneakers: (color) => `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="clothing-icon-svg"><path d="M3 15h11l6-3v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z"/><path d="M8 15v-3M11 15V11"/></svg>`,
  loafers: (color) => `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="clothing-icon-svg"><path d="M3 16h13l5-2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1z"/><path d="M16 14s-1-3-4-3-4 3-4 3"/></svg>`,
  heels: (color) => `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="clothing-icon-svg"><path d="M4 18h10l6-10v8a2 2 0 0 1-2 2h-6l-2-4v4l-6-2v-2z"/><path d="M20 8l-2 10"/></svg>`,
  
  // Accessories
  glasses: (color) => `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="clothing-icon-svg"><circle cx="7" cy="12" r="4"/><circle cx="17" cy="12" r="4"/><path d="M11 12h2M3 12h1M20 12h1"/></svg>`,
  tote: (color) => `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="clothing-icon-svg"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M9 8V5a3 3 0 0 1 6 0v3"/></svg>`,
  watch: (color) => `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="clothing-icon-svg"><circle cx="12" cy="12" r="6"/><path d="M12 3v3M12 18v3M12 9v3h3"/></svg>`
};

// Closet Database
const CLOSET_DATA = {
  tops: [
    { id: 't1', name: 'Crewneck Knit', svgKey: 'knit', tag: 'Minimal Classic', colorHex: '#7333d9', 
      suitability: { college: 25, party: 10, brunch: 20, workout: 5 } },
    { id: 't2', name: 'Silk Blouse', svgKey: 'blouse', tag: 'Elevated Chic', colorHex: '#db2b6b', 
      suitability: { college: 15, party: 25, brunch: 25, workout: 2 } },
    { id: 't3', name: 'Utility Jacket', svgKey: 'jacket', tag: 'Rugged Casual', colorHex: '#2e9e73', 
      suitability: { college: 25, party: 15, brunch: 18, workout: 10 } }
  ],
  bottoms: [
    { id: 'b1', name: 'Denim Slacks', svgKey: 'slacks', tag: 'Everyday Denim', colorHex: '#0084e6', 
      suitability: { college: 25, party: 15, brunch: 22, workout: 5 } },
    { id: 'b2', name: 'Linen Shorts', svgKey: 'shorts', tag: 'Summer Breezy', colorHex: '#c79212', 
      suitability: { college: 20, party: 10, brunch: 20, workout: 18 } },
    { id: 'b3', name: 'Pleated Skirt', svgKey: 'skirt', tag: 'Polished Skirt', colorHex: '#e6642e', 
      suitability: { college: 15, party: 25, brunch: 24, workout: 2 } }
  ],
  shoes: [
    { id: 's1', name: 'Minimal Sneakers', svgKey: 'sneakers', tag: 'Comfort Walk', colorHex: '#0084e6', 
      suitability: { college: 25, party: 10, brunch: 20, workout: 25 } },
    { id: 's2', name: 'Suede Loafers', svgKey: 'loafers', tag: 'Smart Casual', colorHex: '#e6642e', 
      suitability: { college: 18, party: 20, brunch: 25, workout: 5 } },
    { id: 's3', name: 'Leather Heels', svgKey: 'heels', tag: 'High Glam', colorHex: '#db2b6b', 
      suitability: { college: 5, party: 25, brunch: 18, workout: 1 } }
  ],
  accessories: [
    { id: 'a1', name: 'Retro Glasses', svgKey: 'glasses', tag: 'Chic Frames', colorHex: '#c79212', 
      suitability: { college: 20, party: 15, brunch: 18, workout: 10 } },
    { id: 'a2', name: 'Leather Tote', svgKey: 'tote', tag: 'Daily Bag', colorHex: '#7333d9', 
      suitability: { college: 22, party: 12, brunch: 20, workout: 5 } },
    { id: 'a3', name: 'Silver Watch', svgKey: 'watch', tag: 'Luxury Timer', colorHex: '#2e9e73', 
      suitability: { college: 18, party: 20, brunch: 22, workout: 15 } }
  ]
};

// Current Selections & State
let currentOccasion = 'college';
let currentSelections = {
  tops: CLOSET_DATA.tops[0],
  bottoms: CLOSET_DATA.bottoms[0],
  shoes: CLOSET_DATA.shoes[0],
  accessories: CLOSET_DATA.accessories[0]
};

// Stylist comments database custom-fitted for occasions
const OCCASION_FEEDBACK = {
  college: [
    { threshold: 85, comment: "Excellent choice for campus! This pairing is extremely comfortable for walking between classes while looking effortlessly put-together." },
    { threshold: 70, comment: "Good balance. Consider pairing with sneakers and denim for that extra casual, study-friendly comfort." },
    { threshold: 0, comment: "A bit too formal or restrictive for long college lectures! Try swapping in denim slacks or clean sneakers." }
  ],
  party: [
    { threshold: 85, comment: "Stunning party outfit! The bold elements and refined coordinates will ensure you stand out. Elegant and modern." },
    { threshold: 70, comment: "Nice evening coordinate. Adding high heels, a blouse, or metallic wearables will give it that extra night-out sparkle." },
    { threshold: 0, comment: "Too casual for a party night! Swapping comfortable knitwear for a silk blouse or swapping sneakers for loafers/heels is recommended." }
  ],
  brunch: [
    { threshold: 85, comment: "The ultimate weekend brunch aesthetic! Perfectly captures a relaxed, social, and polished daytime look." },
    { threshold: 70, comment: "Very suitable. Suede loafers or a pleated skirt fit the weekend brunch vibe nicely." },
    { threshold: 0, comment: "A bit off-key. Try pairing casual knits with smart-casual bottoms to hit that relaxed sweet spot." }
  ],
  workout: [
    { threshold: 85, comment: "Outstanding athletic pairing! You are fully geared with high comfort, flexible wear, and breathable sneakers." },
    { threshold: 70, comment: "Decent flexibility. Swap formal loafers/skirts for active shorts and sneakers to prevent restricted movements." },
    { threshold: 0, comment: "Incompatible for physical activity! Heels, skirts, or leather details will restrict you. Swap to activewear." }
  ]
};

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  lucide.createIcons();

  // Populate closet grid boards
  populateCloset('tops', 'tops-closet');
  populateCloset('bottoms', 'bottoms-closet');
  populateCloset('shoes', 'shoes-closet');
  populateCloset('accessories', 'accessories-closet');

  // Trigger initial selection and updates
  updateOutfitDisplay();

  // Mobile Menu Toggling
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      const isExpanded = mobileNav.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
      const icon = menuToggle.querySelector('i');
      if (icon) {
        if (isExpanded) {
          icon.setAttribute('data-lucide', 'x');
        } else {
          icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
      }
    });
  }

  // Close Mobile Menu on link click
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNav) mobileNav.classList.remove('active');
      if (menuToggle) {
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.setAttribute('data-lucide', 'menu');
          lucide.createIcons();
        }
      }
    });
  });

  // Header Scroll Styles
  const header = document.querySelector('.app-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Background Parallax Mouse Interaction (Muted for Light Theme)
  const container = document.getElementById('bg-orbs-container');
  const orbs = {
    purple: document.getElementById('orb-p'),
    coral: document.getElementById('orb-c'),
    indigo: document.getElementById('orb-i'),
    mint: document.getElementById('orb-m')
  };

  if (container) {
    container.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const xPercent = (clientX / window.innerWidth) - 0.5;
      const yPercent = (clientY / window.innerHeight) - 0.5;

      if (orbs.purple) {
        orbs.purple.style.transform = `translate(${xPercent * 30}px, ${yPercent * 30}px)`;
      }
      if (orbs.coral) {
        orbs.coral.style.transform = `translate(${xPercent * -40}px, ${yPercent * -40}px)`;
      }
      if (orbs.indigo) {
        orbs.indigo.style.transform = `translate(${xPercent * 25}px, ${yPercent * -25}px)`;
      }
      if (orbs.mint) {
        orbs.mint.style.transform = `translate(${xPercent * -20}px, ${yPercent * 20}px)`;
      }
    });
  }
});

// Render Closet Cards
function populateCloset(category, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const items = CLOSET_DATA[category];
  container.innerHTML = '';

  items.forEach(item => {
    const isSelected = currentSelections[category].id === item.id;
    const card = document.createElement('div');
    card.className = `closet-item-card ${isSelected ? 'selected ' + category.slice(0, -1) + '-sel' : ''}`;
    card.setAttribute('data-id', item.id);
    card.onclick = () => selectItem(category, item);

    // Generate custom vector SVG
    const svgContent = SVG_TEMPLATES[item.svgKey](item.colorHex);

    card.innerHTML = `
      <div class="item-svg-box">${svgContent}</div>
      <span class="item-name">${item.name}</span>
    `;

    container.appendChild(card);
  });
}

// Select Item Handler
function selectItem(category, item) {
  currentSelections[category] = item;

  // Re-populate category cards to update active border style
  const containerId = `${category}-closet`;
  populateCloset(category, containerId);

  // Update simulator display + computations
  updateOutfitDisplay();
}

// Occasion Selection State
function selectOccasion(occasionKey) {
  currentOccasion = occasionKey;

  // Update active state in chips list
  const chips = document.querySelectorAll('.occ-chip');
  chips.forEach(chip => {
    chip.classList.remove('active');
  });

  // Find selected chip based on click source or search
  const btnTextMap = {
    college: 'Daily College',
    party: 'Night Club / Party',
    brunch: 'Weekend Brunch',
    workout: 'Gym / Workout'
  };

  chips.forEach(chip => {
    if (chip.textContent.trim().includes(btnTextMap[occasionKey])) {
      chip.classList.add('active');
    }
  });

  // Update phone mockup header tag text
  const mockActiveOcc = document.getElementById('mock-active-occasion');
  if (mockActiveOcc) {
    mockActiveOcc.textContent = btnTextMap[occasionKey].toUpperCase();
  }

  // Update styling
  updateOutfitDisplay();
}

// Update Phone Screen & Scoreboard
function updateOutfitDisplay() {
  // Update mock phone layout items
  const mockSvgTop = document.getElementById('mock-svg-top');
  const mockNameTop = document.getElementById('mock-name-top');
  const mockSlotTop = document.getElementById('mock-slot-top');

  const mockSvgBottom = document.getElementById('mock-svg-bottom');
  const mockNameBottom = document.getElementById('mock-name-bottom');
  const mockSlotBottom = document.getElementById('mock-slot-bottom');

  const mockSvgShoes = document.getElementById('mock-svg-shoes');
  const mockNameShoes = document.getElementById('mock-name-shoes');
  const mockSlotShoes = document.getElementById('mock-slot-shoes');

  const mockSvgAccessory = document.getElementById('mock-svg-accessory');
  const mockNameAccessory = document.getElementById('mock-name-accessory');
  const mockSlotAccessory = document.getElementById('mock-slot-accessory');

  // Set top details
  if (mockSvgTop && mockNameTop) {
    mockSvgTop.innerHTML = SVG_TEMPLATES[currentSelections.tops.svgKey](currentSelections.tops.colorHex);
    mockNameTop.textContent = currentSelections.tops.name;
    animateItemChange(mockSlotTop);
  }

  // Set bottom details
  if (mockSvgBottom && mockNameBottom) {
    mockSvgBottom.innerHTML = SVG_TEMPLATES[currentSelections.bottoms.svgKey](currentSelections.bottoms.colorHex);
    mockNameBottom.textContent = currentSelections.bottoms.name;
    animateItemChange(mockSlotBottom);
  }

  // Set shoes details
  if (mockSvgShoes && mockNameShoes) {
    mockSvgShoes.innerHTML = SVG_TEMPLATES[currentSelections.shoes.svgKey](currentSelections.shoes.colorHex);
    mockNameShoes.textContent = currentSelections.shoes.name;
    animateItemChange(mockSlotShoes);
  }

  // Set accessories details
  if (mockSvgAccessory && mockNameAccessory) {
    mockSvgAccessory.innerHTML = SVG_TEMPLATES[currentSelections.accessories.svgKey](currentSelections.accessories.colorHex);
    mockNameAccessory.textContent = currentSelections.accessories.name;
    animateItemChange(mockSlotAccessory);
  }

  // Calculate Outfit Score based on active occasion suitability
  const score = calculateOccasionScore();
  
  // Update Score Bar Fill
  const scoreFill = document.querySelector('.score-bar-fill');
  const scoreText = document.querySelector('.score-text');
  if (scoreFill && scoreText) {
    scoreFill.style.width = `${score}%`;
    scoreText.textContent = `Pairing Score: ${score}%`;
  }

  // Update AI Stylist Feedback Text
  const feedbackText = document.getElementById('ai-stylist-feedback');
  if (feedbackText) {
    const feedbackList = OCCASION_FEEDBACK[currentOccasion];
    let matchedComment = feedbackList[feedbackList.length - 1].comment; // Default lowest

    for (let i = 0; i < feedbackList.length; i++) {
      if (score >= feedbackList[i].threshold) {
        matchedComment = feedbackList[i].comment;
        break;
      }
    }
    feedbackText.textContent = matchedComment;
  }

  // Update style tags
  const styleTag = document.getElementById('style-tag');
  if (styleTag) {
    styleTag.textContent = currentSelections.tops.tag;
  }
}

// Animate Element Trigger on selection
function animateItemChange(element) {
  if (!element) return;
  element.style.transform = 'scale(0.85)';
  element.style.boxShadow = '0 4px 15px rgba(115, 51, 217, 0.15)';
  setTimeout(() => {
    element.style.transform = 'scale(1)';
    element.style.boxShadow = '';
  }, 200);
}

// Calculate score based on selected occasion suitability metrics
function calculateOccasionScore() {
  const tSuit = currentSelections.tops.suitability[currentOccasion];
  const bSuit = currentSelections.bottoms.suitability[currentOccasion];
  const sSuit = currentSelections.shoes.suitability[currentOccasion];
  const aSuit = currentSelections.accessories.suitability[currentOccasion];

  const totalSum = tSuit + bSuit + sSuit + aSuit;
  
  // Maximum possible score is 100
  // Each category has max suitability = 25. 25*4 = 100.
  // We can return totalSum directly since it matches up to 100!
  return Math.max(30, totalSum); // Floor at 30%
}

// Smooth scrolling helper
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Handle Form Submission Mocking
function handleFormSubmit(event, designType) {
  event.preventDefault();

  if (designType === 'glass') {
    const input = document.getElementById('glass-email-input');
    const success = document.getElementById('glass-success');
    if (input && success) {
      console.log(`Submitted Apple ID via Design A (Glass): ${input.value}`);
      success.style.display = 'flex';
      input.value = '';
      setTimeout(() => {
        success.style.display = 'none';
      }, 5000);
    }
  } else if (designType === 'minimal') {
    const input = document.getElementById('minimal-email-input');
    const success = document.getElementById('minimal-success');
    if (input && success) {
      console.log(`Submitted Apple ID via Design B (Minimal): ${input.value}`);
      success.style.display = 'flex';
      input.value = '';
      setTimeout(() => {
        success.style.display = 'none';
      }, 5000);
    }
  }
}
