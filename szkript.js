function Asztal() {
    var table = document.getElementById("Asztal");
    var row = table.insertRow(0);
    var cell= row.insertCell(0);
  }

  function createTable(numTables, numRows) {

  const numTables = prompt("Írjon be számokat");
  const numRows = prompt("Írjon be számokat");

  if (numTables && numRows && !isNaN(numTables) && !isNaN(numRows)) {
    createTable(parseInt(numTables), parseInt(numRows));} 
    else {
    alert("Kérem írjon be számokat.");
}