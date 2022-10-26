# TODO 

## Populate Graph
### graph.js:
1. make a graph
2. add tabs to the graph
3. add an interface to populate child nodes

## Export JSON obj to cookies, parse and include here
### serializer.js
  * add a button to pop-up
  * serializer creates JSON object of the graph on click
  * save json in user prefs/cookies or something

## View-ports
### popup.js:
  pad-all for both viewports
    view-port 1 = hierarchy
      text representation of graph.js
      1/3 size of pop-up
      on left
      selecting tabs on click
        toggling highlight when clicked
        info appears on right view port (comments, date added, ect.)
      when a collection node is clicked (ex. A and B from above)
        display all nodes in collection in viewport 2

    view-port 2 = sandbox
      2/3 size of popup
      on right
      drag and drop boxes
      when fed from viewport 1, displays content

  MVC:
  graph.js == model.
  view_ports.js == view.
  popup.js == controller

  when user clicks the popup, popup.js updates graph.js
  When the graph.js finishes work, graph.js updates view_ports.js

  graph will eventually be replaced by a model
  keeping it simple to start, graph == model currently.