function superbowlWin(records) {
  let found_record = records.find(function(record){return record.result==='W'})
  if(found_record){
    return found_record.year
  }
  found_record
}