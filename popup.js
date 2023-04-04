chrome.tabs.sendMessage(tab.id, { action: 'hideShorts' });

document.getElementById('hideBtn').addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  });
  
  document.getElementById('showBtn').addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.tabs.sendMessage(tab.id, { action: 'showShorts' });
  });
  
