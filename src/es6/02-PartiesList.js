var React = require("react");

// We will work on creating dynamic list of parties nearby.
// Let's see how to render a list of items.
//
// TASK #1: Add another party (or parties) to the list.
// TASK #2: Change `ul` HTML attribute `class` to 'parties-list'.

class PartiesList extends React.Component {
  // We can nest DOM elements delivered by React just like HTML elements.
  // Doesn't this list look familiar to you?
  render() {
    return (
      React.createElement("ul", {className: "parties-list"}, 
        React.createElement("li", null, "Party at Aperture Laboratories"), 
        React.createElement("li", null, "Party at Your Mom's")

      )
    );
  }
  // Think about it: Why is that `className` attribute not called just `class`?
  // Hint: JSX isn't HTML.
}

export default PartiesList;
