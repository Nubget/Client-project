function showTable() {
  document.getElementById('sumFertilization').style.visibility = "visible";
  document.getElementById('sumWeedControl').style.visibility = "visible";
  document.getElementById('sumPestControl').style.visibility = "visible";
  document.getElementById('sumMowing').style.visibility = "visible";
  document.getElementById('sumEdging').style.visibility = "visible";
  document.getElementById('sumCompleteService').style.visibility = "visible";
}

function hideTable() {
  document.getElementById('sumFertilization').style.visibility = "hidden";
  document.getElementById('sumWeedControl').style.visibility = "hidden";
  document.getElementById('sumPestControl').style.visibility = "hidden";
  document.getElementById('sumMowing').style.visibility = "hidden";
  document.getElementById('sumEdging').style.visibility = "hidden";
  document.getElementById('sumCompleteService').style.visibility = "hidden";
}

function displayFertilization() {
  hideTable();
  document.getElementById('sumFertilization').style.visibility = "visible";
  w3.displayObject("sumFertilization", sumFertilization);
}

function displayWeedControl() {
  hideTable();
  document.getElementById('sumWeedControl').style.visibility = "visible";
  w3.displayObject("sumWeedControl", sumWeedControl);
}

function displayPestControl() {
  hideTable();
  document.getElementById('sumPestControl').style.visibility = "visible";
  w3.displayObject("sumPestControl", sumPestControl);
}

function displayMowing() {
  hideTable();
  document.getElementById('sumMowing').style.visibility = "visible";
  w3.displayObject("sumMowing", sumMowing);
}

function displayEdging() {
  hideTable();
  document.getElementById('sumEdging').style.visibility = "visible";
  w3.displayObject("sumEdging", sumEdging);
}

function displayCompleteService() {
  hideTable();
  document.getElementById('sumCompleteService').style.visibility = "visible";
  w3.displayObject("sumCompleteService", sumCompleteService);
}
