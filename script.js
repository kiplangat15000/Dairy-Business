function calculate() {
    var shedA = document.getElementById("milk-a").value;
    var shedB = document.getElementById("milk-b").value;
    var shedC = document.getElementById("milk-c").value;
    var shedD = document.getElementById("milk-d").value;

    var price = 45;
    var days = 7;
    var monthD = 30;
    var yearly = 12;
    var con = 1;

    var results = ((shedA*con)+(shedB*con)+(shedC*con)+(shedD*con));
    document.getElementById("totalD").innerHTML = "Total Daily Milk production is " + results+ " litres";


    var resultsI = ((shedA * price) + (shedB * price) + (shedC * price) + (shedD * price));
    document.getElementById("dailyincome").innerHTML = "Total daily income milk production is Ksh." + resultsI;

    var resultM = (((shedA * price) + (shedB * price) + (shedC * price) + (shedD * price))*days);
    document.getElementById("weeklyincome").innerHTML = "Total income per week is Ksh " + resultM;
}
function weeklyincome() {
    var weekone = document.getElementById("week_1").value;
    var weektwo = document.getElementById("week_2").value;
    var weekthree = document.getElementById("week_3").value;
    var weekfour = document.getElementById("week_4").value;

    var price = 45;
    var days = 7;
    var con = 1;

    var resultsw = ((weekone * con) + (weektwo * con) + (weekthree * con) + (weekfour * con));
    document.getElementById("monthlyincome").innerHTML = "Total monthly income as per week is Ksh. " + resultsw;
}
