import React from "react";

class Jumbo extends React.Component {
  render() {
    return(
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Employee Directory</h1>
          <p class="lead">Click the arrows to sort by ID, last name, or department.</p>
        </div>
      </div>
    )
  }
}

export default Jumbo

