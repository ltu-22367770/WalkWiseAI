const user = {
  email: "test@walkwise.com",
  password: "123456",
};

test("user login credentials exist", () => {
  expect(user.email).toContain("@");
  expect(user.password.length).toBeGreaterThan(5);
});