if (
  document.title.includes('Medium') &&
  Array.from(document.scripts).some(script => script.src.includes('cdn-client.medium.com'))
) {
  chrome.runtime.sendMessage({ action: 'redirect', url: window.location.href });
} 