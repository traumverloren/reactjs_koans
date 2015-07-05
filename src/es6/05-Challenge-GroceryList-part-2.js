var React = require("react");

// We continue our journey with reactive grocery list. We implemented the previous
// task ourselves. You can see our example implementation.
//
// Task: You have to implement adding items to list. Create the implementation
//       of the `addGroceryItem` method. This method should modify the `GroceryList`
//       component's state and by that re-render this component.
//
//       You need to render an input and button in `GroceryList` (after the
//       groceries list). Users will use them as an input for new groceries.
//
//       We prepared two components for you. Please render the button and
//       input under your list and define the `onClick` handler for the button.
//
//       Hint: See `render` method body. Look for `newProductInput` and
//             `newProductAddButton` variables
//
//       Do you remember how we used `onChange` event in the third exercise?


class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        { name: "Apples" }
      ],
      newGroceryName: ""
    };

    this.addGroceryItem = this.addGroceryItem.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
  }

  // Warning: You shouldn't change this method
  inputChanged(event) {
    this.setState({newGroceryName: event.target.value});
  }

  // Fill the definition of the following method to allow adding new items to the list
  // Hint #1: You should use the `concat` function to modify groceries list.
  // Hint #2: Remember about the case where input is empty.
  // Hint #3: Name of the new grocery item will be stored in `this.state.newGroceryName`.
  addGroceryItem() {
    // Put your code here
  }

  render() {
    let groceriesComponents = [],
        newProductInput,
        newProductAddButton;

    for(var index = 0; index < this.state.groceries.length; index++) {
      groceriesComponents.push(
          React.createElement(GroceryListItem, {
            grocery: this.state.groceries[index]}
          )
      );
    }

    // Here are components for task #2.
    newProductInput = React.createElement("input", {className: "new-item", type: "text", onChange: this.inputChanged});
    // Something is missing here... Will anything happen if you click this button now?
    newProductAddButton = React.createElement("button", {className: "add-product"}, "Add new Product");

    return (
      React.createElement("div", null, 
        React.createElement("ul", null, 
          groceriesComponents
        )
      )
    );
  }
}

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (React.createElement("li", null, this.props.grocery.name));
  }
}

export default GroceryList;
