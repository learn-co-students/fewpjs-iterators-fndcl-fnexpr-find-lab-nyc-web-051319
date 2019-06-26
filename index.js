// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
// ]

function superbowlWin(array) {
  let winYear = array.find(function(entry) {
    return entry.result === "W"
  })
  if (winYear) {
    return winYear.year
  }
}
