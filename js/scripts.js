

 document.getElementById("button").addEventListener("click", function(event){
  event.preventDefault()
})
  //Zeller Function
  function Days(){
    var DD = document.getElementById("dd").value;
    var YY = document.getElementById("year").value;
    var MM = document.getElementById("month").value;
    var genderm = document.getElementById("gendm").value;
    var genderf = document.getElementById("gendf").value;
    var malenames = ["Kwasi","Kwadwo","Kwadena","Kwaku","Yaw","Kofi","Kwame"]
    var femalenames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

    //using an inbuilt function
    var birth = new Date(MM+'/'+DD+'/'+YY);
    var siku = birth.getDay()
    
    if (siku == 0)
    {
        Day = "Sunday";
    }
    else if (siku == 1)
    {
        Day = "Monday";
    }
    else if (siku == 2)
    {
        Day = "Tuesday";
    }
    else if (siku == 3)
    {
        Day = "Wednesday";
    }
    else if (siku == 4)
    {
        Day = "Thursday";
    }
    else if (siku == 5)
    {
        Day = "Friday";
    }
    else
    {
        Day = "Saturday";
    }
    
    if(DD<0 || DD>31){
      alert("Please Enter a valid day")
    }
    if(MM<0 || MM>12){
      alert("Please Enter a valid Month")
    }

    if(malenames[siku]===undefined){
      document.getElementById("akan").innerText = "Please Enter Valid Details"
    }
    
    if (document.getElementById('gendm').checked) {
      document.getElementById("akan").innerText = "Your Akan name is "+malenames[siku]+" because you were born on " +Day
      
    }
    else if (document.getElementById('gendf').checked){
      document.getElementById("akan").innerText = "Your Akan name is "+ femalenames[siku]+" because you were born on " +Day
      
    }
    else{
      document.getElementById("akan").innerHTML = "I cannot get your Akan name";  
    }
  

  }
  


//Using Zeller
/*var Day = "";
  
    if (MM < 3)
    {
        MM = MM + 12;
        YY = YY - 1;
    }
    
    var C = Math.floor(YY / 100);
    var K = YY - (100 * C);
  
    var S = Math.floor(2.6 * MM - 5.39) + Math.floor(K / 4) + Math.floor(C / 4) + DD + K - (2 * C);
  
    var ans = S - (7 * Math.floor(S / 7));
    
    if (ans == 0)
    {
        Day = "Sunday";
    }
    else if (ans == 1)
    {
        Day = "Monday";
    }
    else if (ans == 2)
    {
        Day = "Tuesday";
    }
    else if (ans == 3)
    {
        Day = "Wednesday";
    }
    else if (ans == 4)
    {
        Day = "Thursday";
    }
    else if (ans == 5)
    {
        Day = "Friday";
    }
    else
    {
        Day = "Saturday";
    }*/
//using the formula from LMS
//var daysofweek = Math.trunc(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7)
//var CC = document.getElementById("year1").value;
//var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]