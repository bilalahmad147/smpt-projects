console.log("start working...");
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
// const number1 = 5;
// const number2 = 2.5;

// const result = add(number1, number2);
// console.log(result);

// let obj = {
//   name: "bilal",
//   age: 19,
// };

// console.log(obj.age);

const combine = (input1: number | string, input2: number | string) => {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const finalResult1 = combine(5, 2);
console.log(finalResult1);

const finalResult2 = combine("bilal", ' ahmad');
console.log(finalResult2);

const finalResult3 = combine("bilal", 5);
console.log(finalResult3);
