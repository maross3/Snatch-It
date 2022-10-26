import { Graph } from "./graph.js";

// todo export JSON obj to cookies, parse and include here
// get all active and inactive tabs
const tabs = await chrome.tabs.query({
  active: false
});

// translation friendly sorting, noice
const collator = new Intl.Collator();
tabs.sort((a, b) => collator.compare(a.title, b.title));

const template = document.getElementById("li_template");
const elements = new Set();

for (const tab of tabs) {
  const element = template.content.firstElementChild.cloneNode(true);
  console.log(tab);
  if(tab.title === undefined){
    continue;
  }
  const title = tab.title;
  const pathname = new URL(tab.url);

  element.querySelector(".title").textContent = title;
  element.querySelector(".pathname").textContent = pathname;
  element.querySelector("a").addEventListener("click", async () => {
    // need to focus window as well as the active tab
    await chrome.tabs.update(tab.id, { active: true });
    await chrome.windows.update(tab.windowId, { focused: true });
  });

  elements.add(element);
}

document.querySelector("ul").append(...elements);

const button = document.querySelector("button");

button.addEventListener("click", async () => {
  const tabIds = tabs.map(({ id }) => id);
  const group = await chrome.tabs.group({ tabIds });
  await chrome.tabGroups.update(group, { title: "DOCS" });
});
