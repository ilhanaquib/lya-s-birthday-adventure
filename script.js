const unlocks = [
    { key: "crosswordComplete", id: "moth" },
    { key: "wordleComplete", id: "bunny" },
    { key: "nonogramComplete", id: "heart" },
    { key: "numberGridComplete", id: "cat" },
    { key: "cluePuzzleComplete", id: "beetle" },
];

unlocks.forEach(({ key, id }) => {
    if (localStorage.getItem(key) === "true") {
        document.getElementById(id)?.classList.remove("hidden");
    }
});

if (localStorage.getItem("cluePuzzleComplete") === "true") {
    document.getElementById("card").classList.remove("hidden");
    document.getElementById("resetAdventure").classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
    const resetBtn = document.getElementById("resetAdventure");
    resetBtn?.addEventListener("click", () => {
        if (confirm("Are you sure you want to reset your progress?")) {
            localStorage.clear();
            location.reload();
        }
    });
});


