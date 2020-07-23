(function ($) {
    'use strict';

    // Logotext style 
    $.fn.lastWord = function() {
	  var text = this.text().trim().split(" ");
	  var last = text.pop();
	  this.html(text.join(" ") + (text.length > 0 ? " <span class='gis'>" + last + "</span>" : last));
    };
    $(".navbar-brand span").lastWord();


    $( 'a' ).each(function() {
  if( location.hostname === this.hostname || !this.hostname.length ) {
      $(this).addClass('int');
  } else {
      $(this).addClass('ext');
       $(this).attr({
            target: "_blank",
           title: $(this).text()
        });
  }
    });
    
    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    // Boostrap menu hack
    $(document).ready(function() {
      function bindNavbar() {
        if ($(window).width() > 768) {
          $('.navbar-default .dropdown').on('mouseover', function() {
            $('.dropdown-toggle', this).next('.dropdown-menu').show();
          }).on('mouseout', function() {
            $('.dropdown-toggle', this).next('.dropdown-menu').hide();
          });
          $('.dropdown-toggle').click(function() {
            if ($(this).next('.dropdown-menu').is(':visible')) {
              window.location = $(this).attr('href');
            }
          });
        } else {
          $('.navbar-default .dropdown').off('mouseover').off('mouseout');
        }
      }
      $(window).resize(function() {
        bindNavbar();
      });
      bindNavbar();
    });
    // Collapse current year news accordion
    $("#news .panel-collapse:first").collapse();      
})(jQuery);
