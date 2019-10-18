$(document).ready(function() {
  $("#accordian").on("click", "span", function() {
    $(".content").removeClass("active")
    $(this)
      .find("+.content")
      .addClass("active")
  })
})
