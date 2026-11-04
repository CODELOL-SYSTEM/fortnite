
const searchForm = document.getElementById("searchForm");
const pseudoInput = document.getElementById("pseudo");
const result = document.getElementById("result");
const playerName = document.getElementById("playerName");
const error = document.getElementById("error");

// Nettoyage automatique du pseudo
pseudoInput.addEventListener("input", () => {
    const start = pseudoInput.selectionStart;
    const cleanPseudo = pseudoInput.value.replace(/\s/g, "");

    if (pseudoInput.value !== cleanPseudo) {
        pseudoInput.value = cleanPseudo;

        const position = Math.min(start, cleanPseudo.length);
        pseudoInput.setSelectionRange(position, position);
    }

    error.style.display = "none";
});

// Recherche
searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const pseudo = pseudoInput.value.trim();

    if (!pseudo) {
        result.classList.remove("visible");
        error.textContent = "Entre un pseudo Fortnite.";
        error.style.display = "block";
        return;
    }

    error.style.display = "none";

    // Affichage du pseudo
    playerName.textContent = pseudo;

    // Affichage des offres et du skin
    result.style.display = "block";

    requestAnimationFrame(() => {
        result.classList.add("visible");

        result.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Cacher les résultats si le champ est vidé
pseudoInput.addEventListener("input", () => {
    if (!pseudoInput.value.trim()) {
        result.classList.remove("visible");
        result.style.display = "none";
    }
});
