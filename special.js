var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var confetti = String.fromCodePoint(0x1F389);
const birthdays = [
    // [dd, mm, name, socials, suffix]
    [20, 5, "Keya", "https://www.instagram.com/rejinsojan/"],
    [27, 6, "Aparna", "https://www.instagram.com/__aparnasuresh__/"],
    [1, 7, "me", "https://www.instagram.com/sidtheloser/"],
    [1, 7, "Justin", "https://www.instagram.com/_.justin_baby_/"],
    [6, 7, "Aryan", "link_error.html"],
    [11, 7, "Jacob", "https://www.instagram.com/jacobbiju2/"],
    [9, 5, "Syam", "link_error.html"],
    [23, 7, "Ashik", "https://www.instagram.com/_ashik_aashik__777/"],
    [23, 7, "Varkey", "https://www.instagram.com/_joelvy/"],
    [18, 12, "Mahi", "https://www.instagram.com/mahitha_186/"],
    [18, 2, "Justin", "https://www.instagram.com/justinsajan30/"],
    [7, 6, "Helen", "https://www.instagram.com/_he.le.n._____/"],
    [18, 11, "Minecraft", "https://www.instagram.com/minecraft/"],
    [-1, -1, "Niranjan", "https://www.instagram.com/niranjan.kz/"]
];

var kFlag = false; // just a flag for something

var ranTitle = 0

// website name chooser

const max_titles = 33;
if (dd==birthdays[0][0] && mm==birthdays[0][1]){
    ranTitle = 21;
}
else{
    ranTitle = Math.floor(Math.random() * max_titles+1);
};

document.write("<a href='index.html'><img class='title' src='./images/title/"+String(ranTitle)+".png'></a>");

if (ranTitle == 21){
    kFlag = true;
}

// happy brithday greeting

for(var i = 0, size = birthdays.length; i < size ; i++){

    var temp = birthdays[i];

    if (dd == temp[0] && mm == temp[1]){
        document.write("<h1>"+confetti+"Happy Birthday <i><a href="+temp[3]+" target='_'>"+temp[2]+"</a></i>"+confetti+"</h1>");
    }
    else if(temp[0] < 0 || temp[1] < 0){
        document.write("<h1>"+confetti+"Happy Birthday forever <i><a href="+temp[3]+" target='_'>"+temp[2]+"</a></i>"+confetti+"</h1>");
    };

};

// secret stuff

if (kFlag == true){
    document.write("<div>Hey Keya ❤️</div>"); // please dont snitch on me...i do have a crush on her...
}
else{
    document.write("<div>Thank you!</div>");
};