// функция определения поддержки WebP=================================================
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

const navigation = document.querySelector(".header__navigation--menu");
const navBtn = document.querySelector(".header__navigation--toggle");
const head = document.querySelector(".header");
const closeMenu = document.querySelector(".header__navigation--close");
const navigation2 = document.querySelector(".header__navigation--menu2");
const navItem = document.querySelectorAll(".header__navigation--item");
const navBtn2 = document.querySelectorAll(".header__navigation--item h5");
const backUp = document.querySelector(".header__navigation--back");

let bgc = document.createElement("div");
bgc.className = "bgc";

navBtn.addEventListener("click", () => {
  navigation.classList.add("active");
  document.body.style.overflow = "hidden";
  head.appendChild(bgc);
});

backUp.addEventListener("click", () => {
  navigation2.classList.remove("active2");
  navItem[3].classList.remove("active3");
});

bgc.onclick = function (e) {
  navigation.classList.remove("active");
  navigation2.classList.remove("active2");
  navItem[3].classList.remove("active3");
  head.removeChild(bgc);
  document.body.style.overflow = "auto";
};

closeMenu.addEventListener("click", () => {
  navigation.classList.remove("active");
  document.body.style.overflow = "auto";
  head.removeChild(bgc);
});

navBtn2.forEach((el) => {
  return el.addEventListener("click", () => {
    navigation2.classList.toggle("active2");
    navItem[3].classList.toggle("active3");
  });
});
//STORIES-----------------------------------------------------------

const stories = document.querySelectorAll(".stories");
stories.forEach((store) => {
  store.addEventListener("click", () => {
    const modalBackground = document.createElement("div");
    modalBackground.classList.add("backgroundModal");
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const close = document.createElement("button");
    close.classList.add("close");
    close.innerText = "X";
    modal.appendChild(close);
    modalBackground.appendChild(modal);
    document.body.appendChild(modalBackground);

    setTimeout(() => {
      modalBackground.remove();
    }, 2000);
    close.addEventListener("click", () => {
      modalBackground.remove();
    });
  });
});

// SLIDER-----------------------------------------------------------
const slideImage = document.querySelectorAll(".slide-item");
const slidesContainer = document.querySelector(".slides-container");
const nextBtn = document.querySelector("#up");
const prevBtn = document.querySelector("#down");

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientHeight;
let currentSlide = 0;
// Set up the slider
function init() {
  slideImage.forEach((img, i) => {
    img.style.top = i * 100 + "%";
  });

  slideImage[0].classList.add("active");
}
init();
// следующий Button
nextBtn.addEventListener("click", () => {
  if (currentSlide >= numberOfImages - 1) {
    goToSlide(0);
    return;
  }
  currentSlide++;
  goToSlide(currentSlide);
});
// прежний Button
prevBtn.addEventListener("click", () => {
  if (currentSlide <= 0) {
    goToSlide(numberOfImages - 1);
    return;
  }
  currentSlide--;
  goToSlide(currentSlide);
});

setInterval(() => {
  if (currentSlide >= numberOfImages - 1) {
    goToSlide(0);
    return;
  }
  currentSlide++;
  goToSlide(currentSlide);
}, 5000);

// переход Slide
function goToSlide(slideNumber) {
  slidesContainer.style.transform =
    "translateY(-" + slideWidth * slideNumber + "px)";
  currentSlide = slideNumber;
}

// CAROUSEL------------------------------------------------------------------------
$(".logo-slider").slick({
  slidesToShow: 9,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  infinity: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
      },
    },

    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
      },
    },
  ],
});
