class Task {
    constructor() {

    }
    addTask() {
        const tasks = document.querySelector('.tasks');

        const divTask = document.createElement('div');
        divTask.classList.add('task');

        const divDone = document.createElement('div');
        divDone.classList.add('done');

        const divHeading = document.createElement('div');
        divHeading.classList.add('heading');
        divHeading.innerText = inputTask.value;

        const divDate = document.createElement('div');
        divDate.classList.add('date_start');
        divDate.innerText = getDate;

        const divCount = document.createElement('div');
        divCount.classList.add('count_day');
        divCount.innerText = inputCountDay.value;

        const divEdit = document.createElement('div');
        divEdit.classList.add('edit');

        const divDelete = document.createElement('div');
        divDelete.classList.add('delete');

        // Добавляем все блоки в общий блок задачи 
        divTask.append(divDone, divHeading, divDate, divCount, divEdit, divDelete);
        // Выводим задачу на сайт 
        tasks.prepend(divTask);

        this.deleteTask(divDelete, divTask);

        this.editTask(divEdit, divTask, divHeading, divDate, divCount);

        this.doneTask(divDone, divTask,);

    }


    deleteTask(remove, task) {
        remove.addEventListener('click', () => {
            task.classList.add('delete_start');

            setTimeout(() => {
                task.remove();
            }, 2000)

        });
    }

    editTask(edit, task, heading, date, countDay) {
        edit.addEventListener('click', () => {
            task.classList.toggle('editable');

            if (task.classList.contains('editable')) {
                heading.setAttribute('contentediteble', 'true');
                date.setAttribute('contentediteble', 'true');
                countDay.setAttribute('contentediteble', 'true');
            } else {
                heading.removeAttribute('contentediteble');
                date.removeAttribute('contentediteble');
                countDay.removeAttribute('contentediteble');
            }
        });
    }

    doneTask(done, task) {
        done.addEventListener('click', () => {
            task.classList.toggle('check');
        });
    }
}


//Создаь в объекте как он будет расчитывать цену, типо есть скидка или ее нету , 