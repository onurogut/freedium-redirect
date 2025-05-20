if (
  document.title.includes('Medium') &&
  Array.from(document.scripts).some(script => script.src.includes('cdn-client.medium.com'))
) {
  chrome.runtime.sendMessage({ action: 'redirect', url: window.location.href });
}

function isMediumPage() {
  return (
    location.hostname.endsWith('medium.com') ||
    document.querySelector('meta[content*="Medium"]')
  );
}

function addFreediumButtonIfNeeded() {
  // Find the <div> with the exact text 'Create an account to read the full story.'
  const divs = Array.from(document.querySelectorAll('div'));
  const targetDiv = divs.find(div =>
    div.textContent.replace(/\s+/g, ' ').trim() === 'Create an account to read the full story.'
  );

  // Find the <h2> with the exact text 'Become a member to read this story, and all of Medium.'
  const h2s = Array.from(document.querySelectorAll('h2'));
  const targetH2 = h2s.find(h2 =>
    h2.textContent.replace(/\s+/g, ' ').trim() === 'Become a member to read this story, and all of Medium.'
  );

  if (isMediumPage() && !document.getElementById('freedium-btn')) {
    if (targetDiv) {
      const btn = document.createElement('button');
      btn.id = 'freedium-btn';
      btn.textContent = 'Read it via Freedium';
      btn.style.marginTop = '16px';
      btn.style.padding = '10px 20px';
      btn.style.background = '#02b875';
      btn.style.color = 'white';
      btn.style.border = 'none';
      btn.style.borderRadius = '4px';
      btn.style.fontSize = '16px';
      btn.style.cursor = 'pointer';
      btn.onclick = () => {
        window.open('https://freedium.cfd/' + window.location.href, '_blank');
      };
      targetDiv.parentNode.insertBefore(btn, targetDiv.nextSibling);
    } else if (targetH2) {
      const btn = document.createElement('button');
      btn.id = 'freedium-btn';
      btn.textContent = 'Read it via Freedium';
      btn.style.marginTop = '16px';
      btn.style.padding = '10px 20px';
      btn.style.background = '#02b875';
      btn.style.color = 'white';
      btn.style.border = 'none';
      btn.style.borderRadius = '4px';
      btn.style.fontSize = '16px';
      btn.style.cursor = 'pointer';
      btn.onclick = () => {
        window.open('https://freedium.cfd/' + window.location.href, '_blank');
      };
      targetH2.parentNode.insertBefore(btn, targetH2.nextSibling);
    }
  }
}

// Run on load and on DOM changes (in case content loads dynamically)
addFreediumButtonIfNeeded();
const observer = new MutationObserver(addFreediumButtonIfNeeded);
observer.observe(document.body, { childList: true, subtree: true }); 