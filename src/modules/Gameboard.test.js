const { expect } = require("@jest/globals");
const Gameboard = require("./Gameboard");
// import { Gameboard } from "./Gameboard";

test("Gameboard shouldn't be created with invalid size parameter", () => {
  expect(Gameboard.createGameboard(true)).toBeFalsy();
  expect(Gameboard.createGameboard(-50)).toBeFalsy();
  expect(Gameboard.createGameboard({ name: "awea" })).toBeFalsy();
  expect(Gameboard.createGameboard(["ada", 78, undefined])).toBeFalsy();
});

// Create a gameboard.
let gameboard = Gameboard.createGameboard(10);

test("Gameboard should have 10 x-fields", () => {
  expect(gameboard.fields.length).toBe(10);
});

test("Gameboard should have 10 y-fields", () => {
  expect(gameboard.fields[0].length).toBe(10);
});

test("Fail to create ships for gameboard", () => {
  expect(gameboard.createShips([4, 80, 2, 1])).toBeFalsy();
  expect(gameboard.createShips([4, 3, 2, 1, 1])).toBeFalsy();
  expect(gameboard.createShips([4, 3, 2, "a"])).toBeFalsy();
});
