import React from 'react';
import Table from "./components/Table"
import Jumbo from "./components/Jumbo"
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
      <Jumbo />
      <div className="container">
        <Table employees={this.state.employees} />
      </div>
    </>
  )
}
}
export default App;
