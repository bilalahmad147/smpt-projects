// Starting learning JS for Gamica Cloud
// alert("hello world");

// var name = "bilal ahmad";
// console.log(name);

// var num1 = 10;
// var num2 = 5;
// var plus = num1 + num2;
// console.log(plus);
// var nameChar = num2 + name;
// console.log(nameChar);

// var firstName = "bilal";
// var lastName = "ahmad";
// var fullName = firstName + " " + lastName;
// console.log(fullName);

// var value = prompt("Enter input Value: ");
// console.log(typeof value);
// var value = +prompt("Enter input Value: ");
// console.log(typeof value);

// var num = 10;
// var name = "bilal";
// var inputValue = prompt("Enter name : ");
// if (inputValue === name) {
//   num++;
// } else {
//   num--;
// }
// console.log(num);

// var namesList = ["bilal", "ali", "shah", "ans"];
// namesList.pop();
// namesList.push("zia", "chan");
// console.log(namesList);
// var newList = namesList.slice(1, 4);
// console.log(newList);

// var name = "billa";
// for (let i = 0; i <= 5; i++) {
//   console.log(i + name);
// }

// function sumNumbers(num1, num2 = 4) {
//   var num = num1 + num2;
//   console.log(num);
// }

// sumNumbers(10);

// ES6 Start

// var company = { name: "Panacloud", employee: 200 };
// var txt = "";
// for (i in company) {
//   console.log(company[i]);
//   txt += company[i] + " ";
// }
// console.log(txt);

// const sumNum = (a, b) => {
//   let c = a + b;
//   return c;
// };

// const mulNum = (a, b) => {
//   let c = a * b;
//   return c;
// };

// const subNum = (a, b) => {
//   let c = a - b;
//   return c;
// };

// const divNum = (a, b) => {
//   let c = a / b;
//   return c;
// };

// const perNum = (a, b) => {
//   let c = a % b;
//   return c;
// };

// console.log(sumNum(5, 10));
// console.log(mulNum(10, 2));
// console.log(subNum(20, 5));
// console.log(divNum(20, 5));
// console.log(perNum(10, 3));

// let listOfNames = ["ali", "chan", "shah", "ans"];
// const showList = () => {
//   listOfNames.map((name, ind) => console.log(ind, name));
// };

// showList();

// let first = [1,2,3]
// let second = [4,5,6]

// let third = [...first,...second]
// console.log(third);

// function popup(msg) {
//     alert(msg)
// }

function fillCityName(fieldId) {
  let cityName;
  let zipCode = document.getElementById(fieldId).value;
  console.log(zipCode);
  switch (zipCode) {
    case "110":
      cityName = "Sahiwal";
      break;
    case "111":
      cityName = "Lahore";
      break;
    case "112":
      cityName = "Karachi";
      break;
    case "113":
      cityName = "Multan";
      break;
    default:
      cityName = "Not Found";
      alert("Incorrect Zip Code");
      break;
  }
  document.getElementById("cityName").value = cityName;
}
