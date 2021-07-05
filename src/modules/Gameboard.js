const Ship = require("./Ship");

const Gameboard = (() => {
  const createGameboard = (n) => {
    // Allow size of the gameboard to be <5, 100>
    if (isNaN(n) || n < 5 || n > 100) {
      return false;
    }

    // In body array 1 is hit part, 0 is not hit yet.
    const fields = [];
    for (let i = 0; i < n; i++) {
      fields.push([]);
      for (let j = 0; j < n; j++) {
        fields[i].push([]);
      }
    }

    // Create ships for gameboard - argument is array of numbers of ships for each length (1...4)
    const createShips = (nForLength) => {
      if (!_validateCreateShips(nForLength, fields)) {
        return false;
      }

      return "OK";
    };

    return { fields, createShips };
  };

  // Validates input of createShips()
  const _validateCreateShips = (nForLength, fields) => {
    // Return false if size of nForLength isn't 4.
    if (nForLength.length !== 4) {
      console.log("Parameter should be array of length of 4 integers.");
      return false;
    }

    // Return false if elements in nForLength aren't numbers or their combined area wouldn't fit into gameboard.
    let totalArea = 0;
    for (let i = 0; i < nForLength.length; i++) {
      if (isNaN(nForLength[i])) {
        console.log("Parameters must be array of numbers.");
        return false;
      }
      totalArea += nForLength[i] * (i + 1);
    }
    if (totalArea > fields.length * fields.length) {
      console.log(
        "Total area of all ships must not be larger than whole area of the gameboard."
      );
      return false;
    }
    return true;
  };

  return { createGameboard };
})();

// export { Gameboard };
module.exports = Gameboard;
