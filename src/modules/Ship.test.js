const { expect } = require("@jest/globals");
const Ship = require("./Ship");
// import { Ship } from "./Ship";

// Create a ship.
let ship = Ship.createShip(3);

test("Create ship body", () => {
  expect(ship.body).toEqual([0, 0, 0]);
});

test("Try to create ship with invalid length", () => {
  expect(Ship.createShip(5)).toBeFalsy();
});

test("Create ship length", () => {
  expect(ship.length).toEqual(3);
});

test("Hit ship on position 2", () => {
  // Hit the ship.
  ship.hit(2);
  expect(ship.body).toEqual([0, 0, 1]);
});

test("Hit ship on position 4 which doesn't exist", () => {
  expect(ship.hit(4)).toBeFalsy();
});

test("Ship shouldn't be sunk", () => {
  expect(ship.isSunk()).toBeFalsy();
});

test("Ship should be sunk", () => {
  ship.hit(0);
  ship.hit(1);
  expect(ship.isSunk()).toBeTruthy();
});
