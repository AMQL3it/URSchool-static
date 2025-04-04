document.addEventListener("DOMContentLoaded", function() {
    fetch('../json/activities.json') // JSON file theke data fetch kora
        .then(response => response.json()) // JSON ke JS Object e convert kora
        .then(data => displayActivities(data)) // Data display function call kora
        .catch(error => console.error('Error loading JSON:', error));

    fetch('../json/clubs.json') // JSON file theke data fetch kora
        .then(response => response.json()) // JSON ke JS Object e convert kora
        .then(data =>displayClubs(data))
        .catch(error => console.error('Error loading JSON:', error));
});

function displayActivities(activities) {
    const content = document.getElementById("activities-content");

    activities.forEach(activity => {
        const advisorDiv = document.createElement("div");
        advisorDiv.classList.add("image-card");

        advisorDiv.innerHTML = `
            <img src="../assets/${activity.image}" alt="Image 1">
            <p>${activity.caption}</p>
        `;

        content.appendChild(advisorDiv);
    });
}

function displayClubs(clubs) {
    const content = document.getElementById("club-content");
    
    clubs.forEach(club => {
        const advisorDiv = document.createElement("div");
        advisorDiv.classList.add("image-card");

        advisorDiv.innerHTML = `
            <img src="../assets/${club.image}" alt="${club.caption}">
            <p>${club.caption}</p>
        `;

        content.appendChild(advisorDiv);
    });
}


