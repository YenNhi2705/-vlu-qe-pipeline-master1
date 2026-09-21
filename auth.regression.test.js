const { login } = require("./auth");

describe("Regression Test - kiểm tra các trường hợp ngoại lệ", () => {
  test("Mật khẩu sai", () => {
    expect(login("admin", "456")).toBe(false);
  });

  test("Username rỗng", () => {
    expect(login("", "123")).toBe(false);
  });

  test("Mật khẩu rỗng", () => {
    expect(login("admin", "")).toBe(false);
  });

  test("Username và mật khẩu đều rỗng", () => {
    expect(login("", "")).toBe(false);
  });

  test("Mật khẩu chứa ký tự đặc biệt", () => {
    expect(login("admin", "123@")).toBe(false);
  });

  test("Tài khoản bị khóa", () => {
    expect(login("lockedUser", "123")).toBe(false);
  });
});
