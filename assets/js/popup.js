$(".Click-here").on("click", function () {
  $(".custom-model-main").addClass("form-model-open");
});
$(".close-btn, .btn, .bg-overlay").click(function () {
  $(".custom-model-main").removeClass("form-model-open");
});
