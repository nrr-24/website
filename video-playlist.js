/**
 * video-playlist.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Turns the #vp-playlist <ol> into an interactive video playlist.
 *
 * TRANSLATION SUPPORT
 * ───────────────────
 * Each <li> carries a data-title-key attribute that maps to a key in the
 * site's `translations` object (defined in script.js). When the user switches
 * language, this script reads the new translation and updates:
 *   • Every thumbnail label in the strip
 *   • The title caption beneath the main player (if that video is active)
 *   • The aria-label on each thumbnail button
 *
 * HOW IT WORKS
 * ────────────
 * 1. On page load it scans every <li class="vp-playlist__item"> in #vp-playlist.
 * 2. For each item it builds a thumbnail card.
 *    - If data-poster is set → uses that image as the thumbnail (fastest).
 *    - Otherwise → embeds a muted <video> per thumbnail and seeks to 1 s so
 *      the browser renders a real frame.
 * 3. Clicking a thumbnail loads that video into the main #vp-main player.
 * 4. Arrow buttons and keyboard ← / → scroll the strip.
 *
 * TO ADD A VIDEO
 * ──────────────
 * 1. Drop the .mp4 into images/playlist/
 * 2. Add a new <li> in index.html with:
 *      data-src        — path to the .mp4
 *      data-title      — English fallback title (shown before JS loads)
 *      data-title-key  — key in the translations object (both en + ar)
 * 3. Add matching translation keys to both en:{} and ar:{} in script.js
 * ─────────────────────────────────────────────────────────────────────────────
 */

