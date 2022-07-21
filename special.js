// website name chooser

const max_titles = 31;

document.write("<a href='index.html'><img class='title' src='./images/title/"+String(Math.floor(Math.random() * max_titles+1))+".png'></a>")

// happy brithday greeting

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var confetti = String.fromCodePoint(0x1F389);
const birthdays = [
    // [dd, mm, name]
    [20, 5, "Keya"],
    [27, 6, "Aparna"],
    [1, 7, "Sid"],
    [6, 7, "Aryan"],
    [11, 7, "Jacob"],
    [9, 7, "Syam"],
];

for(var i = 0, size = birthdays.length; i < size ; i++){

    var temp = birthdays[i];

    if (dd == temp[0] && mm == temp[1]){
        document.write("<h1>"+confetti+"Happy Birthday <i>"+temp[2]+"</i>"+confetti+"</h1>");
    };

};