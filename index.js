import "./hello";

const friends = ["ava", "spaghetti", "sula"];

const friend = {
  "His name": "Coco",
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

console.log(firstFriend, lastFriend);
