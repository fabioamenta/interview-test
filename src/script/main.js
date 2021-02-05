$(function () {
  "use strict";

  $(document).ready(function () {

    isDesktop();
    openCloseCollapse();

    // Stick the header at top on scroll
    $("#header").sticky({
      zIndex: "5"
    });

    // Show/Hide mobile menu
    $(".overlay, .navbar-toggler").on("click", function (e) {
      showHideMenu(e);
    });

    // Scroll to top
    if ($('[href="#filters"]').length > 0) {
      $('[href="#filters"]').on("click", function () {
        scrollToTop();
      });
    }

    // Check if resolution changes
    var resizeTimer;
    $(window).on("resize", function (e) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        isDesktop();
        $("#header").sticky('update');
        openCloseCollapse();
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

  function openCloseCollapse() {
    if (isDesktop()) {
      $('#filters').addClass('show');
      $('[aria-controls="filters"]').attr("aria-expand", true)
    } else {
      if ($('#filters').hasClass('show')) {
        $('#filters').removeClass('show');
        $('[aria-controls="filters"]').attr("aria-expand", false)
      }
    }
  }

  function scrollToTop() {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
  }
});