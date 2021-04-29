const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

console.log(input);

class TobogganRun {
  constructor(_mountainMap) {
    this.mountainMap = _mountainMap;
  }

  getPosition(x, y) {
    return this.mountainMap[y][x % this.mountainMap[0].length];
  }
  getHeight() {
    return this.mountainMap.length;
  }

  trySlope(dx, dy) {
    let x = 0;
    let y = 0;
    let trees = 0;

    while (y < map.getHeight()) {
      const current = map.getPosition(x, y);
      if (current === "#") trees++;
      x += dx;
      y += dy;
    }
    return trees;
  }
}

const map = new TobogganRun(input.map((line) => [...line]));

console.log(map.trySlope(3, 1));

const part2Slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

// Spreading array into arguments
let result = 1;
for (let slope of part2Slopes) {
  result *= map.trySlope(...slope);
}

console.log(result);
