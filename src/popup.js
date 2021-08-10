const setEnabled = () => {
    var checkBox = document.getElementById("ac-checkbox");
    chrome.storage.local.set({ enabled: checkBox.checked });
}
