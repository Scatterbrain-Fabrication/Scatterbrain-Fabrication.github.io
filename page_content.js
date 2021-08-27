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
    $.get('about_section.txt', function(data) {
       $("#content").hide().html(data).fadeIn();
    }, 'text');
  });
}

function print_projects() {
  $(function() {
    $.get('project_section.txt', function(data) {
       $("#content").hide().html(data).fadeIn();
    }, 'text');
  });
}
