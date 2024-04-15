const AddHtml = `<div class="wrapper ">
        <div class="modal open" id="form_modal">
            <div class="close_modal"></div>
            <div class="modal_box">
                <h2>Форма заполнения</h2>
                <input type="text" class="name_book" placeholder="Name">
                <input type="number" class="year" placeholder="Year">
                <textarea class="review" placeholder="Review"></textarea>
                <button id="add_book" class="open_modal">Добавить книгу</button>
            </div>
        </div>
    </div>`

const list = document.querySelector(".list");

function renderBooks(book_list) {
    let show_list = "";

    book_list.forEach(function (item, i) {
        show_list += `
        <div class='box_input' >
            <div class='string_of_list'>
                <input class='check_for_delete' type='checkbox' id='item_${i}' ${
            item.cheked
        }>
                <label for='item_${1}'>${item.name}</label>

            </div>
            <div class='delete_book' data-index="${i}"></div>
        </div>
        `;
        list.innerHTML = show_list;
    });
}

const DeleteHtml = ``
const EditModalHtml = ``

const books = [];

function modalCreat() {
    const open_modal = document.getElementById("open_modal");
    const ModalWrapper = document.createElement('div');

    // TODO: Open modal
    open_modal.addEventListener("click", (e) => {
        ModalWrapper.innerHTML = AddHtml
        document.body.append(ModalWrapper)
    });

    // TODO: Click внутри модального окна
    ModalWrapper.addEventListener("click", (e) => {
        const clickTarget  = e.target;

        if (clickTarget.closest('.close_modal')) {
            ModalWrapper.remove()

            return;
        }

        if (clickTarget.closest('#add_book')) {
            const name = ModalWrapper.querySelector('.name_book').value
            const year = ModalWrapper.querySelector('.year').value
            const review = ModalWrapper.querySelector('.review').value

            books.push({name, year, review})

            renderBooks(books)

            ModalWrapper.remove()

            return;
        }
    })


}

function init () {
    modalCreat()
}

init()

/*------------окно редактирование---------------*/
let modal_for_edit = document.querySelector('.modal_for_edit');

let edit_window = document.createElement('div');
edit_window.className = "box_input";
edit_window.innerHTML = `<div class='box_input'>
                                <div class='edit_of_list'>
                                    <input class='edit_name edit' type='text' id='item_${i}' value="${item.name}">
                                    <input class='edit_year edit' type='text' id='item_${i}' value="${item.year}">

                                    <textarea class='edit_review' type='text' id='item_${i}' >${item.review}</textarea>
                                </div>
                                <div class='close_edit_book'></div>
                            </div>;`

document.modal_for_edit.append(div);

   
    











































