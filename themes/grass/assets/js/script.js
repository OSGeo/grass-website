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

    function configureDownloadButton(os, replaceHash = true) {
      const button = $(".grass-os-download-button");
      switch (os) {
        case "Windows":
            console.log("Setting Windows");
            button.text("Download for Windows");
            button.data("os", "windows");
            $('#downloadTab a[href="#windows"]').tab('show');
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
            $('#downloadTab a[href="#linux"]').tab('show');
            if (window.location.pathname === "/learn/download/") {
              history.replaceState(null, null, "#linux");
            }
            break;
        case "Docker":
            button.text("Docker Container");
            button.data("os", "docker");
            $('#downloadTab a[href="#docker"]').tab('show');
            if (window.location.pathname === "/learn/download/") {
              history.replaceState(null, null, "#docker");
            }
            break;
        default:
            button.text("Download");
            button.data("os", "unknown");
            break;
    }
  }

    $(document).ready(function() {
    
     // Handle download page tab change
     $('#downloadTab a').on('click', function(e) {
        e.preventDefault();
        console.log("Download button clicked", e, this);
        // Activate the clicked tab
        $(this).tab('show');
        const hash = e.target.hash;
        const os = e.target.innerText;
        configureDownloadButton(os);
        // history.replaceState(null, null, hash);
      });

      // Detect the user's OS and update the download button text
      (async () => {
          let os = "Unknown OS";
          // If the user has already selected a tab, don't change it
          const hash = window.location.hash;
          if (hash) {
            const tab = $(`#downloadTab a[href="${hash}"]`)
            console.log("Open Tab", tab);
            os = tab.text(); // Get the OS from the tab text
            console.log("Open Tab OS", os);

          }
          else {
            // No hash, so detect the OS and select the appropriate tab
            os = await detectOSFromUserAgent();
            console.log("No Hash", os);
          }
          // Configure the download button
          // Add text and data based on the user's OS
          configureDownloadButton(os);
          
      })(jQuery);
  });
  
})(jQuery);
