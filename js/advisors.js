document.addEventListener("DOMContentLoaded", function() {
    fetch('../json/advisors.json') // JSON file theke data fetch kora
        .then(response => response.json()) // JSON ke JS Object e convert kora
        .then(data => displayAdvisors(data)) // Data display function call kora
        .catch(error => console.error('Error loading JSON:', error));
});

function displayAdvisors(advisors) {
    const content = document.getElementById("advisors-content");

    advisors.forEach(advisor => {
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