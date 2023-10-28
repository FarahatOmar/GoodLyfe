const navBurger = document.getElementById("nav-burger");
const navMenu = document.getElementById("nav-menu");
const faqItems = document.querySelectorAll(".faq__item");
const demoUsers = [
    { email: 'demo@example.com', password: 'demo123' }
];

function handleNavBurgerClick() {
    navBurger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
navBurger.addEventListener("click", handleNavBurgerClick);
document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper-container", {
        loop: true,
        autoplay: { delay: 3000 },
        pagination: { el: ".swiper-pagination", clickable: true }
        // Additional options and configurations
    });

    faqItems.forEach(item => {
        const caretIcon = item.querySelector(".fa-caret-down");
        const answer = item.querySelector(".faq__answer");

        caretIcon.addEventListener("click", function () {
            faqItems.forEach(faqItem => {
                faqItem.classList.remove("show-answer");
            });

            if (!item.classList.contains("show-answer")) {
                item.classList.add("show-answer"); // Add a class to open the answer
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var lazyBackgrounds = [].slice.call(document.getElementById('lazy-background'));

    if ('IntersectionObserver' in window) {
        let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyBackground = entry.target;
                    lazyBackground.style.backgroundImage = 'url(' + lazyBackground.getAttribute('data-src') + ')';
                    lazyBackgroundObserver.unobserve(lazyBackground);
                }
            });
        });

        lazyBackgrounds.forEach(function(lazyBackground) {
            lazyBackgroundObserver.observe(lazyBackground);
        });
    }
});

$(document).ready(function () {
    $('#signin-tab').addClass('active show');
    $('#signin-link').addClass('active');

    $('.nav-link').on('click', function (e) {
        e.preventDefault();
        const targetTabId = $(this).attr('href');
        $('.nav-link, .tab-pane').removeClass('active');
        $(this).addClass('active');
        $(targetTabId).addClass('active show');
    });

    $('#signin-form').submit(function (e) {
        e.preventDefault();
        clearErrorMessages();
        const email = $('#email').val();
        const password = $('#password').val();

        let valid = true;
        if (!isValidEmail(email)) {
            displayError('email', 'Invalid email format');
            valid = false;
        }
        if (!isValidPassword(password)) {
            displayError('password', 'Password must be at least 8 characters');
            valid = false;
        }

        if (valid) {
            const signInUser = demoUsers.find(user => user.email === email && user.password === password);
            if (signInUser) {
                const isAuthenticated = true;
                if (isAuthenticated) {
                    localStorage.setItem('isAuthenticated', 'true');
                    window.location.href = "/sub-pages/user.html";
                }
            } else {
                alert('Sign-in failed. Please check your credentials.');
            }
        }
    });

    $('#signup-form').submit(function (e) {
        e.preventDefault();
        clearErrorMessages();
        const newEmail = $('#new-email').val();
        const newPassword = $('#new-password').val();
        const confirmPassword = $('#Confirm-password').val();

        let valid = true;
        if (!isValidEmail(newEmail)) {
            displayError('new-email', 'Invalid email format');
            valid = false;
        }
        if (!isValidPassword(newPassword)) {
            displayError('new-password', 'Password must be at least 8 characters');
            valid = false;
        }
        if (newPassword !== confirmPassword) {
            displayError('Confirm-password', 'Passwords do not match');
            valid = false;
        }
    });

    function clearErrorMessages() {
        $('.error-message').text('');
    }

    function displayError(fieldId, message) {
        $(`#${fieldId}-error`).text(message);
    }

    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    function isValidPassword(password) {
        return password.length >= 8;
    }
});

document.addEventListener("DOMContentLoaded", function () {


    const swiperSlides = document.querySelectorAll('.swiper-slide');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const slide = entry.target;
          const src = slide.getAttribute('data-src');
          if (src) {
            slide.style.backgroundImage = `url(${src})`;
            slide.removeAttribute('data-src');
          }
          observer.unobserve(slide);
        }
      });
    }, options);

    swiperSlides.forEach(slide => {
      imageObserver.observe(slide);
    });
});


