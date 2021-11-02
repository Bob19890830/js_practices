function power(x){
  return x * x;
}

function bigger(x, y){
  if(x>y){
    return x;
  }
  else{
    return y;
  }
}


let arr = [10,1,2,100,3,4,5,6]

let arr2 = arr.map(power);
let arr3 = arr.map(String);
let arr4 = arr.reduce(bigger)

console.log(arr2);
console.log(arr3);
console.log(arr4);
