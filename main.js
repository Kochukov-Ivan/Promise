let firstSet = new Set();

firstSet
  .add("e")
  .add("r")
  .add("i")
  .add("k")
  .add("t")
  .add("h")
  .add("e")
  .add("b")
  .add("e")
  .add("s")
  .add("t");

// console.log(firstSet);

//Добавление значений в Set из поля Input
function addNew() {
  firstSet.add(document.querySelector(".input1").value);
  console.log(firstSet);
}
// Проверка есть ли значение в Set
function check() {
  let a = document.querySelector(".input2").value;
  console.log(firstSet.has(a));

  if (firstSet.has(a) == true) {
    document.getElementById("out1").innerHTML = "true";
  } else {
    document.getElementById("out1").innerHTML = "false";
  }
}

// Вывести все числа из массива больше 5
function over() {
  let firstArr = [];
  let secondArr = [];

  for (i = 1; i < 15; i++) {
    firstArr.push(i);
  }
  console.log(firstArr);
  document.getElementById("out2").innerHTML = firstArr;

  for (i = 0; i < firstArr.length; i++) {
    if (firstArr[i] > 5) {
      secondArr.push(firstArr[i]);
    }
  }
  console.log(secondArr);
  document.getElementById("out2").innerHTML += "<br>";
  document.getElementById("out2").innerHTML += secondArr;
}
