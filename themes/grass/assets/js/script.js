(function ($) {
    'use strict';

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

    
})(jQuery);
