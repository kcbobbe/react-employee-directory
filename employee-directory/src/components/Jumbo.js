import React from "react";

class Jumbo extends React.Component {
  render() {
    return(
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Employee Directory</h1>
          <p className="lead">Click the arrows to sort by ID, last name, or department. Click on a department to filter by department. Click on the 'view all' button to view all departments.</p>
        </div>
      </div>
    )
  }
}

export default Jumbo

