const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(arg) {
  let obj = arg.find((i,o) => i.result === "W")
    if (obj === undefined) {
      return undefined
    } else {
    return obj.year
    }
  }
