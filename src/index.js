import "./style.css";

import { createProject } from "./project";
import { createTodo } from "./todo";

import {
    renderProjects,
    renderTodos
} from "./ui";

import {
    saveProjects,
    loadProjects
} from "./storage";

import {
    openModal,
    closeModal,
    getFormData,
    setProjectTitle,
    setupModalEvents,
    form
} from "./dom";

let projects = loadProjects();

if (projects.length === 0) {

    projects.push(
        createProject("Default")
    );

}

let currentProject = projects[0];

function updateUI() {

    saveProjects(projects);

    setProjectTitle(currentProject.name);

    renderProjects(
        projects,
        currentProject,
        selectProject
    );

    renderTodos(
        currentProject,
        updateUI
    );

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
            prompt("Project Name");

        if (!name || name.trim() === "") {

            return;

        }

        const project =
            createProject(name.trim());

        projects.push(project);

        currentProject = project;

        updateUI();

    });

document
    .getElementById("add-todo-btn")
    .addEventListener("click", () => {

        openModal();

    });

form.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        const {
            title,
            description,
            dueDate,
            priority
        } = getFormData();

        if (title.trim() === "") {

            return;

        }

        currentProject.todos.push(

            createTodo(
                title,
                description,
                dueDate,
                priority
            )

        );

        closeModal();

        updateUI();

    }
);

setupModalEvents();

updateUI();