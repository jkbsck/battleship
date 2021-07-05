const Ship = (() => {
  const createShip = (length) => {
    if (length < 1 || length > 4) {
      return false;
    }

    // In body array 1 is hit part, 0 is not hit yet.
    const body = [];
    for (let i = 0; i < length; i++) {
      body.push(0);
    }

    const hit = (position) => {
      if (position >= 0 && position < length) {
        body[position] = 1;
      }
    };

    const isSunk = () => {
      if (body.includes(0)) {
        return false;
      }
      return true;
    };

    return { length, body, hit, isSunk };
  };

  return { createShip };
})();

// export { Ship };
module.exports = Ship;
