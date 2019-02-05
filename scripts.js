function calculate() {
    
    var liabLimit = document.proRataCalc.liabLimit.value;

    //ensure user enters a valid liability limit
    if (liabLimit <= 0 || liabLimit == ''){
        alert("Please enter a valid liability limit.");
        return;
    }
    
    //ensure user enters at least one damage amount
    if (document.proRataCalc.clow1.value <= 0 && document.proRataCalc.clow2.value <= 0 && document.proRataCalc.clow3.value <= 0 && document.proRataCalc.clow4.value <= 0 && document.proRataCalc.clow5.value <= 0 && document.proRataCalc.clow6.value <= 0 && document.proRataCalc.clow7.value <= 0 && document.proRataCalc.clow8.value <= 0 && document.proRataCalc.clow9.value <= 0 && document.proRataCalc.clow10.value <= 0){
        alert("Please enter valid damage amounts.");
        return;
    }
    //convert any empty fields to 0
    if (document.proRataCalc.clow1.value == ''){
        document.proRataCalc.clow1.value = 0;
    }
    if (document.proRataCalc.clow2.value == ''){
        document.proRataCalc.clow2.value = 0;
    }
    if (document.proRataCalc.clow3.value == ''){
        document.proRataCalc.clow3.value = 0;
    }
    if (document.proRataCalc.clow4.value == ''){
        document.proRataCalc.clow4.value = 0;
    }
    if (document.proRataCalc.clow5.value == ''){
        document.proRataCalc.clow5.value = 0;
    }
    if (document.proRataCalc.clow6.value == ''){
        document.proRataCalc.clow6.value = 0;
    }
    if (document.proRataCalc.clow7.value == ''){
        document.proRataCalc.clow7.value = 0;
    }
    if (document.proRataCalc.clow8.value == ''){
        document.proRataCalc.clow8.value = 0;
    }
    if (document.proRataCalc.clow9.value == ''){
        document.proRataCalc.clow9.value = 0;
    }
    if (document.proRataCalc.clow10.value == ''){
        document.proRataCalc.clow10.value = 0;
    }

    

    //determine each claimant's percentage of the full loss
    c1Percent = parseFloat(document.proRataCalc.clow1.value)/(parseFloat(document.proRataCalc.clow1.value) + parseFloat(document.proRataCalc.clow2.value) + parseFloat(document.proRataCalc.clow3.value) + parseFloat(document.proRataCalc.clow4.value) + parseFloat(document.proRataCalc.clow5.value) + parseFloat(document.proRataCalc.clow6.value) + parseFloat(document.proRataCalc.clow7.value) + parseFloat(document.proRataCalc.clow8.value) + parseFloat(document.proRataCalc.clow9.value) + parseFloat(document.proRataCalc.clow10.value));

    c2Percent = parseFloat(document.proRataCalc.clow2.value)/(parseFloat(document.proRataCalc.clow1.value) + parseFloat(document.proRataCalc.clow2.value) + parseFloat(document.proRataCalc.clow3.value) + parseFloat(document.proRataCalc.clow4.value) + parseFloat(document.proRataCalc.clow5.value) + parseFloat(document.proRataCalc.clow6.value) + parseFloat(document.proRataCalc.clow7.value) + parseFloat(document.proRataCalc.clow8.value) + parseFloat(document.proRataCalc.clow9.value) + parseFloat(document.proRataCalc.clow10.value));

    c3Percent = parseFloat(document.proRataCalc.clow3.value)/(parseFloat(document.proRataCalc.clow1.value) + parseFloat(document.proRataCalc.clow2.value) + parseFloat(document.proRataCalc.clow3.value) + parseFloat(document.proRataCalc.clow4.value) + parseFloat(document.proRataCalc.clow5.value) + parseFloat(document.proRataCalc.clow6.value) + parseFloat(document.proRataCalc.clow7.value) + parseFloat(document.proRataCalc.clow8.value) + parseFloat(document.proRataCalc.clow9.value) + parseFloat(document.proRataCalc.clow10.value));

    c4Percent = parseFloat(document.proRataCalc.clow4.value)/(parseFloat(document.proRataCalc.clow1.value) + parseFloat(document.proRataCalc.clow2.value) + parseFloat(document.proRataCalc.clow3.value) + parseFloat(document.proRataCalc.clow4.value) + parseFloat(document.proRataCalc.clow5.value) + parseFloat(document.proRataCalc.clow6.value) + parseFloat(document.proRataCalc.clow7.value) + parseFloat(document.proRataCalc.clow8.value) + parseFloat(document.proRataCalc.clow9.value) + parseFloat(document.proRataCalc.clow10.value));

    c5Percent = parseFloat(document.proRataCalc.clow5.value)/(parseFloat(document.proRataCalc.clow1.value) + parseFloat(document.proRataCalc.clow2.value) + parseFloat(document.proRataCalc.clow3.value) + parseFloat(document.proRataCalc.clow4.value) + parseFloat(document.proRataCalc.clow5.value) + parseFloat(document.proRataCalc.clow6.value) + parseFloat(document.proRataCalc.clow7.value) + parseFloat(document.proRataCalc.clow8.value) + parseFloat(document.proRataCalc.clow9.value) + parseFloat(document.proRataCalc.clow10.value));

    c6Percent = parseFloat(document.proRataCalc.clow6.value)/(parseFloat(document.proRataCalc.clow1.value) + parseFloat(document.proRataCalc.clow2.value) + parseFloat(document.proRataCalc.clow3.value) + parseFloat(document.proRataCalc.clow4.value) + parseFloat(document.proRataCalc.clow5.value) + parseFloat(document.proRataCalc.clow6.value) + parseFloat(document.proRataCalc.clow7.value) + parseFloat(document.proRataCalc.clow8.value) + parseFloat(document.proRataCalc.clow9.value) + parseFloat(document.proRataCalc.clow10.value));

    c7Percent = parseFloat(document.proRataCalc.clow7.value)/(parseFloat(document.proRataCalc.clow1.value) + parseFloat(document.proRataCalc.clow2.value) + parseFloat(document.proRataCalc.clow3.value) + parseFloat(document.proRataCalc.clow4.value) + parseFloat(document.proRataCalc.clow5.value) + parseFloat(document.proRataCalc.clow6.value) + parseFloat(document.proRataCalc.clow7.value) + parseFloat(document.proRataCalc.clow8.value) + parseFloat(document.proRataCalc.clow9.value) + parseFloat(document.proRataCalc.clow10.value));

    c8Percent = parseFloat(document.proRataCalc.clow8.value)/(parseFloat(document.proRataCalc.clow1.value) + parseFloat(document.proRataCalc.clow2.value) + parseFloat(document.proRataCalc.clow3.value) + parseFloat(document.proRataCalc.clow4.value) + parseFloat(document.proRataCalc.clow5.value) + parseFloat(document.proRataCalc.clow6.value) + parseFloat(document.proRataCalc.clow7.value) + parseFloat(document.proRataCalc.clow8.value) + parseFloat(document.proRataCalc.clow9.value) + parseFloat(document.proRataCalc.clow10.value));

    c9Percent = parseFloat(document.proRataCalc.clow9.value)/(parseFloat(document.proRataCalc.clow1.value) + parseFloat(document.proRataCalc.clow2.value) + parseFloat(document.proRataCalc.clow3.value) + parseFloat(document.proRataCalc.clow4.value) + parseFloat(document.proRataCalc.clow5.value) + parseFloat(document.proRataCalc.clow6.value) + parseFloat(document.proRataCalc.clow7.value) + parseFloat(document.proRataCalc.clow8.value) + parseFloat(document.proRataCalc.clow9.value) + parseFloat(document.proRataCalc.clow10.value));

    c10Percent = parseFloat(document.proRataCalc.clow10.value)/(parseFloat(document.proRataCalc.clow1.value) + parseFloat(document.proRataCalc.clow2.value) + parseFloat(document.proRataCalc.clow3.value) + parseFloat(document.proRataCalc.clow4.value) + parseFloat(document.proRataCalc.clow5.value) + parseFloat(document.proRataCalc.clow6.value) + parseFloat(document.proRataCalc.clow7.value) + parseFloat(document.proRataCalc.clow8.value) + parseFloat(document.proRataCalc.clow9.value) + parseFloat(document.proRataCalc.clow10.value));

    //determine pro-rata share of limit for each claimant
    c1ProRat = (c1Percent * parseFloat(document.proRataCalc.liabLimit.value)).toFixed(2);
    c2ProRat = (c2Percent * parseFloat(document.proRataCalc.liabLimit.value)).toFixed(2);
    c3ProRat = (c3Percent * parseFloat(document.proRataCalc.liabLimit.value)).toFixed(2);
    c4ProRat = (c4Percent * parseFloat(document.proRataCalc.liabLimit.value)).toFixed(2);
    c5ProRat = (c5Percent * parseFloat(document.proRataCalc.liabLimit.value)).toFixed(2);
    c6ProRat = (c6Percent * parseFloat(document.proRataCalc.liabLimit.value)).toFixed(2);
    c7ProRat = (c7Percent * parseFloat(document.proRataCalc.liabLimit.value)).toFixed(2);
    c8ProRat = (c8Percent * parseFloat(document.proRataCalc.liabLimit.value)).toFixed(2);
    c9ProRat = (c9Percent * parseFloat(document.proRataCalc.liabLimit.value)).toFixed(2);
    c10ProRat = (c10Percent * parseFloat(document.proRataCalc.liabLimit.value)).toFixed(2);

    if(c1Percent == 1){
        document.proRataCalc.proRata1.value = "Claimant 1 Pro-Rata Amount: " + "$" + document.proRataCalc.clow1.value + "  (" + parseFloat((c1Percent * 100).toFixed(2)) + "%)";
    } else {
    document.proRataCalc.proRata1.value = "Claimant 1 Pro-Rata Amount: " +
    "$" + parseFloat(c1ProRat) + "  (" + parseFloat((c1Percent * 100).toFixed(2)) + "%)";
    }
    if(c2Percent == 1){
        document.proRataCalc.proRata2.value = "Claimant 2 Pro-Rata Amount: " + "$" + document.proRataCalc.clow2.value + "  (" + parseFloat((c2Percent * 100).toFixed(2)) + "%)";
    } else {
    document.proRataCalc.proRata2.value = "Claimant 2 Pro-Rata Amount: " +
    "$" + parseFloat(c2ProRat) + "  (" + parseFloat((c2Percent * 100).toFixed(2)) + "%)";
    }
    if(c3Percent == 1){
        document.proRataCalc.proRata3.value = "Claimant 3 Pro-Rata Amount: " + "$" + document.proRataCalc.clow3.value + "  (" + parseFloat((c3Percent * 100).toFixed(2)) + "%)";
    } else {
    document.proRataCalc.proRata3.value = "Claimant 3 Pro-Rata Amount: " +
    "$" + parseFloat(c3ProRat) + "  (" + parseFloat((c3Percent * 100).toFixed(2)) + "%)";
    }
    if(c4Percent == 1){
        document.proRataCalc.proRata4.value = "Claimant 4 Pro-Rata Amount: " + "$" + document.proRataCalc.clow4.value + "  (" + parseFloat((c4Percent * 100).toFixed(2)) + "%)";
    } else {
    document.proRataCalc.proRata4.value = "Claimant 4 Pro-Rata Amount: " +
    "$" + parseFloat(c4ProRat) + "  (" + parseFloat((c4Percent * 100).toFixed(2)) + "%)";
    }
    if(c5Percent == 1){
        document.proRataCalc.proRata5.value = "Claimant 5 Pro-Rata Amount: " + "$" + document.proRataCalc.clow5.value + "  (" + parseFloat((c5Percent * 100).toFixed(2)) + "%)";
    } else {
    document.proRataCalc.proRata5.value = "Claimant 5 Pro-Rata Amount: " +
    "$" + parseFloat(c5ProRat) + "  (" + parseFloat((c5Percent * 100).toFixed(2)) + "%)";
    }
    if(c6Percent == 1){
        document.proRataCalc.proRata6.value = "Claimant 6 Pro-Rata Amount: " + "$" + document.proRataCalc.clow6.value + "  (" + parseFloat((c6Percent * 100).toFixed(2)) + "%)";
    } else {
    document.proRataCalc.proRata6.value = "Claimant 6 Pro-Rata Amount: " +
    "$" + parseFloat(c6ProRat) + "  (" + parseFloat((c6Percent * 100).toFixed(2)) + "%)";
    }
    if(c7Percent == 1){
        document.proRataCalc.proRata7.value = "Claimant 7 Pro-Rata Amount: " + "$" + document.proRataCalc.clow7.value + "  (" + parseFloat((c7Percent * 100).toFixed(2)) + "%)";
    } else {
    document.proRataCalc.proRata7.value = "Claimant 7 Pro-Rata Amount: " +
    "$" + parseFloat(c7ProRat) + "  (" + parseFloat((c7Percent * 100).toFixed(2)) + "%)";
    }
    if(c8Percent == 1){
        document.proRataCalc.proRata8.value = "Claimant 8 Pro-Rata Amount: " + "$" + document.proRataCalc.clow8.value + "  (" + parseFloat((c8Percent * 100).toFixed(2)) + "%)";
    } else {
    document.proRataCalc.proRata8.value = "Claimant 8 Pro-Rata Amount: " +
    "$" + parseFloat(c8ProRat) + "  (" + parseFloat((c8Percent * 100).toFixed(2)) + "%)";
    }
    if(c9Percent == 1){
        document.proRataCalc.proRata9.value = "Claimant 9 Pro-Rata Amount: " + "$" + document.proRataCalc.clow9.value + "  (" + parseFloat((c9Percent * 100).toFixed(2)) + "%)";
    } else {
    document.proRataCalc.proRata9.value = "Claimant 9 Pro-Rata Amount: " +
    "$" + parseFloat(c9ProRat) + "  (" + parseFloat((c9Percent * 100).toFixed(2)) + "%)";
    }
    if(c10Percent == 1){
        document.proRataCalc.proRata10.value = "Claimant 10 Pro-Rata Amount: " + "$" + document.proRataCalc.clow10.value + "  (" + parseFloat((c10Percent * 100).toFixed(2)) + "%)";
    } else {
    document.proRataCalc.proRata10.value = "Claimant 10 Pro-Rata Amount: " +
    "$" + parseFloat(c10ProRat) + "  (" + parseFloat((c10Percent * 100).toFixed(2)) + "%)";
    }
    ////////////////////need to ensure that if user only enters 1 claimant 
    ////////////////////then the pro-rata amount needs to be damage amount 
    ////////////////////if  damage < limit or limit if damage > limit
/*
    document.proRataCalc.proRata3.value = "Claimant 3 Pro-Rata Amount: " +
    "$" + parseFloat(c3ProRat) + "  (" + parseFloat((c3Percent * 100).toFixed(2)) + "%)";
    document.proRataCalc.proRata4.value = "Claimant 4 Pro-Rata Amount: " +
    "$" + parseFloat(c4ProRat) + "  (" + parseFloat((c4Percent * 100).toFixed(2)) + "%)";
    document.proRataCalc.proRata5.value = "Claimant 5 Pro-Rata Amount: " +
    "$" + parseFloat(c5ProRat) + "  (" + parseFloat((c5Percent * 100).toFixed(2)) + "%)";
    document.proRataCalc.proRata6.value = "Claimant 6 Pro-Rata Amount: " +
    "$" + parseFloat(c6ProRat) + "  (" + parseFloat((c6Percent * 100).toFixed(2)) + "%)";
    document.proRataCalc.proRata7.value = "Claimant 7 Pro-Rata Amount: " +
    "$" + parseFloat(c7ProRat) + "  (" + parseFloat((c7Percent * 100).toFixed(2)) + "%)";
    document.proRataCalc.proRata8.value = "Claimant 8 Pro-Rata Amount: " +
    "$" + parseFloat(c8ProRat) + "  (" + parseFloat((c8Percent * 100).toFixed(2)) + "%)";
    document.proRataCalc.proRata9.value = "Claimant 9 Pro-Rata Amount: " +
    "$" + parseFloat(c9ProRat) + "  (" + parseFloat((c9Percent * 100).toFixed(2)) + "%)";
    document.proRataCalc.proRata10.value = "Claimant 10 Pro-Rata Amount: " +
    "$" + parseFloat(c10ProRat) + "  (" + parseFloat((c10Percent * 100).toFixed(2)) + "%)";
*/
    if (c1ProRat == 0){
        document.proRataCalc.proRata1.value = " ";
    }
    if (c2ProRat == 0){
        document.proRataCalc.proRata2.value = " ";
    }
    if (c3ProRat == 0){
        document.proRataCalc.proRata3.value = " ";
    }
    if (c4ProRat == 0){
        document.proRataCalc.proRata4.value = " ";
    }
    if (c5ProRat == 0){
        document.proRataCalc.proRata5.value = " ";
    }
    if (c6ProRat == 0){
        document.proRataCalc.proRata6.value = " ";
    }
    if (c7ProRat == 0){
        document.proRataCalc.proRata7.value = " ";
    }
    if (c8ProRat == 0){
        document.proRataCalc.proRata8.value = " ";
    }
    if (c9ProRat == 0){
        document.proRataCalc.proRata9.value = " ";
    }
    if (c10ProRat == 0){
        document.proRataCalc.proRata10.value = " ";
    }

    //add a "Reset" button
}