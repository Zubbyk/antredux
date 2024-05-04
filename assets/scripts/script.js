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

// Функция для отображения содержимого категории
function showCategory(category) {
  var pageTitle = document.getElementById("pageTitle");
  var mainContent = document.getElementById("mainContent");
  var nav = document.getElementById("mySidenav");
  var menuBtn = document.querySelector(".menu-btn");

  // Закрываем навигацию
  nav.style.left = "-200px";
  mainContent.style.marginLeft = "20px";
  menuBtn.style.left = "20px";

  // Скрыть все категории
  var categories = document.querySelectorAll(".category-content");
  categories.forEach(function(item) {
    item.style.display = "none";
  });

  // Отобразить выбранную категорию
  var selectedCategoryContent = document.getElementById(category + "Content");
  selectedCategoryContent.style.display = "block";

  // Устанавливаем заголовок страницы
  pageTitle.innerText = selectedCategoryContent.querySelector("h1").innerText;
}

// При загрузке страницы отображаем категорию "Главная"
window.onload = function() {
  showCategory('index');
};
