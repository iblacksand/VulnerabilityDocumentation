// ==UserScript==
// @name         Padlock Data Clearer (All Browsers) Classic
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

// MUST USE GREASE MONKEY FOR FIREFOX

(function () {
    'use strict';


    //if title is padlock
    if (document.title.toLowerCase().indexOf("padlock") === -1) return;

    //if sheets contain dashboard
    var close = true;
    var sheets = document.styleSheets;
    for (var x = 0, len = sheets.length; x < len; x++) {
        if (sheets[x].href && sheets[x].href.toLowerCase().indexOf("dashboard") !== -1) {
            close = false;
        }
    }
    if (close) return;

    // if pairing a device
    var parameters = location.search.substring(1).split("&");
    if (parameters.length === 0) return;
    var name = unescape(parameters[0].split("=")[0]).toLowerCase();
    if (name == "paired") return;


    // Clicking reset data link
    var els = document.querySelectorAll("a[href='.?action=resetdata']");//gets the link to reset data
    for (var i = 0, _len = els.length; i < _len; i++) {
        var el = els[i];
        el.click(); // clicks the link to reset
    }


    // Clicking buttons
    setTimeout(function () {
        var buttons = document.getElementsByTagName('button');//gets all buttons on page
        for (var j = 0; j < buttons.length; j++) {// Loop through all buttons
            if (typeof buttons[j].click === "function") {//checks to see if button.click is a function
                buttons[j].click();// clicks the button
            }
        }
    }, 1); // Times out to allow webpage to show buttons after clicking link

})();