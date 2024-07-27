document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
        <div class="menu-btn" onclick="toggleNav()">☰</div>
        <div class="sidenav" id="mySidenav">
            <div class="ramka"></div>
            <font size='5'>
                <h2 style="color: white;">ANT REDUX's</h2>
                <a href="index.html">Главная</a>
                <a href="assets/stranichki/redux.html">Редуксы</a>
                <a href="assets/stranichki/gunpack.html">Ганпаки</a>
                <a href="assets/stranichki/roads.html">Дороги</a>
                <a href="assets/stranichki/Rastitelnost.html">Растительность</a>
                <a href="assets/stranichki/arena.html">Арена</a>
                <a href="assets/stranichki/shmotki.html">Заменёнки</a>
                <a href="assets/stranichki/mapcords.html">Корды мапы</a>
                <a href="#">Карты(soon)</a>
                <a href="#">Звуки(soon)</a>
                <a href="#">soon</a>
                <a href="#">soon</a>
                <a href="#">soon</a>
            </font>
        </div>
    `;

    // Найдите элемент, куда нужно добавить навигацию
    const sidenav = document.getElementById('mySidenav');
    if (sidenav) {
        sidenav.innerHTML = navHTML;
    } else {
        document.body.insertAdjacentHTML('afterbegin', navHTML);
    }
});

