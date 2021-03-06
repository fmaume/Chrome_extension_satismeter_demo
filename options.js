// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

    let button = document.createElement('button');
    button.style.backgroundColor = '#3aa757';
    button.addEventListener('click', function() {
      chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log('color is ' + '#3aa757');
      })
    });
    page.appendChild(button);
  
constructOptions(kButtonColors);