//
// let close_modal = document.querySelector(".close_modal");
// let form_modal = document.getElementById("form_modal");
// let blur_background = document.querySelector(".wrapper");
//
// /*-----------модальное окно----------------*/
//
//
// close_modal.addEventListener("click", () => {
//     form_modal.classList.remove("open");
//     blur_background.classList.remove("blur");
// });
//
// /*---------берем инфу из формы---------------*/
//
// let add_book = document.getElementById("add_book");
//
// let book_list = [];
//
// add_book.addEventListener("click", (e) => {
//     const modalBox = document.querySelector(".modal_box");
//     console.log("qwe == ", e.target, e.target.closest(".modal_box"));
//     const name_book = modalBox.querySelector(".name_book");
//     const year = modalBox.querySelector(".year");
//     const review = modalBox.querySelector(".review");
//
//     if (name_book.value === "") {
//         alert("Введите имя");
//         return;
//     }
//
//     let new_book = {
//         name: name_book.value,
//         year: year.value,
//         review: review.value,
//     };
//
//     book_list.push(new_book);
//     list_of_book();
//
//     /*--------проверка на пустое поле ввода-----*/
// });
//
// /*--------------вывод на экран списка----------*/
// let list = document.querySelector(".list");
//
// function list_of_book() {
//     let show_list = "";
//     book_list.forEach(function (item, i) {
//         show_list += `
//         <div class='box_input' >
//             <div class='string_of_list'>
//                 <input class='check_for_delete' type='checkbox' id='item_${i}' ${
//             item.cheked
//         }>
//                 <label for='item_${1}'>${item.name}</label>
//
//             </div>
//             <div class='delete_book' data-index="${i}"></div>
//         </div>
//         `;
//         list.innerHTML = show_list;
//     });
// }
// /*---------окно для удаления-----*/
//
// let box_input = document.querySelector(".box_input");
// let button_delete = document.querySelector(".delete_book");
// let button_yes = document.querySelector(".yes");
// let button_no = document.querySelector(".no");
// let modal_for_delete = document.querySelector(".modal_for_delete");
// let wrapper_for_delete = document.querySelector(".wrapper_for_delete");
//
// function open_delete_window() {
//     modal_for_delete.classList.add("active");
//     wrapper_for_delete.classList.add("blur");
// }
//
// let activeDelete = "";
// list.addEventListener("click", function (event) {
//     if (event.target.closest(".delete_book")) {
//         activeDelete = event.target.getAttribute("data-index");
//         open_delete_window();
//     }
// });
//
// button_no.addEventListener("click", () => {
//     modal_for_delete.classList.remove("active");
//     wrapper_for_delete.classList.remove("blur");
// });
// /*-----------удаление элемента-----------*/
//
// button_yes.addEventListener("click", delete_list);
//
// function delete_list(e) {
//     const activeDeleteIndex = Number(activeDelete);
//     if (!activeDelete) {
//         return;
//     }
//     book_list.splice(activeDeleteIndex, 1);
//     list.innerHTML = "";
//     list_of_book();
//
//     activeDeleteIndex = "";
//     modal_for_delete.classList.remove("active");
//     wrapper_for_delete.classList.remove("blur");
// }
//
// /*-----------------окно для редактирования------------*/
// let string_of_list = document.querySelector(".string_of_list");
// let modal_for_edit = document.querySelector(".modal_for_edit");
// let wrapper_for_edit = document.querySelector(".wrapper_for_edit");
//
// let edit_list = [];
//
// let edit_book = {
//     name: name_book.value,
//     year: year.value,
//     review: review.value,
// };
//
// list.addEventListener("click", function (event) {
//     if (event.target.closest(".string_of_list")) {
//         modal_for_edit.classList.add("open");
//         wrapper_for_edit.classList.add("blur");
//         edit_list.push(edit_book);
//         edit_of_book();
//     }
// });
//
// function edit_of_book() {
//     let edit_list = "";
//     book_list.forEach(function (item, i) {
//         edit_list = `
//         <div class='box_input'>
//             <div class='edit_of_list'>
//                 <input class='edit_name edit' type='text' id='item_${i}' value="${item.name}">
//                 <input class='edit_year edit' type='text' id='item_${i}' value="${item.year}">
//
//                 <textarea class='edit_review' type='text' id='item_${i}' >${item.review}</textarea>
//             </div>
//             <div class='close_edit_book'></div>
//         </div>
//         `;
//         modal_for_edit.innerHTML = edit_list;
//     });
// }
// /*----------закрывает окно для редактирования-------*/
//
// let close_edit_book = document.querySelector(".close_edit_book");
//
// function close_edit_window() {
//     modal_for_edit.classList.remove("open");
//     wrapper_for_edit.classList.remove("blur");
// }
//
// modal_for_edit.addEventListener("click", function (event) {
//     if (event.target.closest(".close_edit_book")) {
//         close_edit_window();
//     }
// });




/**
    TODO: 1) Давай удалим стартовое окно из html  (wrapper)
    TODO: 2) Удалим модалка для удаления из html
    TODO: 3) Удалим модалка для редактирования из html
    TODO: 4) Чиним редаткиирование
    TODO: 4.1) делаем удаление 1 и более книг
    TODO: 5) добавляем валидацию формы на даты и строки
    TODO: 6) давай сделаем сортировку по году и названию 2 кнопки (books.sort((a,b) => ))
    TODO: 6.1) почитать про  reduce написать приммер - например суммирования
            const summ = (arr) => {

            }

            const a = summ([1,2,3])
            console.log(a) // = 6

    TODO: 6.2) почитать про  map
            const f = (arr) => {

            }

            const a = f([{a: 1} , {a: 2}])
            console.log(a) /// [1,2]

    TODO: 6.3) почитать про  new Map / new Set в чем разница и плюсы

    TODO: 7) давай сохранять данные в локал сторадж
 **/
