var malenames = ["Kwasi","Kwadwo","Kwadena","Kwaku","Yaw","Kofi","Kwame"];
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var femalenames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

var CC = document.getElementById("year1").value;
var DD = document.getElementById("day").value;
var YY = document.getElementById("year2").value;
var MM = document.getElementById("month").value;

var DayCalc = function (CC,YY,DD,MM){
  var yearcode = ((YY + (YY/4))%7);
  var monthcode;

  if (MM === 01) {
    monthcode = 0  
  }
  else if (MM===02) {
    monthcode = 3
  }
  else if (MM===03) {
    monthcode = 3
  }
  else if (MM===04) {
    monthcode = 6
  }
  else if (MM===05) {
    monthcode = 1
  }
  else if (MM===06) {
    monthcode = 4
  }
  else if (MM===07) {
    monthcode = 6
  }
  else if (MM===08) {
    monthcode = 2
  }
  else if (MM===09) {
    monthcode = 5
  }
  else if (MM===10) {
    monthcode = 0
  }
  else if (MM===11) {
    monthcode = 3
  }
  else if (MM===12) {
    monthcode = 5
  }
  else{
    alert("Enter a valid Month");
  }
  var centcode;
  switch(CC){
    case 18:
      centcode=2;
      break;
    case 19:
      centcode=0;
      break;
    case 20:
      centcode=6;
      break;
    case 21:
      centcode=4;
      break;
    case 22:
      centcode=2;
      break;
    default:
      alert("Please enter valid century")
  }
  var leapyr;


}