
var  InputBirthYear, InputBirthMonth, InputBirthDate;

function myInput(){

     InputBirthYear =document.getElementById("birthyear").value;

     InputBirthMonth = document.getElementById("birthmonth").value;

     InputBirthDate = document.getElementById("birthdate").value;

    var gender1 = document.getElementById("gender");

    var gender2 = document.getElementById("gender2");


        var Malename = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

        var Femalename = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];

        var DD = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Sunday"];




        var century = parseInt(InputBirthYear.toString().slice(0, 2));

        var birthyear = parseInt(InputBirthYear.toString().slice(2, 4));



        var DayofBirth = parseInt(((century / 4) - 2 * century - 1) + ((5 * birthyear / 4)) + ((26 * (InputBirthMonth + 1) / 10))+ InputBirthDate) % 7;
        var DayofBirth = Math.floor(DayofBirth);
        console.log(DayofBirth);
        var Mname = Malename[DayofBirth - 1];
        var day = DD[DayofBirth -1];

        var Fname = Femalename[DayofBirth -1];
        var day = DD[DayofBirth - 1];




        if (gender1.checked == true) {



       document.getElementById("result").innerHTML=(" Since you were born on " + day + " Your name is " + Mname);

        }else if (gender2.checked == true) {


            document.getElementById("result").innerHTML=(" Since you were born on " + day + " Your name is " + Fname);
        };

        var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if(InputBirthMonth == 1 || InputBirthMonth > 2){
            if(InputBirthDate > ListofDays[InputBirthMonth - 1]){
                alert('invalid date');
                return false;
            };
        };

        if (InputBirthMonth == 2){
            var leapyear = false;
            if ((!(InputBirthYear % 4) && InputBirthYear % 100) || !(InputBirthYear % 400)){
                leapyear = true;
            }
            if ((leapyear == true) && (InputBirthDate > 29)){
                alert('invalid date format');
                return false;
            }
        }

    };


myInput();
