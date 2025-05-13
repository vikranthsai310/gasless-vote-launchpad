// Animation observer for section animations with enhanced options
export const setupSectionAnimations = () => {
  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Trigger slightly earlier for smoother appearance
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add animation classes when section is in view
        if (entry.isIntersecting) {
          // Check for animation type attribute
          const animationType = entry.target.getAttribute('data-animation-type') || 'fade-up';
          
          // Add staggered animation to children for elements with data-stagger attribute
          if (entry.target.hasAttribute('data-stagger')) {
            const children = entry.target.querySelectorAll('[data-staggered]');
            children.forEach((child, index) => {
              // Get child animation type if specified
              const childAnimationType = child.getAttribute('data-animation-type') || animationType;
              setTimeout(() => {
                child.classList.add('animated', childAnimationType);
              }, 150 * index); // 150ms delay between each element
            });
          }
          
          // Add animation classes to the element
          entry.target.classList.add('visible', animationType);
        }
      });
    }, observerOptions);

    // Observe all elements with animation attributes
    document.querySelectorAll('section, [data-animate], .card, .feature-item, h2, h3, p, img, .list-item, .btn, .icon').forEach(element => {
      // Automatically add data-animate attribute if not already present and not in an excluded list
      if (!element.hasAttribute('data-animate') && 
          !element.hasAttribute('data-no-animation') && 
          !element.hasAttribute('data-staggered')) {
        element.setAttribute('data-animate', '');
      }
      
      if (element.hasAttribute('data-animate') || element.tagName === 'SECTION') {
        observer.observe(element);
      }
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    document.querySelectorAll('section, [data-animate]').forEach(element => {
      element.classList.add('visible');
    });
    document.querySelectorAll('[data-staggered]').forEach(element => {
      element.classList.add('animated');
    });
  }
};

// Add parallax effect for background elements
export const setupParallaxEffect = () => {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  if (parallaxElements.length > 0) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-parallax') || '0.1';
        const yPos = -(scrollY * parseFloat(speed));
        (element as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    });
  }
};

// Generate animation classes based on scroll position
export const setupScrollAnimations = () => {
  // Add animation classes to the document
  const style = document.createElement('style');
  style.textContent = `
    /* Base animation classes */
    .animated, .visible {
      animation-duration: 0.6s;
      animation-fill-mode: both;
    }
    
    /* Fade up animation - default */
    .fade-up {
      animation-name: fadeUp;
    }
    
    /* Fade in animation */
    .fade-in {
      animation-name: fadeIn;
    }
    
    /* Slide in from left */
    .slide-left {
      animation-name: slideLeft;
    }
    
    /* Slide in from right */
    .slide-right {
      animation-name: slideRight;
    }
    
    /* Zoom in animation */
    .zoom-in {
      animation-name: zoomIn;
    }
    
    /* Bounce animation */
    .bounce {
      animation-name: bounce;
    }
    
    /* Rotate in animation */
    .rotate-in {
      animation-name: rotateIn;
    }
    
    /* Flip animation */
    .flip {
      animation-name: flip;
      transform-style: preserve-3d;
    }
    
    /* Animation keyframes */
    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translate3d(0, 40px, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    
    @keyframes slideLeft {
      from {
        opacity: 0;
        transform: translate3d(-60px, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    
    @keyframes slideRight {
      from {
        opacity: 0;
        transform: translate3d(60px, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    
    @keyframes zoomIn {
      from {
        opacity: 0;
        transform: scale3d(0.8, 0.8, 0.8);
      }
      to {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-20px);
      }
      60% {
        transform: translateY(-10px);
      }
    }
    
    @keyframes rotateIn {
      from {
        opacity: 0;
        transform: rotate3d(0, 0, 1, -45deg);
      }
      to {
        opacity: 1;
        transform: rotate3d(0, 0, 1, 0);
      }
    }
    
    @keyframes flip {
      from {
        opacity: 0;
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      }
      40% {
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      }
      60% {
        opacity: 1;
        transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      }
      80% {
        transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
      }
      to {
        transform: perspective(400px);
      }
    }
    
    /* Initial state - hide elements before animation */
    [data-animate], section:not(.no-animate) {
      opacity: 0;
    }
    
    /* Elements that should not animate */
    .no-animate, [data-no-animation] {
      opacity: 1 !important;
      transform: none !important;
      animation: none !important;
    }
  `;
  
  document.head.appendChild(style);
};

// Initialize all animations
export const initializeAnimations = () => {
  setupScrollAnimations();
  setupSectionAnimations();
  setupParallaxEffect();
};
