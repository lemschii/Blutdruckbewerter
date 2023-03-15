
$(document).ready(function () {
    $("#btn_Calculate").click(function () {
      
        var height = document.getElementById("heightInput").value;
        var weight = document.getElementById("weightInput").value;
    
        var result = (weight/(height/100*height/100)).toFixed(2);

        if (result <= 18){
            resulttext="Untergewicht";
        }
        else if (result >= 25){
            resulttext="Übergewicht";
        }
        else {
            resulttext="Normalgewicht";
        }

        document.getElementById("bmiOutput").textContent = result + ", also " + resulttext;
    });
});