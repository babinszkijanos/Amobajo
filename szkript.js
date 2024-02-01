
function Érték() {
    alert("Ez lesz az érték");
}

  function Játék() {

    var numRows = parseInt(document.getElementById("sorérték").value);
    var numColumns = parseInt(document.getElementById("oszlopérték").value);
}

function Mindkétfeladatvégrehajtása() {
    Érték();
    Játék();
}

  function csináljpályát() {
    var numRows = parseInt(document.getElementById("sorérték").value);
    var numColumns = parseInt(document.getElementById("oszlopérték").value);
    var table = document.createElement("table");
    for (var a = 0; a < numRows) {
        var row = table.insertRow();
        for (var b = 0; b < numColumns) {
          var cell = row.insertCell();
          var square = document.createElement("div");
        }
    }
}
