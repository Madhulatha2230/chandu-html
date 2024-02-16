
$(document).ready(function () {



    // multilevel dropdown
    
    $(".btn-group, .dropdown").hover( function () { $('>.dropdown-menu', this).stop(true, true).fadeIn("fast"); $(this).addClass('open'); }, function () { $('>.dropdown-menu', this).stop(true, true).fadeOut("fast"); $(this).removeClass('open'); });
    
    
      // tooltip
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
    
    // home slick banner
    $('.home-banner').slick({
      autoplay: true
    });
    
    
    //scroll add and remove
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
    
      if (scroll >= 50) {
          $("#top-navbar").addClass("bgheader");
      } else {
          $("#top-navbar").removeClass("bgheader");
      }
    });
    
    
    });
    
    
    
    
    
    