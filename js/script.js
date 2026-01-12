//==================================== THIS ABOUT SECTION JS CODE

// About Section Stats Counter Animation
document.addEventListener("DOMContentLoaded", function () {
  // Function to animate counting numbers
  function animateCounter(element, target, suffix = "") {
    const duration = 1500; // Animation duration in milliseconds
    const start = 0;
    const increment = target / (duration / 16); // 60fps

    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current) + suffix;
    }, 16); // ~60fps
  }

  // Function to start counting animations
  function startStatsAnimation() {
    const statNumbers = document.querySelectorAll(
      ".stat-number span[data-count]"
    );

    statNumbers.forEach((stat) => {
      const target = parseInt(stat.getAttribute("data-count"));
      const suffix = stat.getAttribute("data-suffix") || "";

      // Reset to 0
      stat.textContent = "0" + suffix;

      // Start animation with slight delay for each stat
      setTimeout(() => {
        animateCounter(stat, target, suffix);
      }, 200);
    });
  }

  // Check if we're on the about section
  function isAboutSectionVisible() {
    const aboutSection = document.getElementById("about");
    if (!aboutSection) return false;

    const rect = aboutSection.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight * 0.8 && // When 80% of section is in view
      rect.bottom >= window.innerHeight * 0.2
    );
  }

  // Function to handle stats animation on scroll
  let statsAnimated = false;

  function handleScrollAnimation() {
    if (!statsAnimated && isAboutSectionVisible()) {
      startStatsAnimation();
      statsAnimated = true;
    }
  }

  // Initialize on page load
  setTimeout(() => {
    // If about section is already visible on load
    if (isAboutSectionVisible()) {
      startStatsAnimation();
      statsAnimated = true;
    } else {
      // Listen for scroll to trigger animation
      window.addEventListener("scroll", handleScrollAnimation);
      // Also check immediately in case section is partially visible
      handleScrollAnimation();
    }
  }, 500); // Small delay to ensure DOM is fully ready

  // Handle page reload
  window.addEventListener("beforeunload", function () {
    // Reset animation flag when page is about to reload
    statsAnimated = false;
  });

  // Reset and replay animation if user comes back to the page
  document.addEventListener("visibilitychange", function () {
    if (!document.hidden && isAboutSectionVisible() && !statsAnimated) {
      // If page becomes visible again and stats haven't been animated yet
      setTimeout(startStatsAnimation, 300);
      statsAnimated = true;
    }
  });

  // Optional: Add CSS for smooth animation
  const style = document.createElement("style");
  style.textContent = `
        .stat-number span {
            transition: all 0.1s ease-out;
        }
        .about {
            scroll-margin-top: 80px; /* Adjust based on your header height */
        }
    `;
  document.head.appendChild(style);
});

//==================================== THIS PORTFOLIO SECTION JS CODE

// Portfolio Filter Functionality
document.addEventListener("DOMContentLoaded", function () {
  // Get all filter buttons and portfolio items
  const filterButtons = document.querySelectorAll(".portfolio-filter li");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  // Function to filter portfolio items
  function filterPortfolio(category) {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("filter-active"));

    // Add active class to clicked button
    const activeButton = document.querySelector(
      `.portfolio-filter li[data-filter="${category}"]`
    );
    if (activeButton) {
      activeButton.classList.add("filter-active");
    }

    // Show/hide portfolio items based on filter
    portfolioItems.forEach((item) => {
      if (category === "*" || item.classList.contains(category.substring(1))) {
        // Show the item with fade-in animation
        item.style.display = "block";
        item.style.animation = "fadeInUp 0.5s ease forwards";
      } else {
        // Hide the item with fade-out effect
        item.style.animation = "fadeOut 0.3s ease forwards";
        setTimeout(() => {
          item.style.display = "none";
        }, 300);
      }
    });
  }

  // Add click event listeners to filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter");
      filterPortfolio(filterValue);
    });
  });

  // Add CSS animation for fade out
  const style = document.createElement("style");
  style.textContent = `
        @keyframes fadeOut {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(10px);
            }
        }
        .portfolio-item {
            display: block; /* Ensure all items are visible initially */
        }
    `;
  document.head.appendChild(style);

  // Handle URL parameters for filtering
  function handleURLFilter() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get("category");

    if (categoryParam) {
      const categoryMap = {
        app: ".filter-app",
        product: ".filter-product",
        branding: ".filter-branding",
        books: ".filter-books",
      };

      const filterValue = categoryMap[categoryParam] || "*";
      filterPortfolio(filterValue);
    }
  }

  // Initialize with "All" filter and handle URL params
  handleURLFilter();
});

