// // home scrolling section

// if ($(window).width() < 991) {
//   $(".accordion-button").each(function () {
//     $(this).attr("data-bs-target", `#${$(this).next().attr("id")}`);
//   });
//   $(".home-solution__mainConent__item:not(:first-of-type) .accordion-button")
//     .addClass("collapsed")
//     .next(".accordion-collapse")
//     .removeClass("show");
//   $(".home-solution__mainConent__item__accordion-body .mobile-link").each(
//     function () {
//       $(this).replaceWith(
//         $(
//           `<a class="${$(this).attr("class")}" href="${$(this)
//             .find("a")
//             .attr("href")}" >${this.innerHTML} </a>`
//         )
//       );
//     }
//   );
// } else {
//   $(".accordion-button").attr("data-bs-target", "");
//   $(".home-solution__mainConent.slider-for").slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     infinite: false,
//     arrows: false,
//     fade: true,
//     rtl: $("html").attr("dir") === "rtl" ? true : false,
//     adaptiveHeight: true,
//     useTransform: true,
//     speed: 300
//   });

//   $(".home-solution__sidebar.slider-nav")
//     .on("init", function (event, slick) {
//       $(".slider-nav .slick-slide.slick-current").addClass("is-active");
//     })
//     .slick({
//       slidesToShow: 3,
//       slidesToScroll: 3,
//       dots: false,
//       vertical: true,

//       focusOnSelect: false,
//       infinite: false
//     });

//   $(".home-solution__mainConent.slider-for").on(
//     "afterChange",
//     function (event, slick, currentSlide) {
//       $(".home-solution__sidebar.slider-nav").slick("slickGoTo", currentSlide);
//       var currrentNavSlideElem =
//         '.home-solution__sidebar.slider-nav .slick-slide[data-slick-index="' +
//         currentSlide +
//         '"]';
//       $(
//         ".home-solution__sidebar.slider-nav .slick-slide.is-active"
//       ).removeClass("is-active");
//       $(currrentNavSlideElem).addClass("is-active");
//     }
//   );

//   $(".home-solution__sidebar.slider-nav").on(
//     "click",
//     ".slick-slide",
//     function (event) {
//       event.preventDefault();
//       var goToSingleSlide = $(this).data("slick-index");

//       $(".home-solution__mainConent.slider-for").slick(
//         "slickGoTo",
//         goToSingleSlide
//       );
//     }
//   );

//   $(".home-solution__mainConent.slider-for").on("wheel", function (e) {
//     e.preventDefault();
//     if ($("html").attr("dir") === "rtl") {
//       if (e.originalEvent.deltaY < 0) {
//         $(this).slick("slickPrev");
//       } else {
//         $(this).slick("slickNext");
//       }
//     } else {
//       if (e.originalEvent.deltaY < 0) {
//         $(this).slick("slickNext");
//       } else {
//         $(this).slick("slickPrev");
//       }
//     }
//   });
// }

let width = $(window).innerWidth();
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  arrows: width >= 991 ? false : true,
  fade: true,
  rtl: $("html").attr("dir") === "rtl" ? true : false,
  adaptiveHeight: true,
  useTransform: true,
  speed: 300
});
$(".slider-nav")
  .on("init", function (event, slick) {
    $(".slider-nav .slick-slide.slick-current").addClass("is-active");
  })
  .slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    vertical: width >= 991 ? true : false,
    arrows: false,
    focusOnSelect: false,
    infinite: false
  });

$(".slider-for").on("afterChange", function (event, slick, currentSlide) {
  $(".slider-nav").slick("slickGoTo", currentSlide);
  var currrentNavSlideElem =
    '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
  $(".slider-nav .slick-slide.is-active").removeClass("is-active");
  $(currrentNavSlideElem).addClass("is-active");
});

$(".slider-nav").on("click", ".slick-slide", function (event) {
  event.preventDefault();
  var goToSingleSlide = $(this).data("slick-index");

  $(".slider-for").slick("slickGoTo", goToSingleSlide);
});

$(".slider-for").on("wheel", function (e) {
  e.preventDefault();
  if ($("html").attr("dir") === "rtl") {
    if (e.originalEvent.deltaY < 0) {
      $(this).slick("slickPrev");
    } else {
      $(this).slick("slickNext");
    }
  } else {
    if (e.originalEvent.deltaY < 0) {
      $(this).slick("slickNext");
    } else {
      $(this).slick("slickPrev");
    }
  }
});
