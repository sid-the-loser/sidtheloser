var today = new Date()
var dd = today.getDate();
var mm = today.getMonth() + 1;
var confetti = String.fromCodePoint(0x1F389);
const birthdays = [

    [],
    [],
    [],
    []

];

console.log(dd, mm)

if (dd==20 && mm==5){ //she is just a friend for me, or used to be my friend!

    document.write("<h1>"+confetti+"Happy Birthday <i>Keya</i>"+confetti+"</h1>")

};

if (dd==27 && mm==6){ // she is my sister

    document.write("<h1>"+confetti+"Happy Birthday <i>Aparna</i>"+confetti+"</h1>");

};

if (dd==1 && mm==7){ // this is me

    document.write("<h1>"+confetti+"Happy Birthday <i>Sid</i>"+confetti+"</h1>");

};

if (dd==6 && mm==7){ // classmate and friend

    document.write("<h1>"+confetti+"Happy Birthday <i>Aryan</i> kutta"+confetti+"</h1>");

};
