

const projectList =
    document.getElementById("project-list");

const todoContainer =
    document.getElementById("todo-container");



export function renderProjects(
    projects,
    currentProject,
    onSelectProject
) {

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

    todoContainer.innerHTML = "";

    project.todos.forEach(todo => {

        const card = document.createElement("div");
        card.classList.add("todo-card");

        // Left Side
        const left = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = todo.title;

        if (todo.completed) {
            title.style.textDecoration = "line-through";
        }

        const description = document.createElement("p");
        description.textContent = todo.description;

        left.appendChild(title);
        left.appendChild(description);

        
        const right = document.createElement("div");
        right.classList.add("todo-info");

        const priority = document.createElement("span");
        priority.classList.add(
            "priority",
            todo.priority.toLowerCase()
        );

        priority.textContent = todo.priority;

        const date = document.createElement("p");
        date.textContent = todo.dueDate;

        
        const completeBtn =
            document.createElement("button");

        completeBtn.textContent = "✔";

        completeBtn.addEventListener("click", () => {

            todo.completed = !todo.completed;

            renderTodos(project);

        });

        
        const deleteBtn =
            document.createElement("button");

        deleteBtn.textContent = "🗑";

        deleteBtn.addEventListener("click", () => {

            project.todos =
                project.todos.filter(
                    item => item.id !== todo.id
                );

            renderTodos(project);

        });

        right.appendChild(priority);
        right.appendChild(date);
        right.appendChild(completeBtn);
        right.appendChild(deleteBtn);

        card.appendChild(left);
        card.appendChild(right);

        todoContainer.appendChild(card);

    });

}