(function () {
    'use strict';

    // ── Element references ────────────────────────────────────────────────────
    var mainPlayer   = document.getElementById('vp-main');
    var playlistEl   = document.getElementById('vp-playlist');
    var currentTitle = document.getElementById('vp-current-title');
    var wrapEl       = playlistEl ? playlistEl.closest('.vp-playlist-wrap') : null;
    var btnPrev      = wrapEl ? wrapEl.querySelector('.vp-nav--prev') : null;
    var btnNext      = wrapEl ? wrapEl.querySelector('.vp-nav--next') : null;

    // Guard: bail early if the section isn't on this page.
    if (!mainPlayer || !playlistEl) return;

    // ── Collect all playlist items ────────────────────────────────────────────
    var items = Array.from(playlistEl.querySelectorAll('.vp-playlist__item'));
    if (items.length === 0) return;

    // ── Translation helper ────────────────────────────────────────────────────
    /**
     * Returns the translated title for a playlist item.
     * Falls back to data-title (the plain English string) if the key or the
     * translations object isn't available.
     *
     * @param {HTMLLIElement} item
     * @returns {string}
     */
    function getTitle(item) {
        var key  = item.dataset.titleKey || '';
        var lang = document.documentElement.lang || 'en';

        // `translations` is the global object declared in script.js.
        // Guard in case script.js hasn't loaded yet or this file is used standalone.
        if (key && typeof translations !== 'undefined') {
            var langObj = translations[lang] || translations['en'];
            if (langObj && langObj[key]) {
                return langObj[key];
            }
        }

        // Fallback: use the plain data-title attribute.
        return item.dataset.title || '';
    }

    // ── Build each thumbnail card ─────────────────────────────────────────────
    items.forEach(function (item, index) {
        var src    = item.dataset.src    || '';
        var poster = item.dataset.poster || '';
        var title  = getTitle(item) || ('Video ' + (index + 1));

        // ── Build the inner button skeleton ───────────────────────────────────
        item.innerHTML =
            '<button class="vp-thumb" type="button" aria-label="Play: ' + title + '">' +
                '<div class="vp-thumb__img-wrap">' +
                    '<svg class="vp-thumb__play" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
                        '<path d="M8 5v14l11-7z"/>' +
                    '</svg>' +
                '</div>' +
                '<span class="vp-thumb__title">' + title + '</span>' +
            '</button>';

        var imgWrap = item.querySelector('.vp-thumb__img-wrap');

        if (poster) {
            // ── Option A: poster image supplied — use it directly ─────────────
            var img = document.createElement('img');
            img.className = 'vp-thumb__img';
            img.src = poster;
            img.alt = '';
            img.loading = 'lazy';
            imgWrap.prepend(img);

        } else if (src) {
            // ── Option B: no poster — embed a real <video> thumbnail ──────────
            //
            // preload="metadata" only downloads headers, not the full video.
            // Seeking to 1 s after loadedmetadata renders a real first frame.
            var thumbVid = document.createElement('video');
            thumbVid.className   = 'vp-thumb__video';
            thumbVid.src         = src;
            thumbVid.muted       = true;
            thumbVid.preload     = 'metadata';
            thumbVid.playsInline = true;
            thumbVid.disablePictureInPicture = true;
            thumbVid.tabIndex    = -1;
            thumbVid.setAttribute('aria-hidden', 'true');

            thumbVid.addEventListener('loadedmetadata', function () {
                // Seek to 1 s (or 10% of duration if shorter) for a real frame.
                thumbVid.currentTime = Math.min(1, thumbVid.duration * 0.1);
            }, { once: true });

            imgWrap.prepend(thumbVid);
        }

        // ── Interaction ───────────────────────────────────────────────────────
        var btn = item.querySelector('.vp-thumb');

        btn.addEventListener('click', function () {
            playVideo(item);
        });

        btn.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                playVideo(item);
            }
        });
    });
 function centerThumb(item) {
    var listRect = playlistEl.getBoundingClientRect();
    var itemRect = item.getBoundingClientRect();
    var delta = (itemRect.left + itemRect.width / 2) - (listRect.left + listRect.width / 2);
    playlistEl.scrollTo({ left: playlistEl.scrollLeft + delta, behavior: 'smooth' });
}
    // ── Auto-load the first video on page load ────────────────────────────────
    playVideo(items[0]);

    // ── Load a video into the main player ────────────────────────────────────
    /**
     * Swaps the main player source, starts playback, and highlights the
     * active thumbnail in the strip.
     *
     * @param {HTMLLIElement} item
     */
    function playVideo(item) {
        var src   = item.dataset.src || '';
        var title = getTitle(item);

        if (!src) return;

        mainPlayer.pause();
        mainPlayer.src = src;
        mainPlayer.load();
        mainPlayer.play().catch(function () {
            // Autoplay blocked — user will press play manually.
        });

        if (currentTitle) currentTitle.textContent = title;

        items.forEach(function (el) { el.classList.remove('is-active'); });
        item.classList.add('is-active');

        centerThumb(item);
    }

    // ── Auto-advance to the next video when the current one ends ─────────────
    mainPlayer.addEventListener('ended', function () {
        var activeIndex = items.findIndex(function (el) {
            return el.classList.contains('is-active');
        });
        var nextIndex = activeIndex + 1;
        if (nextIndex < items.length) {
            playVideo(items[nextIndex]);
        }
    });

    // ── Re-translate all titles when the language changes ────────────────────
    //
    // script.js fires a custom 'languagechange' event on <html> after updating
    // all [data-i18n] elements. We listen for that here to keep the playlist
    // titles in sync without needing to reload the page.
    //
    // If the site's script uses a different mechanism, you can also trigger
    // this manually: document.dispatchEvent(new Event('vp:retranslate'));
    function retranslate() {
        items.forEach(function (item) {
            var title = getTitle(item);

            // Update the thumbnail label in the strip.
            var titleEl = item.querySelector('.vp-thumb__title');
            if (titleEl) titleEl.textContent = title;

            // Update the aria-label on the button.
            var btn = item.querySelector('.vp-thumb');
            if (btn) btn.setAttribute('aria-label', 'Play: ' + title);

            // If this item is currently active, update the main player caption.
            if (item.classList.contains('is-active') && currentTitle) {
                currentTitle.textContent = title;
            }
        });
    }

    // Listen for the site's own language-change event on <html>.
    // script.js fires this after calling setLanguage().
    document.documentElement.addEventListener('languagechange', retranslate);

    // Also listen on document for a simpler custom event fallback.
    document.addEventListener('vp:retranslate', retranslate);

    // ── Prev / Next scroll buttons ────────────────────────────────────────────
    var SCROLL_STEP = 300;

    if (btnPrev && btnNext) {
        btnPrev.removeAttribute('hidden');
        btnNext.removeAttribute('hidden');

        btnPrev.addEventListener('click', function () {
            playlistEl.scrollBy({ left: -SCROLL_STEP, behavior: 'smooth' });
        });

        btnNext.addEventListener('click', function () {
            playlistEl.scrollBy({ left: SCROLL_STEP, behavior: 'smooth' });
        });

        function updateNavButtons() {
            var scrollLeft = playlistEl.scrollLeft;
            var maxScroll  = playlistEl.scrollWidth - playlistEl.clientWidth;
            btnPrev.disabled = scrollLeft <= 0;
            btnNext.disabled = scrollLeft >= maxScroll - 1;
        }

        playlistEl.addEventListener('scroll', updateNavButtons, { passive: true });
        updateNavButtons();
    }

    // ── Keyboard left / right arrow scrolling ─────────────────────────────────
    playlistEl.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft')  playlistEl.scrollBy({ left: -SCROLL_STEP, behavior: 'smooth' });
        if (e.key === 'ArrowRight') playlistEl.scrollBy({ left:  SCROLL_STEP, behavior: 'smooth' });
    });

})();
