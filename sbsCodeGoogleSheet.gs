function calculateTotalScore() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var totalScore = 0;

  // Create a new column for the total score
  sheet.insertColumnAfter(17);

  // loop through each row of data
  for (var i = 1; i < data.length; i++) {
    totalScore = 0;
  
  // loop through each column (response) in the row
  for (var j = 4; j <= 15; j++) {
    totalScore += data[i][j];
    }

  // set the total score in the new column
  sheet.getRange(i+1, 17).setValue(totalScore);
  }
}
