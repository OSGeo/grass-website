var _paq = window._paq = window._paq || [];
// Call disableCookies before calling trackPageView 
_paq.push(['disableCookies']);
_paq.push(['enableLinkTracking']);
_paq.push(['trackPageView']);
(function() {
  var u="https://2022.foss4g.org/matomo/";
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  _paq.push(['setSiteId', ['2']]);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();
