$(function () {
  $("#menuToggle").on("click", function () {
    $("#bodyOverlay").toggleClass("overlay");
  });

  $("#bodyOverlay").on("click", function () {
    $("#sidebar, #menuToggle").toggleClass("active");
    $("#bodyOverlay").removeClass("overlay");
  });

  $("body").on("click", function () {
    let active = $("#sidebar").hasClass("active");
    if (active) {
      $(".page-content").toggleClass("stop");
    } else {
      $(".page-content").removeClass("stop");
    }
  });
});

$(function () {
  $("#menuToggle").on("click", function () {
    $("#bodyOverlay, #menuToggle, #sidebar").toggleClass("active");
  });
});
$(function () {
  $("#bodyOverlay").on("click", function () {
    $("#menuToggle").removeClass("active");
  });
});