//==================================== THIS TESTIMONIAL SECTION JS CODE
// Testimonials Slider with Auto-flow Animation
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper slider
  const testimonialsSwiper = new Swiper(".testimonials-slider", {
    // Auto-play configuration
    autoplay: {
      delay: 3000, // Change slide every 3 seconds
      disableOnInteraction: false, // Continue autoplay after user interaction
      pauseOnMouseEnter: true, // Pause on hover
    },

    // Smooth speed
    speed: 600,

    // Loop infinitely
    loop: true,

    // Number of slides to show
    slidesPerView: 1,
    spaceBetween: 20,

    // Center the active slide
    centeredSlides: true,

    // Effect - slide or fade
    effect: "slide", // You can change to 'fade' or 'cube' for different effects

    // Fade effect configuration (if using fade effect)
    fadeEffect: {
      crossFade: true,
    },

    // Breakpoints for responsive design
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 25,
        centeredSlides: false,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
    },

    // Pagination dots
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    // No navigation arrows (as per your design)
    navigation: {
      nextEl: null,
      prevEl: null,
    },

    // Accessibility
    a11y: {
      prevSlideMessage: "Previous testimonial",
      nextSlideMessage: "Next testimonial",
      firstSlideMessage: "This is the first testimonial",
      lastSlideMessage: "This is the last testimonial",
      paginationBulletMessage: "Go to testimonial {{index}}",
    },
  });

  // Add pause/play controls on hover
  const sliderContainer = document.querySelector(".testimonials-slider");

  // Pause autoplay on hover
  if (sliderContainer) {
    sliderContainer.addEventListener("mouseenter", function () {
      testimonialsSwiper.autoplay.stop();
    });

    // Resume autoplay when mouse leaves
    sliderContainer.addEventListener("mouseleave", function () {
      testimonialsSwiper.autoplay.start();
    });
  }

  // Add keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (
      document.activeElement.tagName !== "INPUT" &&
      document.activeElement.tagName !== "TEXTAREA"
    ) {
      if (e.key === "ArrowLeft") {
        testimonialsSwiper.slidePrev();
      } else if (e.key === "ArrowRight") {
        testimonialsSwiper.slideNext();
      }
    }
  });

  // Add touch gestures for mobile
  testimonialsSwiper.on("touchStart", function () {
    testimonialsSwiper.autoplay.stop();
  });

  testimonialsSwiper.on("touchEnd", function () {
    setTimeout(() => {
      testimonialsSwiper.autoplay.start();
    }, 3000);
  });

  // Pause autoplay when page is not visible
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      testimonialsSwiper.autoplay.stop();
    } else {
      testimonialsSwiper.autoplay.start();
    }
  });

  // Optional: Add auto-height adjustment
  testimonialsSwiper.on("slideChange", function () {
    // Adjust height based on current slide content
    const activeSlide = document.querySelector(".swiper-slide-active");
    if (activeSlide) {
      const slideHeight = activeSlide.offsetHeight;
      sliderContainer.style.height = slideHeight + "px";
    }
  });

  // Optional: Add progress bar for autoplay
  function addProgressBar() {
    const progressBar = document.createElement("div");
    progressBar.className = "swiper-autoplay-progress";
    progressBar.style.cssText = `
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: rgba(0, 123, 255, 0.3);
            z-index: 10;
        `;

    const progressFill = document.createElement("div");
    progressFill.className = "swiper-autoplay-progress-fill";
    progressFill.style.cssText = `
            height: 100%;
            background: var(--accent-color);
            width: 0%;
            transition: width linear;
        `;

    progressBar.appendChild(progressFill);
    sliderContainer.appendChild(progressBar);

    // Update progress bar
    testimonialsSwiper.on(
      "autoplayTimeLeft",
      function (swiper, timeLeft, percentage) {
        progressFill.style.width = percentage * 100 + "%";
        progressFill.style.transitionDuration =
          swiper.params.autoplay.delay / 1000 + "s";
      }
    );
  }

  // Uncomment to add progress bar
  // addProgressBar();

  // Optional: Add slide counter
  function addSlideCounter() {
    const counter = document.createElement("div");
    counter.className = "swiper-counter";
    counter.style.cssText = `
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 14px;
            color: #666;
            font-family: var(--default-font);
            z-index: 10;
            background: rgba(255, 255, 255, 0.8);
            padding: 5px 10px;
            border-radius: 20px;
        `;

    sliderContainer.appendChild(counter);

    // Update counter
    function updateCounter() {
      const current = testimonialsSwiper.realIndex + 1;
      const total = testimonialsSwiper.slides.length - 2; // Account for loop clones
      counter.textContent = `${current} / ${total}`;
    }

    testimonialsSwiper.on("slideChange", updateCounter);
    updateCounter(); // Initial update
  }

  // Uncomment to add slide counter
  // addSlideCounter();

  // Optional: Add CSS for better transitions
  const style = document.createElement("style");
  style.textContent = `
        .testimonials-slider {
            transition: height 0.3s ease;
        }
        
        .swiper-slide {
            opacity: 0.7;
            transform: scale(0.9);
            transition: all 0.5s ease;
        }
        
        .swiper-slide-active {
            opacity: 1;
            transform: scale(1);
        }
        
        /* Optional: Add gradient fade effect at edges */
        .testimonials-container:before,
        .testimonials-container:after {
            content: '';
            position: absolute;
            top: 0;
            width: 50px;
            height: 100%;
            z-index: 5;
            pointer-events: none;
        }
        
        .testimonials-container:before {
            left: 0;
            background: linear-gradient(to right, var(--surface-color), transparent);
        }
        
        .testimonials-container:after {
            right: 0;
            background: linear-gradient(to left, var(--surface-color), transparent);
        }
        
        @media (max-width: 991px) {
            .testimonials-container:before,
            .testimonials-container:after {
                display: none;
            }
        }
    `;
  document.head.appendChild(style);

  // Optional: Add random order on each load
  function shuffleTestimonials() {
    const wrapper = document.querySelector(".swiper-wrapper");
    const slides = Array.from(wrapper.querySelectorAll(".swiper-slide"));

    // Shuffle array
    for (let i = slides.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      wrapper.appendChild(slides[j]);
    }

    // Update Swiper
    testimonialsSwiper.update();
  }

  // Uncomment to shuffle testimonials on each load
  // shuffleTestimonials();

  // Handle window resize
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      testimonialsSwiper.update();
    }, 250);
  });
});

