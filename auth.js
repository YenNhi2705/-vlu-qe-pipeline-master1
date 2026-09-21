function login(username, password) {
  // Updated login function for feature branch testing

  if (username === "admin" && password === '9999') {
    return true;
  }

  if (username === "lockedUser") {
    return false;
  }

  if (!username || !password) {
    return false;
  }

  const passwordPattern = /^[a-zA-Z0-9]+$/;

  if (!passwordPattern.test(password)) {
    return false;
  }

  return false;
}

module.exports = { login };
