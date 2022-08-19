const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
function readmore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "block";
      btnText.innerHTML = "Read more";
      moreText.style.display = "block";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      btnText.style.display = 'none';
      moreText.style.display = "block";
    }
}

