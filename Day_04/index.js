const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

for (let item of input) {
  console.log(item.split("\n"));
}

class PassportFile {
  constructor(_passportsToCheck) {
    this.passportsToCheck = _passportsToCheck;
  }
}

// const valid = [byr, iyr, eyr, hgt, hcl, ecl, pid, cid];

// const passports = new PassportFile(input);

function buildList(listOfPassports) {
  const passportsToCheck = {};
  let counter = 0;
  byr = null;
  iyr = null;
  eyr = null;
  hgt = null;
  hcl = null;
  ecl = null;
  pid = null;
  cid = null;

  while (input.length !== null) {}
}
