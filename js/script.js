var century, year, month, date;

document.getElementById('theform').onsubmit = function akanName() { console.log(document.getElementById('theform').value);
var dob = document.getElementById('dob').value;
alert('Your date of birth is ' + dob);
var century = dob.slice(0,2);
var year = dob.slice(2,4);
var month = dob.slice(5,7);
var date = dob.slice(8,10);

var gender = prompt("Enter Male or Female");
alert(gender);

var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];

var DD = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Sunday"];

var dayOfBirth = parseInt(((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10))) % 7;
   if (gender === "Male") {
       var mName = maleName[dayOfBirth - 1]
       var day = DD[dayOfBirth -1]
       alert(" Since you were born on " + day + " Your name is "+ Mname);
       }
       else if (gender === "Female") {
           var Fname = femaleName[dayOfBirth -1]
           var day = DD[dayOfBirth - 1]
           alert(" Since you were born on " + day + " Your name is "+ Fname);
       }

}
akanName();
