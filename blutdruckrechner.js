
$(document).ready(function () {
    $("#btn_Calculate").click(function () {
      
        var sys = document.getElementById("sysInput").value;
        var dia = document.getElementById("diaInput").value;
    
        //SYS AUSWERTUNG

        if (sys <= 100){
            resulttext1="Niedriger Blutdruck aufgrund des systolischen Wertes";
        }
        else if (sys >= 100 && sys<= 129){
            resulttext1="Normaler systolischer Wert.";
        }
        else if (sys > 129 && sys <= 139 ){
            resulttext1="Hochnormaler systolischer Wert";
        }
        else if (sys > 139 && sys<= 159){
            resulttext1="Ihr systolischer Wert entspricht einer Hypertonie Grad 1.";
        }
        else if (sys > 159 && sys<= 179){
            resulttext1="Ihr systolischer Wert entspricht einer Hypertonie Grad 2.";
        }
        else if (sys > 179){
            resulttext1="Ihr systolischer Wert entspricht einer Hypertonie Grad 3.";
        }
        else if ( sys >= 140 && dia <= 90){
            resulttext1="Isolierte systolische Hypertonie";
        }

   

        //DIA AUSWERTUNG

        if (dia < 80){
            resulttext2="Niedriger Blutdruck aufgrund des diastolischen Wertes";
        }
        else if (dia >= 80 && dia<= 84){
            resulttext2="Normaler diastolischer Wert.";
        }
        else if (dia>84 && dia<=89){
            resulttext2="Hochnormaler diastolischer Wert";
        }
        else if (dia>89 && dia<= 99){
            resulttext2="Ihr diastolischer Wert entspricht einer Hypertonie Grad 1.";
        }
        else if (dia>99 && dia<=109){
            resulttext2="Ihr diastolischer Wert entspricht einer Hypertonie Grad 2.";
        }
        else if (sys > 109){
            resulttext2="Ihr diastolischer Wert entspricht einer Hypertonie Grad 3.";
        }

        document.getElementById("valuesOutputOne").textContent = resulttext1 + " " + resulttext2;
    });
});