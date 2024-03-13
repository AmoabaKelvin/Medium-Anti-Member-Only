
chrome.action.onClicked.addListener((tab) => {
  // get the current active tab and then redirect the link to freedium
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    var link = activeTab.url;
    
    chrome.tabs.create({
      url: `https://freedium.cfd/${link}`
    })
  });
})