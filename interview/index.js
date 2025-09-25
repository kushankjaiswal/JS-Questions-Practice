// // ES 6 Feature

// const radius = 20;

// const shape = {
//   abc() {
//     console.log(this.radius);
//   },
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// // console.log(shape.diameter()); // 20
// console.log(shape.abc());

// console.log(typeof shape.diameter());

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   // this.getFullName = function () {
//   //   return `${this.firstName} ${this.lastName}`;
//   // };
// }

// const member = new Person("Lydia", "Hallie");

// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName());
const eventList = [
  {
    eventName: "abc",
    status: "completed",
  },
  {
    eventName: "def",
    status: "live",
  },
  {
    eventName: "ghi",
    status: "live",
  },
  {
    eventName: "jkl",
    status: "upcoming",
  },
];

const order = ["live", "upcoming", "completed"];

function sortByStatusOrder(events, order) {
  return events.sort((a, b) => {
    return order.indexOf(a.status) - order.indexOf(b.status);
  });
  let finalArr = [];
  for (let i = 0; i < order.length; i++) {
    events?.map((event) => {
      if (event?.status === order[i]) {
        finalArr.push(event);
      }
    });
  }
  return finalArr;
}

console.log(sortByStatusOrder(eventList, order));

// [
//   {
//     "eventName": "def",
//     "status": "live"
//   },
//   {
//     "eventName": "ghi",
//     "status": "live"
//   },
//   {
//     "eventName": "jkl",
//     "status": "upcoming"
//   },
//   {
//     "eventName": "abc",
//     "status": "completed"
//   }
// ]
