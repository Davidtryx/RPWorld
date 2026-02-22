// Simulate a user's reputation (In the future, this comes from a database)
let userReputation = 1250; 

document.addEventListener("DOMContentLoaded", () => {
    const repDisplay = document.getElementById("rep-value");
    const eliteLink = document.querySelector(".locked-link");

    // 1. Update the UI with the current Rep
    repDisplay.innerText = userReputation.toLocaleString();

    // 2. The "Reputation Gate" Logic
    eliteLink.addEventListener("click", (e) => {
        if (userReputation < 1000) {
            e.preventDefault();
            alert("🔒 Access Denied: You need 1,000 Reputation to enter the Elite Sanctum. Keep role-playing to earn more!");
        } else {
            alert("Welcome to the Elite Sanctum, Veteran Writer.");
            // window.location.href = "elite-sanctum.html"; // Uncomment when page is ready
        }
    });

    // 3. Template Selection Logic
    const cards = document.querySelectorAll(".template-card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const genre = card.querySelector("h3").innerText;
            alert(`Opening the ${genre} Creator Studio...`);
        });
    });
});
