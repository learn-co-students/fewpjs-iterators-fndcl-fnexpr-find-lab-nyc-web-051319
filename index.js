// const testVar = {}
//
// function testFunc() {
//   return "hi"
// }

function superbowlWin(arr) {
  let winning_hash = arr.find(game => game.result === "W")

  if (winning_hash) {
    return winning_hash.year
  } else {
    return undefined
  }

}

superbowlWin(record);
