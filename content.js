let hiddenElements = [];
function removeElementsWithShorts() {
  console.log('Hiding elements with "/shorts/"');
  const anchors = document.getElementsByTagName('a');
  const anchorArray = Array.from(anchors);
  anchorArray.forEach((anchor) => {
    const href = anchor.getAttribute('href');
    if (href && href.includes('/shorts/')) {
      const grandparent = anchor.parentElement.parentElement.parentElement;
      grandparent.style.display = 'none';
      hiddenElements.push(grandparent);
    }
  });
}

function restoreHiddenElements() {
  console.log('Showing elements with "/shorts/"');
  hiddenElements.forEach((element) => {
    element.style.display = '';
  });
  hiddenElements = [];
}

// Check if the current URL is a YouTube domain

function init() {
    chrome.storage.sync.get('shortsHidden', (data) => {
      if (data.shortsHidden) {
        removeElementsWithShorts();
      }
    });
}

// Wait for DOMContentLoaded event before calling init()
document.addEventListener('DOMContentLoaded', init);


// Automatically hide shorts elements on page load if on YouTube


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  
    if (request.action === 'hideShorts') {
      removeElementsWithShorts();
    } else if (request.action === 'showShorts') {
      restoreHiddenElements();
    

  }

});
