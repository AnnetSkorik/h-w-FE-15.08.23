//DOMASHKA

// Задание1. Повесить событие клика на кнопку таким образом, чтобы при нажатии на нее в консоль выводилась строка “Hello world”.

// let button = document.querySelector('button');

// button.addEventListener('click', button_click);

// function button_click(){
//     console.log('Hello WORLD!');
// }

// Задание2. Переделать кнопку таким образом, чтобы при нажатии на нее в параграфе в интерфейсе значение увеличивалось на 1.
// В начале рассмотрите процесс, при котором мы каждый раз считываем число из параграфа, меняем и записываем обратно.

// let button = document.querySelector('button');
// let num = document.querySelector('p');

// button.addEventListener('click', onclick);

// function onclick(){
//     num.innerText = Number(num.innerText) + 1;
// }

// Задание3. Создать квадратный div с рамкой и при наведении курсора на него цвет div-а поменять на введённый пользователем цвет , а при покидании поменять обратно на белый (все шаги  сделать с помощью JS).

// let block = document.createElement('div');
// block.style.width = "100px";
// block.style.height = "100px";
// block.style.border = "1px solid blue";

// document.body.append(block);

// block.addEventListener("mouseover", changeColor);
// block.addEventListener("mouseout", changeColor1);

// function changeColor(){
//     block.style.backgroundColor = prompt("введите цвет")
// }

// function changeColor1(){
//     block.style.backgroundColor = "white";
// }

// Задание4. Написать программу, которая создает две кнопки и вешает на них событие нажатия. При нажатии на первую выводится в консоль “минус”, а при нажатии на вторую ‘плюс’.

// let button1 = document.createElement("button");
// let button2 = document.createElement("button");

// button1.innerText = "Minus";
// button2.innerText = "Plus";

// document.body.append(button1);
// document.body.append(button2);

// button1.addEventListener("click", minus);
// button2.addEventListener("click", plus);

// function minus(){
//     console.log("Minus");
// }

// function plus(){
//     console.log("Plus");
// }

// Задание5: Доработать процесс таким образом, чтобы при нажатии на плюс в консоль выводилось число, увеличившись на 1, а при нажатии на минус уменьшившись на 1. Для решения этой задачи понадобится создать переменную и изменять ее при нажатии на ту или иную кнопку.

// let button1 = document.createElement("button");
// let button2 = document.createElement("button");

// let num = 10;

// button1.innerText = "Minus";
// button2.innerText = "Plus";

// document.body.append(button1);
// document.body.append(button2);

// button1.addEventListener("click", minus);
// button2.addEventListener("click", plus);

// function minus(){

//     console.log(--num);
// }

// function plus(){

//     console.log(++num);
// }

// Задание6: Попробовать так же изменить значение параграфа

// let button1 = document.createElement("button");
// let button2 = document.createElement("button");

// let paragraph = document.querySelector("p");
// let num_paragraph = Number(paragraph.innerText);

// button1.innerText = "Minus";
// button2.innerText = "plus";

// document.body.append(button1);
// document.body.append(button2);

// button1.addEventListener("click", minus);
// button2.addEventListener("click", plus);

// function minus(){
//     paragraph.innerText = --num_paragraph;
// }

// function plus(){
//     paragraph.innerText = ++num_paragraph;
// }