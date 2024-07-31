document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: "Investellar",
            description: "Took responsibility for the team and orchestrated the development of the web application's front end, including the login page, home page, and profile page through collaboration. Designed the UI and implemented a dedicated “Pitch Room” page to enable users to upload and present project models, detailed descriptions, and documents. Tested and reviewed the final code and presented the project to external examiners using PPT and working model.",
            tools: "HTML, CSS (Tailwind Framework), Javascript",
            image: "project1.jpg"
        },
        {
            title: "Car Rental System",
            description: "Developed a car rental system software to streamline vehicle browsing, reservation, and management. Implemented customer booking and administrative controls. Updated the database in the server for each rental and calculated the total income.",
            tools: "Java",
            image: "project2.jpg"
        }
    ];

    const projectsContainer = document.getElementById('projects-container');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p><strong>Description:</strong> ${project.description}</p>
            <p><strong>Tools Used:</strong> ${project.tools}</p>
        `;
        projectsContainer.appendChild(projectCard);
    });

    const nameElement = document.getElementById('name');
    nameElement.addEventListener('mouseover', () => {
        nameElement.style.color = '#feb47b';
        nameElement.style.transform = 'scale(1.2)';
    });
    nameElement.addEventListener('mouseout', () => {
        nameElement.style.color = '#ff5e5b';
        nameElement.style.transform = 'scale(1)';
    });
});
