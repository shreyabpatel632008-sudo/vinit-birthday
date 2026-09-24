// Smooth scrolling
function scrollToSection(id) {
    const section = document.getElementById(id);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// Gift opening
function openGift() {

    const gift = document.getElementById("giftBox");
    const message = document.getElementById("finalMessage");

    if (!gift || !message) {
        return;
    }

    gift.style.transform = "scale(0.7) rotate(8deg)";
    gift.style.opacity = "0";

    setTimeout(() => {

        gift.style.display = "none";

        message.classList.add("show");

        createConfetti();

        setTimeout(() => {
            message.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 250);

    }, 500);
}


// Confetti
function createConfetti() {

    const container = document.getElementById("confetti");

    if (!container) {
        return;
    }

    const symbols = [
        "❤️",
        "♡",
        "✦",
        "✧",
        "♥"
    ];

    for (let i = 0; i < 90; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti-piece");

        piece.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.fontSize =
            10 + Math.random() * 18 + "px";

        piece.style.animationDuration =
            2 + Math.random() * 3 + "s";

        piece.style.animationDelay =
            Math.random() * 0.8 + "s";

        container.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 6000);
    }
}


// Small music button interaction
const musicToggle = document.getElementById("musicToggle");

if (musicToggle) {

    let musicOn = false;

    musicToggle.addEventListener("click", () => {

        musicOn = !musicOn;

        musicToggle.textContent =
            musicOn ? "🔊" : "♫";

        if (musicOn) {
            musicToggle.title =
                "Music links are available in the playlist below.";
        } else {
            musicToggle.title =
                "Music";
        }

    });
}


// Reveal elements while scrolling
const revealElements =
    document.querySelectorAll(
        ".memory-card, .memory-story, .gallery-item, .call-card, .song"
    );

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});