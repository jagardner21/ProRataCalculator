function calculate() {
    
    var c1Percent, c2Percent, c3Percent, c1ProRat, c2ProRat, c3ProRat;

    /*ignore empty datafields/declare them zero
    
    if (){

    } else {
    */

    //determine each claimant's percentage of the full loss
    c1Percent = parseFloat(document.proRataCalc.clow1.value)/(parseFloat(document.proRataCalc.clow1.value) + parseFloat(document.proRataCalc.clow2.value) + parseFloat(document.proRataCalc.clow3.value) + parseFloat(document.proRataCalc.clow4.value) + parseFloat(document.proRataCalc.clow5.value) + parseFloat(document.proRataCalc.clow6.value));

    c2Percent = parseFloat(document.proRataCalc.clow2.value)/(parseFloat(document.proRataCalc.clow1.value) + parseFloat(document.proRataCalc.clow2.value) + parseFloat(document.proRataCalc.clow3.value) + parseFloat(document.proRataCalc.clow4.value) + parseFloat(document.proRataCalc.clow5.value) + parseFloat(document.proRataCalc.clow6.value));

    c3Percent = parseFloat(document.proRataCalc.clow3.value)/(parseFloat(document.proRataCalc.clow1.value) + parseFloat(document.proRataCalc.clow2.value) + parseFloat(document.proRataCalc.clow3.value) + parseFloat(document.proRataCalc.clow4.value) + parseFloat(document.proRataCalc.clow5.value) + parseFloat(document.proRataCalc.clow6.value));

    c4Percent = parseFloat(document.proRataCalc.clow4.value)/(parseFloat(document.proRataCalc.clow1.value) + parseFloat(document.proRataCalc.clow2.value) + parseFloat(document.proRataCalc.clow3.value) + parseFloat(document.proRataCalc.clow4.value) + parseFloat(document.proRataCalc.clow5.value) + parseFloat(document.proRataCalc.clow6.value));

    c5Percent = parseFloat(document.proRataCalc.clow5.value)/(parseFloat(document.proRataCalc.clow1.value) + parseFloat(document.proRataCalc.clow2.value) + parseFloat(document.proRataCalc.clow3.value) + parseFloat(document.proRataCalc.clow4.value) + parseFloat(document.proRataCalc.clow5.value) + parseFloat(document.proRataCalc.clow6.value));

    c6Percent = parseFloat(document.proRataCalc.clow6.value)/(parseFloat(document.proRataCalc.clow1.value) + parseFloat(document.proRataCalc.clow2.value) + parseFloat(document.proRataCalc.clow3.value) + parseFloat(document.proRataCalc.clow4.value) + parseFloat(document.proRataCalc.clow5.value) + parseFloat(document.proRataCalc.clow6.value));

    //determine pro-rata share of limit for each claimant
    c1ProRat = (c1Percent * parseFloat(document.proRataCalc.liabLimit.value)).toFixed(2);
    c2ProRat = (c2Percent * parseFloat(document.proRataCalc.liabLimit.value)).toFixed(2);
    c3ProRat = (c3Percent * parseFloat(document.proRataCalc.liabLimit.value)).toFixed(2);
    c4ProRat = (c4Percent * parseFloat(document.proRataCalc.liabLimit.value)).toFixed(2);
    c5ProRat = (c5Percent * parseFloat(document.proRataCalc.liabLimit.value)).toFixed(2);
    c6ProRat = (c6Percent * parseFloat(document.proRataCalc.liabLimit.value)).toFixed(2);

    document.proRataCalc.proRata1.value = 
    "$" + parseFloat(c1ProRat) + "  (" + parseFloat((c1Percent * 100).toFixed(2)) + "%)";
    document.proRataCalc.proRata2.value = 
    "$" + parseFloat(c2ProRat) + "  (" + parseFloat((c2Percent * 100).toFixed(2)) + "%)";
    document.proRataCalc.proRata3.value = 
    "$" + parseFloat(c3ProRat) + "  (" + parseFloat((c3Percent * 100).toFixed(2)) + "%)";
    document.proRataCalc.proRata4.value = 
    "$" + parseFloat(c4ProRat) + "  (" + parseFloat((c4Percent * 100).toFixed(2)) + "%)";
    document.proRataCalc.proRata5.value = 
    "$" + parseFloat(c5ProRat) + "  (" + parseFloat((c5Percent * 100).toFixed(2)) + "%)";
    document.proRataCalc.proRata6.value = 
    "$" + parseFloat(c6ProRat) + "  (" + parseFloat((c6Percent * 100).toFixed(2)) + "%)";
}



///////////////////////////////
// function to dynamically add input fields/claimants
///////////////////////////////
function addFields(){
    var number = document.getElementById("member").value;
    var container = document.getElementById("container");
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i=0;i<number;i++){
        container.appendChild(document.createTextNode("Member " + (i+1)));
        var input = document.createElement("input");
        input.type = "text";
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
    }
}