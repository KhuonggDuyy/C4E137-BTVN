function validateForm() {
    // Lấy các trường đầu vào cần kiểm tra
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Kiểm tra tính đầy đủ của các trường đầu vào
    if (nameInput.value === "" || emailInput.value === "" || passwordInput.value === "") {
        alert("Nhập đầy đủ thông tin");
    } else {
        alert("Đăng ký thành công");
    }
}