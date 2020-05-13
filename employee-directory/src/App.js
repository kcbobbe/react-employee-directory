import React from 'react';
import Table from "./components/Table"
import Jumbo from "./components/Jumbo"
import './App.css';
// import employees from "./employees.json"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: []
    }
    console.log("constructed")
  }


  componentDidMount(){
    console.log("mounted")
    fetch("https://alper.dev/employees")
      .then(response => {
        return response.json()
      })
      .then(res => {
        // console.log(employees)
        this.setState({employees: res })
      })
    }

render() {
  console.log("rendered")
  // console.log('state', this.state.employees[0])
  if(!this.state.employees[0]) {
    return (
      <>
        <Jumbo />
        <h3>Loading...</h3>
      </>
    )
  }else {
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
}
export default App;
