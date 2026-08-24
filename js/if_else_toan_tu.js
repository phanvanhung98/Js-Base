// If else & Toán tử
console.log("============>> If else & Toán tử");

const score = 75;
if (score >= 90) {
    console.log("Xuất sắc");
} else if (score >= 80) {
    console.log("Giỏi");
} else if (score >= 65) {
    console.log("Khá");
} else {
    console.log("Trung bình");
}


const username = "admin";
const password = "123456";
if (username === "admin" && password === "123456") {
    console.log("Đăng nhập thành công");
} else {
    console.log("Đăng nhập thất bại");
}

const role = "admin";
if (role === "admin" || role === "editor") {
    console.log("Bạn có quyền chỉnh sửa");
} else {
    console.log("Bạn không có quyền chỉnh sửa");
}

const isLoggedIn = false;
if (!isLoggedIn) {
    console.log("Bạn chưa đăng nhập, vui lòng đăng nhập để tới Home page");
} else {
    console.log("Welcome to Home page");
}

const age = 20;
const isLoggedIn2 = true;

if (!isLoggedIn2) {
    console.log("Vui lòng đăng nhập");
} else if (isLoggedIn2 && age >= 18) {
    console.log("Bạn được phép đăng nhập");
} else {
    console.log("Bạn chưa đủ tuổi");
}


const age3 = 15;
const isLoggedIn3 = true;
const role3 = "admin";

if (!isLoggedIn3) {
    console.log("Vui lòng đăng nhập");
} else if (isLoggedIn3 && (role3 === "admin" || age3 >= 18))  {
    console.log("Bạn được phép truy cập");
} else {
    console.log("Bạn không có quyền truy cập");
}

const score4 = 75;
const attendance = 80;
const hasCheated = false;

if (hasCheated) {
    console.log("Bạn bị trượt do gian lận");
} else if (!hasCheated && score4 >= 70 && attendance >= 80) {
    console.log("Bạn đã vượt qua khóa học");
} else {
    console.log("Bạn chưa đạt yêu cầu");
}
