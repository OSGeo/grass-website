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
    
    // Toggle gallery items
    $(".gallery-toggler").click(function(e){
	  $(this).parent().find('.gallery div:nth-child(n+7)').toggle();
	  $(this).html($(this).html() == 'View more' ? 'View less' : 'View more');
	  e.preventDefault();
    });

    function detectOSFromUserAgent() {
      return new Promise((resolve) => {
        const userAgent = window.navigator.userAgent;

        if (userAgent.includes("Win")) resolve("Windows");
        else if (userAgent.includes("Mac")) resolve("macOS");
        else if (userAgent.includes("Linux")) resolve("Linux");
        else if (userAgent.includes("Android")) resolve("Android");
        else if (userAgent.includes("like Mac") && /iPhone|iPad|iPod/.test(userAgent)) resolve("iOS");
        else resolve("Unknown OS");
      });
    }

    $(document).ready(function() {
      // Detect the user's OS and update the download button text
      (async () => {
          const os = await detectOSFromUserAgent();
          const button = $(".grass-os-download-button");
       
          // Add text and data based on the user's OS
          switch (os) {
              case "Windows":
                  button.text("Download for Windows");
                  button.data("os", "windows");
                  // TODO: This doesn't work
                  // $('a[data-toggle="tab"]').on("shown.bs.tab", (e) => {
                  //   history.replaceState(null, null, "#windows");
                  //   window.location.hash = "#windows";
                  // });
                  if (window.location.pathname === "/learn/download/") {
                    history.replaceState(null, null, "#windows");
                  }
                  break;
              case "macOS":
                  button.text("Download for macOS");
                  button.data("os", "mac");
                  $('#downloadTab a[href="#mac"]').tab('show');
                  if (window.location.pathname === "/learn/download/") {
                    history.replaceState(null, null, "#mac");
                  }
                  break;
              case "Linux":
                  button.text("Download for Linux");
                  button.data("os", "linux");
                  if (window.location.pathname === "/learn/download/") {
                    history.replaceState(null, null, "#linux");
                  }
                  break;
              default:
                  button.text("Download");
                  button.data("os", "unknown");
                  break;
          }
      })(jQuery);
  });
  
})(jQuery);
