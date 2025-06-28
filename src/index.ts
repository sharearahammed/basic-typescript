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
// interface productType {
//   name: string;
//   stock: number;
//   price: number;
//   photo?: string;
//   readonly id: string;
// }
// type GetDataType = (product: productType) => void;

// const getData: GetDataType = (product) => {
//   console.log(product);
// };

// const productOne: productType = {
//   name: "Macbook",
//   stock: 10,
//   price: 156363,
//   photo: "photoUrl",
//   id:"dfdsf"
// };
// getData(productOne);

// Never Type
// type themeMode = "light" | "dark";

// const errorHandler = (): never => {
//   throw new Error();
// };

// const mode: themeMode = "light";

// ----------------------------------------------------

// classes

class Player {
  public readonly id: string;
  constructor(
    private height: number,
    public weight: number,
    protected power?: number
  ) {
    this.id = String(Math.random() * 10);
  }
  // getMyHeight = () => {
  //   return this.height;
  // };
  get getMyHeight() {
    return this.height;
  }
}
const nihal = new Player(20, 12, 30);
// nihal.height
// class Player2 extends Player {
//   special: boolean;
//   constructor(height: number, weight: number, power: number, special: boolean) {
//     super(height, weight, power);
//     this.special = special;
//   }
//   // getPower = () => {
//   //   return this.power;
//   // };
//   getPower = () => this.power;
// }

// // const nihal = new Player(20, 12);
// const nihal = new Player2(20, 12, 30, true);
// console.log(nihal.getMyHeight());
// console.log("weight", nihal.weight);
// console.log("special", nihal.special);
// console.log("power", nihal.getPower());
// console.log("id", nihal.id);

// interface person {
//   [key: string]: string;
// }

// const myObj: person = {
//   name: "Nihal",
//   email: "sharear@gmail.com",
// };

// const getName = (): string => {
//   return myObj["name"];
// };

// const getEmail = (): string => {
//   return myObj["email"];
// };

// const getData = (key: keyof person): string => {
//   return myObj[key];
// };

// getData("name");

// ----------------------------------------------------
// utility
// ------Partial type
type User = {
  name?: string;
  email: string;
};
// type User2 = Partial<User>

// ------Required<Type> - opposite of partial
// type User2 =Required<User>
// const user : Required<User> = {
// name:"nihal",
// email:"nihal@gmail.com"
// }

// ------Readonly<Type>
// const user: Readonly<User> = {
//   name: "nihal",
//   email: "nihal@gmail.com",
// };

// ------Record<Key,type>
// interface UserInfo {
//   age: number;
// }
// type UserName = "nihal" | "nabil" | "fahim";
// const users: Record<UserName, UserInfo> = {
//   nihal: {
//     age: 12,
//   },
//   nabil: {
//     age: 13,
//   },
//   fahim: {
//     age: 14,
//   },
// };

// ------Pick <Type,keys>
// interface OrderInfo {
//   readonly id: string;
//   user: string;
//   city: string;
//   country: string;
//   state: string;
//   status: string;
// }
// type SingleInfo = Pick<OrderInfo, "user" | "city" | "country">;

// ------Omit <Type,keys>
// type Random = Omit<OrderInfo, "id" | "status">;

// ------ Exclude<Type , ExcludeUnion>
// type MyUnion = string | number | boolean;
// type Random = Exclude<MyUnion, boolean>;

// ------ Extract<Type , Union>
// type MyUnion = string | number | boolean;
// type Random = Extract<MyUnion, boolean>;

// ------ NonNullable<Type>
// type MyUnion = string | number | boolean | null | undefined;
// type Random = NonNullable<MyUnion>;

// ------ parameters<Type>

// const myFunc = (a: string, b: number) => {
//   console.log(a + b);
// };
// type Random = Parameters<typeof myFunc>

// ------ ConstructorParameters<Type>
// class SampleClass {
//   constructor(public s: string, public t: string) {}
// }
// type Random = ConstructorParameters<typeof SampleClass>

// ------ ReturnType<Type>
// const myFunc = (a: string, b: number): string => {
//   return a + b;
// };
// type FuncType = ReturnType<typeof myFunc>;

// ------ InstanceType<Type>
// class SampleClass {
//   constructor(public s: string, public t: string) {}
// }
// type Random = InstanceType<typeof SampleClass>;
// const user: Random = {
//   s: "22",
//   t: "11",
// };

// --------------------------------------------------------------------------------------

// Generics

// type Person = {
//   name: string;
//   age: number;
// };

// const func = <T>(n: T): T => {
//   return n;
// };

// const person1: Person = {
//   name: "Nihal",
//   age: 12,
// };

// const ans = func<Person>(person1);

// type Person = {
//   name: string;
//   age: number;
// };

// type Person2 = {
//   name: string;
//   age: number;
//   email: string;
// };

// const user: Person = {
//   name: "Nihal",
//   age: 25,
// };
// const user2: Person2 = {
//   name: "Nihal",
//   age: 25,
//   email: "asfd@gmail.com",
// };
// const func = <T, U extends T>(n: T, o: U): { n: T; o: U } => {
//   return { n, o };
// };

// const res = func<Person, Person2>(user, user2);

// type People = {
//   name: string;
//   age: number;
// };

// const users: People[] = [
//   { name: "Nihal", age: 25 },
//   { name: "Nabil", age: 24 },
//   { name: "Fahim", age: 23 },
// ];

// const filteredPeople = <T, U extends keyof T>(
//   arr: T[],
//   poperty: U,
//   value: T[U]
// ): T[] => {
//   return arr.filter((item) => item[poperty] === value);
// };

// const filterPeopleByName = filteredPeople(users, "name", "Fahim");
// const filterPeopleByAge = filteredPeople(users, "age", 25);

// console.log("filterPeopleByName", filterPeopleByName);
// console.log("filterPeopleByAge", filterPeopleByAge);

// -----------------------------------------------------------
// spread operator

let obj: object = {
  name: "Sharear",
  age: 10,
};

// let obj1 = { ...obj };
obj = { ...obj, passport: true };
console.log("obj", obj);

// let valArray:<Array>[]
const arr: Array<number> = [12, 33, 64];

// -----------------------------------------------------------
// enum
enum Color {
  APP_NAME = "my_app_name",
  Red = "red",
  Yellow = "yellow",
  Blue = "blue",
  Green = "green",
}

let color: Color = Color.Green;

let notSure: unknown = "a";

if (typeof notSure == "number") {
  notSure.toFixed(2);
} else if (typeof notSure == "string") {
  notSure.length;
}

function infiniteLoop(): never {
  while (true) {
    console.log(1);
  }
}

function throwError(message: string): never {
  throw new Error(message);
}

throwError("Somthing went to wrong");
