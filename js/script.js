var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];

// stuff.forEach(function (item, index) {
//   if (index % 2 === 0) {
//     console.log(item);
//   }
// });

// var removeItem = function (array, item) {
//   var index = array.indexOf(item);

//   if (index === -1) {
//     console.log(`No such element exists in this array.`);
//   } else {
//     array.splice(index, 1);
//     console.log(`Removing ${item}`);
//   }
// };

// removeItem(stuff, "sky");
// console.log(stuff);
// removeItem(stuff, "water");
// console.log(stuff);

// var onlyS = [];
// for (var item of stuff) {
//   if (item.includes("s")) {
//     onlyS.push(item);
//   }
// }

// console.log(onlyS);

var filteredOnlyS = stuff.filter(function (item) {
  return item.includes("s");
});

console.log(filteredOnlyS);
