const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(array) {
    if (array.find(function(f) {return f.result === "W";})) {
      return (array.find(function(f) {return f.result === "W";})).year
    }
    else {
      undefined
    }
}

// let year = record.find(function(f) {
// 	return f.result === "W"
// }
// ).year
