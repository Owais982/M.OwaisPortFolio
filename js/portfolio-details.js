// Portfolio Details Data
const portfolioItems = [
  {
    id: 1,
    category: "app",
    project: 1,
    title: "App 1",
    client: "ASU Company",
    date: "01 March, 2020",
    url: "www.example.com",
    mainImage: "assets/img/portfolio/app-1.jpg",
    thumbnails: [
      "assets/img/portfolio/app-1.jpg",
      "assets/img/portfolio/app-2.jpg",
      "assets/img/portfolio/app-3.jpg",
    ],
    description: `
      <p>A refined web experience shaped for speed and simplicity on larger screens.</p>
      <p>Engineered with modern tools to ensure fluid interaction and dependable performance.</p>
    `,
  },
  {
    id: 2,
    category: "product",
    project: 1,
    title: "Product 1",
    client: "Tech Corp",
    date: "15 April, 2021",
    url: "www.techcorp.com",
    mainImage: "assets/img/portfolio/product-1.jpg",
    thumbnails: [
      "assets/img/portfolio/product-1.jpg",
      "assets/img/portfolio/product-2.jpg",
    ],
    description: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    `,
  },
  {
    id: 3,
    category: "branding",
    project: 1,
    title: "Branding 1",
    client: "Brand Studio",
    date: "20 June, 2022",
    url: "www.brandstudio.com",
    mainImage: "assets/img/portfolio/branding-1.jpg",
    thumbnails: [
      "assets/img/portfolio/branding-1.jpg",
      "assets/img/portfolio/branding-2.jpg",
      "assets/img/portfolio/branding-3.jpg",
    ],
    description: `
      <p>Branding is more than just a logo. It's the entire experience your customers have with your company.</p>
      <p>We create cohesive brand identities that tell your story and connect with your audience.</p>
    `,
  },
  {
    id: 4,
    category: "books",
    project: 1,
    title: "Books 1",
    client: "Publishing House",
    date: "10 September, 2021",
    url: "www.publishinghouse.com",
    mainImage: "assets/img/portfolio/books-1.jpg",
    thumbnails: [
      "assets/img/portfolio/books-1.jpg",
      "assets/img/portfolio/books-2.jpg",
    ],
    description: `
      <p>Book design is an art that combines typography, illustration, and layout to create compelling reading experiences.</p>
      <p>Each book we design tells a visual story that complements the written word.</p>
    `,
  },
  {
    id: 5,
    category: "app",
    project: 2,
    title: "App 2",
    client: "Laptop Solutions",
    date: "05 July, 2023",
    url: "www.laptopsolutions.com",
    mainImage: "assets/img/portfolio/app-2.jpg",
    thumbnails: [
      "assets/img/portfolio/app-2.jpg",
      "assets/img/portfolio/app-1.jpg",
    ],
    description: `
      <p>A modern web application crafted for clarity, performance, and seamless user interaction.</p>
      <p>Built with modern web technologies to deliver a smooth and responsive experience on desktop.</p>
    `,
  },
  {
    id: 6,
    category: "product",
    project: 2,
    title: "Product 2",
    client: "Innovate Inc",
    date: "30 November, 2022",
    url: "www.innovateinc.com",
    mainImage: "assets/img/portfolio/product-2.jpg",
    thumbnails: [
      "assets/img/portfolio/product-2.jpg",
      "assets/img/portfolio/product-3.jpg",
    ],
    description: `
      <p>Product design focusing on ergonomics and user-centered design principles.</p>
      <p>Created with sustainable materials and modern manufacturing techniques.</p>
    `,
  },
  {
    id: 7,
    category: "app",
    project: 3,
    title: "App 3",
    client: "Digital Solutions",
    date: "12 January, 2023",
    url: "www.digitalsolutions.com",
    mainImage: "assets/img/portfolio/app-3.jpg",
    thumbnails: [
      "assets/img/portfolio/app-3.jpg",
      "assets/img/portfolio/app-1.jpg",
    ],
    description: `
      <p>A comprehensive business application for enterprise management.</p>
      <p>Features include CRM, project management, and analytics dashboard.</p>
    `,
  },
  {
    id: 8,
    category: "product",
    project: 3,
    title: "Product 3",
    client: "Eco Tech",
    date: "18 March, 2023",
    url: "www.ecotech.com",
    mainImage: "assets/img/portfolio/product-3.jpg",
    thumbnails: [
      "assets/img/portfolio/product-3.jpg",
      "assets/img/portfolio/product-1.jpg",
    ],
    description: `
      <p>Eco-friendly product design with biodegradable materials.</p>
      <p>Focus on sustainability and minimal environmental impact.</p>
    `,
  },
  {
    id: 9,
    category: "branding",
    project: 2,
    title: "Branding 2",
    client: "Urban Cafe",
    date: "05 May, 2022",
    url: "www.urbancafe.com",
    mainImage: "assets/img/portfolio/branding-2.jpg",
    thumbnails: [
      "assets/img/portfolio/branding-2.jpg",
      "assets/img/portfolio/branding-1.jpg",
    ],
    description: `
      <p>Complete branding package for a modern urban cafe.</p>
      <p>Including logo, packaging, interior design elements, and marketing materials.</p>
    `,
  },
  {
    id: 10,
    category: "books",
    project: 2,
    title: "Books 2",
    client: "Literary Press",
    date: "22 October, 2022",
    url: "www.literarypress.com",
    mainImage: "assets/img/portfolio/books-2.jpg",
    thumbnails: [
      "assets/img/portfolio/books-2.jpg",
      "assets/img/portfolio/books-1.jpg",
    ],
    description: `
      <p>Book series design for a fantasy novel collection.</p>
      <p>Consistent theme across multiple volumes with unique illustrations for each book.</p>
    `,
  },
  {
    id: 11,
    category: "branding",
    project: 3,
    title: "Branding 3",
    client: "Tech Startup",
    date: "15 August, 2023",
    url: "www.techstartup.com",
    mainImage: "assets/img/portfolio/branding-3.jpg",
    thumbnails: [
      "assets/img/portfolio/branding-3.jpg",
      "assets/img/portfolio/branding-2.jpg",
    ],
    description: `
      <p>Tech startup branding with modern, clean aesthetic.</p>
      <p>Digital-first approach with responsive logo and brand guidelines.</p>
    `,
  },
  {
    id: 12,
    category: "books",
    project: 3,
    title: "Books 3",
    client: "Academic Publishers",
    date: "30 December, 2022",
    url: "www.academicpublishers.com",
    mainImage: "assets/img/portfolio/books-3.jpg",
    thumbnails: [
      "assets/img/portfolio/books-3.jpg",
      "assets/img/portfolio/books-2.jpg",
    ],
    description: `
      <p>Academic textbook design with clear typography and educational illustrations.</p>
      <p>Focus on readability and information hierarchy for better learning experience.</p>
    `,
  },
];

// DOM Elements - ONLY elements that exist in your HTML
const detailsMainImg = document.getElementById("details-main-img");
const thumbnailsContainer = document.getElementById("thumbnails-container");
const infoCategory = document.getElementById("info-category");
const infoClient = document.getElementById("info-client");
const infoDate = document.getElementById("info-date");
const infoUrl = document.getElementById("info-url");
const detailsProjectTitle = document.getElementById("details-project-title");
const detailsProjectDescription = document.getElementById("details-project-description");

// Check if elements exist (debug)
if (!detailsMainImg) console.error('details-main-img not found in HTML');
if (!thumbnailsContainer) console.error('thumbnails-container not found in HTML');
if (!infoCategory) console.error('info-category not found in HTML');
if (!infoClient) console.error('info-client not found in HTML');
if (!infoDate) console.error('info-date not found in HTML');
if (!infoUrl) console.error('info-url not found in HTML');
if (!detailsProjectTitle) console.error('details-project-title not found in HTML');
if (!detailsProjectDescription) console.error('details-project-description not found in HTML');

let currentCategoryItems = [];
let currentIndex = 0;
let currentItem = null;
let currentImageIndex = 0;
let autoSwitchInterval;

// URL params
const urlParams = new URLSearchParams(window.location.search);
const projectId = parseInt(urlParams.get("id")) || 1;
const category = urlParams.get("category") || "app";

// Function to get category display name
function getCategoryName(cat) {
  const categories = {
    app: "App",
    product: "Product",
    branding: "Branding",
    books: "Books",
  };
  return categories[cat] || cat;
}

// Load portfolio item
function loadPortfolioItem(id) {
  // Filter items by current category
  currentCategoryItems = portfolioItems.filter(
    (item) => item.category === category
  );
  
  // Find the item with matching ID
  currentIndex = currentCategoryItems.findIndex((item) => item.id === id);
  if (currentIndex === -1) currentIndex = 0;

  currentItem = currentCategoryItems[currentIndex];
  currentImageIndex = currentIndex;

  // Set main image and info
  updateMainImage(currentItem);

  // Create thumbnails
  if (thumbnailsContainer) {
    thumbnailsContainer.innerHTML = "";
    currentCategoryItems.forEach((item, index) => {
      const thumb = document.createElement("div");
      thumb.className = `thumbnail-item ${index === currentIndex ? "active" : ""}`;
      thumb.innerHTML = `<img src="${item.mainImage}" alt="${item.title}">`;
      
      thumb.addEventListener("click", () => {
        if (autoSwitchInterval) clearInterval(autoSwitchInterval);
        currentImageIndex = index;
        currentItem = item;
        updateMainImage(item);
        
        // Update active thumbnail
        document.querySelectorAll(".thumbnail-item").forEach((t) => t.classList.remove("active"));
        thumb.classList.add("active");
        
        // Resume auto-switch after 5s
        setTimeout(() => startAutoImageSwitch(), 5000);
      });
      
      thumbnailsContainer.appendChild(thumb);
    });
  }

  // Update URL without reloading page
  window.history.pushState(
    {},
    "",
    `portfolio-details.html?id=${currentItem.id}&category=${currentItem.category}`
  );

  // Start auto-switch of images
  startAutoImageSwitch();
}

// Function to update main image and info
function updateMainImage(item) {
  if (detailsMainImg) {
    detailsMainImg.src = item.mainImage;
    detailsMainImg.alt = item.title;
  }
  
  if (infoCategory) infoCategory.textContent = getCategoryName(item.category);
  if (infoClient) infoClient.textContent = item.client;
  if (infoDate) infoDate.textContent = item.date;
  
  if (infoUrl) {
    infoUrl.href = `https://${item.url}`;
    infoUrl.textContent = item.url;
  }
  
  if (detailsProjectTitle) detailsProjectTitle.textContent = item.title;
  if (detailsProjectDescription) detailsProjectDescription.innerHTML = item.description;
}

