function showTable2() {
  document.getElementById('winDriveway').style.visibility = "visible";
  document.getElementById('winSidewalks').style.visibility = "visible";
  document.getElementById('winBoth').style.visibility = "visible";
  document.getElementById('winMowing').style.visibility = "visible";
  document.getElementById('winParkingLot').style.visibility = "visible";
}

function hideTable2() {
  document.getElementById('winDriveway').style.visibility = "hidden";
  document.getElementById('winSidewalks').style.visibility = "hidden";
  document.getElementById('winBoth').style.visibility = "hidden";
  document.getElementById('winMowing').style.visibility = "hidden";
  document.getElementById('winParkingLot').style.visibility = "hidden";
}

function displayDriveway() {
  hideTable2();
  document.getElementById('winDriveway').style.visibility = "visible";
  w3.displayObject("winDriveway", winDriveway);
}

function displaySidewalks() {
  hideTable2();
  document.getElementById('winSidewalks').style.visibility = "visible";
  w3.displayObject("winSidewalks", winSidewalks);
}

function displayBoth() {
  hideTable2();
  document.getElementById('winBoth').style.visibility = "visible";
  w3.displayObject("winBoth", winBoth);
}

function displayParkingLot() {
  hideTable2();
  document.getElementById('winParkingLot').style.visibility = "visible";
  w3.displayObject("winParkingLot", winParkingLot);
}

function displayMowing() {
  hideTable2();
  document.getElementById('winMowing').style.visibility = "visible";
  w3.displayObject("winMowing", winMowing);
}
