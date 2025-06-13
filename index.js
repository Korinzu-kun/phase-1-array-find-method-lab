// code your solution here
// index.js

function superbowlWin(record) {
  // Use find() to locate the first object with result "W"
  const winRecord = record.find(game => game.result === "W");
  
  // If a win is found, return the year; otherwise return undefined
  return winRecord ? winRecord.year : undefined;
}

// Example usage:
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  { year: "1998", result: "W"},
  { year: "1997", result: "L"},
  { year: "1986", result: "L"}
];

console.log(superbowlWin(record)); // Should output: "2015"

