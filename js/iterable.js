// var a = [1, 2, 3, 4, 5, 6, 7];
// for (var x of a) {
//   console.log(x);
// }

var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);

// for (var x of a) { // 遍历Array
//   console.log(x);
// }
// for (var x of s) { // 遍历Set
//   console.log(x);
// }
// for (var x of m) { // 遍历Map
//   console.log(x[0] + '=' + x[1]);
// }

// a.forEach(function(element, index, array){
//   console.log(element);
//   console.log(index);
//   console.log(array);
// });

// s.forEach(function(element, sameEle, set){
//   console.log(element);
//   console.log(set);
// })

m.forEach(function (value, key, map){
  console.log(value);
  console.log(key);
  console.log(map);
})
