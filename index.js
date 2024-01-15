import { sayHello } from "./hello";

//Import et export
sayHello();

//Destructuration tableaux et objets
const friends = ["ava", "spaghetti", "sula"];

const friend = {
  fn: "Coco",
  age: 56,
  address: {
    street: "9 desdes",
    city: "Los Angeles",
  },
  sayHello() {
    console.log("yo bro");
  },
};

const [firstFriend, , lastFriend] = friends;

const {
  fn: firstname,
  age,
  address: { city },
} = friend;

console.log(firstFriend, lastFriend);
console.log(firstname, city, age);
