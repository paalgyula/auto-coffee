/**
 * Auto button
 */
console.log("Auto coffee script started!")
var enabled = false

setInterval(() => {
    chrome.storage.local.get('enabled', data => {
        enabled = !!data.enabled;
    });

    if (!enabled) {
        return
    }

    const btn = document.querySelector("body > div.grayed > div > div.row > div > div > section > div > div:nth-child(2) > div:nth-child(2) > div.col-md-8 > div > section > div.cards-block > ul > li:nth-child(10) > button")

    if (btn) {
        listItem = document.querySelector("body > div.grayed > div > div.row > div > div > section > div > div:nth-child(2) > div:nth-child(2) > div.col-md-8 > div > section > div.cards-block > ul > li")
        if (!listItem.classList.contains("active")) {
            btn.click()
            //console.log("clicking coffee")
        }
    } else {
        console.warn("button not found")
    }
}, 5000)