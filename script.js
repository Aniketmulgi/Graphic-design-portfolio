
/**
 * Graphic Design Portfolio Logic
 * 
 * This file contains the data and logic for the portfolio website.
 */

// ==========================================================================
// Portfolio Data
// ==========================================================================
// Add new projects to this array. The grid will automatically update.
const portfolioProjects = [
  {
    id: "proj-1",
    title: "GT3 RS Poster Series",
    category: "Advertisement Design",
    shortDescription: "Luxury automotive poster designs inspired by Porsche GT3 RS.",
    thumbnail: "./assets/GT3 RS_V1.jpg",
    gridSpan: "span-8",
    isPortrait: false,
    details: {
      overview:
        "A high-end automotive poster campaign showcasing speed, performance and aggressive styling.",
      role: "Graphic Designer",
      process:
        "Created using Photoshop with advanced color grading, typography hierarchy and premium automotive aesthetics.",
      outcome:
        "Demonstrates ability to create commercial-grade automotive marketing creatives.",
      images: [
        "./assets/GT3 RS_V1.jpg",
        "./assets/GT3 RS_V2.jpg"
      ]
    }
  },

  {
    id: "proj-2",
    title: "Coffee Day Campaign",
    category: "Social Media Creatives",
    shortDescription: "Instagram promotional creative for a coffee brand.",
    thumbnail: "./assets/Coffee Day.jpg",
    gridSpan: "span-4",
    isPortrait: true,
    details: {
      overview:
        "Promotional social media design focused on product visibility and customer engagement.",
      role: "Graphic Designer",
      process:
        "Used visual hierarchy, typography and warm color palette to highlight the product.",
      outcome:
        "Created a clean and modern promotional design suitable for Instagram marketing.",
      images: ["./assets/Coffee Day.jpg"]
    }
  },

  {
    id: "proj-3",
    title: "Tourism Campaign",
    category: "Advertisement Design",
    shortDescription: "Travel and tourism promotional poster.",
    thumbnail: "./assets/Tourism.jpg",
    gridSpan: "span-8",
    isPortrait: false,
    details: {
      overview:
        "Destination marketing concept focusing on visual storytelling and exploration.",
      role: "Graphic Designer",
      process:
        "Combined imagery, typography and layout principles to create a compelling tourism advertisement.",
      outcome:
        "Demonstrates ability to create marketing assets for travel brands.",
      images: ["./assets/Tourism.jpg"]
    }
  },

  {
    id: "proj-4",
    title: "Batman Concept Poster",
    category: "Posters",
    shortDescription: "Cinematic superhero poster concept.",
    thumbnail: "./assets/batman.jpg",
    gridSpan: "span-4",
    isPortrait: true,
    details: {
      overview:
        "Movie-inspired poster exploring dramatic lighting and visual storytelling.",
      role: "Graphic Designer",
      process:
        "Focused on mood, composition and cinematic typography.",
      outcome:
        "Strong showcase of poster design and entertainment branding.",
      images: ["./assets/batman.jpg"]
    }
  },

  {
    id: "proj-5",
    title: "Brain Awareness Campaign",
    category: "Social Media Creatives",
    shortDescription: "Educational healthcare awareness creative.",
    thumbnail: "./assets/brain.jpg",
    gridSpan: "span-4",
    isPortrait: true,
    details: {
      overview:
        "Awareness design communicating information through strong visuals.",
      role: "Graphic Designer",
      process:
        "Balanced educational content with engaging visual design.",
      outcome:
        "Showcases infographic and awareness campaign capabilities.",
      images: ["./assets/brain.jpg"]
    }
  },

  {
      id: "proj-6",
      title: "Engineering Mistakes Every Student Makes",
      category: "LinkedIn Carousels",
      shortDescription: "Educational LinkedIn carousel focused on engineering lessons and career growth.",
      thumbnail: "./assets/engineering-mistakes/1.png",
      gridSpan: "span-12",
      isPortrait: true,
      details: {
          overview:
          "A LinkedIn carousel sharing engineering lessons and common mistakes students make during their academic journey.",
          role: "Content Strategy, Design",
          process:
          "Combined storytelling, visual hierarchy and clean layouts to maximize engagement and readability.",
          outcome:
          "Created to educate engineering students and demonstrate content design capabilities.",
          images: [
              "./assets/engineering-mistakes/1.png",
              "./assets/engineering-mistakes/2.png",
              "./assets/engineering-mistakes/3.png",
              "./assets/engineering-mistakes/4.png",
              "./assets/engineering-mistakes/5.png",
              "./assets/engineering-mistakes/6.png",
              "./assets/engineering-mistakes/7.png",
              "./assets/engineering-mistakes/8.png",
            ]
        }
    },
    {
      id: "proj-7",
      title: "LinkedIn Carousel Collection",
      category: "Advertisement Design",
      shortDescription: "Professional carousel designs for personal branding and storytelling.",
      thumbnail: "./assets/furniture.jpg",
      gridSpan: "span-12",
      isPortrait: false,
      details: {
        overview:
          "A collection of LinkedIn carousel designs focused on engagement, storytelling and educational content.",
        role: "Graphic Designer",
        process:
          "Applied content hierarchy, slide consistency and visual storytelling principles.",
        outcome:
          "Designed to increase engagement and retention on LinkedIn.",
        images: [
          "./assets/furniture.jpg",
          "./assets/Minimalist living.jpg"
        ]
      }
    },
      {
    id: "proj-8",
    title: "Fried Rice Campaign",
    category: "Social Media Creatives",
    shortDescription: "Instagram promotional creative for a coffee brand.",
    thumbnail: "./assets/Friedrice.jpg",
    gridSpan: "span-4",
    isPortrait: true,
    details: {
      overview:
        "Promotional social media design focused on product visibility and customer engagement.",
      role: "Graphic Designer",
      process:
        "Used visual hierarchy, typography and warm color palette to highlight the product.",
      outcome:
        "Created a clean and modern promotional design suitable for Instagram marketing.",
      images: ["./assets/Friedrice.jpg"]
    }
  },

    // ADD NEW PROJECTS HERE
    // {
        //     id: "proj-unique-id",
        //     title: "Project Title",
        //     category: "Category Name",
        //     shortDescription: "One line description.",
        //     thumbnail: "path/to/image.jpg",
    //     gridSpan: "span-6",
    //     isPortrait: false,
    //     details: { ... }
    // }
];

