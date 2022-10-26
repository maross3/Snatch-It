// https://developer.chrome.com/docs/extensions/reference/storage/
// User data can be automatically synced with Chrome sync (using storage.sync)

export const graphNode = {
    index: null,
    previous: null,
    children: {},
    data: null,
}

export class graph {
    #storageKey = 'snatch-it';

    #tabGraph = {
        index: 'root',
        children: {},
        add: function (node) {
            if (!this.children[node]){
                node.previous = this;
                this.children.push(node);
                return true;
            }
            else {
                for (const child in this.children) {
                    if (child.add(node)) return true;
                }
                return false;
            }
        },
        eject: function (node) {
            if (this.children[node]) {
                if(this.children[node].children){
                    for (const child in this.children) {
                        child.previous = this.children[node].previous;
                    }
                }
                this.children.filter(toRemoveNode => toRemoveNode != node);
                return true;
            }
            else {
                for (const child in this.children) {
                    if(child.eject(node)) return true;
                }
                return false;
            }
        }
    }

    add(node) {
        graph.#tabGraph.add(node);
    }

    eject(node) {
        graph.#tabGraph.eject(node);
    }





    serializeGraph() {
        let value = this.#tabGraph;
        chrome.storage.sync.set({snatch: value}, function() {
            console.log(value);
        });
    }

    deserializeGraph() {
        return chrome.storage.sync.get(['snatch']);
    }
}

