// Animate Sections
// When user leave the block use scrollSpy:exit
$('#short-description').on('scrollSpy:enter', function() {
  $(".short-description-text").fadeIn(1500);
  $(".person-image").fadeIn(1700);
}).scrollSpy();
$('#skills').on('scrollSpy:enter', function() {
  $("#skills .card").fadeIn(1500);
}).scrollSpy();
$('#achievements').on('scrollSpy:enter', function() {
  $("#achievements .list-group-item").fadeIn(1500);
}).scrollSpy();

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

// LightBox click to open image
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox({
      alwaysShowClose: true
  });
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
