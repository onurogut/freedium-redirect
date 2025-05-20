chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  if (details.url.includes('medium.com')) {
    const freediumUrl = details.url.replace('medium.com', 'freedium.cfd');
    chrome.tabs.update(details.tabId, { url: freediumUrl });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'redirect' && message.url) {
    const freediumUrl = `https://freedium.cfd/${message.url}`;
    chrome.tabs.update(sender.tab.id, { url: freediumUrl });
  }
}); 