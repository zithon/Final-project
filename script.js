document.addEventListener("DOMContentLoaded", function () {
    let isMobile = window.matchMedia("(max-width: 1201px)").matches;
    let slider, prevBtn, nextBtn;
    let index = 0;

    function initSlider() {
        isMobile = window.matchMedia("(max-width: 1201px)").matches;

        if (isMobile) {
            initMobileSlider();
        } else {
            initDesktopSlider();
        }
    }

    function initDesktopSlider() {
        console.log("Запущен десктопный слайдер");

        slider = document.querySelector(".slider-wrapper");
        prevBtn = document.querySelector(".prev-desktop");
        nextBtn = document.querySelector(".next-desktop");

        index = 0;
        const totalSlides = document.querySelectorAll(".person").length;
        const slidesPerPage = 4;
        const slideWidth = 279 + 47; // Ширина карточки + отступ

        function updateSliderPosition() {
            slider.style.transform = `translateX(-${index * slideWidth}px)`;
        }

        nextBtn.addEventListener("click", () => {
            if (index + slidesPerPage < totalSlides) {
                index += slidesPerPage;
            } else {
                index = totalSlides - slidesPerPage;
            }
            updateSliderPosition();
        });

        prevBtn.addEventListener("click", () => {
            if (index - slidesPerPage >= 0) {
                index -= slidesPerPage;
            } else {
                index = 0;
            }
            updateSliderPosition();
        });

        updateSliderPosition();
    }

    function initMobileSlider() {
        console.log("Запущен десктопный слайдер");

        slider = document.querySelector(".slider-wrapper");
        prevBtn = document.querySelector(".prev");
        nextBtn = document.querySelector(".next");

        index = 0;
        const totalSlides = document.querySelectorAll(".person").length;
        const slidesPerPage = 4;
        const slideWidth = 300 + 35; // Ширина карточки + отступ

        function updateSliderPosition() {
            slider.style.transform = `translateY(-${index * slideWidth}px)`;
        }

        nextBtn.addEventListener("click", () => {
            if (index + slidesPerPage < totalSlides) {
                index += slidesPerPage;
            } else {
                index = totalSlides - slidesPerPage;
            }
            updateSliderPosition();
        });

        prevBtn.addEventListener("click", () => {
            if (index - slidesPerPage >= 0) {
                index -= slidesPerPage;
            } else {
                index = 0;
            }
            updateSliderPosition();
        });

        updateSliderPosition();
    }

    // Запуск слайдера при загрузке
    initSlider();

    // Переключение между мобильной и десктопной версией при изменении размера окна
    window.addEventListener("resize", function () {
        initSlider();
    });
});
