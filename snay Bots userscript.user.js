// ==UserScript==
// @name         Shazam's Snay.io script
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  A script that updates automatically, to bring you cool features for Snay.io.
// @author       Shazam
// @match        https://www.snay.io/*
// @icon         https://yt3.googleusercontent.com/TNVorEJ9iTsESmUbcZXizwaZgy5jB-Ihx3z9qxfuuatrFRDhJHotz5x_X7mGIu38VBsr5bvlkg=s176-c-k-c0x00ffffff-no-rj
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    fetch('https://raw.githubusercontent.com/ShazamHax/Snay-bots/main/ScriptCode.js')
  .then(response => response.text())
  .then(text => {
 
        eval(text);
  })
  .catch(error => {
    console.error('Error:', error);
  });


})();
