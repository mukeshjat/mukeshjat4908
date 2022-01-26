function menubaropen(){
    var element = document.getElementById("menulistopen");
    var element2 = document.getElementById("menubar")
     
    element.classList.toggle("open");
    element2.classList.remove("fas fa-bars")
    element2.classList.add("fas fa-window-close")
  }


  function myFunction() {
var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
var btnText = document.getElementById("myBtn");

if (dots.style.display === "none") {
  dots.style.display = "inline";
  btnText.innerText = "Read more";
  moreText.style.display = "none";
} else {
  dots.style.display = "none";
  btnText.innerText = "Read less";
  moreText.style.display = "inline";
}
}