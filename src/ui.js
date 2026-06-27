const projectList =
    document.getElementById("project-list");

const todoContainer =
    document.getElementById("todo-container");

export function renderProjects(
    projects,
    currentProject,
    selectProject
) {

    projectList.innerHTML = "";

    projects.forEach(project => {

        const li =
            document.createElement("li");

        li.textContent = project.name;

        if (project.id === currentProject.id) {

            li.classList.add("active");

        }

        li.addEventListener("click", () => {

            selectProject(project.id);

        });

        projectList.appendChild(li);

    });

}

export function renderTodos(
    project,
    updateUI
) {

    todoContainer.innerHTML = "";

    if (project.todos.length === 0) {

        const empty =
            document.createElement("p");

        empty.classList.add("empty");

        empty.textContent =
            "No todos yet. Click 'Add Todo' to create one.";

        todoContainer.appendChild(empty);

        return;

    }

    project.todos.forEach(todo => {

        const card =
            document.createElement("div");

        card.classList.add("todo-card");

        if (todo.completed) {

            card.classList.add("completed");

        }

        const left =
            document.createElement("div");

        const title =
            document.createElement("h3");

        title.textContent =
            todo.title;

        const description =
            document.createElement("p");

        description.textContent =
            todo.description;

        left.appendChild(title);

        left.appendChild(description);

        const right =
            document.createElement("div");

        right.classList.add("todo-info");

        const priority =
            document.createElement("span");

        priority.classList.add(
            "priority",
            todo.priority.toLowerCase()
        );

        priority.textContent =
            todo.priority;

        const date =
            document.createElement("p");

        date.textContent =
            todo.dueDate;

        const completeBtn =
            document.createElement("button");

        completeBtn.textContent =
            todo.completed
                ? "Undo"
                : "Complete";

        completeBtn.addEventListener(
            "click",
            () => {

                todo.completed =
                    !todo.completed;

                updateUI();

            }
        );

        const deleteBtn =
            document.createElement("button");

        deleteBtn.textContent =
            "Delete";

        deleteBtn.addEventListener(
            "click",
            () => {

                if (
                    confirm(
                        "Delete this todo?"
                    )
                ) {

                    project.todos =
                        project.todos.filter(
                            item =>
                                item.id !==
                                todo.id
                        );

                    updateUI();

                }

            }
        );

        right.appendChild(priority);

        right.appendChild(date);

        right.appendChild(completeBtn);

        right.appendChild(deleteBtn);

        card.appendChild(left);

        card.appendChild(right);

        todoContainer.appendChild(card);

    });

}