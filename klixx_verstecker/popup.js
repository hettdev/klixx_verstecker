// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/* function click(e) {
  chrome.tabs.executeScript(null,
      {code:".view-count.style-scope.yt-view-count-renderer='" + e.target.id + "'"});
  window.close();
} */



function click(e){
  console.log("click " + e.target.id);
  if(e.target.id == "hide"){  // show clicks
    chrome.tabs.insertCSS(null, 
      {code:".view-count.style-scope.yt-view-count-renderer { color: white; }" });
  }
  else{                     // hide clicks    
    chrome.tabs.insertCSS(null, 
      {code:".view-count.style-scope.yt-view-count-renderer { color: var(--yt-metadata-color); }" });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
