$(document).ready(function(){
    
    var rdmArray = [];
    var utnArray = [];

    for (var i = 0; i < 5; i++) {
        var num = rdmNum(1, 100);
        if (arrayContain(num, rdmArray) == false){
            rdmArray.push(num);
        }
    }

    document.getElementById("mem_num").innerHTML= rdmArray;

    setTimeout(hideObj, 3000);
 
    setTimeout(function(){

        for ( var i = 0; i < 5; i++){
            utnNum = parseInt(prompt("INSERISCI I NUMERI MEMORIZZATI"));
            if (arrayContain(utnNum, rdmArray)) {
                utnArray.push(utnNum);
            }                       
        }   alert("HAI INDOVINATO " + utnArray.length + " NUMERI OVVERO: " + utnArray);   
    }, 3500);
   
});


function arrayContain(num, array){
    for (i = 0;  i < array.length; i++){
        if (num == array[i]) {
            return true;
        }  
    }   
    return false;
}

function hideObj(){
    $(".hide_tm").hide();
}


function rdmNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}