
function Value() {
    alert("Number");
}

  function Play() {

    var numRows = parseInt(document.getElementById("numberofRows").value);
    var numColumns = parseInt(document.getElementById("numberofColumns").value);
}

function Dothree() {
    Value();
    Play();
    createGametable()
}

  function createGametable() {
    var numRows = parseInt(document.getElementById("numberofRows").value);
    var numColumns = parseInt(document.getElementById("numberofColumns").value);
    var table = document.createElement("table");
    for (let a = 0; a < numRows; a++) {
        var row = table.insertRow();
        for (let b = 0; b < numColumns; b++) {
          var cell = row.insertCell();
        }
    }
}
