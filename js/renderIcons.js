document.addEventListener("DOMContentLoaded", function() {
    const technologies = [
        { name: "HTML5", iconClass: "devicon-html5-plain" },
        { name: "CSS3", iconClass: "devicon-css3-plain" },
        { name: "JavaScript", iconClass: "devicon-javascript-plain" },
        { name: "Bootstrap", iconClass: "devicon-bootstrap-plain" },
        { name: "Tailwind", iconClass: "devicon-tailwindcss-plain" },
        { name: "React", iconClass: "devicon-react-original" },
        { name: "Next.js", iconClass: "devicon-nextjs-original" },
        { name: "Node.js", iconClass: "devicon-nodejs-plain" },
        { name: "Express", iconClass: "devicon-express-original" },
        { name: "TypeScript", iconClass: "devicon-typescript-plain" },
        { name: "MongoDB", iconClass: "devicon-mongodb-plain" },
        { name: "PostgresDB", iconClass: "devicon-postgresql-plain" },
        { name: "Docker", iconClass: "devicon-docker-plain" },
        { name: "Nest.js", iconClass: "devicon-nestjs-plain" },
        { name: "MySQL", iconClass: "devicon-mysql-plain" },
        { name: "Jira", iconClass: "devicon-jira-plain" },           
        { name: "Notion", iconClass: "simple-icons:notion" },        
        { name: "Discord", iconClass: "devicon-discordjs-plain" },   
        { name: "Postman", iconClass: "devicon-postman-plain" },     
        { name: "Git", iconClass: "devicon-git-plain" },
        { name: "GitHub", iconClass: "devicon-github-original" }
        ];

    const techIconsContainer = document.getElementById("tech-icons");

    technologies.forEach(tech => {
        const iconDiv = document.createElement("div");
        iconDiv.className = "col-4 text-center mb-4";

        iconDiv.innerHTML = `
            <i class="${tech.iconClass} dark-bg" style="font-size: 2.5rem;"></i>
            <p>${tech.name}</p>
        `;

        techIconsContainer.appendChild(iconDiv);
    });
});