const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records) {
  let season = records.find(record => record.result === "W")
  if (season) {

    return season.year
  }
}
