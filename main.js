var a = document.getElementById("bitcoin");
var b = document.getElementById("favdialog");
var tech = document.getElementById("tech");
var techy = document.getElementById("techy");
a.addEventListener('click', function() {
  b.showModal();
});
tech.addEventListener('click', function () {
  techy.showModal();
});

let c = 0;
let d = document.getElementsByTagName("body");