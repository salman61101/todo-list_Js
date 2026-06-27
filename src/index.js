import "./style.css";

import { createProject } from "./project";
import { renderProjects, renderTodos } from "./ui";

const projects = [];

const defaultProject = createProject("Default");

projects.push(defaultProject);

let currentProject = defaultProject;

function updateUI() {

    renderProjects(
        projects,
        currentProject,
        selectProject
    );

    renderTodos(currentProject);

}

function selectProject(projectId) {

    currentProject =
        projects.find(
            project => project.id === projectId
        );

    updateUI();

}

document
    .getElementById("add-project-btn")
    .addEventListener("click", () => {

        const name =
            prompt("Project Name:");

        if (!name) return;

        const newProject =
            createProject(name);

        projects.push(newProject);

        currentProject = newProject;

        updateUI();

    });

updateUI();