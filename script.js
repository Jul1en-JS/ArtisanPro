console.log("JS connecté !");

// ===============================
// 1. Bouton Appel Dynamique
// ===============================

const btnCall = document.querySelector('.btn-call');

if (btnCall) {
    btnCall.addEventListener('click', (event) => {
        const isMobile = /iPhone|Android|iPad|Mobile/i.test(navigator.userAgent);

        if (!isMobile) {
            event.preventDefault(); 
            // Redirection vers la page Contact
            window.location.href = 'contact.html';
        }
        // Sinon, sur mobile, le lien téléphonique fonctionne normalement
    });
}


// ===============================
// 2. Animation au scroll
// ===============================

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

reveals.forEach(r => observer.observe(r));

// ===============================
// 3. Menu burger
// ===============================

const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

if (burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}

// ===============================
// 4. Devis rapide
// ===============================

const typeService = document.getElementById("type-service");
const urgence = document.getElementById("urgence");
const estimation = document.getElementById("estimation");

if (typeService && urgence) {
    function calculerDevis() {
        let prixBase = 0;

        switch (typeService.value) {
            case "depannage": prixBase = 50; break;
            case "electricite": prixBase = 70; break;
            case "plomberie": prixBase = 60; break;
        }

        if (urgence.value === "urgent") prixBase += 30;

        estimation.textContent = "Estimation : " + prixBase + " €";
    }

    typeService.addEventListener("change", calculerDevis);
    urgence.addEventListener("change", calculerDevis);
}

// ===============================
// 5. Carrousel d'avis
// ===============================

const avisList = document.querySelectorAll('.avis');
let indexAvis = 0;

if (avisList.length > 0) {
    avisList[indexAvis].classList.add('active');

    document.getElementById('next').addEventListener('click', () => {
        avisList[indexAvis].classList.remove('active');
        indexAvis = (indexAvis + 1) % avisList.length;
        avisList[indexAvis].classList.add('active');
    });

    document.getElementById('prev').addEventListener('click', () => {
        avisList[indexAvis].classList.remove('active');
        indexAvis = (indexAvis - 1 + avisList.length) % avisList.length;
        avisList[indexAvis].classList.add('active');
    });
}

// ===============================
// 6. Barre de progression de scroll
// ===============================
const scrollProgress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + "%";
});

// ===============================
// 7. Animations au scroll pour services
// ===============================

const servicesCards = document.querySelectorAll('.service-card');

const observerServices = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

servicesCards.forEach(card => observerServices.observe(card));

// ===============================
// 8. Smooth scroll pour liens internes
// ===============================
const liensMenu = document.querySelectorAll('a[href^="#"]');

liensMenu.forEach(lien => {
    lien.addEventListener("click", function(e) {
        e.preventDefault();
        const cible = document.querySelector(this.getAttribute("href"));
        if (cible) {
            cible.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
        // Ferme le menu burger sur mobile après clic
        const nav = document.getElementById("main-nav");
        const burger = document.getElementById("burger-btn");
        if (nav.classList.contains("open")) {
            nav.classList.remove("open");
            burger.classList.remove("open");
        }
    });
});

// ===============================
// 9. Animation cartes Tarifs au scroll
// ===============================
const tarifCards = document.querySelectorAll('.tarif-card');

const observerTarifs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            tarifCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 200); // 200ms entre chaque carte
            });
        }
    });
}, { threshold: 0.2 });

tarifCards.forEach(card => observerTarifs.observe(card));

// ===============================
// 10. Formulaire Devis Gratuit
// ===============================
const devisForm = document.getElementById('devis-form');
const formMessage = document.getElementById('form-message');

if (devisForm) {
    devisForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Vérification simple des champs requis
        const nom = document.getElementById('nom').value.trim();
        const email = document.getElementById('email').value.trim();
        const tel = document.getElementById('tel').value.trim();
        const service = document.getElementById('service').value;

        if (!nom || !email || !tel || !service) {
            formMessage.textContent = "Veuillez remplir tous les champs obligatoires.";
            formMessage.style.color = "red";
            return;
        }

        // Ici tu peux envoyer les données via fetch/ajax si tu as un backend

        formMessage.textContent = "Merci ! Votre demande a été envoyée avec succès.";
        formMessage.style.color = "green";

        devisForm.reset();
    });
}

// ===============================
// 11. Animation éléments Contact au scroll
// ===============================
const animItems = document.querySelectorAll('.anim');

const observerAnim = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

animItems.forEach(item => observerAnim.observe(item));
