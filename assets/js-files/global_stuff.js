currentDate = new Date();

mailAddress = "notsidtheloser@gmail.com";
itchioLink = "https://sidtheloser.itch.io/";
githubLink = "https://github.com/sid-the-loser";

latestBlogUrl = "/blogs/first-ever-blog/"

function DefaultBlogHeading(){
    document.write('<a class="small-title" href="/"><h2>SidTheLoser\'s Website!</h2></a>\
    <a href="/blogs/">Back to blog index...</a>')
}

function DefaultBlogDetails(title, author, dd, mm, yyyy){
    document.write('<h1>' + title + '</h1><h3 class="author-name">by: ' + author + '</h3>\
    <h3 class="blog-date">written on: ' + dd + '-' + mm + '-' + yyyy + '</h3>')
}

function NewBlogNotification(){
    document.write('<a href="'+ latestBlogUrl +'"><h3>Sid has posted a new blog!</h3></a>')
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('js-disabled-message').style.display = 'none';
 });