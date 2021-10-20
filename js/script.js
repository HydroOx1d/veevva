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
const navigation2 = document.querySelectorAll(".header__navigation--menu2");
const navItem = document.querySelectorAll(".header__navigation--item");
const navImg = document.querySelectorAll(".header__navigation--item img");
const backUp = document.querySelectorAll(".header__navigation--back");

let bgc = document.createElement("div");
bgc.className = "bgc";
let menuBgc = document.createElement("div");
menuBgc.className = "header--menu__bgc";

navBtn.addEventListener("click", () => {
  navigation.classList.add("active");
  document.body.style.overflow = "hidden";
  head.appendChild(bgc);
});

for (let i = 0; i < backUp.length; i++) {
  backUp[i].addEventListener("click", () => {
    for (let i = 0; i < navigation2.length; i++) {
      navigation2[i].classList.remove("active2");
    }
    navigation.removeChild(menuBgc);

    navItem.forEach((el) => {
      el.classList.remove("active3");
    });
    navImg.forEach((el) => {
      el.style.filter = "contrast(0)";
    });
  });
}

menuBgc.onclick = function () {
  navigation2.forEach((el) => {
    el.classList.remove("active2");
  });
  navigation.removeChild(menuBgc);
  navItem.forEach((el) => {
    el.classList.remove("active3");
  });
  navImg.forEach((el) => {
    el.style.filter = "contrast(0)";
  });
};

bgc.onclick = function () {
  navigation.classList.remove("active");
  for (let i = 0; i < navigation2.length; i++) {
    navigation2[i].classList.remove("active2");
  }
  head.removeChild(bgc);
  document.body.style.overflow = "auto";
  navigation.removeChild(menuBgc);
  navItem.forEach((el) => {
    el.classList.remove("active3");
  });
  navImg.forEach((el) => {
    el.style.filter = "contrast(0)";
  });
};

closeMenu.addEventListener("click", () => {
  navigation.classList.remove("active");
  document.body.style.overflow = "auto";
  head.removeChild(bgc);

  navItem.forEach((el) => {
    el.classList.remove("active3");
  });
  navImg.forEach((el) => {
    el.style.filter = "contrast(0)";
  });
});

for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", () => {
    let content = navItem[i].nextElementSibling;
    let content2 = navItem[i].previousElementSibling;
    navigation.appendChild(menuBgc);
    if (content.classList.contains("active2")) {
      content.classList.remove("active2");
      navItem[i].classList.remove("active3");
      navigation.removeChild(menuBgc);
      navImg.forEach((el) => {
        el.style.filter = "contrast(0)";
      });
    } else {
      content2.classList.remove("active2");
      content.classList.add("active2");
      navItem[i].classList.add("active3");
      navImg.forEach((el) => {
        el.style.filter = "contrast(10)";
      });
    }
  });
}

//STORIES-----------------------------------------------------------

