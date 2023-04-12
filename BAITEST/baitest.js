function tinhTong() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var sum = 0;
    var primes = [];
  
    for (var i = num1; i <= num2; i++) {
      var isPrime = true;
      for (var j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime && i > 1) {
        primes.push(i);
        sum += i;
      }
    }
  
    var result = "Các số nguyên tố trong khoảng từ " + num1 + " đến " + num2 + " là: " + primes.join(", ");
    result += "<br>Tổng các số nguyên tố trong khoảng từ " + num1 + " đến " + num2 + " là: " + sum;
    document.getElementById("ketqua").innerHTML = result;
  }
  
  function numberOneTriangle(n) {
    if (n < 1 || n > 10) {
        alert("Số n nhập vào không đúng. Nhập vào số nguyên trong khoảng (1-10)");
      return;
    }
  
    var result = "";
    for (var i = 1; i <= n; i++) {
      for (var j = 1; j <= i; j++) {
        result += "* ";
      }
      result += "<br>";
    }
    document.getElementById("triangle").innerHTML = result;
  }