
const form = document.getElementById("searchForm");
const input = document.getElementById("pseudo");
const result = document.getElementById("result");
const playerName = document.getElementById("playerName");

// Supprimer automatiquement les espaces
input.addEventListener("input", () => {
    const cursor = input.selectionStart;

    input.value = input.value.replace(/\s/g, "");

    input.setSelectionRange(
        Math.min(cursor, input.value.length),
        Math.min(cursor, input.value.length)
    );
});

// Recherche du pseudo
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const pseudo = input.value.trim();

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
