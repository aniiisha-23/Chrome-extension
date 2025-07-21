document.getElementById('getTitleBtn').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const title = tabs[0].title;
    document.getElementById('title').textContent = title;
  });
});
