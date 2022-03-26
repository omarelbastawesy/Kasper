//bottom to top
let btm = document.querySelector("body .top");

btm.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

//side bar
let man = document.querySelector("header nav ul");
let btn = document.querySelector("header nav .toggle-menu");

btn.onclick = function () {
  man.classList.toggle("activat");
};

//bollets
let bol = document.querySelectorAll(".landing .bulletes li");

bol.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    bol.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

//animated %
let nom = document.querySelectorAll(".stats .container .box .number");
let sec = document.querySelector(".stats");
let started = false;

//counter
let sic = document.querySelector(".our-skills .skills");
let pro = document.querySelectorAll(".our-skills .skills .prog span");

function cou(ele) {
  let goal = ele.dataset.goal;
  let coun = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(coun);
    }
  }, 6000 / goal);
}

//background image
let back = document.querySelector(".landing");
let span = document.querySelectorAll(".landing .bulletes li");

span[0].onclick = function () {
  back.style.cssText = "background-image: url(image/shufle-3.jpg);";
};
span[1].onclick = function () {
  back.style.cssText = "background-image: url(image/header.jpg);";
};
span[2].onclick = function () {
  back.style.cssText = "background-image: url(image/pricing.jpg);";
};

// testimonials bollets
let tbol = document.querySelectorAll(
  ".our-skills .container .testimonials .bulletes li"
);

tbol.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tbol.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

let im = document.querySelectorAll(
  ".our-skills .container .testimonials .box img"
);

tbol[0].onclick = function () {
  im[0].src = "image/bo.jpg";
  im[1].src = "image/hd.png";
};
tbol[1].onclick = function () {
  im[0].src = "image/person1.jpg";
  im[1].src = "image/person2.jpg";
};
tbol[2].onclick = function () {
  im[0].src = "image/ki.png";
  im[1].src = "image/bo.png";
};

// ################# Window Scrolling ##############
window.onscroll = function () {
  //botton to top
  if (scrollY >= 1200) {
    btm.style.display = "flex";
  } else {
    btm.style.display = "none";
  }

  // animated %
  if (window.scrollY >= sec.offsetTop - 450) {
    if (!started) {
      nom.forEach((number) => cou(number));
      started = true;
    }
  }

  //counter
  if (window.scrollY >= sic.offsetTop - 400) {
    pro.forEach((span) => {
      span.style.width = span.dataset.val;
    });
  }
};
