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
var btnText = document.getElementsByClassName("myBtn");

if (dots.style.display === "none") {
  dots.style.display = "inline";
  btnText.innerHTML = "Read more";
  moreText.style.display = "none";
} else {
  dots.style.display = "none";
  btnText.innerHTML = "Read less";
  moreText.style.display = "inline";
}
}