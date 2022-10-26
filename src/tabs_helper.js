
export function populateTabs(tabs, template){
    let elements = new Set();

    for (const tab of tabs) {
        const element = template.content.firstElementChild.cloneNode(true);
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
    return elements;
}