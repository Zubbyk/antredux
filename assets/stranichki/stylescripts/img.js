document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.zoomable-image');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');

    images.forEach(image => {
        image.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = image.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Закрытие модального окна при нажатии вне изображения
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
