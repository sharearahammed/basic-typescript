// ------------Array------------

// const a = 123
// alert("Alart")
// console.log("a",a)

// const arr :Array<number> = [12,33,64]
// const arr2 :Array<string> = ["nihal","nabil","fahim"]

// let sum = 0;

// arr.forEach(i => {
//     console.log("Number:", i);
//     sum += i;
// });

// arr2.forEach(i=>{
//   console.log("String:", i);
// })

// console.log("arr:", arr);
// console.log("arr2:", arr2);

// ------------object------------

// type Obj = {
//   firstName: string;
//   lastName: string;
//   gender: string;
//   age: number;
//   passportNo?: number;
//   visa?: boolean;
// };

// interface Obj {
//   firstName: string;
//   lastName: string;
//   gender: string;
//   age: number;
//   passportNo?: number;
//   visa?: boolean;
// }

// type FuncType = (n: number, m: number) => void;

// interface NewObj extends Obj {
//   scolar: boolean;
//   func: FuncType;
// }

// const gigi: NewObj = {
//   firstName: "Sharear",
//   lastName: "Ahammed",
//   gender: "male",
//   age: 25,
//   scolar: true,
//   func: (n, m) => {
//     console.log(n * m);
//   },
// };

// const kendal: NewObj = {
//   firstName: "Sharear",
//   lastName: "Ahammed",
//   gender: "male",
//   age: 25,
//   scolar: true,
//   func: (n, m) => {
//     console.log(n * m);
//   },
// };

// kendal.func(20, 12);

// const obj: Obj = {
//   firstName: "Sharear",
//   lastName: "Ahammed",
//   gender: "male",
//   age: 25,
//   passportNo: 12345678,
//   visa: true,
// };

// const obj2: Obj = {
//   firstName: "Nabil",
//   lastName: "Ahmed",
//   gender: "male",
//   age: 25,
// };

// ------------fUNCTION------------

// type FuncType = (a: number, b: number, c?: number) => number | string;

// const func: FuncType = (a, b, c) => {
//   if (typeof c === "undefined") return "c is not provided";
//   return a * b * c;
// };

// func(10, 20);

// Rest Operator

//function with object
type GetDataType = (product: {
  name: string;
  stock: string;
  price: number;
  photo: string;
}) => void;

const getData: GetDataType = (product) => {
  console.log(product);
};
