// https://developer.chrome.com/docs/extensions/reference/storage/
// User data can be automatically synced with Chrome sync (using storage.sync)

export class graph {
    #storageKey = 'snatch-it';

    serializeGraph() {
        let value = 'snatch-it';
        chrome.storage.sync.set({key: value}, function() {
            console.log('Value is set to ' + value);
        });

    }

    deserializeGraph() {
        return chrome.storage.sync.get(['snatch-it'], function(result) {
            return result.key;
        });
    }
}

