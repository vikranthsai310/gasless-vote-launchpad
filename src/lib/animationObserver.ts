
// Animation observer for section animations
export const setupSectionAnimations = () => {
  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add 'visible' class when section is in view
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: Stop observing after animation is triggered once
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('visible');
    });
  }
};
