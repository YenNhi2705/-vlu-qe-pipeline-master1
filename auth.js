function login(username, password) {
  // Tài khoản đúng
  if (username === "admin" && password === "123") {
    return true;
  }

  // Tài khoản bị khóa
  if (username === "lockedUser") {
    return false;
  }

  // Username hoặc password rỗng
  if (!username || !password) {
    return false;
  }

  // Mật khẩu không được chứa ký tự đặc biệt
  const passwordPattern = /^[a-zA-Z0-9]+$/;
  if (!passwordPattern.test(password)) {
    return false;
  }

  // Username/password không hợp lệ
  return false;
}

module.exports = { login };