//==================================== THIS TYPEWRITER SECTION JS CODE

// Typewriter Effect for Hero Section - FIXED CURSOR MOVEMENT
document.addEventListener("DOMContentLoaded", function () {
  const typewriterContainer = document.querySelector(".typewriter-container");
  const typewriterText = document.querySelector(".typewriter-text");

  if (!typewriterContainer || !typewriterText) {
    console.warn("Typewriter elements not found.");
    return;
  }

  // Typewriter configuration
  const words = ["creator", "builder", "learner", "developer"];
  const typingSpeed = 100; // ms per letter typing
  const erasingSpeed = 50; // ms per letter erasing
  const pauseBetweenWords = 3000; // 2 seconds pause when word is complete
  const pauseBetweenCycles = 1000; // 0.5 second pause before starting next word

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isTyping = true;
  let isPaused = false;

  // Create a separate cursor element that we can control
  const cursorElement = document.createElement("span");
  cursorElement.className = "typewriter-cursor";
  cursorElement.textContent = "";
  typewriterContainer.appendChild(cursorElement);

  // Function to update cursor position
  function updateCursorPosition() {
    // Get the computed style of the text
    const textWidth = typewriterText.offsetWidth;

    // Position cursor right after the text
    const cursorOffset = textWidth + 2; // Add 2px spacing

    // Update cursor position
    cursorElement.style.left = `${cursorOffset}px`;
  }

  // Initialize cursor position
  updateCursorPosition();

  // Start the typewriter effect
  function typeWriter() {
    if (isPaused) return;

    const currentWord = words[wordIndex];

    if (!isDeleting) {
      // TYPING FORWARD - cursor moves with each letter
      typewriterText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;

      // Update cursor position immediately
      updateCursorPosition();

      // Remove blinking during typing
      cursorElement.classList.remove("blinking");

      if (charIndex === currentWord.length) {
        // Word is complete - PAUSE for 2 seconds with blinking cursor
        isPaused = true;
        isTyping = false;

        // Add blinking class for pause period
        cursorElement.classList.add("blinking");

        setTimeout(() => {
          isPaused = false;
          isDeleting = true;
          isTyping = false;

          // Remove blinking when starting to erase
          cursorElement.classList.remove("blinking");

          // Start erasing
          setTimeout(typeWriter, 100);
        }, pauseBetweenWords);
        return;
      }
    } else {
      // ERASING BACKWARD - cursor moves backward with each deletion
      typewriterText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;

      // Update cursor position
      updateCursorPosition();

      // Remove blinking during erasing
      cursorElement.classList.remove("blinking");

      if (charIndex === 0) {
        // Word is fully erased
        isDeleting = false;
        isTyping = true;
        wordIndex = (wordIndex + 1) % words.length;

        // Clear text completely
        typewriterText.textContent = "";
        updateCursorPosition();

        // Pause before starting next word
        setTimeout(() => {
          typeWriter();
        }, pauseBetweenCycles);
        return;
      }
    }

    // Continue typing/erasing
    const speed = isDeleting ? erasingSpeed : typingSpeed;
    setTimeout(typeWriter, speed);
  }

  // Add CSS for cursor movement and blinking
  const style = document.createElement("style");
  style.textContent = `
    .typewriter-container {
      position: relative; /* For absolute positioning of cursor */
    }
    
    .typewriter-text {
      position: relative;
      color: var(--surface-color);
      font-weight: 600;
      min-width: 200px;
      display: inline-block;
    }
    
    /* Separate cursor element */
    .typewriter-cursor {
      position: absolute;
      top: 0;
      left: 0;
      color: white;
      font-weight: 300;
      opacity: 1;
      transition: left 0.1s ease; /* Smooth cursor movement */
      pointer-events: none; /* Don't interfere with mouse events */
    }
    
    /* Blinking only during pause */
    .typewriter-cursor.blinking {
      animation: blink 1s infinite;
    }
    
    /* No blinking during typing/erasing */
    .typewriter-cursor:not(.blinking) {
      animation: none;
    }
    
    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
    
    /* Force text to be visible for measurements */
    .typewriter-text {
      visibility: visible !important;
      display: inline-block !important;
    }
  `;
  document.head.appendChild(style);

  // Add active class to container
  typewriterContainer.classList.add("typewriter-active");

  // Start typewriter after a short delay
  setTimeout(() => {
    // Ensure text starts empty
    typewriterText.textContent = "";
    updateCursorPosition(); // Initialize cursor at start

    // Start typing
    setTimeout(typeWriter, 500);
  }, 1500);

  // Optional: Pause on hover
  let hoverTimeout;

  typewriterContainer.addEventListener("mouseenter", function () {
    if (!isPaused) {
      isPaused = true;

      // Show blinking cursor when hovered during typing/erasing
      if (isTyping || isDeleting) {
        cursorElement.classList.add("blinking");
      }
    }
  });

  typewriterContainer.addEventListener("mouseleave", function () {
    if (isPaused) {
      // Wait a moment before resuming
      clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(() => {
        isPaused = false;

        // Remove blinking if we're not at pause point
        if (!(charIndex === words[wordIndex]?.length && !isDeleting)) {
          cursorElement.classList.remove("blinking");
        }

        // Continue typewriter
        typeWriter();
      }, 300);
    }
  });

  // Reset typewriter when page becomes visible again
  document.addEventListener("visibilitychange", function () {
    if (!document.hidden) {
      // Reset the typewriter effect
      wordIndex = 0;
      charIndex = 0;
      isDeleting = false;
      isTyping = true;
      isPaused = false;
      typewriterText.textContent = "";
      cursorElement.classList.remove("blinking");

      // Recalculate cursor position
      setTimeout(updateCursorPosition, 50);

      // Restart after a short delay
      setTimeout(() => {
        typeWriter();
      }, 1000);
    } else {
      // Pause when page is hidden
      isPaused = true;
    }
  });

  // Handle window resize to recalculate cursor position
  window.addEventListener("resize", function () {
    updateCursorPosition();
  });
});

