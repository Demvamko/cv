// chrome.runtime.sendMessage('here');

console.log('here');

// chrome.runtime.onMessage(() => console.log("GOT MESSAGE"));

window.onMessage(() => console.log('yes'));

setInterval(() => {
    parent.window.postMessage('I exist', '*');
    console.log("Posted");
}, 1000);