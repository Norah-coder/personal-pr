var nameList = [
    {
        Sunday: "Kwasi",
        Monday: "Kwadwo",
        Tuesday: "Kwabena",
        Wednesday: "Kwaku",
        Thursday: "Yaw",
        Friday: "Kofi",
        Saturday: "Kwame"
    },
    {
        Sunday: "Akosua",
        Monday: "Adwoa",
        Tuesday: "Abenaa",
        Wednesday: "Akua",
        Thursday: "Yaa",
        Friday: "Afua",
        Saturday: "Ama"
    }
];

var weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

//validate the inputs
function validateForm() {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var gender = document.getElementsByName("gender");
    var i = 0;
    var formValid = false;

    if (day == "" || day == null) {
        document.getElementById("inputError").innerHTML = "Day is required";
        document.getElementById("inputError").style.color = "red";
        document.getElementById("inputError").style.fontSize = "30px";
        return false;
    } else {
        if (!isNaN(day)) {
            if (day <= 0 || day > 31) {
                document.getElementById("inputError").innerHTML = "Day is Invalid";
                document.getElementById("inputError").style.color = "red";

                return false;
            }
        } else {
            document.getElementById("inputError").innerHTML = "Day is Empty";
            document.getElementById("inputError").style.color = "red";
            return false;
        }
    }
    //validate month
    if (month == "" || month == null) {
        document.getElementById("inputError").innerHTML = "Month is required";
        document.getElementById("inputError").style.color = "red";
        return false;
    } else {
        if (!isNaN(month)) {
            if (month <= 0 || month > 31) {
                document.getElementById("inputError").innerHTML = "Month is Invalid";
                document.getElementById("inputError").style.color = "red";
                return false;
            }
        } else {
            document.getElementById("inputError").innerHTML = "Month is Empty";
            document.getElementById("inputError").style.color = "red";
            return false;
        }
    }

    //validate year
    if (year == "" || year == null) {
        document.getElementById("inputError").innerHTML = "Year is Empty";
        document.getElementById("inputError").style.color = "red";
        return false;
    } else {
        if (!isNaN(year)) {
            if (year <= 0 || year > 2020) {
                document.getElementById("inputError").innerHTML = "Year is empty";
                document.getElementById("inputError").style.color = "red";
                return false;
            }
        } else {
            document.getElementById("inputError").innerHTML = "Year is Invalid";
            document.getElementById("inputError").style.color = "red";
            return false;
        }
    }
    //check for gender
    while (!formValid && i < gender.length) {
        if (gender[i].checked) formValid = true;
        var genderValue = gender[i].value;
        i++;
    }
    if (!formValid) {
        document.getElementById("the-gender").innerHTML = "Please select your gender";
        document.getElementById("the-gender").style.color = "red";
        document.getElementById("the-gender").style.fontSize = "20px";

        return false;
    }

    var userDetails = {
        myDate: day,
        myMonth: month,
        myYear: year,
        myGender: genderValue
    };

    var details = {
        userDetails: userDetails,
        formValid: formValid
    };
    return details;
}

function getDayOfWeek() {
    var userInputs = validateForm();
    userDetails = userInputs.userDetails;

    mdate = userDetails.myDate;
    mmonth = userDetails.myMonth;
    mYear = userDetails.myYear;

    var a = Math.floor((14 - mmonth) / 12);
    var y = mYear - a;
    var m = mmonth + 12 * a - 2;
    dayOfWeek = Math.abs(mdate + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(mYear / 400) + Math.floor((31 * m) / 12)) % 7;
    // return dayOfWeek;
    var the_day = weekDays[dayOfWeek];
    // alert(the_day);

    return the_day;
}

//find the akan names
function findName() {
    var userInputs = validateForm();
    var day = getDayOfWeek();

    userDetails = userInputs.userDetails;

    mdate = userDetails.myDate;
    mgender = userDetails.myGender;

    if (mgender === "male") {
        var akanNameObj = nameList[0];
        for (var key in akanNameObj) {
            if (akanNameObj.hasOwnProperty(key)) {
                if (key === day) {
                    akanName = akanNameObj[key];
                }
            }
        }
    } else if (mgender === "female") {
        var akanNameObj = nameList[1];
        for (var key in akanNameObj) {
            if (akanNameObj.hasOwnProperty(key)) {
                if (key === day) {
                    akanName = akanNameObj[key];
                }
            }
        }
    }

    return akanName;
}

//print out the names
function printName() {
    alert("Your Akan name is " + akanName);
    return false;
}
// //calls all function in the order
function allFunctions() {
    var userInputs = validateForm();
    isValid = userInputs.formValid;
    if (!isValid) {
        validateForm();
        return false;
    } else {
        getDayOfWeek();
        findName();
        printName();
        return false;
    }
}