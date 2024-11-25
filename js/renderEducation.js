document.addEventListener("DOMContentLoaded", function() {
    const education = [
        {
            degree: "Técnico Universitario en Desarrollo de Software",
            institution: "Universidad Provincial de Ezeiza",
            iconClass: "fas fa-university",
            year: "2023 - Al presente",
            description: "Desarrollo de programas y componentes de sistemas de computación para resolver necesidades específicas en diferentes ámbitos"
        },
        {
            degree: "Diplomado Soporte Técnico en informática",
            institution: "CFP 402 Ezeiza Ing. Franco Speranza",
            iconClass: "fas fa-tools",
            year: "2020 - 2021",
            description: "Especialización en soporte técnico."
        },
        {
            degree: "Curso desarrollo Full-stack",
            institution: "Plataforma de Henry",
            iconClass: "fas fa-code",
            year: "2024- 2024(Finalizado)",
            description: "Formación en desarrollo de aplicaciones web, enfocado en mejores prácticas."
        }
    ];

    const educationItemsContainer = document.getElementById("education-items");

    education.forEach(edu => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "col-md-4 mb-4";

        itemDiv.innerHTML = `
            <div class="education-item p-4 h-100 text-center dark-bg">
                <i class="${edu.iconClass} mb-3" style="font-size: 2.5rem;"></i>
                <h4>${edu.degree}</h4>
                <h5>${edu.institution}</h5>
                <p class="text-muted">${edu.year}</p>
                <p>${edu.description}</p>
            </div>
        `;

        educationItemsContainer.appendChild(itemDiv);
    });
});