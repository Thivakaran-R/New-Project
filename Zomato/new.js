// const arr = [1, 0, 3, 2, 0, 0, 5, 6, 0, 7];

//METHOD
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     arrnew.unshift(arr[i]);
//   } else if (arr[i] != 0) {
//     arrnew.push(arr[i]);
//   }
// }

// let arrnew = new Array(arr.length);

// let negativeIndex = arr.length - 1;

// let zeroIndex = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     arr[zeroIndex] = arr[i];
//     zeroIndex++;
//   } else {
//     arr[negativeIndex] = arr[i];
//     negativeIndex--;
//   }
// }

// console.log(arr);

const arr = [-8, -10, 0, -1, 0, 1, 7.9, 8, 99];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log(arr);