//==================================== THE SCREEN SLIDE ADJUSTEMENT JS CODE

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");

      // Only handle internal section links
      if (targetId.startsWith("#")) {
        const targetSection = document.querySelector(targetId);
        if (!targetSection) return;

        e.preventDefault();

        // Height of hero section (important!)
        const hero = document.querySelector("#home");
        const heroHeight = hero ? hero.offsetHeight : 0;

        // Calculate exact scroll position
        const targetPosition =
          targetSection.getBoundingClientRect().top + window.pageYOffset;

        // If clicking anything except home, ensure hero is fully passed
        const finalScrollPosition =
          targetId === "#home" ? 0 : Math.max(targetPosition, heroHeight);

        window.scrollTo({
          top: finalScrollPosition,
          behavior: "smooth",
        });
      }
    });
  });
});

//==================================== THE SIDEBAR LINKS AUTO ACTIVE BY SCROLLING JS CODE

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function activateNavLink() {
    let currentSectionId = "";

    const scrollPosition = window.pageYOffset + window.innerHeight / 3;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  }

  // Run on scroll
  window.addEventListener("scroll", activateNavLink);

  // Run once on load (important)
  activateNavLink();
});

//==================================== THE Map ADJUSTMENT JS CODE

document.addEventListener("DOMContentLoaded", () => {
  // KDA Kohat, Pakistan coordinates
  const KDA_KOHAT = [33.5866, 71.4422];

  // Initialize map
  const map = L.map("map", {
    center: KDA_KOHAT,
    zoom: 15,
    zoomControl: false, // you already have custom buttons
    scrollWheelZoom: true,
    dragging: true,
    tap: true,
  });

  // OpenStreetMap tiles (free & reliable)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  // Marker on KDA Kohat
  const marker = L.marker(KDA_KOHAT)
    .addTo(map)
    .bindPopup("<strong>KDA Kohat</strong><br>Khyber Pakhtunkhwa, Pakistan")
    .openPopup();

  // ---- Custom map controls (your buttons) ----

  document.getElementById("mapZoomIn").addEventListener("click", () => {
    map.zoomIn();
  });

  document.getElementById("mapZoomOut").addEventListener("click", () => {
    map.zoomOut();
  });

  document.getElementById("mapFullscreen").addEventListener("click", () => {
    const mapContainer = document.querySelector(".map-container");

    if (!document.fullscreenElement) {
      mapContainer.requestFullscreen();
    } else {
      document.exitFullscreen();
    }

    // Fix map resize after fullscreen toggle
    setTimeout(() => {
      map.invalidateSize();
    }, 300);
  });

  // Optional: "View larger map" button
  const viewMapBtn = document.getElementById("viewLargerMap");
  if (viewMapBtn) {
    viewMapBtn.addEventListener("click", () => {
      window.open("https://www.google.com/maps?q=33.5866,71.4422", "_blank");
    });
  }
});

