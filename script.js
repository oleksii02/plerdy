const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const actions = document.querySelector('.actions');
const burgerMenu = document.querySelector('.burger-menu');
const modalButton = document.querySelector('.openModal');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');
const backgroundModal = document.querySelector('.backgroundModal');



burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    actions.classList.toggle('active')
    burger.classList.toggle('toggle');
    burgerMenu.classList.toggle('show')
});

modalButton.addEventListener('click', () => {
    modal.classList.toggle('open')
    backgroundModal.classList.toggle('open')
})
close.addEventListener('click', () => {
    modal.classList.toggle('open')
    backgroundModal.classList.toggle('open')
})
backgroundModal.addEventListener('click', () => {
    modal.classList.toggle('open')
    backgroundModal.classList.toggle('open')
})

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const phoneInput = document.getElementById('phone');
    const invalidPhone = document.querySelector('.invalid-phone');
    const invalidCheckbox = document.querySelector('.invalid-checkbox');


    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Зупиняємо стандартну дію надсилання форми

        // Валідація телефонного номера за допомогою регулярного виразу
        const phoneRegex = /^[0-9]{2}[0-9]{3}[0-9]{4}$/; // Приклад: "671592925"
        if (!phoneRegex.test(phoneInput.value)) {
            // alert('Please enter a valid phone number (XX XXX XXXX)');
            invalidPhone.classList.toggle('open')
            return;
        }

        // Перевірка, чи вибрано погодження з умовами
        const privacyCheckbox = document.querySelector('input[name="privacy"]');
        if (!privacyCheckbox.checked) {
            //alert('Please agree to the terms and conditions');
            invalidCheckbox.classList.toggle('open')
            return;
        }
        const name = document.getElementById('firstName').value;
        const phone = document.getElementById('phone').value;
        const select  = document.getElementById('select').value;
        const privacyAgreement = document.querySelector('input[name="privacy"]').checked;


        // Якщо усі умови виконані, дані можна відправити
        console.log('Form submitted successfully');
        console.log('Name:', name);
        console.log('Phone:', select, phone);
        console.log('Privacy Agreement:');
        modal.classList.toggle('open')
        backgroundModal.classList.toggle('open')
        alert('Form submitted successfully');
    });
});


const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    cssMode: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 17,
        },
        "@1.50": {
            slidesPerView: 4,
            spaceBetween: 17,
        },
    },
});
