import React from "react";
import Employee from "./Employee"

class Table extends React.Component {
  state = {
    employees: this.props.employees
  }
  render() {
    return(
      <table class="table">
        <thead>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Department</th>
          <th scope="col">Address</th>
        </thead>
        {this.state.employees.map(employee => (
          <Employee key={employee.id} employee={employee}/>
        ))}
        </table>

    )
  }
}

export default Table