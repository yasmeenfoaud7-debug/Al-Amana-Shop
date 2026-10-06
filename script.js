 document.addEventListener('DOMContentLoaded', () => {
    
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '80px';
                navLinks.style.right = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'rgba(3, 7, 18, 0.98)';
                navLinks.style.padding = '20px';
                navLinks.style.borderBottom = '1px solid #1f2937';
                navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.5)';
            }
        });


        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            });
        });
    }

    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('تم إرسال طلبك بنجاح إلى سنترال الأمانة! سيتم التواصل معك في أقرب وقت ممكن.');
            contactForm.reset();
        });
    }
});