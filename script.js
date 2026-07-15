(function() {
    // ----- Get all sections -----
    const sections = {
        hero: document.getElementById('hero'),
        about: document.getElementById('about'),
        skills: document.getElementById('skills'),
        projects: document.getElementById('projects'),
        contact: document.getElementById('contact')
    };

    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    const footerLinks = document.querySelectorAll('.footer-col a[data-section]');
    const allNavLinks = [...navLinks, ...footerLinks];
    
    // Get contact trigger button
    const contactTriggers = document.querySelectorAll('.contact-trigger');

    // Function to show only one section
    function showSection(sectionId) {
        // Hide all sections
        Object.keys(sections).forEach(key => {
            const section = sections[key];
            if (section) {
                section.classList.add('hidden');
            }
        });
        
        // Show the target section
        const targetSection = sections[sectionId];
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
        
        // Update active class on nav links
        allNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            }
        });
        
        // Close hamburger menu
        const navLinksContainer = document.getElementById('navLinks');
        if (navLinksContainer) {
            navLinksContainer.classList.remove('active');
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Add click handlers to all navigation links
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            if (sectionId && sections[sectionId]) {
                showSection(sectionId);
            }
        });
    });

    // Handle contact trigger buttons
    contactTriggers.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('contact');
        });
    });

    // ----- HAMBURGER MENU -----
    const hamburger = document.getElementById('hamburger');
    const navLinksContainer = document.getElementById('navLinks');

    if (hamburger && navLinksContainer) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinksContainer.classList.toggle('active');
        });

        // Close menu when a nav link is clicked
        navLinksContainer.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navLinksContainer.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = navLinksContainer.contains(event.target) || hamburger.contains(event.target);
            if (!isClickInside && navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
            }
        });
    }

    // ----- CONTACT FORM -----
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thanks for your message! (demo)');
            form.reset();
        });
    }

    // ----- INITIAL STATE: All sections visible -----
    // Make sure all sections are visible initially
    Object.keys(sections).forEach(key => {
        const section = sections[key];
        if (section) {
            section.classList.remove('hidden');
        }
    });

    // Set Home as active in menu
    allNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === 'hero') {
            link.classList.add('active');
        }
    });

    console.log('Portfolio loaded! All sections visible initially.');
    console.log('Click any menu item to show only that section.');

})();