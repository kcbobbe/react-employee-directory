import React from "react";
import Employee from "./Employee"

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: this.props.employees,
    }
}

  sortEmployees(param, direction){
    let newEmployeeArray = this.state.employees
    if (direction === "up"){
      newEmployeeArray.sort((a, b) => (a[param] > b[param]) ? 1 : -1)
    } else (
      newEmployeeArray.sort((a, b) => (a[param] < b[param]) ? 1 : -1)
    )

  this.setState({
     employees: newEmployeeArray
    })
  }
  render() {
    console.log(this.state.employees)
    const buttonStyles = {
      fontSize: ".5em",
      border: "none",
      padding: ".2em",
    };
    return(
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              #
              <button className="btn btn-sm btn-outline-secondary m-1" style={buttonStyles} onClick={() => this.sortEmployees("id", "up")}>
                <i className="fa fa-arrow-up"></i>
              </button>
              <button className="btn btn-sm btn-outline-secondary m-1" style={buttonStyles} onClick={() => this.sortEmployees("id", "down")}>
                <i className="fa fa-arrow-down"></i>
              </button>
              </th>
            <th scope="col">
              Name
              <button className="btn btn-sm btn-outline-secondary m-1" style={buttonStyles} onClick={() => this.sortEmployees("lastName", "up")}>
                <i className="fa fa-arrow-up"></i>
              </button>
              <button className="btn btn-sm btn-outline-secondary m-1" style={buttonStyles} onClick={() => this.sortEmployees("lastName", "down")} >
                <i className="fa fa-arrow-down"></i>
              </button>
            </th>
            <th scope="col">
            <span>Department</span>
              <button className="btn btn-sm btn-outline-secondary m-1" style={buttonStyles} onClick={() => this.sortEmployees("department", "up")} >
                <i className="fa fa-arrow-up"></i>
              </button>
              <button className="btn btn-sm btn-outline-secondary m-1" style={buttonStyles} onClick={() => this.sortEmployees("department", "down")}>
                <i className="fa fa-arrow-down"></i>
              </button>
            </th>
            <th>
              Address
            </th>
          </tr>
        </thead>
        {this.state.employees.map(employee => (
          <Employee key={employee.id} employee={employee}/>
        ))}
        </table>

    )
  }
}

export default Table