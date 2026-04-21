// SIMPLE JS - COPIES & WORKS
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Dark Mode (Click moon button)
    document.getElementById('themeToggle').addEventListener('click', function(){
        document.body.classList.toggle('dark-mode');
        this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

console.log('JS LOADED!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Ready!');
    
    // Dark Mode
    document.getElementById('themeToggle').onclick

// Week 3 JavaScript - Interactive Portfolio
console.log('🎉 Interactive Portfolio Loaded!');

// Global variables
let visitorCount = localStorage.getItem('visitorCount') || 0;
visitorCount++;
localStorage.setItem('visitorCount', visitorCount);
document.getElementById('visitorCount').textContent = visitorCount;

// 1. DARK MODE TOGGLE (Local Storage)
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function initTheme() {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    if (savedTheme) {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }
}

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDark);
}

// 2. IMAGE GALLERY (3 Interactive Images)
const galleryImages = document.querySelectorAll('.profile-img');
const gallery = document.getElementById('imageGallery');

galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        galleryImages.forEach(i => i.classList.remove('active'));
        img.classList.add('active');
        
        // Dynamic title change
        const titles = ['Web Developer', 'Android Developer', 'Full Stack Dev'];
        document.getElementById('dynamicTitle').textContent = titles[index];
    });
});

// 3. STATS PANEL (Toggle Animation)
const statsBtn = document.getElementById('statsBtn');
const statsPanel = document.getElementById('statsPanel');

statsBtn.addEventListener('click', () => {
    statsPanel.classList.toggle('hidden');
    statsBtn.textContent = statsPanel.classList.contains('hidden') ? 'Show Stats' : 'Hide Stats';
});

// 4. DYNAMIC INTERNSHIPS LIST
const internshipsData = [
    { company: 'Code Alpha', domain: 'Web Development', id: 1 },
    { company: 'Cognifyz', domain: 'Web Development', id: 2 },
    { company: 'Codec Technologies', domain: 'Android App Development', id: 3 },
    { company: 'Codtech Pvt Ltd', domain: 'Web Development', id: 4 },
    { company: 'Eduskill', domain: 'Fortinet Cybersecurity', id: 5 },
    { company: 'Android Development', domain: 'Mobile Applications', id: 6 }
];

function renderInternships() {
    const grid = document.getElementById('internshipsGrid');
    grid.innerHTML = '';
    
    internshipsData.forEach(internship => {
        const card = document.createElement('div');
        card.className = 'internship-card';
        card.innerHTML = `
            <h3>${internship.company}</h3>
            <p>${internship.domain}</p>
            <button onclick="removeInternship(${internship.id})" class="btn btn-danger btn-sm">Remove</button>
        `;
        grid.appendChild(card);
    });
    
    document.getElementById('internshipBadge').textContent = internshipsData.length;
}

// Add new internship
document.getElementById('addInternship').addEventListener('click', () => {
    const company = prompt('Enter company name:');
    const domain = prompt('Enter domain:');
    
    if (company && domain) {
        const newId = Math.max(...internshipsData.map(i => i.id)) + 1;
        internshipsData.push({ company, domain, id: newId });
        renderInternships();
        saveInternships();
    }
});

function removeInternship(id) {
    if (confirm('Remove this internship?')) {
        const index = internshipsData.findIndex(i => i.id === id);
        internshipsData.splice(index, 1);
        renderInternships();
        saveInternships();
    }
}

// 5. DYNAMIC SKILLS
const skillsData = {
    frontend: ['HTML5', 'CSS3', 'JavaScript'],
    mobile: ['Android Studio'],
    tools: ['VS Code', 'GitHub']
};

function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    grid.innerHTML = '';
    
    Object.entries(skillsData).forEach(([category, skills]) => {
        const div = document.createElement('div');
        div.className = 'skill-category';
        div.innerHTML = `
            <h3>${category.toUpperCase()}</h3>
            <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
        `;
        grid.appendChild(div);
    });
}

// 6. FORM VALIDATION (Real-time + Submit)
const contactForm = document.getElementById('contactForm');
const formErrors = document.getElementById('formErrors');
const formSuccess = document.getElementById('formSuccess');

function showError(message) {
    formErrors.innerHTML = `<div class="error">${message}</div>`;
    formErrors.style.display = 'block';
    formSuccess.style.display = 'none';
}

function showSuccess(name) {
    formErrors.style.display = 'none';
    document.getElementById('submittedName').textContent = name;
    formSuccess.style.display = 'block';
    contactForm.reset();
}

function validateForm() {
    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const message = document.getElementById('userMessage').value.trim();
    
    if (name.length < 2) {
        showError('Name must be at least 2 characters');
        return false;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        showError('Please enter a valid email address');
        return false;
    }
    
    if (message.length < 10) {
        showError('Message must be at least 10 characters');
        return false;
    }
    
    showSuccess(name);
    return false; // Prevent actual submit
}

// Real-time validation
['userName', 'userEmail', 'userMessage'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
        formErrors.style.display = 'none';
    });
});

contactForm.addEventListener('submit', validateForm);

// 7. SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// 8. STORAGE FUNCTIONS
function saveInternships() {
    localStorage.setItem('internships', JSON.stringify(internshipsData));
}

function loadInternships() {
    const saved = localStorage.getItem('internships');
    if (saved) {
        internshipsData.length = 0;
        JSON.parse(saved).forEach(item => internshipsData.push(item));
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadInternships();
    renderInternships();
    renderSkills();
    
    // Dynamic title animation
    const titles = ['Web Developer', 'Android Developer', 'Frontend Dev'];
    let titleIndex = 0;
    setInterval(() => {
        document.getElementById('dynamicTitle').textContent = titles[titleIndex];
        titleIndex = (titleIndex + 1) % titles.length;
    }, 3000);
});

// Event listeners
themeToggle.addEventListener('click', toggleDarkMode);
