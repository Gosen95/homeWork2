//1. Given a number print its digits count. Use both loops (for, while)
//for

let number = prompt();   //  вводим число
let countableNumb = 0;    // создаем основу которая будет считать 

number = Math.abs(number); минусавое число возвращаеы положутельнум

if (number === 0) {   // условие если 0 чтобы выводило 1
    countableNumb = 1;
} else {
    for (; number > 0; countableNumb++) {// тело цикла
        number = Math.floor(number / 10); //намберу присваеваем сумму делимую на 10 и округленную до низкого целого числа
    }
}
alert(countableNumb);


//while

let number = prompt();// ввод
let countableNumb = 0; // осноа старт для счета

number = Math.abs(number);// минусавое число возвращаеы положутельнум

if (number === 0) {
    countableNumb = 1;  //// условие если 0 чтобы выводило 1
} else {
    while (number > 0) {  // цикл
        number = Math.floor(number / 10);  // намберу присваеваем сумму делимую на 10 и округленную до низкого целого числа
        countableNumb++;  // прибавлет к счету 1 и записывается
    }
}
alert(countableNumb);


//2. Count numbers of digit 9 in a number. Use both loops (for, while)

//for

let number = prompt(); // ввод
let countingNumber = 9;// переменная чтомы знать что считать
let countFor = 0;// старт к ниму будет прибавляться колличество

for (; number > 0; number = Math.floor(number / 10)) { //цикл условие и делит на 10 и округляет до меньшего числа
    let digit = number % 10; // уснаем последнее число
    if (digit === countingNumber) {// условие если совпадает с 9 то прибавить к счету 1
        countFor++;
    }
}
alert(countFor);


// while
let number = prompt();  //ввод
let countingNumber = 9;// основа что считать
let countWhile = 0; //старт будет записывать результат

while (number > 0) {// цикл
    let digit = number % 10;// узнаем последнее число
    if (digit === countingNumber) {// проверка если результат соответствует 9 то ++
        countWhile++;
    }
    number = Math.floor(number / 10);  //убераем последнее число
}

alert(countWhile);

//3. Given two numbers. Print ony odd numbers between that numbers.

// for

let startNumber = prompt(); // ввод 1  числа 
let endNumber = prompt();  // ввод 2 числа иначе говоря диапозон

if (startNumber !== 0 && endNumber !== 0) {// проверяем чтобы оба числа небыли 0
    
    for (let cheknumb = +startNumber; cheknumb <= +endNumber; cheknumb++) {//цикл, создаем переменную
       
        if (cheknumb % 2 !== 0) {// проверяем четная или нет
            
            console.log(cheknumb);
        }
    }
}

//while

let startNumber = prompt();// ввод 1 число 
let endNumber = prompt(); // ввод 2 число 


if (startNumber !== 0 && endNumber !==0 ) {//условие на 0
   
    let cheknumb = +startNumber;

        while (+cheknumb <= +endNumber) {
       
        if (cheknumb % 2 !== 0) {
           
            console.log(cheknumb);
        }
       
        cheknumb++;
    }
}

// 4. Given a number as input, insert dashes (-) between each two even numbers.

//for


















//5. Given a positive number. Print it in reverse order.

//for

//for
let input = Number(prompt());
let start = 0;

for (; input > 0; input = Math.floor(input / 10)) {
    let digit = input % 10;
    start = start * 10 + digit;
}
alert(start);


// while

let input = Number(prompt());
let start = 0;

while(input > 0){
    let digit = input % 10;
    start = start * 10 + digit;
    input = Math.floor(input / 10);
}
alert(start);









