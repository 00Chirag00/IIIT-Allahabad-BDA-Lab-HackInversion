//--Attempt to get scrollspy working --//
$(document).ready(function() {
  $("body").scrollspy({
    target: "#myNavbar",
    offset: 60
  })
});
//-- end of scrollspy section --//

function main() {
  $('.navlink').on('click', function() {
    $("a").removeClass('active');
    $(this).toggleClass('active');
  });

  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
}

$(document).ready(main);