import "./style.css";
import { createTodo } from "./todo";
import { createProject } from "./project";
import { renderProjects, renderTodos } from "./ui";
import {
    saveProjects,
    loadProjects
} from "./storage";


let projects = loadProjects();

if (projects.length === 0) {

    const defaultProject = createProject("Default");

    projects.push(defaultProject);

}

let currentProject = projects[0];

function updateUI() {

    saveProjects(projects);

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

document
    .getElementById("add-todo-btn")
    .addEventListener("click", () => {

        const title =
            prompt("Todo Title");

        if (!title) return;

        const description =
            prompt("Description");

        const dueDate =
            prompt("Due Date (YYYY-MM-DD)");

        const priority =
            prompt("Priority (Low, Medium, High)");

        currentProject.todos.push(

            createTodo(
                title,
                description,
                dueDate,
                priority || "Low"
            )

        );

        updateUI();

    });

updateUI();