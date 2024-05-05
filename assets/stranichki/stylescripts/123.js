// Функция для скрытия/показа навигации
function toggleNav() {
  var nav = document.getElementById("mySidenav");
  var mainContent = document.getElementById("mainContent");
  var menuBtn = document.querySelector(".menu-btn");
  
  if (nav.style.left === "-200px" || nav.style.left === "") {
    nav.style.left = "0px";
    mainContent.style.marginLeft = "200px";
    menuBtn.style.left = "220px";
  } else {
    nav.style.left = "-200px";
    mainContent.style.marginLeft = "20px";
    menuBtn.style.left = "20px";
  }
}