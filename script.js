function calculate() {
    var shedA = document.getElementById("milk-a").value;
    var shedB = document.getElementById("milk-b").value;
    var shedC = document.getElementById("milk-c").value;
    var shedD = document.getElementById("milk-d").value;

    var price = 45;
    var days = 7;
    var monthD = 30;
    var yearly = 12;

    var results = ((shedA * price) + (shedB * price) + (shedC * price) + (shedD));
    document.getElementById("totalD").innerHTML = "Total Daily Milk production is " + results;
}