// Auto-image switch (cycles through images of same category)
function startAutoImageSwitch() {
  // Clear any existing interval
  if (autoSwitchInterval) clearInterval(autoSwitchInterval);
  
  // Don't auto-switch if only one item
  if (currentCategoryItems.length <= 1) return;

  autoSwitchInterval = setInterval(() => {
    // Move to next image
    currentImageIndex = (currentImageIndex + 1) % currentCategoryItems.length;
    currentItem = currentCategoryItems[currentImageIndex];
    
    // Update display
    updateMainImage(currentItem);

    // Update active thumbnail
    document.querySelectorAll(".thumbnail-item").forEach((thumb, index) => {
      if (index === currentImageIndex) {
        thumb.classList.add("active");
      } else {
        thumb.classList.remove("active");
      }
    });
  }, 5000); // Switch every 5 seconds
}

// Pause auto-switch when hovering over main image
if (detailsMainImg) {
  detailsMainImg.addEventListener("mouseenter", () => {
    if (autoSwitchInterval) clearInterval(autoSwitchInterval);
  });
  
  detailsMainImg.addEventListener("mouseleave", () => {
    startAutoImageSwitch();
  });
}

// Initialize page when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Load the portfolio item based on URL parameters
  loadPortfolioItem(projectId);

  // Handle browser back/forward buttons
  window.addEventListener("popstate", () => {
    const newId = parseInt(new URLSearchParams(window.location.search).get("id")) || projectId;
    loadPortfolioItem(newId);
  });
});

// Optional: Add keyboard navigation (left/right arrows)
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    // Previous item
    if (currentIndex > 0) {
      loadPortfolioItem(currentCategoryItems[currentIndex - 1].id);
    }
  } else if (e.key === "ArrowRight") {
    // Next item
    if (currentIndex < currentCategoryItems.length - 1) {
      loadPortfolioItem(currentCategoryItems[currentIndex + 1].id);
    }
  }
});
