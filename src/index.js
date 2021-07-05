import { createShip } from "./modules/Ship";
import "./style.scss";
// import { Ship } from "./modules/Ship.js";
const Ship = require("./modules/Ship");

let ship = Ship.createShip(5);
console.log(ship);
ship.hit(2);
