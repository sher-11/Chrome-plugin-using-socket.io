var checkIfButton = document.getElementById('send');
    checkIfButton.addEventListener('click', function() {
  
      chrome.tabs.getSelected(null, function(tab) {
       chrome.tabs.create({url: chrome.extension.getURL('nested_page.html')});
      });
    }, false);

