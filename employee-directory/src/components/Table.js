import React from "react";
import Employee from "./Employee"

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: this.props.employees,
    }
}

  filterDepartments(department){
    let newEmployeeArray = this.props.employees.filter(employee => employee.department === department);
    this.setState({
      employees: newEmployeeArray
    })
  }

  allDepartments(){
    let allEmployees = this.props.employees
    this.setState({
      employees: allEmployees
    })
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
              <button className="btn btn-link m-1" style={buttonStyles} onClick={() => this.sortEmployees("id", "up")}>
                <i className="fa fa-arrow-up"></i>
              </button>
              <button className="btn btn-link m-1" style={buttonStyles} onClick={() => this.sortEmployees("id", "down")}>
                <i className="fa fa-arrow-down"></i>
              </button>
              </th>
            <th scope="col">
              Name
              <button className="btn btn-link m-1" style={buttonStyles} onClick={() => this.sortEmployees("lastName", "up")}>
                <i className="fa fa-arrow-up"></i>
              </button>
              <button className="btn btn-link m-1" style={buttonStyles} onClick={() => this.sortEmployees("lastName", "down")} >
                <i className="fa fa-arrow-down"></i>
              </button>
            </th>
            <th scope="col">
              Department
            <button className="btn btn-link" onClick={this.allDepartments.bind(this)}>View All</button>
              {/* <button className="btn btn-sm btn-outline-secondary m-1" style={buttonStyles} onClick={() => this.sortEmployees("department", "up")} >
                <i className="fa fa-arrow-up"></i>
              </button>
              <button className="btn btn-sm btn-outline-secondary m-1" style={buttonStyles} onClick={() => this.sortEmployees("department", "down")}> */}
                {/* <i className="fa fa-arrow-down"></i>
              </button> */}
            </th>
            <th>
              Address
            </th>
          </tr>
        </thead>
        {this.state.employees.map(employee => (
          <Employee key={employee.id} employee={employee} filterDepartments={this.filterDepartments.bind(this)}/>
        ))}
        </table>

    )
  }
}

export default Table