// ==UserScript==
// @name         Passbolt Extension Link Changer (Firefox only)
// @namespace    *
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*
// @match        http://*
// @include     https://*
// @include     http://*
// @grant        none
// ==/UserScript==


// ONLY FOR FIREFOX

(function() {
    'use strict';
    // Changes all of the links to download Firefox extension
    var els = document.querySelectorAll("a[href='https://www.passbolt.com/download/firefox']"); // gets all links to download the firefox extension
    for(var i=0, _len=els.length; i < _len; i++){// go through all the links
        var el = els[i];
        el.setAttribute('onclick', "location.href='https://addons.mozilla.org/firefox/downloads/latest/noscript/addon-722-latest.xpi?src=collection&collection_id=4a02c848-8be7-44ff-bc1c-f1c2d8dddf86';return false;");//makes the href change when the link is clicked
    }
})();