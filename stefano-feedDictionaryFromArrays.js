var string1 = '2022-06-27';
var array1 = ['1_7$unidad', '3_6$unidad', '8_26$unidad', '7_6$unidad'];
var array2 = [4, 5, 12, 3.24];

//Create a 2D dictonary where date and the keys from 'array1' are at the same level.
var result = [];

var result = array1.map((material, i) => ({ date: string1, material, quantity: array2[i] }));

//array1.forEach((key,i) => result[key] = array2[i]);
console.log(result);
//console.log(result['3_6$unidad']);

//Create a 3D dictonary where date is at higher level than the keys from 'array1'.
var result2 = {};
result2[string1] = {};

array1.forEach((key,i) => result2[string1][key] = array2[i]);
console.log(result2);

//test
var array3 = ['aaa','bbb'];

console.log(array3.map((value) => (value + 'sss')).concat());