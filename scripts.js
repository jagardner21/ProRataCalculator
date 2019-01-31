function calculate() {
    
    var c1Percent, c2Percent, c3Percent, c1ProRat, c2ProRat, c3ProRat;

    //determine each claimant's percentage of the full loss
    c1Percent = parseFloat(document.proRataCalc.clow1.value)/(parseFloat(document.proRataCalc.clow1.value) + parseFloat(document.proRataCalc.clow2.value) + parseFloat(document.proRataCalc.clow3.value));

    c2Percent = parseFloat(document.proRataCalc.clow2.value)/(parseFloat(document.proRataCalc.clow1.value) + parseFloat(document.proRataCalc.clow2.value) + parseFloat(document.proRataCalc.clow3.value));
    
    c3Percent = parseFloat(document.proRataCalc.clow3.value)/(parseFloat(document.proRataCalc.clow1.value) + parseFloat(document.proRataCalc.clow2.value) + parseFloat(document.proRataCalc.clow3.value));

    //determine pro-rata share of limit for each claimant
    c1ProRat = (c1Percent * parseFloat(document.proRataCalc.liabLimit.value)).toFixed(2);
    c2ProRat = (c2Percent * parseFloat(document.proRataCalc.liabLimit.value)).toFixed(2);
    c3ProRat = (c3Percent * parseFloat(document.proRataCalc.liabLimit.value)).toFixed(2);

    document.proRataCalc.proRata1.value = 
    "$" + parseFloat(c1ProRat) + "  (" + parseFloat((c1Percent * 100).toFixed(2)) + "%)";
    document.proRataCalc.proRata2.value = 
    "$" + parseFloat(c2ProRat) + "  (" + parseFloat((c2Percent * 100).toFixed(2)) + "%)";
    document.proRataCalc.proRata3.value = 
    "$" + parseFloat(c3ProRat) + "  (" + parseFloat((c3Percent * 100).toFixed(2)) + "%)";
}