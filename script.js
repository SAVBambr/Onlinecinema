document.addEventListener("DOMContentLoaded", function() {
    // Обработчик для каруселей
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        carousel.scrollLeft = 0;

        carousel.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            carousel.scrollLeft += evt.deltaY;
        });
    });

    // Обработчик для кнопки
    document.getElementById("catalogButton").addEventListener("click", function() {
        window.location.href = "каталог.html";
    });

    // Получаем ссылки на элементы
    const searchInput = document.getElementById('searchInput');
    const moviePopup = document.getElementById('moviePopup');
    const movieList = document.getElementById('movieList');
    const movies = movieList.getElementsByClassName('movie');

// Функция для фильтрации фильмов
    function filterMovies() {
        const query = searchInput.value.toLowerCase();

        // Если поле поиска не пустое, показываем popup
        if (query) {
            moviePopup.style.display = 'block';

            // Перебираем все фильмы и фильтруем их по введённому запросу
            Array.from(movies).forEach(movie => {
                const movieName = movie.textContent.toLowerCase();
                if (movieName.includes(query)) {
                    movie.style.display = ''; // Показать фильм
                } else {
                    movie.style.display = 'none'; // Скрыть фильм
                }
            });
        } else {
            // Если поле пустое, скрываем popup
            moviePopup.style.display = 'none';
        }
    }

// Обработчик события для поля ввода
    searchInput.addEventListener('input', filterMovies);

// Скрываем popup при клике вне поиска
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.search-bar')) {
            moviePopup.style.display = 'none';
        }
    });
    
});