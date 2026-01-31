document.addEventListener('DOMContentLoaded', function() {
    // Sidebar navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
    // Tab navigation
    const tabs = document.querySelectorAll('.nav-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => {
  c.style.opacity = 0;
  c.style.transform = 'translateY(20px)';
  setTimeout(() => c.classList.remove('active'), 300);
});

this.classList.add('active');
const activeContent = document.getElementById(this.dataset.tab);
activeContent.classList.add('active');
setTimeout(() => {
  activeContent.style.opacity = 1;
  activeContent.style.transform = 'translateY(0)';
}, 50);
        });
    });

    // Project card hover effects
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });

    // Enhanced card interactions
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const x = e.clientX - card.getBoundingClientRect().left;
            const y = e.clientY - card.getBoundingClientRect().top;
            card.style.transform = `
                perspective(1000px)
                rotateX(${(y - card.offsetHeight/2) / 15}deg)
                rotateY(${-(x - card.offsetWidth/2) / 15}deg)
                translateZ(10px)
            `;
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });

    // Project card click to expand
    document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', function() {
    this.classList.toggle('expanded');
    const details = this.querySelector('.project-details');
    if(details) {
      details.style.maxHeight = details.style.maxHeight ? null : `${details.scrollHeight}px`;
    }
  });
});
});
