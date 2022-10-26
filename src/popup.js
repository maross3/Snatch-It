import { Graph } from "./graph.js";
import { makeTabs } from "./tabs_helper.js"

// todo export JSON obj to cookies, parse and include here
// get all active and inactive tabs
const allTabs = await chrome.tabs.query({ });
makeTabs(allTabs);


