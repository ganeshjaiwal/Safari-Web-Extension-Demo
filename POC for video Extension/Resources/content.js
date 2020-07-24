browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
    if(request.greeting === "add") {
        document.getElementsByTagName("video")[0].style.filter = "blur(1px) grayscale(100%)";
    }
    if(request.greeting === "remove") {
        document.getElementsByTagName("video")[0].style.filter = "unset";
    }
});
