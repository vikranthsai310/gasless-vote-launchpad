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
          // Add staggered animation to children for elements with data-stagger attribute
          if (entry.target.hasAttribute('data-stagger')) {
            const children = entry.target.querySelectorAll('[data-staggered]');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animated');
              }, 150 * index); // 150ms delay between each element
            });
          }
          
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all sections and elements with data-animate attribute
    document.querySelectorAll('section, [data-animate]').forEach(element => {
      observer.observe(element);
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
