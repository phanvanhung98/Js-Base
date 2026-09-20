// Function
console.log("============>> Function");

function helloFunction() {
    console.log("Hello Function");
}
helloFunction();

const age = 10;

function  checkAge () {
    if (age >= 18) {
        console.log("Bạn đủ tuổi");
    } else {
        console.log("Bạn không đủ tuổi");
    }
}

checkAge();

// Bài tập 1: 
function sayHello () {
    console.log("Xin chào JS");
}

sayHello();

// Bài tập 2:
// const name = "";
function helloParameter(name) {
    console.log("Bạn tên là: " + name);
}
helloParameter("Hưng");

// Bài tập 3: 
function calculateSum(a, b) {
    console.log("Tổng là:", a + b);
    console.log(`Tổng là: ${a + b}`);
}
calculateSum(10, 20);

// Bài tập 4:
function calculateSum2(a, b) {
    return a + b;
}
const result = calculateSum2(10, 20);
console.log(result);

// Bài tập 5:
function calculateAverage (a, b, c) {
    return (a + b + c) / 3;
}
const result2 = calculateAverage(10, 20, 30);
console.log(result2);

// Bài tập 6: 
function checkAge2(age2) {
    if (age2 >= 18) {
        return "Bạn đã đủ tuổi";
    } else {
        return "Bạn chưa đủ tuổi";
    }
}
const resultCheckage = checkAge2(20);
console.log(resultCheckage);

// Bài tập 7:
function checkScore(score) {
    if (score >= 90) {
        return "xuất sắc";
    } else if (score >= 80) {
        return "Tốt";
    } else if (score >= 70) {
        return "Khá";
    } else if (score >= 50) {
        return "Đạt";
    } else {
        return "Không đạt";
    }
}
const resultScore = checkScore(85);
console.log(resultScore);

// Bài tập 8: 
function calculateDiscount(total) {
    if ( total >= 1000000 ) {
        return total * 0.8;
    } else if ( total >= 500000 ) {
        return total * 0.9;
    } else if ( total >= 200000 ) {
        return total * 0.95;
    } else {
        return "Bạn không được giảm giá";
    }
}

const finalPrice = calculateDiscount(500000);
console.log("Giá sau khi giảm của bạn:", finalPrice);

// Bài tập 9: 
function getShippingFee(total2) {
    if ( total2 >= 1000000 ) {
        return 0;
    } else if (total2 >= 500000 ) {
        return 2000;
    } else if ( total2 >= 200000 ) {
        return 3000;
    } else {
        return 5000;
    }
}

const finalShippingFee = getShippingFee(400000);
console.log("Phi Ship:", finalShippingFee);

// Bài tập 10: 
function calculateTotal( price, quantity) {
    return price * quantity;
}

const totalProfit = calculateTotal(150000, 10);
console.log("Profit tháng 9: ", totalProfit);


















