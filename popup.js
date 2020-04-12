// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function (element) {

    let satismeter_code = ' (function() { window.satismeter = window.satismeter || function() {(window.satismeter.q = window.satismeter.q || []).push(arguments);};window.satismeter.l = 1 * new Date();var script = document.createElement("script");var parent = document.getElementsByTagName("script")[0].parentNode;script.async = 1;script.src = "https://app.satismeter.com/satismeter.js";parent.appendChild(script);})();'

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        { code: satismeter_code});
  });
};


displaySurvey.onclick = function (element) {

    let satismeter_code2 = ' satismeter({    writeKey: "Xk9JSLX2BNG9CiNt"}); console.log("test");'
    //let satismeter_code2 =  'console.log("test")'

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: satismeter_code2 });
    });
};


inject_script.onclick = function (element) {


    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript({
            file: 'satismeter_script.js'
        });
    });
};


/*
const createArgumentsQueue = require('createArgumentsQueue');
const injectScript = require('injectScript');
const setInWindow = require('setInWindow');
const getTimestamp = require('getTimestamp');

const satismeter = createArgumentsQueue('satismeter', 'satismeter.q');
setInWindow('satismeter.l', getTimestamp(), false);

const url = 'https://app.satismeter.com/satismeter.js';
injectScript(url, data.gtmOnSuccess, data.gtmOnFailure, url);

satismeter({ writeKey: "Xk9JSLX2BNG9CiNt" });*/