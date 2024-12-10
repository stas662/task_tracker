const draggables = document.querySelectorAll('.item');
const dropitems = document.querySelectorAll('.container');

draggables.forEach((task) => {
    task.addEventListener("dragstart", () => {
        task.classList.add("hovered");
    });
    task.addEventListener("dragend", () => {
        task.classList.remove("hovered");
    });
})

dropitems.forEach((area) => {
    area.addEventListener("dragover", (event) => {
        event.preventDefault();

        const bottomTask = insertAboveTask(area, event.clientY);
        const curTask = document.querySelector(".hovered");

        if (!bottomTask) {
            area.appendChild(curTask);
        } else {
            area.insertBefore(curTask, bottomTask);
        }
    })
})

const insertAboveTask = (placeholder, mouseY) => {
    const els = placeholder.querySelectorAll(".item:not(.hovered)");

    let closesTask = null;
    let closesOffset = Number.NEGATIVE_INFINITY;

    els.forEach((task) => {
        const { top } = task.getBoundingClientRect();
        const offset = mouseY - top;

        if (offset < 0 && offset > closesOffset) {
            closesOffset = offset;
            closesTask = task;
        }
    });
    return closesTask;
}

