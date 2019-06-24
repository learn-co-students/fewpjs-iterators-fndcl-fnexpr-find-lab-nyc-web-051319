function superbowlWin(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].result === "W") {
      return array[i].year;
    }
  }
  return undefined;
}
