$(document).ready(function() {
  $("#accordian").on("click", "span", function() {
    $(".content").removeClass("active")
    $(this)
      .find("+.content")
      .addClass("active")
  })

  //**********ainhoa***********l

  $.get("https://obscure-tundra-54269.herokuapp.com/fine-dining").done(function(
    data
  ) {
    console.log(data["appetizers"])

    $("#sec1").on("click", "p", function() {
      $(".dinner").remove()

      const type = $(this).html()
      console.log(data["appetizers"][0].price)
      console.log(type.toLowerCase())
      let dat = data[type.toLowerCase()]
        .map(d => {
          console.log(d.price)

          console.log(d.name)
          console.log(d.description)
          console.log(d.extra.glutenfree)

          return `
      <div class="dinner">
        <div class="menuline1">
          <p id="name">${d.name}</p>
          <p id="price">${d.price}</p>
        </div>
          <p id="descr">${d.description}</p>
          <ul class="extras">                          
    <li>${d.extra.spicy}<i class="fa fa-check"></i></li>
            <li>${d.extra.glutenfree} <i class="fa fa-check"></i></li>
            <li>${d.extra.vegetarian}<i class="fa fa-check"></i></li>
          </ul>
        </div>
      `
        })
        .join("")

      $(".menu").append(dat)
    })
  })

  //***********ainhoa**********
})
