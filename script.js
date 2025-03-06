AOS.init({
    duration: 800,
    once: true,
});

const swiper = new Swiper('.swiper', {
    loop: true,
    pauseOnMouseEnter: true,
    speed: 1500,
    autoplay: {
        delay: 3000
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('progress');
        }
    });
});

const elements = document.querySelectorAll('.skill-bar span span');

elements.forEach(element => {
    observer.observe(element);
});



 // Get references to the elements
 const contact = document.querySelector('.contact');
 const email = document.querySelector('.email');

 // Add a click event listener to the first element
 contact.addEventListener('click', () => {
     // Hide the first element
     contact.classList.add('hidden');
     // Show the second element
     email.classList.remove('hidden');
 });

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".hover-touch").forEach((el) => {
        let touched = false;

        el.addEventListener("touchend", function (event) {
            if (!touched) {
                event.preventDefault();
                el.classList.add("hover-active");
                touched = true;
                setTimeout(() => (touched = false), 100);
            } else {
                window.location.href = el.getAttribute("href");
            }
        });
    });
});