// ==========================================================================
// DOM Elements & Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setCurrentYear();
    renderProjectGrid('all');
    initFilters();
    initMobileMenu();
    initScrollReveal();
    initNavbarScroll();
});

// ==========================================================================
// Theme Toggling (Light/Dark Mode)
// ==========================================================================
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or OS preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
        htmlElement.setAttribute('data-theme', 'dark');
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// ==========================================================================
// Project Rendering & Filtering
// ==========================================================================
function renderProjectGrid(filterCategory) {
    const grid = document.getElementById('project-grid');
    grid.innerHTML = ''; // Clear current grid
    
    const filteredProjects = filterCategory === 'all' 
        ? portfolioProjects 
        : portfolioProjects.filter(p => p.category.toLowerCase() === filterCategory.toLowerCase());
        
    filteredProjects.forEach(project => {
        const portraitClass = project.isPortrait ? 'portrait' : '';
        
        const cardHTML = `
            <div class="project-card ${project.gridSpan} ${portraitClass} reveal" data-id="${project.id}" tabindex="0" role="button" aria-label="View ${project.title}">
                <div class="project-image-wrapper">
                    <img src="${project.thumbnail}" alt="${project.title}" class="project-image" loading="lazy">
                    <div class="project-overlay"></div>
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <span class="project-category">${project.category}</span>
                </div>
            </div>
        `;
        
        grid.insertAdjacentHTML('beforeend', cardHTML);
    });
    
    // Re-initialize click events and scroll reveal for new cards
    attachProjectClickEvents();
    // Trigger a small timeout to allow DOM insertion before adding reveal classes
    setTimeout(() => {
        initScrollReveal();
    }, 100);
}

function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Filter grid
            const filterValue = e.target.getAttribute('data-filter');
            
            // Add a small fade effect
            const grid = document.getElementById('project-grid');
            grid.style.opacity = '0';
            
            setTimeout(() => {
                renderProjectGrid(filterValue);
                grid.style.opacity = '1';
                grid.style.transition = 'opacity 0.4s ease';
            }, 300);
        });
    });
}

// ==========================================================================
// Modal Logic
// ==========================================================================
function attachProjectClickEvents() {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-id');
            openModal(projectId);
        });
        
        // Keyboard accessibility
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const projectId = card.getAttribute('data-id');
                openModal(projectId);
            }
        });
    });
}

function openModal(projectId) {
    const project = portfolioProjects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    
    // Build images HTML
    const imagesHTML = project.details.images.map(img => 
        `<img src="${img}" alt="${project.title} detail" loading="lazy">`
    ).join('');
    
    // Inject content
    modalContent.innerHTML = `
        <div class="modal-header">
            <span class="modal-category">${project.category}</span>
            <h2 class="modal-title">${project.title}</h2>
            <p class="large-text">${project.shortDescription}</p>
        </div>
        
        <div class="modal-grid">
            <div class="modal-text">
                <h3>Overview</h3>
                <p>${project.details.overview}</p>
                
                <dl class="modal-meta">
                    <dt>Role</dt>
                    <dd>${project.details.role}</dd>
                    
                    <dt>Process</dt>
                    <dd>${project.details.process}</dd>
                    
                    <dt>Outcome</dt>
                    <dd>${project.details.outcome}</dd>
                </dl>
            </div>
            
            <div class="modal-gallery">
                ${imagesHTML}
            </div>
        </div>
    `;
    
    // Show modal
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Attach close events
    const closeBtn = document.getElementById('modal-close');
    const overlay = document.getElementById('modal-overlay');
    
    const closeModal = () => {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };
    
    closeBtn.onclick = closeModal;
    overlay.onclick = closeModal;
    
    // Escape key to close
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escHandler);
        }
    });
}

// ==========================================================================
// Utilities & Animations
// ==========================================================================
function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const links = document.querySelectorAll('.mobile-link');
    
    btn.addEventListener('click', () => {
        overlay.classList.toggle('active');
        const isActive = overlay.classList.contains('active');
        
        // Transform hamburger to X
        if (isActive) {
            btn.children[0].style.transform = 'translateY(9px) rotate(45deg)';
            btn.children[1].style.transform = 'translateY(-9px) rotate(-45deg)';
            document.body.style.overflow = 'hidden';
        } else {
            btn.children[0].style.transform = 'none';
            btn.children[1].style.transform = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when link clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            overlay.classList.remove('active');
            btn.children[0].style.transform = 'none';
            btn.children[1].style.transform = 'none';
            document.body.style.overflow = '';
        });
    });
}

function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
    
    // Trigger immediately for elements already in view
    setTimeout(() => {
        reveals.forEach(reveal => {
            const rect = reveal.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                reveal.classList.add('active');
            }
        });
    }, 100);
}

function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function setCurrentYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}
