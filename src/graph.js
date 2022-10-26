// https://developer.chrome.com/docs/extensions/reference/storage/
// User data can be automatically synced with Chrome sync (using storage.sync)

export class graph{
    #storageKey = 'snatch-it';

    serializeGraph() {
        chrome.storage.sync.set({key: this.#storageKey}, "cool");
    }

    deserializeGraph() {
        return chrome.storage.get([this.#storageKey]);
    }
}

