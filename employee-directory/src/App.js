import React from 'react';
import Employee from "./components/Employee"
import Table from "./components/Table"
import './App.css';
import employees from "./employees.json"

class App extends React.Component {
  state = {
    employees: employees
  }


// sortEmployees = () => {
//   let newEmployeeArray = this.state.employees.sort 
//   this.setState({
//     employees : newEmployeeArray
//   })
// }

render() {
  return (
    <>
      <Table employees={this.state.employees} />
    </>
  )
}
}
export default App;
