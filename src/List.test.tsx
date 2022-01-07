import { functions } from "./List";

test("Add 2 + 2 is 4", () => {
  expect(functions.add(2, 2)).toEqual(4);
});

test("testing test", () => {
  expect(functions.add(1, 2)).not.toBe(4);
});
