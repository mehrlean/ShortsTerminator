document.getElementById('hideShortsBtn').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'hideShorts' });
  chrome.storage.sync.set({ shortsHidden: true });
});

document.getElementById('showShortsBtn').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'showShorts' });
  chrome.storage.sync.set({ shortsHidden: false });
});
