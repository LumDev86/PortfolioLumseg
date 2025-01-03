document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            title: "Proyecto Kramer Simulación laboral NoCountry",
            description: "Con el equipo designado decidimos crear Kramer, un E-commerce centrado en la venta de alimentos, donde el cliente tendrá la posibilidad de ver los productos disponibles, filtrarlos por categoría, precio o marca, y agregarlos al carrito para su posterior compra.",
            githubLink: "https://github.com/LumDev86/c21-08-ft-node-react",
            image: "./assets/ImgKramer.png",
            technologies: ["devicon-mysql-plain", "devicon-typescript-plain", "devicon-express-original", "devicon-nodejs-plain", "devicon-nextjs-original", "devicon-tailwindcss-plain", "devicon-docker-plain"]
        },
        {
            title: "Aplicación Full-Stack con Node.js",
            description: "Esta aplicación permite crear por medio de un formulario la publicación de una película. Las tecnologías que se utilizaron para esta App son: HTML5, Bootstrap, JavaScript, Node.js, MongoDb y Express",
            githubLink: "https://github.com/LumDev86/ProyectoN2-Henry",
            image: "./assets/PM2.png",
            technologies: ["devicon-nodejs-plain", "devicon-mongodb-plain", "devicon-javascript-plain", "devicon-html5-plain", "devicon-express-original", "devicon-bootstrap-plain"]
        },
        {
            title: "Plataforma de E-Commerce Segunda Simulacion Laboral NoCountry",
            description: "Desarrollo de una aplicación web para la gestión de productos y promociones en una tienda en línea. Implementada con tecnologías como Node.js, Express, PostgreSQL y React. Permite la creación, edición y eliminación de productos, así como la visualización de promociones y la integración con un sistema de pagos como PayPal.",
            githubLink: "https://github.com/LumDev86/s19-05-m-webapp",
            image: "./assets/img-checkPointZone.PNG",
            technologies: ["devicon-typescript-plain", "devicon-mysql-plain", "devicon-express-original", "devicon-nodejs-plain", "devicon-react-original", "devicon-tailwindcss-plain", "devicon-javascript-plain", "devicon-vite-plain", "devicon-reduxToolkit-plain", "devicon-paypal-plain"]
        }
    ];

    const projectsListContainer = document.getElementById("projects-list");

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "col-md-4 mb-4";

        projectDiv.innerHTML = `
            <div class="project-item d-flex flex-column h-100 dark-bg">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-content p-4">
                    <h4>${project.title}</h4>
                    <p>${project.description}</p>
                    <div class="project-tech-icons mb-3">
                        ${project.technologies.map(tech => `<i class="devicon ${tech}"></i>`).join('')}
                    </div>
                    <a href="${project.githubLink}" target="_blank" class="btn btn-custom">Ver Código en GitHub</a>
                </div>
            </div>
        `;

        projectsListContainer.appendChild(projectDiv);
    });
});
