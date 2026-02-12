// ============================================
// ENHANCED CAROUSEL WITH MANUAL & AUTO CONTROLS
// ============================================

class Carousel {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) return;

        this.slides = this.container.querySelectorAll('.carousel-slide');
        this.indicators = document.querySelectorAll('.carousel-indicator');
        this.prevBtn = document.querySelector('.carousel-prev');
        this.nextBtn = document.querySelector('.carousel-next');

        this.currentIndex = 0;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000; // 5 seconds

        this.init();
    }

    init() {
        // Set up event listeners
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }

        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }

        // Indicator clicks
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goTo(index));
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });

        // Touch/swipe support
        this.setupTouchControls();

        // Start autoplay
        this.startAutoPlay();

        // Pause on hover
        this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.container.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    goTo(index) {
        // Remove active class from current slide and indicator
        this.slides[this.currentIndex].classList.remove('active');
        this.indicators[this.currentIndex].classList.remove('active');

        // Update index
        this.currentIndex = index;

        // Add active class to new slide and indicator
        this.slides[this.currentIndex].classList.add('active');
        this.indicators[this.currentIndex].classList.add('active');

        // Reset autoplay
        this.resetAutoPlay();
    }

    next() {
        const nextIndex = (this.currentIndex + 1) % this.slides.length;
        this.goTo(nextIndex);
    }

    prev() {
        const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.goTo(prevIndex);
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.next();
        }, this.autoPlayDelay);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }

    setupTouchControls() {
        let touchStartX = 0;
        let touchEndX = 0;

        this.container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        this.container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, { passive: true });

        const handleSwipe = () => {
            const swipeThreshold = 50;
            if (touchEndX < touchStartX - swipeThreshold) {
                this.next();
            }
            if (touchEndX > touchStartX + swipeThreshold) {
                this.prev();
            }
        };

        this.handleSwipe = handleSwipe;
    }
}

// ============================================
// SECTION NAVIGATION
// ============================================

class SectionNavigator {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('.section-content');

        this.init();
    }

    init() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const sectionName = link.getAttribute('data-section');
                this.showSection(sectionName);
            });
        });
    }

    showSection(sectionName) {
        // Hide all sections
        this.sections.forEach(section => {
            section.classList.add('hidden');
        });

        // Remove active class from all nav links
        this.navLinks.forEach(link => {
            link.classList.remove('nav-link-active');
        });

        // Show selected section
        const targetSection = document.getElementById(`${sectionName}-section`);
        if (targetSection) {
            targetSection.classList.remove('hidden');

            // Add animation
            targetSection.style.animation = 'none';
            setTimeout(() => {
                targetSection.style.animation = '';
            }, 10);
        }

        // Add active class to clicked nav link
        const activeLink = document.querySelector(`[data-section="${sectionName}"]`);
        if (activeLink) {
            activeLink.classList.add('nav-link-active');
        }

        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

class ScrollAnimator {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, this.observerOptions);

        // Observe all elements with data-animate attribute
        const animatedElements = document.querySelectorAll('[data-animate]');
        animatedElements.forEach(el => observer.observe(el));
    }
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================

function initHeaderScroll() {
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('shadow-md');
        } else {
            header.classList.remove('shadow-md');
        }

        lastScroll = currentScroll;
    });
}

// ============================================
// INITIALIZE ON DOM READY
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousel
    const carousel = new Carousel('.carousel-container');

    // Initialize section navigation
    const navigator = new SectionNavigator();

    // Initialize scroll animations
    const scrollAnimator = new ScrollAnimator();

    // Initialize smooth scroll
    initSmoothScroll();

    // Initialize header scroll effect
    initHeaderScroll();

    // Log initialization
    console.log('✨ Naturalex initialized successfully');
});

// ============================================
// EXPORT FOR POTENTIAL MODULE USE
// ============================================

export { Carousel, SectionNavigator, ScrollAnimator };
