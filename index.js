//Import et export
const ageLogin = 24;

if (ageLogin >= 18) {
  import("./hello.js").then((m) => {
    m.default();
  });
} else {
  console.log("Not cool");
}

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
