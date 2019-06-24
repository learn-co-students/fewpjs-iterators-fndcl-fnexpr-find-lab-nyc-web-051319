

function superbowlWin(record) {
  let lastWin = record.find(x => x.result === "W");

  if(lastWin ===  undefined) {
    return undefined;
  }
  return lastWin.year;
}
