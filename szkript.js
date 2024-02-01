
function Value() {
    alert("Number");
}

  function Play() {

    var numRows = parseInt(document.getElementById("numberofRows").value);
    var numColumns = parseInt(document.getElementById("numberofColumns").value);
}

function Doboth() {
    Value();
    Play();
}

  function createGametable() {
    var numRows = parseInt(document.getElementById("numberofRows").value);
    var numColumns = parseInt(document.getElementById("numberofColumns").value);
    var table = document.createElement("table");
    for (var a = 0; a < numRows) {
        var row = table.insertRow();
        for (var b = 0; b < numColumns) {
          var cell = row.insertCell();
        }
    }
}
