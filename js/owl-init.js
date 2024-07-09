const dir = $("html").attr("dir");

$(".main-slider--carousel").owlCarousel({
  loop: true,
  autoplay: true,
  nav: true,
  rtl: dir == "rtl" ? true : false,
  responsive: {
    0: {
      items: 2,
      nav: false
    },
    575: {
      items: 2
    },
    767: {
      items: 3
    },
    991: {
      items: 4,
      dots: false
    }
  }
});

$(".owl-carousel--partners").owlCarousel({
  nav: true,
  dots: false,
  autoWidth: true,
  rtl: dir === "rtl" ? true : false,
  navText: [
    "<i class='fa-solid fa-chevron-right'></i>",
    "<i class='fa-solid fa-chevron-left'></i>"
  ],
  margin: 20
});
let activeTab = document.querySelector(".tab-pane.show.active"),
  activeTag = document.querySelector(".tag-selected");

// $(".owl-carousel--partners").click(function (e) {
//   if (e.target.id.startsWith("tag")) {
//     $(activeTab).fadeOut(500, function () {
//       activeTag = document.querySelector(".tag-selected");
//       activeTag.classList.remove("tag-selected");
//       this.classList.remove("show", "active");
//       let targetSection = document.getElementById(`${e.target.id.slice(4)}`);
//       e.target.classList.add("tag-selected");
//       $(targetSection).fadeIn(500, function () {
//         targetSection.classList.add("show", "active");
//         activeTab = targetSection;
//         activeTag = document.getElementById(`tag-${e.target.id}`);
//       });
//     });
//   }
// });
