const addTaskButton = document.querySelector('.add_task .button');

const inputTask = document.querySelector('.input_task');
const inputCountDay = document.querySelector('.input_count_day');
const task = new Task();
const body = document.body;

// Now date 

let monthArray = [
    'Январь', 'Феврали', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
]
const date = new Date();
const day = date.getDate(); // получаем день 
const month = date.getMonth();//месяц
const year = date.getFullYear();// год
const getDate = day + ' ' + monthArray[month] + ' ' + year;


addTaskButton.addEventListener('click', (e) => {
    e.preventDefault();

    task.addTask();

    // Перенесла все в класс Task:
    // const divTask = document.createElement('div');
    // divTask.classList.add('task');

    // const divDone = document.createElement('div');
    // divDone.classList.add('done');

    // const divHeading = document.createElement('div');
    // divHeading.classList.add('heading');
    // divHeading.innerText = inputTask.value;

    // const divDate = document.createElement('div');
    // divDate.classList.add('date_start');
    // divDate.innerText = getDate;

    // const divCount = document.createElement('div');
    // divCount.classList.add('count_day');
    // divCount.innerText = inputCountDay.value;

    // const divEdit = document.createElement('div');
    // divEdit.classList.add('edit');

    // const divDelete = document.createElement('div');
    // divDelete.classList.add('delete');

    // // Добавляем все блоки в общий блок задачи 
    // divTask.append(divDone, divHeading, divDate, divCount, divEdit, divDelete);
    // // Выводим задачу на сайт 
    // tasks.prepend(divTask);

    // //Выполнение
    // divDone.addEventListener('click', () => {
    //     divTask.classList.toggle('check');
    // });

    // //Изменить задачу
    // divEdit.addEventListener('click', () => {
    //     divTask.classList.toggle('editable');

    //     if (divTask.classList.contains('editable')) {
    //         divHeading.setAttribute('contentediteble', 'true');
    //         divDate.setAttribute('contentediteble', 'true');
    //         divCountDay.setAttribute('contentediteble', 'true');
    //     } else {
    //         divHeading.removeAttribute('contentediteble');
    //         divDate.removeAttribute('contentediteble');
    //         divCountDay.removeAttribute('contentediteble');
    //     }
    // });

    // //Удалить задачу
    // divDelete.addEventListener('click', () => {
    //     divTask.classList.add('delete_start');

    //     setTimeout(() => {
    //         divTask.remove();
    //     }, 2000)

    // });
});




// необходимо сделать сайт структура сайта:
/*-главная страница,
 -каталог:
 -товар1
 -товар2
 -товар3
 -товар4
 -товар5
 (картинк, заголовок, цена, кнопка купить)
 -контакты
 

 (одинаковвые header,footer)

header:Логотип, меню, номер телефона, 2 кнопки:регистрация, вход)
 */

/*Tabs*/

const tab1 = new Tab('block_1');
tab1.getTabs();

const tab2 = new Tab('block_2');
tab2.getTabs();



//Тема
const tema = document.querySelector('.setting_tema');
tema.addEventListener('click', () => {
    body.classList.toggle('light');
})


const display = document.querySelector('.setting_display');
display.addEventListener('click', () => {
    body.classList.toggle('display_blocks');
})


function popupBlock() {
    const popup = document.querySelector('.popup');
    const popupCloses = document.querySelectorAll('.close');
    const singUp = document.querySelector('.sign_up');
    singUp.addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.add('active');

        popupCloses.forEach(closes => {
            closes.addEventListener('click', () => {
                popup.classList.remove('active');
            })
        })
    })
}

// popap-

const singUp = document.querySelector('.sign_up');
singUp.addEventListener('click', (e) => {
    e.preventDefault();

    popupBlock();

})

const loginBtn = document.querySelector('.login')
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popupBlock();
})