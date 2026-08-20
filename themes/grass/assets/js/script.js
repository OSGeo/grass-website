// GRASS website behaviors (vanilla JS, no jQuery).
// Bundled with contributor_ad.js into bundle.js and loaded at the end of <body>,
// so the DOM above is already parsed when this runs.
(function () {
    'use strict';

    // Wrap the last word of the brand text in a styled span.
    document.querySelectorAll('.navbar-brand span').forEach(function (el) {
        var words = el.textContent.trim().split(' ');
        var last = words.pop();
        if (last === undefined) return;
        el.textContent = '';
        if (words.length > 0) {
            el.appendChild(document.createTextNode(words.join(' ') + ' '));
            var span = document.createElement('span');
            span.className = 'gis';
            span.textContent = last;
            el.appendChild(span);
        } else {
            el.appendChild(document.createTextNode(last));
        }
    });

    // Match the hero offset to the actual fixed-header height.
    function adjustHeroOffset() {
        var header = document.querySelector('.fixed-top');
        if (!header) return;
        var headerHeight = header.offsetHeight;
        if (!headerHeight) return;
        document.querySelectorAll('.mt-95').forEach(function (el) {
            el.style.marginTop = headerHeight + 'px';
        });
    }
    adjustHeroOffset();
    window.addEventListener('resize', adjustHeroOffset);

    // Tag internal vs external links; open external links in a new tab.
    document.querySelectorAll('a').forEach(function (a) {
        if (location.hostname === a.hostname || !a.hostname.length) {
            a.classList.add('int');
        } else {
            a.classList.add('ext');
            a.setAttribute('target', '_blank');
            a.setAttribute('title', a.textContent);
        }
    });

    // Apply background images declared via data-background.
    document.querySelectorAll('[data-background]').forEach(function (el) {
        el.style.backgroundImage = 'url(' + el.getAttribute('data-background') + ')';
    });

    // Gallery "View more"/"View less" toggle for items beyond the sixth.
    document.querySelectorAll('.gallery-toggler').forEach(function (toggler) {
        toggler.addEventListener('click', function (e) {
            e.preventDefault();
            var gallery = toggler.parentNode.querySelector('.gallery');
            if (gallery) {
                gallery.querySelectorAll('div:nth-child(n+7)').forEach(function (item) {
                    var hidden = item.style.display === 'none' || getComputedStyle(item).display === 'none';
                    item.style.display = hidden ? '' : 'none';
                });
            }
            toggler.textContent = toggler.textContent.trim() === 'View more' ? 'View less' : 'View more';
        });
    });

    // Download page: detect the OS and select the matching tab (Bootstrap 5 Tab API).
    var downloadTab = document.getElementById('downloadTab');
    if (downloadTab) {
        var osMap = {
            Windows: { text: 'Download for Windows', os: 'windows', hash: '#windows' },
            macOS: { text: 'Download for macOS', os: 'mac', hash: '#mac' },
            Linux: { text: 'Download for Linux', os: 'linux', hash: '#linux' },
            Docker: { text: 'Docker Container', os: 'docker', hash: '#docker' },
            Conda: { text: 'Conda package', os: 'conda', hash: '#conda' },
            'Source Code': { text: 'Source Code', os: 'source', hash: '#source' }
        };

        // Optional OS-specific download button (absent today; updated if present).
        function updateDownloadButton(os) {
            var button = document.querySelector('.grass-os-download-button');
            if (!button) return;
            var cfg = osMap[os];
            button.textContent = cfg ? cfg.text : 'Download';
            button.dataset.os = cfg ? cfg.os : 'unknown';
        }

        function detectOS() {
            var ua = window.navigator.userAgent;
            if (/iPhone|iPad|iPod/.test(ua)) return 'iOS';
            if (ua.indexOf('Win') !== -1) return 'Windows';
            if (ua.indexOf('Mac') !== -1) return 'macOS';
            if (ua.indexOf('Android') !== -1) return 'Android';
            if (ua.indexOf('Linux') !== -1) return 'Linux';
            return 'Unknown OS';
        }

        // Bootstrap 5 switches the tab itself; react after it is shown.
        downloadTab.querySelectorAll('a[data-bs-toggle="tab"]').forEach(function (tabLink) {
            tabLink.addEventListener('shown.bs.tab', function (e) {
                var os = e.target.textContent.trim();
                updateDownloadButton(os);
                if (window.location.pathname === '/download/' && osMap[os]) {
                    history.replaceState(null, null, osMap[os].hash);
                }
            });
        });

        // Select the tab for the current hash, or fall back to the detected OS.
        function selectTabFromHash() {
            var os;
            var hash = window.location.hash;
            if (hash) {
                var tabByHash = downloadTab.querySelector('a[href="' + hash + '"]');
                os = tabByHash ? tabByHash.textContent.trim() : detectOS();
            } else {
                os = detectOS();
            }
            var cfg = osMap[os];
            if (cfg && window.bootstrap) {
                var tabEl = downloadTab.querySelector('a[href="' + cfg.hash + '"]');
                if (tabEl) bootstrap.Tab.getOrCreateInstance(tabEl).show();
            }
            updateDownloadButton(os);
        }
        selectTabFromHash();
        // Also react to in-page hash changes (e.g. links from other pages
        // opened while this page is already loaded, or back/forward).
        window.addEventListener('hashchange', selectTabFromHash);
    }
})();
