const dialog =
    document.getElementById("todo-dialog");

const form =
    document.getElementById("todo-form");

const cancelBtn =
    document.getElementById("cancel-btn");

const projectTitle =
    document.getElementById("project-title");

export function openModal() {

    dialog.showModal();

}

export function closeModal() {

    dialog.close();

    form.reset();

}

export function getFormData() {

    return {

        title:
            document
                .getElementById("title")
                .value,

        description:
            document
                .getElementById("description")
                .value,

        dueDate:
            document
                .getElementById("dueDate")
                .value,

        priority:
            document
                .getElementById("priority")
                .value

    };

}

export function setProjectTitle(name) {

    projectTitle.textContent = name;

}

export function setupModalEvents() {

    cancelBtn.addEventListener(
        "click",
        closeModal
    );

    dialog.addEventListener(
        "click",
        (event) => {

            const rect =
                dialog.getBoundingClientRect();

            const clickedOutside =

                event.clientX < rect.left ||
                event.clientX > rect.right ||
                event.clientY < rect.top ||
                event.clientY > rect.bottom;

            if (clickedOutside) {

                closeModal();

            }

        }
    );

}

export { form };