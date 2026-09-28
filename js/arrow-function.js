// Arrow Function
console.log("============>> Arrow Function");

const sayHello = (name) => {
  return "Full name:" + name;
}
console.log(sayHello("Hưng"));

// Bài tập 1: 
const sayHello1 = name => {
  return "Xin chào " + name;
}
console.log(sayHello1("Phan Văn Hưng"));

// Bài tập 2:
const calculateSum = (a, b) => {
  return "Total = ", a + b;
}
console.log(calculateSum(100, 200));

// Bài tập 3: Implicit Return
const calculateSum3 = (a, b) => a + b;
console.log("Total3 = ", calculateSum3(100, 200));

// Bài tập 4: Arrow Function + điều kiện
const checkAge = (age) => {
  if (age >= 18 ) {
    return "Đủ tuổi";
  } else {
    return "Chưa đủ tuổi";
  }
}
const resultCheckAge = checkAge(20);
console.log(resultCheckAge);

// Bài tập 5: Arrow Function + if / else if / else
const checkScore = (score) => {
  if ( score >= 90 ) {
    return "Xuất sắc";
  } else if ( score >= 80 ) {
    return "Tốt";
  } else if ( score >= 70 ) {
    return "Khá";
  } else if ( score >= 50 ) {
    return "Đạt";
  } else {
    return "Không đạt";
  }
}
const resultCheckscore = checkScore(85);
console.log(resultCheckscore);

// Bài tập 6:
const calculateTotal = (price, quantity) => {
  const totalMoney = price * quantity; 
  if (totalMoney >= 1000000) {
    return totalMoney * 0.8;
  } else if (totalMoney >= 500000) {
    return totalMoney * 0.9;
  } else if (totalMoney >= 200000) {
    return totalMoney * 0.95;
  } else {
    return totalMoney;
  }
}
const finalPrice = calculateTotal(600000, 1);
console.log(finalPrice);








