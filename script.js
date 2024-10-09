const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

// Function to filter cards
const filterCards = (e) => {
    // Remove the active class from the currently active button
    document.querySelector(".active").classList.remove("active");

    // Add the active class to the clicked button
    e.target.classList.add("active");

    // Get the filter name from the clicked button
    const filterName = e.target.getAttribute("data-name");

    // Loop through all the cards
    filterableCards.forEach(card => {
        // If the filter is "all" or the card matches the filter, display it
        if (filterName === "all" || card.getAttribute("data-name") === filterName) {
            card.style.display = "block";
        } else {
            // Otherwise, hide the card
            card.style.display = "none";
        }
    });
}

// Add click event listeners to all filter buttons
filterButtons.forEach(button => button.addEventListener("click", filterCards));
