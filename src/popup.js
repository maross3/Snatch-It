import { makeTabs } from "./tabs_helper.js"
import { graph } from "./graph.js";

const allTabs = await chrome.tabs.query({ });
let tabs = makeTabs(allTabs);
let curGraph = new graph();

curGraph.serializeGraph();

let result = await curGraph.deserializeGraph();
console.log(result);