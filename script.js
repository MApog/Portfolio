$(document).ready(function() {
    $("a").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          800,
          function() {
            window.location.hash = hash;
          }
        );
      }
    });
  });
  
$(document).ready(function() {
  var typingEffect = new Typed(".multiText", {
    strings: ["Student,Web Developer/Desinger, Writer."],
    loop: false,
    typeSpeed: 50,
    backSpeed: 80,
    backDelay: 1500
  });
});

$(document).ready(function() {
  var typingEffect = new Typed(".name_1", {
    strings: ["Muhammad Abuzor."],
    loop: false,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
  });
});

  