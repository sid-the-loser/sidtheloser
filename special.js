var today = new Date()
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var confetti = String.fromCodePoint(0x1F389);

if (dd=="20" && mm=="05"){

    document.write("<h1>"+confetti+"Happy Birthday <i>Keya</i>"+confetti+"</h1>")

};

if (dd=="01" && mm=="07"){

    document.write("<h1>"+confetti+"Happy Birthday <i>Sid</i>"+confetti+"</h1>");

};