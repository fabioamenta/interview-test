$(function () {
  "use strict";

  $(document).ready(function () {
    isDesktop();

    // Stick the header at top on scroll
    $("#header").sticky({
      zIndex: "5",
    });

    // Show/Hide mobile menu
    $(".overlay, .navbar-toggler").on("click", function (e) {
      showHideMenu(e);
    });

    // Check if resolution changes
    var resizeTimer;
    $(window).on("resize", function (e) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        isDesktop();
        $("#header").sticky("update");
      }, 50);
    });
  });

  function isDesktop() {
    var res = $(window).outerWidth() > 767 ? true : false;
    return res;
  }

  function showHideMenu() {
    $(".navbar-toggler").toggleClass("open");
    $(".main-menu").toggleClass("open");
    $(".overlay").toggleClass("open");
    $(".header").toggleClass("menu-open");
    return true;
  }

  function scrollToTop() {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "slow"
    );
  }
});
