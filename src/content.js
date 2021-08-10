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

    const btn = document.querySelector("div.cards-block > ul > li:nth-child(10) > button")

    if (btn) {
        listItem = document.querySelector("div.cards-block > ul > li")
        if (!listItem.classList.contains("active")) {
            console.debug("clicking coffee button")
            btn.click()
        } else {
            console.debug("coffee already selected skipping click")
        }
    } else {
        console.info("Coffee button not found! 😮")
    }
}, 5000)