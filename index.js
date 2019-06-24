function superbowlWin(record){
  const outcome = record.find( function(s) { return s.result === "W" });
  if(outcome){
    return outcome["year"]
  }

}
