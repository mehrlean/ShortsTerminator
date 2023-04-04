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

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  removeElementsWithShorts();
  if (request.action === 'hideShorts') {
    removeElementsWithShorts();
  } else if (request.action === 'showShorts') {
    restoreHiddenElements();
  }
});