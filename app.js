
const searchForm = document.getElementById("searchForm");
const pseudoInput = document.getElementById("pseudo");
const result = document.getElementById("result");
const playerName = document.getElementById("playerName");

// Supprime automatiquement tous les espaces
pseudoInput.addEventListener("input", () => {
    const position = pseudoInput.selectionStart;

    pseudoInput.value = pseudoInput.value.replace(/\s/g, "");

    pseudoInput.setSelectionRange(
        Math.min(position, pseudoInput.value.length),
        Math.min(position, pseudoInput.value.length)
    );
});

// Affiche le skin et les offres uniquement après recherche
searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const pseudo = pseudoInput.value.trim();

    if (!pseudo) {
        result.style.display = "none";
        return;
    }

    playerName.textContent = pseudo;
    result.style.display = "block";

    result.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
