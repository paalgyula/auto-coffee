// the selector should be in document loaded listener
document.addEventListener("DOMContentLoaded", function(event) {
    const setEnabled = () => {
        var checkBox = document.getElementById("ac-checkbox");
        console.log("checkbox selected: ", checkBox.checked);
        chrome.storage.local.set({ enabled: checkBox.checked });
    }
    
    document.getElementById("ac-checkbox").addEventListener("click", setEnabled);
    chrome.storage.local.get('enabled', data => {
        document.getElementById("ac-checkbox").checked = !!data.enabled
    });
});