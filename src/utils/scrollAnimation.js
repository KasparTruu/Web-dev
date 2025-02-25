/**
* Scroll Animation Utility
* 
* Uses Intersection Observer API to trigger animations when elements enter the viewport
*/

const defaultOptions = {
threshold: 0.1,
once: true,
animationClass: 'animate-fade-up',
delay: 0,
duration: 1000,
rootMargin: '0px',
scrollTriggerOnly: true, // Only trigger on active scrolling
scrollTimeout: 150 // Time in ms to consider scroll as "inactive"
};

/**
* Initialize scroll animation observer for elements with data-scroll attribute
* @param {Object} customOptions - Override default options
* @returns {Function} - Cleanup function to disconnect observer
*/
export function initScrollAnimation(customOptions = {}) {
const options = { ...defaultOptions, ...customOptions };
const animatedElements = [];

// Scroll state management
let isScrolling = false;
let scrollingDown = false;
let lastScrollY = window.scrollY;
let scrollTimeout;

// Detect scroll state and direction
const handleScroll = () => {
isScrolling = true;
scrollingDown = window.scrollY > lastScrollY;
lastScrollY = window.scrollY;

clearTimeout(scrollTimeout);
scrollTimeout = setTimeout(() => {
    isScrolling = false;
}, options.scrollTimeout);
};

// Add scroll listener
window.addEventListener('scroll', handleScroll);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    // Check if element is intersecting AND (scrolling is disabled as a trigger OR user is actively scrolling down)
    if (entry.isIntersecting && (!options.scrollTriggerOnly || (isScrolling && scrollingDown))) {
        const element = entry.target;
        const delay = element.dataset.delay || options.delay;
        const duration = element.dataset.duration || options.duration;
        const animation = element.dataset.animation || options.animationClass;
        
        // Add animation classes
        element.classList.add(
        animation,
        'animate-once',
        `animate-duration-${duration}`,
        `animate-delay-${delay}`
        );
        
        // Track elements for cleanup
        animatedElements.push(element);
        
        // Unobserve if animation should only happen once
        if (options.once) {
        observer.unobserve(element);
        }
    } else if (!options.once) {
        // Remove animation classes when element leaves viewport
        const element = entry.target;
        const animation = element.dataset.animation || options.animationClass;
        
        element.classList.remove(
        animation,
        'animate-once',
        `animate-duration-${options.duration}`,
        `animate-delay-${options.delay}`
        );
    }
    });
}, {
    threshold: options.threshold,
    rootMargin: options.rootMargin
});

// Select all elements with data-scroll attribute
const elements = document.querySelectorAll('[data-scroll]');
elements.forEach(el => observer.observe(el));

// Return cleanup function
return () => {
    // Remove scroll event listener
    window.removeEventListener('scroll', handleScroll);
    clearTimeout(scrollTimeout);
    
    // Disconnect observer
    observer.disconnect();
    animatedElements.forEach(el => {
    const animation = el.dataset.animation || options.animationClass;
    el.classList.remove(
        animation,
        'animate-once',
        `animate-duration-${options.duration}`,
        `animate-delay-${options.delay}`
    );
    });
};
}

/**
* Vue composable for using scroll animations in components
* @param {Object} options - Animation options
* @returns {Object} - Methods for component usage
*/
export function useScrollAnimation(options = {}) {
let cleanup = null;

const setupScrollAnimation = () => {
    cleanup = initScrollAnimation(options);
};

const cleanupScrollAnimation = () => {
    if (cleanup) {
    cleanup();
    cleanup = null;
    }
};

return {
    setupScrollAnimation,
    cleanupScrollAnimation
};
}

/**
* Add scroll animation to a specific element
* @param {HTMLElement} element - Element to animate
* @param {Object} options - Animation options
*/
export function addScrollAnimation(element, options = {}) {
const mergedOptions = { ...defaultOptions, ...options };

// Scroll state management
let isScrolling = false;
let scrollingDown = false;
let lastScrollY = window.scrollY;
let scrollTimeout;

// Detect scroll state and direction
const handleScroll = () => {
isScrolling = true;
scrollingDown = window.scrollY > lastScrollY;
lastScrollY = window.scrollY;

clearTimeout(scrollTimeout);
scrollTimeout = setTimeout(() => {
    isScrolling = false;
}, mergedOptions.scrollTimeout);
};

// Add scroll listener
window.addEventListener('scroll', handleScroll);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    // Check if element is intersecting AND (scrolling is disabled as a trigger OR user is actively scrolling down)
    if (entry.isIntersecting && (!mergedOptions.scrollTriggerOnly || (isScrolling && scrollingDown))) {
        const delay = options.delay || mergedOptions.delay;
        const duration = options.duration || mergedOptions.duration;
        const animation = options.animationClass || mergedOptions.animationClass;
        
        element.classList.add(
        animation,
        'animate-once',
        `animate-duration-${duration}`,
        `animate-delay-${delay}`
        );
        
        if (mergedOptions.once) {
        observer.unobserve(element);
        }
    } else if (!mergedOptions.once) {
        element.classList.remove(
        mergedOptions.animationClass,
        'animate-once',
        `animate-duration-${mergedOptions.duration}`,
        `animate-delay-${mergedOptions.delay}`
        );
    }
    });
}, {
    threshold: mergedOptions.threshold,
    rootMargin: mergedOptions.rootMargin
});

observer.observe(element);

// Return cleanup function
return () => {
window.removeEventListener('scroll', handleScroll);
clearTimeout(scrollTimeout);
observer.disconnect();
};
}