const stories = document.querySelectorAll(".stories");
stories.forEach((store) => {
  store.addEventListener("click", () => {
    const modalBackground = document.createElement("div");
    modalBackground.classList.add("backgroundModal");
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = ` <button class='close'><i class='fas fa-times'></i></button> 
    <button class='next-st'> <img src="./img/caruselIcon/next.svg" alt=""></button>
    <button class='prev-st'> <img src="./img/caruselIcon/leftDirection.svg" alt=""> </button>
    <div class="testomonial-container">
<div class="progress-bar"></div>
<p class="testomonial">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
  nesciunt, ipsam assumenda asperiores quibusdam consequuntur inventor
</p>
<div class="user">
  <img src="./img/storiesIcom/JacobMccoy.png" alt="user" class="user-image" />
  <div class="user-details">
    <h4 class="username">Jacob Mccoy</h4>
    <p class="role">Marketing</p>
  </div>
</div>
</div>`;
    // const close = document.createElement("button");
    // close.classList.add("close");
    // close.innerHTML = `<i class='fas fa-times'></i>`;
    // modal.appendChild(close);
    const close = modal.querySelector(".close");
    modalBackground.appendChild(modal);
    document.body.appendChild(modalBackground);

    setTimeout(() => {
      modalBackground.remove();
    }, 20000000);
    close.addEventListener("click", () => {
      modalBackground.remove();
      reloadScrollBars()
    });

    const testomonialContainer = modal.querySelector(".testomonial-container");
    const testomonial = modal.querySelector(".testomonial");
    const userImage = modal.querySelector(".user-image");
    const username = modal.querySelector(".username");
    const role = modal.querySelector(".role");
    const progressB = modal.querySelector(".progress-bar");

    const next = modal.querySelector(".next-st");
    const prev = modal.querySelector(".prev-st");

    const testomonials = [
      {
        width: "100%",
        backround: "./img/storiesIcom/small2.jpg",
        name: "Marvin Hawkins",
        position: "Basdf",
        photos: "./img/storiesIcom/MarvinHawkins.png",
        text: "consectetur adipisicing cere aut vitae, laudantium perferendis cupiditate.",
      },
      {
        width: "100%",
        backround: "./img/storiesIcom/cardImgBrash.jpg",
        name: "Max Russell",
        position: "Solder",
        photos: "./img/storiesIcom/MaxRussell.png",
        text: " possimus optio molestias praesentiuelit. N aut vitae, laudantium perferendis cupiditate.",
      },
      {
        width: "100%",
        backround: "./img/storiesIcom/smallImg.jpg",
        name: "Eduardo Miles",
        position: "Fighter",
        photos: "./img/storiesIcom/EduardoMiles.png",
        text: " Lorem ipsum, dolor sit amet consectetue facere aut vitae, laudantium perferendis cupiditate.",
      },
      {
        width: "100%",
        backround: "./img/storiesIcom/small2.jpg",
        name: "Kyle Henry",
        position: "Teacher",
        photos: "./img/storiesIcom/KyleHenry.png",
        text: "  consequuntur inventore possimus optio molestias praesentium. Lorem ipsum, dolor sfacere aut vitae, laudantium perferendis cupiditate.",
      },
      {
        width: "100%",
        backround: "./img/storiesIcom/cardImgBrash.jpg",
        name: "Shawn Lane",
        position: "Cashier",
        photos: "./img/storiesIcom/ShawnLane.png",
        text: " consequuntur inventore possimus optio molestias praesentium. Lorem ipsufacere aut vitae, laudantium perferendis cupiditate.",
      },
      {
        width: "100%",
        backround: "./img/storiesIcom/smallImg.jpg",
        name: "Max Russell",
        position: "Cashier",
        photos: "./img/storiesIcom/EduardoMiles.png",
        text: "   molestias praesentium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibusitate.",
      },
      {
        width: "100%",
        backround: "./img/storiesIcom/small2.jpg",
        name: "Eduardo Miles",
        position: "Cashier",
        photos: "./img/storiesIcom/JacobMccoy.png",
        text: " inventore possimus optio molestias praesentium. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
      {
        width: "100%",
        backround: "./img/storiesIcom/cardImgBrash.jpg",
        name: "Eduardo Miles",
        position: "Cashier",
        photos: "./img/storiesIcom/MarvinHawkins.png",
        text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus non maxime enim voluptas? ",
      },
      {
        width: "100%",
        backround: "./img/storiesIcom/smallImg.jpg",
        name: "Esther Richards",
        position: "Cashier",
        photos: "./img/storiesIcom/MaxRussell.png",
        text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor nesciunt, ipsam ",
      },
      {
        width: "100%",
        backround: "./img/storiesIcom/cardImgBrash.jpg",
        backround: "./img/storiesIcom/small2.jpg",
        name: "Esther Richards",
        position: "Cashier",
        photos: "./img/storiesIcom/ShawnLane.png",
        text: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus non maxime enim voluptas?.",
      },
      {
        width: "100%",
        backround: "./img/storiesIcom/cardImgBrash.jpg",
        name: "Gloria Steward",
        position: "Cashier",
        photos: "./img/storiesIcom/EduardoMiles.png",
        text: "quibusdam consequuntur inventore possimus optio molestias praesentium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. .",
      },
      {
        width: "100%",
        backround: "./img/storiesIcom/smallImg.jpg",
        name: "Max Russell",
        position: "Cashier",
        photos: "./img/storiesIcom/EduardoMiles.png",
        text: "  quibusdam consequuntur inventore possimus optio molestias praesentium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. .",
      },
      {
        width: "100%",
        backround: "./img/storiesIcom/cardImgBrash.jpg",
        name: "Max Russell",
        position: "Cashier",
        photos: "./img/storiesIcom/KyleHenry.png",
        text: " quibusdam consequuntur inventore possimus optio molestias praesentium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. .",
      },
      {
        width: "100%",
        backround: "./img/storiesIcom/cardImgBrash.jpg",
        name: "Max Russell",
        position: "Cashier",
        photos: "./img/storiesIcom/JacobMccoy.png",
        text: "  quibusdam consequuntur inventore possimus optio molestias praesentium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
      },
    ];
    let idx = 1;

    next.addEventListener("click", () => {
      const { name, position, photos, text } = testomonials[idx];
      testomonial.innerHTML = text;
      userImage.src = photos;
      username.innerHTML = name;
      role.innerHTML = position;
      idx = idx + 1;
      if (idx > testomonials.length - 1) {
        idx = 0;
      }
    });
    prev.addEventListener("click", () => {
      const { name, position, photos, text } = testomonials[idx];
      testomonial.innerHTML = text;
      userImage.src = photos;
      username.innerHTML = name;
      role.innerHTML = position;
      idx = idx - 1;
      if (idx < 0) {
        idx = 0;
      }
    });

    function updateTestomonial() {
      const { name, position, photos, text, width } = testomonials[idx];

      testomonial.innerHTML = text;
      userImage.src = photos;
      username.innerHTML = name;
      role.innerHTML = position;
      progressB.style.width = "100%";
      idx++;

      if (idx > testomonials.length - 1) {
        idx = 0;
      }
    }

    function reloadScrollBars() {
      document.documentElement.style.overflow = "auto"; // firefox, chrome
      document.body.scroll = "yes"; // ie only
    }

    function unloadScrollBars() {
      document.documentElement.style.overflow = "hidden"; // firefox, chrome
      document.body.scroll = "no"; // ie only
    }
    unloadScrollBars()
 

    setInterval(updateTestomonial, 5000);
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

$("#slick1").slick({
  button: true,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  infinity: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        rows: 2,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
  ],
});
$("#stories-container").slick({
  slidesToShow: 14,
  slidesToScroll: 2,
  arrows: true,
  button: false,
  variableWidth: true,
  infinity: true,
});

// CARDS
const likeImg = document.querySelectorAll(".like-img");

likeImg.forEach((like) => {
  like.addEventListener("mouseover", () => {
    like.src = "./img/cardImg/like.png";
  });
  like.addEventListener("mouseout", () => {
    like.src = "./img/cardImg/likeIcon.svg";
  });
});

const likeImgBlack = document.querySelectorAll(".like-img-black");

likeImgBlack.forEach((likeBlack) => {
  likeBlack.addEventListener("mouseover", () => {
    likeBlack.src = "./img/cardImg/like.png";
  });
  likeBlack.addEventListener("mouseout", () => {
    likeBlack.src = "./img/bestsellerImg/blackHeard.png";
  });
});
