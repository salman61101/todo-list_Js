const projectList = document.getElementById("project-list");

export function renderProjects(projects, currentProject, onSelectProject) {

    projectList.innerHTML = "";

    projects.forEach(project => {

        const li = document.createElement("li");

        li.textContent = project.name;

        if (project.id === currentProject.id) {
            li.classList.add("active");
        }

        li.addEventListener("click", () => {
            onSelectProject(project.id);
        });

        projectList.appendChild(li);

    });

}

export function renderTodos(project) {

    console.log("Current Project:");

    console.log(project);

}