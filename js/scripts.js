    (function ($) {
    "use strict";

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

  document.addEventListener('DOMContentLoaded', function() {
    particlesJS("particle-js", {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "push": {
            "particles_nb": 4
          }
        }
      },
      "retina_detect": true
    });
  });

$(document).ready(function() {
    $('.project-item').show();
    
    $('.filter-btn').click(function(e) {
        e.preventDefault();
        
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        var filter = $(this).data('filter');
        
        if(filter === 'all') {
            $('.project-item').show();
        } else {
            $('.project-item').hide();
            $('.project-item.' + filter).show();
        }
        
        $('.project-item').css('opacity', 0);
        $('.project-item:visible').each(function(i) {
            var item = $(this);
            setTimeout(function() {
                item.animate({opacity: 1}, 300);
            }, i * 100);
        });
    });
});
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);

$(document).ready(function() {
  $('.progress-circle').each(function() {
      var progress = $(this).data('progress');
      $(this).css('--progress', progress + '%');
  });
  
  $(window).scroll(function() {
      var academicsSection = $('#academics');
      if(academicsSection.length) {
          var academicsPosition = academicsSection.offset().top;
          var windowHeight = $(window).height();
          var scrollPosition = $(window).scrollTop();
          
          if (scrollPosition > (academicsPosition - windowHeight * 0.75)) {
              $('.academics-main-card, .academics-card, .current-learning').addClass('animate');
          }
      }
  });
});
$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault();
        
        var valid = true;
        $('#contactForm .form-control').each(function() {
            if (!$(this).val()) {
                valid = false;
                $(this).addClass('is-invalid');
            } else {
                $(this).removeClass('is-invalid');
            }
        });
        
        var emailField = $('#email');
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.val())) {
            valid = false;
            emailField.addClass('is-invalid');
        }
        
        if (valid) {
            $('#success').html('<div class="alert alert-success">' +
                '<strong>Your message has been sent. </strong>' +
                'I\'ll get back to you as soon as possible!' +
                '</div>');
            $('#contactForm').trigger('reset');
            
            setTimeout(function() {
                $('#success').html('');
            }, 5000);
        } else {
            $('#success').html('<div class="alert alert-danger">' +
                'Please fill out all required fields correctly.' +
                '</div>');
            
            setTimeout(function() {
                $('#success').html('');
            }, 3000);
        }
    });
    
    $('#contactForm .form-control').on('input', function() {
        $(this).removeClass('is-invalid');
    });
});
})(jQuery); // End of use strict


