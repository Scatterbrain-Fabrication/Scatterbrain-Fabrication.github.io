$("#blog").click(function() {
  localStorage['current_page'] = "Blog";
  print_page();
});
$("#about").click(function() {
  localStorage['current_page'] = "About";
  print_page();
});
$("#projects").click(function() {
  localStorage['current_page'] = "Projects";
  print_page();
});

function print_page() {
  $("#navbarNavDropdown").collapse('hide');
  $("nav").find(".active").removeClass("active");
  switch (localStorage['current_page']) {
    case "Blog":
      print_blog();
      $("#blog").addClass("active");
      break;
    case "About":
      print_about();
      $("#about").addClass("active");
      break;
    case "Projects":
      print_projects();
      $("#projects").addClass("active");
      break;
    default:
      localStorage['current_page'] = "Blog";
      $("#blog").addClass("active");
      print_blog();
  }
  $("#content_header").hide().html(`
    <div class="jumbotron bg-dark text-white">
        <h1 class="row justify-content-center">` + localStorage['current_page'] + `</h1>
    </div>
  `).fadeIn();
}

function print_blog() {
  $(function() {
    $.get('blog_posts.txt', function(data) {
       $("#content").hide().html(data).fadeIn();
    }, 'text');
  });
}

function print_about() {
  $(function() {
    $("#content").hide().html(`
      <div class="card bg-secondary text-white">
        <div class="card-body">
          <p class="card-text">Scatterbrain Fabrication was founded in order to give a crazy nerd an outlet for his creativity. Still in its infancy, it aims to output content and creations that are both entertaining and beautiful. We specialize in prototyping products and creating cosplay weapons, armor, and the like. Hopefully this becomes more than just a webpage and YouTube channel. We aim to expand our viewers' knowledge and hopefully give them a few laughs along the way. Like and subscribe to our channel!</p>
        </div>
        <div class="card-footer">
          <div class="row justify-content-around">
            <a class="btn btn-dark" href="https://www.youtube.com/channel/UCCaeQsz8SuI2E2rrpE1mA4Q">YouTube Channel</a>
            <a class="btn btn-dark" href="mailto:mail@scatterbrainfabrication.com">Email</a>
          </div>
        </div>
      </div>
    `).fadeIn();
  });
}

function print_projects() {
  $(function() {
    $("#content").hide().html(`
      <div class="card bg-secondary text-white">
        <div class="card-body">
          <p class="card-text">Coming Soon</p>
        </div>
      </div>
    `).fadeIn();
  });
}