//==================================== BACK TO TOP JS CODE

document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");
  const heroSection = document.getElementById("home");

  if (!backToTop || !heroSection) return;

  const heroHeight = heroSection.offsetHeight;

  window.addEventListener("scroll", () => {
    if (window.scrollY > heroHeight - 100) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

//==================================== SIDEBAR TOGGLE FOR MOBILE
document.addEventListener("DOMContentLoaded", function () {
  const sidebarToggle = document.getElementById("sidebarToggle");
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sidebarOverlay = document.getElementById("sidebarOverlay");

  // Initialize based on screen size
  function initSidebar() {
    if (window.innerWidth <= 800) {
      // Mobile: hide sidebar, show toggle button
      navbar.classList.remove("active");
      if (sidebarOverlay) sidebarOverlay.classList.remove("active");
      sidebarToggle.style.display = "flex";
      sidebarToggle.querySelector("i").className = "bi bi-list";
    } else {
      // Desktop: show sidebar, hide toggle button
      navbar.classList.add("active");
      if (sidebarOverlay) sidebarOverlay.classList.remove("active");
      sidebarToggle.style.display = "none";
    }
  }

  // Toggle sidebar when button is clicked
  sidebarToggle.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent event bubbling

    navbar.classList.toggle("active");
    if (sidebarOverlay) sidebarOverlay.classList.toggle("active");

    // Change icon based on state
    const icon = this.querySelector("i");
    if (navbar.classList.contains("active")) {
      icon.className = "bi bi-x";
    } else {
      icon.className = "bi bi-list";
      if (sidebarOverlay) sidebarOverlay.classList.remove("active");
    }
  });

  // Close sidebar when clicking on overlay
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", function () {
      navbar.classList.remove("active");
      this.classList.remove("active");
      sidebarToggle.querySelector("i").className = "bi bi-list";
    });
  }

  // Close sidebar when a nav link is clicked (on mobile)
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 800) {
        navbar.classList.remove("active");
        if (sidebarOverlay) sidebarOverlay.classList.remove("active");
        sidebarToggle.querySelector("i").className = "bi bi-list";
      }
    });
  });

  // Close sidebar when clicking outside (except on toggle button)
  document.addEventListener("click", function (event) {
    if (
      window.innerWidth <= 800 &&
      navbar.classList.contains("active") &&
      !navbar.contains(event.target) &&
      !sidebarToggle.contains(event.target)
    ) {
      navbar.classList.remove("active");
      if (sidebarOverlay) sidebarOverlay.classList.remove("active");
      sidebarToggle.querySelector("i").className = "bi bi-list";
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    initSidebar();
  });

  // Initial setup
  initSidebar();

  // Add smooth transition to sidebar
  navbar.style.transition = "transform 0.3s ease";
});
