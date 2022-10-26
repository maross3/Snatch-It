// https://developer.chrome.com/docs/extensions/reference/storage/
// User data can be automatically synced with Chrome sync (using storage.sync)

export class graph {
    #storageKey = 'snatch-it';

    serializeGraph() {
        let value = {testing: "testing"}
        chrome.storage.sync.set({snatch: value}, function() {
            console.log(value);
        });
    }

    deserializeGraph() {
        return chrome.storage.sync.get(['snatch']);
    }
}

