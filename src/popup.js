import {makeTabs} from "./tabs_helper.js"
import {graph, graphNode} from "./graph.js";

const allTabs = await chrome.tabs.query({ });
let tabs = makeTabs(allTabs);

let curGraph = new graph;
console.log(tabs.values());

// todo iterate these and add to graph
// for loop does not run currently
for (let tab in tabs.values()) {
    let tmp = JSON.parse(JSON.stringify(graphNode));
    tmp.data = tab;
    curGraph.add(tmp);
}

curGraph.serializeGraph();
let result = await curGraph.deserializeGraph();
console.log(result);