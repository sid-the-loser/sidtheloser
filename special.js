var today = new Date()
var dd = today.getDate();
var mm = today.getMonth() + 1;
var confetti = String.fromCodePoint(0x1F389);
const birthdays = [
    // [dd, mm, name]
    [20, 5, "Keya"],
    [27, 6, "Aparna"],
    [1, 7, "Sid"],
    [6, 7, "Aryan"]

];

for(var i = 0, size = birthdays.length; i < size ; i++){

    var temp = birthdays[i];

    if (dd == temp[0] && mm == temp[1]){
        document.write("<h1>"+confetti+"Happy Birthday <i>"+temp[2]+"</i>"+confetti+"</h1>")
    };

};