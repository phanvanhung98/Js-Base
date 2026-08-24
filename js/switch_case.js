// switch...case
console.log("============>> switch...case");

// Bài tập 1
const role = "editor";
switch (role) {
    case "admin":
        console.log("Bạn là Admin");
        break;
    case "editor":
        console.log("Bạn là Editor");
        break;
    case "user":
        console.log("Bạn là User");
        break;
    default:
        console.log("Không xác định quyền");
}   

// Bài tập 2
const month = 3;

switch (month) {
    case 1:
        console.log("Tháng 1");
        break;
    case 2:
        console.log("Tháng 2");
        break;
    case 3:
        console.log("Tháng 3");
        break;
    case 4:
        console.log("Tháng 4");
        break;
    case 5:
        console.log("Tháng 5");
        break;
    case 6:
        console.log("Tháng 6");
        break;
    default: 
        console.log("Tháng không hợp lệ");
}

// Bài tập 3
const isLoggedIn = true;
switch (isLoggedIn) {
    case true:
        console.log("Chào mừng bạn trở lại");
        break;
    case false: 
        console.log("Vui lòng đăng nhập");
        break;
}









