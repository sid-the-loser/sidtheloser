var today = new Date()
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var confetti = String.fromCodePoint(0x1F389);

if (dd=="20" && mm=="05"){ //she is just a friend for me, or used to be my friend!

    document.write("<h1>"+confetti+"Happy Birthday <i>Keya</i>"+confetti+"</h1>")

};

if (dd=="27" && mm=="06"){ // she is my sister

    document.write("<h1>"+confetti+"Happy Birthday <i>Aparna</i>"+confetti+"</h1>");

};
