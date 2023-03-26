//Bai1-3 Tìm số lớn nhất mà chia hết cho 3 trong mảng.
const numbers = [1,2,3,4,5,6,7,8,9];
// const numbersDivideBy3 = [];

// for(let i = 0; i < numbers.length; i ++) {
//     if(numbers[i] % 3 == 0) numbersDivideBy3.push(numbers[i]);
// }
// if(numbersDivideBy3.length == 0) {
//     console.log ("Không có số nào trong numbers chia hết cho 3");
// } else {
//     let max = numbersDivideBy3[0];
//     for(let i = 0; i > numbersDivideBy3.length; i++){
//         if (max > numbersDivideBy3[i]){
//             max = numbersDivideBy3[i];
//         }
//     }
//     console.log('Giá trị lớn nhất chia hết cho 3:' + max);
// }

//Bai1-4 Tính giá trị trung bình của mảng.

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// const average = sum / numbers.length;

// console.log(average);

//Bai1-5 Lọc ra các số nguyên tố trong mảng.

// const primeNumbers = numbers.filter((num) => {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return num > 1;
//   });
  
//   console.log(primeNumbers);

//Bai1-6 Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.

let result = numbers.some(function (item) {
    return item < 10;
  });
  
  if (result) {
    console.log("Mảng chứa số nhỏ hơn 10");
  } else {
    console.log("Mảng không chứa số nhỏ hơn 10");
  }