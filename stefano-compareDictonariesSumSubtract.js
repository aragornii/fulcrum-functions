var enteringDate = "2022-07-07";
//var dictionary1 = [{"2022-07-06":{"1_1$bolsa":23,"1_2$m3":2,"1_7$unidad":4}}, {"2022-07-07":{"1_1$bolsa":3}}, {"2022-07-08":{"1_1$bolsa":10}}];
// var dictionary1Bis = [
//     {
//         "2022-07-06": [
//             {
//                 material: "1_1$bolsa",
//                 quantity: 23
//             },
//             {
//                 material: "1_2$m3",
//                 quantity: 2
//             },
//             {
//                 material: "1_7$unidad",
//                 quantity: 4
//             }
//         ],
//         "2022-07-07": [
//             {
//                 material: "1_1$bolsa",
//                 quantity: 3
//             }
//         ],
//         "2022-07-08": [
//             {
//                 material: "1_1$bolsa",
//                 quantity: 10
//             }
//         ]
//     }
// ];

var dictionary1Ter = [
    {
        date: "2022-07-06",
        material: "1_1$bolsa",
        quantity: 23
    },
    {
        date: "2022-07-06",
        material: "1_2$m3",
        quantity: 2
    },
    {
        date: "2022-07-06",
        material: "1_7$unidad",
        quantity: 4
    },
    {
        date: "2022-07-07",
        material: "1_1$bolsa",
        quantity: 3
    },
    {
        date: "2022-07-08",
        material: "1_1$bolsa",
        quantity: 10
    }
];

//var dictionary2 = [{"2022-07-06":{"1_2$m3":1}}, {"2022-07-07":{"1_1$bolsa":1, "1_2bolsa":0.5}}];

var result1 = Object.values(
    dictionary1Ter.reduce((acc, el) => {
      if (el.date <= enteringDate) {
        if (!acc[el.material]) 
          acc[el.material] = {material: el.material, quantity: 0};
          
        acc[el.material].quantity += el.quantity;
      }
      return acc;
    }, {})
);
  
console.log(result1);

// var hola = dictionary1Ter.map(function (CurrentObject) {
//     return Object.keys(CurrentObject);
// });

// console.log(hola);

// var hola2 = dictionary1Ter.map(CurrentObject => {
//     return Object.keys(CurrentObject);
// });

// console.log(hola2);

// var hola3 = dictionary1Ter.map(function (CurrentObject) {
//     return Object.values(CurrentObject);
// });

// console.log(hola3);


// var obj = [
//     { 'name': 'P1', 'value': 150 },
//     { 'name': 'P1', 'value': 150 },
//     { 'name': 'P2', 'value': 200 },
//     { 'name': 'P3', 'value': 450 }
// ];

var holder = {};

dictionary1Ter.forEach(function(d) {
  if (holder.hasOwnProperty(d.material)) {
    if (d.date <= enteringDate) {
        holder[d.material] = holder[d.material] + d.quantity;
    } else {
        holder[d.material] = holder[d.material] + 0;
    }  
  } else {
    holder[d.material] = d.quantity;
  }
});

var obj2 = [];

for (var property in holder) {
  obj2.push({ material: property, quantity: holder[property] });
}

console.log(obj2);


//Sum the elements of two arrays with map.
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var sums = arr1.map((v, i) => v + arr2[i]);
console.log(sums);

//console.log(Object.keys(dictionary1Ter));
//console.log(Object.values(dictionary1Ter));
//console.log(Object.entries(dictionary1Ter));

//Comparing dates
if (new Date("2022-07-08") <= new Date(enteringDate)) {
    var result2 = 'OK!';
} else {
    var result2 = 'NO';
}
console.log(result2);