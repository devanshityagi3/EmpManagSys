import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import {AiOutlineUserAdd} from "react-icons/ai"

export default class ListEmployeeComponent extends Component {
    
  constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee= this.addEmployee.bind(this);
    }

    addEmployee(){
      this.props.history.push('/add-employee'); //react router provides history object
    }

    componentDidMount(){
      EmployeeService.getEmployees().then((res)=> { // promises represents a value (or eventual value) that may be available now, in the future, or never.
        this.setState({employees: res.data}); //we have successfully stored response data in employees array
      })
    }
    //In summary, this code is using the componentDidMount() method to fetch a list of employees from an API using a service (EmployeeService). The fetched data is then used to update the component's state, likely triggering a re-render of the component with the new employee data displayed in the UI. The Promise returned by the API call is leveraged to ensure that the component's state is updated once the data is available, and it handles the asynchronous nature of the API request.

    render() {
    return (
      <div>
        <h2 className='text-center font-extrabold mt-10 text-3xl'>Employees List</h2>
        <div className=''>
          <button className='rounded' onClick={this.addEmployee}>Add
            <AiOutlineUserAdd />
          </button>
        </div>
        <div className='mt-10 flex justify-center'>
          <table className='drop-shadow-lg'>
            <thead>
              <tr>
                <th className='border-4 border-blue-200 p-6 '>Employee Firstname</th>
                <th className='border-4 border-blue-200 p-6'>Employee Lastname</th>
                <th className='border-4 border-blue-200 p-6'>Employee Email Id</th>
                <th className='border-4 border-blue-200 p-6'>Actions</th>
                </tr>
            </thead>
            <tbody>
              {
                this.state.employees.map(
                  employee => 
                  <tr key={employee.id}>
                      <td className='border-4 text-center border-blue-200 p-2' >{employee.firstname}</td>
                      <td className='border-4 text-center border-blue-200 p-2' >{employee.lastname}</td>
                      <td className='border-4 text-center border-blue-200 p-2' >{employee.emailId}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
