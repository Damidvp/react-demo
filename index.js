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

const result = friends.find((value) => value != "spaghetti");
console.log(result);
//Rest operator : ...
const [, ...bestFriends] = friends;

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

const updated = {
  ...friend,
  age: 99,
  email: "furendo@gmail.com",
};

const [firstFriend, , lastFriend] = friends;

const {
  fn: firstname,
  age,
  address: { city },
} = friend;

console.log(firstFriend, lastFriend);
console.log(firstname, city, age);

console.log(bestFriends);
console.log(updated);
