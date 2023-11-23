function validateForm() {
    var currentPassword = document.getElementById("currentPassword").value;
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var passwordError = document.getElementById("passwordError");
  
    // Kiểm tra mật khẩu cũ không được rỗng
    if (currentPassword === "") {
      passwordError.textContent = "Mật khẩu cũ không được để trống";
      return false;
    }
  
    // Kiểm tra mật khẩu mới không được rỗng
    if (newPassword === "") {
      passwordError.textContent = "Mật khẩu mới không được để trống";
      return false;
    }
  
    // Kiểm tra xác nhận mật khẩu mới không được rỗng
    if (confirmPassword === "") {
      passwordError.textContent = "Xác nhận mật khẩu mới không được để trống";
      return false;
    }
  
    // Kiểm tra mật khẩu mới và xác nhận mật khẩu mới khớp nhau
    if (newPassword !== confirmPassword) {
      passwordError.textContent = "Mật khẩu mới và xác nhận mật khẩu mới không khớp";
      return false;
    }
  
    // Các kiểm tra hợp lệ đã qua, có thể gửi form
    return true;
  }
  
  function togglePasswordVisibility() {
    var passwordFields = document.querySelectorAll('input[type="password"]');
    var showPasswordCheckbox = document.getElementById("showPassword");
    
    for (var i = 0; i < passwordFields.length; i++) {
      if (showPasswordCheckbox.checked) {
        passwordFields[i].type = "text";
      } else {
        passwordFields[i].type = "password";
      }
    }
  }