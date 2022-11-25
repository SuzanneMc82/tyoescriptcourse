// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //tupels
// } = {
//   name: "Suzanne",
//   age: 40,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Suzanne",
  age: 40,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favouritesActivities: string[];
favouritesActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("I am an admin");
}
