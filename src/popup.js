import { makeTabs } from "./tabs_helper.js"
import {graph} from "./graph";

const allTabs = await chrome.tabs.query({ });
let tabs = makeTabs(allTabs);

graph.serializeGraph();

console.log(graph.deserializeGraph());