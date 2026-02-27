import './style.css'


customElements.define("nav-bar", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <div class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#F5F5F4]/80">
                    <nav class="flex max-w-6xl mx-auto justify-between items-center px-8 lg:px-8 py-8">
                        <div class="logo">
                            <a href="index.html" class="link-unstyled font-semibold text-[clamp(1.15rem,1.3vw,1.35rem)]">
                                Jack Floyd
                            </a>
                        </div>
                        <div class="nav-right flex items-center gap-4">
                           
                                
                                <a href="about.html">About</a>
                            
                            <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
                                <svg id="sunIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                <svg id="moonIcon" style="display: none;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
                `;
    }
});


customElements.define("my-footer", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                    
                    <footer class="border-t border-gray-200 text-gray-400 text-sm">
                      <div class="mx-auto max-w-6xl px-12 py-12 flex justify-between items-center">
                        <p>&copy; 2026</p>
                        <div class="social-links flex gap-4 items-center">
                            <a href="https://github.com/mjfloyd3" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            <a href="https://linkedin.com/in/jackfloyd" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                            <a href="mailto:mjfloyd3@gmail.com" aria-label="Email">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </a>
                        </div>
                      </div>
                    </footer>
               
                `;
    }
});

const navbar = document.querySelector('.fixed.top-0');
const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const html = document.documentElement;

function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
        navbar.classList.remove('bg-[#F5F5F4]/80');
        navbar.classList.add('bg-[#22222E]/80');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        navbar.classList.remove('bg-[#22222E]/80');
        navbar.classList.add('bg-[#F5F5F4]/80');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}

// apply on load
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

// toggle on click
themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
});



const PROJECT_PASSWORD = 'guitar';


// Smooth scrolling for navigation links
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


const passwordModal = document.getElementById('passwordModal');
const passwordForm = document.getElementById('passwordForm');
const passwordInput = document.getElementById('passwordInput');
const errorMessage = document.getElementById('errorMessage');
const closeModal = document.getElementById('closeModal');

document.getElementById('openWork').addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
});

closeModal.addEventListener('click', closeModalHandler);

passwordModal.addEventListener('click', (e) => {
    if (e.target === passwordModal) closeModalHandler();
});

passwordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (passwordInput.value === PROJECT_PASSWORD) {
        sessionStorage.setItem('work_unlocked', 'true');
        closeModalHandler();
        window.location.href = 'work.html';
    } else {
        errorMessage.textContent = 'Incorrect password. Please try again.';
        passwordInput.value = '';
        passwordInput.focus();
    }
});

function openModal() {
    passwordModal.classList.remove('hidden');
    passwordInput.value = '';
    errorMessage.textContent = '';
    setTimeout(() => passwordInput.focus(), 100);
}

function closeModalHandler() {
    passwordModal.classList.add('hidden');
}