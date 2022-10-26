import { Graph } from "./graph.js";
import { populateTabs } from "./tabs_helper.js"

// todo export JSON obj to cookies, parse and include here
// get all active and inactive tabs
const tabs = await chrome.tabs.query({
  active: false
});
make_tabs(tabs);

const tabs2 = await chrome.tabs.query({
  active: false
});
make_tabs(tabs2)

// translation friendly sorting, noice
const collator = new Intl.Collator();
tabs.sort((a, b) => collator.compare(a.title, b.title));

const template = document.getElementById("li_template");
const elements = populateTabs(tabs, template);

document.querySelector("ul").append(...elements);

const button = document.querySelector("button");

button.addEventListener("click", async () => {
  const tabIds = tabs.map(({ id }) => id);
  const group = await chrome.tabs.group({ tabIds });
  await chrome.tabGroups.update(group, { title: "DOCS" });
});
