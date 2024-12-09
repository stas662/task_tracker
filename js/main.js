const items = document.querySelectorAll('.item');
const placeholders = document.querySelectorAll('.placeholder')

for (const item of items) {
    item.addEventListener('dragstart', (event) => {
        let selected = event.target;

        for (const placeholder of placeholders) {
            placeholder.addEventListener("dragover", (event) => {
                event.preventDefault();
            });
            placeholder.addEventListener("dragenter", () => {
                placeholder.classList.add('hovered');
            });
            placeholder.addEventListener("dragleave", () => {
                placeholder.classList.remove('hovered');
            });
            placeholder.addEventListener("drop", () => {
                placeholder.append(selected);
                selected = '';
            });
        }
    });

    item.addEventListener('dragend', (event) => {
        event.target.className = 'item';
    });
}

