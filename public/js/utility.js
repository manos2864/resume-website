// Animate Sections
$('#short-description').on('scrollSpy:enter', function() {
  $(".short-description-text").fadeIn(1500);
  $(".person-image").fadeIn(1700);
});
$('#short-description').on('scrollSpy:exit', function() {
  $(".short-description-text").fadeOut();
  $(".person-image").fadeOut();
});
$('#skills').on('scrollSpy:enter', function() {
  $("#skills .card").fadeIn(1500);
});
$('#achievements').on('scrollSpy:enter', function() {
  $("#achievements .list-group-item").fadeIn(1500);
});
$('#achievements').on('scrollSpy:exit', function() {
  $("#achievements .list-group-item").fadeOut();
});

$('#short-description').scrollSpy();
$('#skills').scrollSpy();
$('#achievements').scrollSpy();

// Add smooth scrolling to all links
$("a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function() {
      window.location.hash = hash;
    });
  }
});

// Back to Top Button
$(window).on("scroll", function() {
  console.log(document.documentElement.scrollTop);
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    $(".back-to-top").fadeIn();
  } else {
    $(".back-to-top").fadeOut();
  }
});


// Set Year in Footer
var timestamp = new Date().getFullYear();
$("#timestamp").html(timestamp);
