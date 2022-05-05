//le parti hover sur le
let btninverse = document.getElementsByClassName("btninverse");
console.log(btninverse);
for (let i = 0; i < btninverse.length; i++) {
  btninverse[i].addEventListener("mouseover", () => {
    btninverse[i].style.backgroundColor = "#b11313";
    btninverse[i].style.color = "white";
    btninverse[i].style.fontWeigth = "bold";
    btninverse[i].style.boxShadow = "6px 6px 30px white";
  });
  btninverse[i].addEventListener("mouseout", () => {
    btninverse[i].style.backgroundColor = "white";
    btninverse[i].style.color = "#b11313";
    btninverse[i].style.boxShadow = "none";
  });
}
//effet hover sur la parti footer
let footericones = document.getElementsByClassName("footer-icones");
for (let i = 0; i < footericones.length; i++) {
  footericones[i].addEventListener("mouseover", () => {
    footericones[i].style.color = "white";
  });
  footericones[i].addEventListener("mouseout", () => {
    footericones[i].style.backgroundcolor = "#b11313";
    footericones[i].style.color = "black";
  });
}

//effet sur ligne toutes les liste des

let menu = document.querySelectorAll("li");
menu.forEach(function (li) {
  li.addEventListener("mouseover", () => {
    li.style.textDecoration = "underline";
  });
  li.addEventListener("mouseout", () => {
    li.style.textDecoration = "none";
  });
});

//effet deplacement gauche vers droite
$(document).ready(function () {
  $(".box").animate(
    {
      left: "0%",
    },
    "slow"
  );
  $(".description").fadeIn(50000);
});
$(document).ready(function () {
  $(window).scroll(function () {
    let top = $("#spiderman").offset().top;
    let positiony = Math.floor($(document).scrollTop());
    if (positiony < top) {
      $(".background1").animate({ top: positiony + "px" });
    }
  });
  $(windows).scrool(function () {
    let top1 = $("#news").offset().top;
    let positiony1 = Math.floor($(document).scrollTop());
    if (positiony1 < top1) {
      $("#spiderman").animate({ top: positiony1 + "px" });
    }
  });
});
//*les spiderman aves zoom
$(".heros3").mouseover(function () {
  this.css({});
});
