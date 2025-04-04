document.addEventListener("DOMContentLoaded", function() {
    fetch('../json/advisors.json') // JSON file theke data fetch kora
        .then(response => response.json()) // JSON ke JS Object e convert kora
        .then(data => displayAdvisors(data)) // Data display function call kora
        .catch(error => console.error('Error loading JSON:', error));

    fetch('../json/activities.json') // JSON file theke data fetch kora
        .then(response => response.json()) // JSON ke JS Object e convert kora
        .then(data => displayActivities(data)) // Data display function call kora
        .catch(error => console.error('Error loading JSON:', error));

    fetch('../json/clubs.json') // JSON file theke data fetch kora
        .then(response => response.json()) // JSON ke JS Object e convert kora
        .then(data =>displayClubs(data))
        .catch(error => console.error('Error loading JSON:', error));
});

function displayAdvisors(advisors) {
    const content = document.getElementById("advisors-content");

    advisors.slice(0, 2).forEach(advisor => {
        const advisorDiv = document.createElement("div");
        advisorDiv.classList.add("card");

        advisorDiv.innerHTML = `
            <div class="profile">
                <img src="../assets/${advisor.image}" alt="Advisor Image">
            </div>
            <div class="details">
                <div class="info">
                    <h4>${advisor.name}</h4>
                    <p>${advisor.designation}</p>
                </div>
                <div class="article">
                    <p>${advisor.speech}</p>
                    <button class="read-more">Read More</button>
                </div>
            </div>
        `;

        content.appendChild(advisorDiv);
    });
}

function displayActivities(activities) {
    const content = document.getElementById("activities-content");

    activities.slice(0, 3).forEach(activity => {
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
    
    clubs.slice(0, 3).forEach(club => {
        const advisorDiv = document.createElement("div");
        advisorDiv.classList.add("image-card");

        advisorDiv.innerHTML = `
            <img src="../assets/${club.image}" alt="${club.caption}">
            <p>${club.caption}</p>
        `;

        content.appendChild(advisorDiv);
    });
}

document.getElementById("activity-btn").addEventListener("click", function() {
    window.location.href = "../pages/service.html"; // তোমার পছন্দের লিংক দিন
});

document.getElementById("club-btn").addEventListener("click", function() {
    window.location.href = "../pages/service.html"; // তোমার পছন্দের লিংক দিন
});
