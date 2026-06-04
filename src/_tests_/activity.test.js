const activity = {
  title: "Morning Walk",
  distance: 2.5,
  duration: "00:30:00",
};

test("activity contains correct data", () => {
  expect(activity.title).toBe("Morning Walk");
  expect(activity.distance).toBeGreaterThan(0);
  expect(activity.duration).toContain(":");
});