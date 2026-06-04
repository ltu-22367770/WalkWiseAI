function calculateDistance(distance) {
  return distance * 60;
}

test("calculates calories from distance", () => {
  expect(calculateDistance(2)).toBe(120);
});

test("calculates calories for 5km", () => {
  expect(calculateDistance(5)).toBe(300);
});