console.log("Hello World!", browser);

var type = "";

document.getElementById("add-filter-btn").addEventListener("click", () => {
    console.log("Added filter");
    type = "add";
    browser.tabs.query({
        currentWindow: true,
        active: true
    }).then(sendMessageToTabs).catch(err=>console.log(err));
});

document.getElementById("remove-filter-btn").addEventListener("click", () => {
    console.log("Removed filter");
    type = "remove";
    browser.tabs.query({
        currentWindow: true,
        active: true
    }).then(sendMessageToTabs).catch(err=>console.log(err));
});

function sendMessageToTabs(tabs) {
  for (let tab of tabs) {
    browser.tabs.sendMessage(
      tab.id,
      {greeting: type}
    ).then(response => {
      console.log("Message from the content script:");
      console.log(response);
    }).catch(err=>console.log(err));
  }
}
