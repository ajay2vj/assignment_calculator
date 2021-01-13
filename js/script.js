$(document).ready(function() {
    $("#backspace").click(function() { 
       var barValue = $("#bar").val();
        $("#bar").val(barValue.substring(0,barValue.length - 1));
    });

    $("#equal").click(function() {
       z1 = $("#bar").val();
         
       $("#history").append(z1 + "<br>");
    });
 });

 function c(val) {
    var a1 = $("#bar").val(val);
 }

 function v(val) {
    var sym = /\.|\+|\-|\*|\//
     var barValue = $("#bar").val();
     var lastChar = barValue.substring(barValue.length, barValue.length - 1);
     if (sym.test(lastChar) && sym.test(val)) {
     } else {
         var a2 = $("#bar").val($("#bar").val() + val);
    }
 }

 function equal() {
    $("#history").append($("#bar").val()+"=")
    var a3 = c(eval($("#bar").val()))
 }

 function reset() {
     var a4 = $("#bar").val("");
 }