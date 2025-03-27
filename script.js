// Highlight cards content
const highlights = [
    {
        title: "Education",
        content: "Currently pursuing my degree in Computer Science",
        link: "education.html"
    },
    {
        title: "Skills",
        content: "Proficient in web development and design",
        link: "skills.html"
    }
];

// Populate highlight cards
document.addEventListener('DOMContentLoaded', function() {
    const highlightContainer = document.querySelector('.highlight-cards');
    
    highlights.forEach(highlight => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${highlight.title}</h3>
            <p>${highlight.content}</p>
            <a href="${highlight.link}">Learn More</a>
        `;
        highlightContainer.appendChild(card);
    });
    
    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Form validation logic
            alert('Thank you for your message!');
            this.reset();
        });
    }
    
    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const width = bar.textContent;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});