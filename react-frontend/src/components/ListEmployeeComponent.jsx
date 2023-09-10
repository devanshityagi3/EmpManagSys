import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
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
        <div className='mt-10'>
          <table className='flex justify-center drop-shadow-lg'>
            <thead>
              <tr>
                <th className='border-4 border-slate-200 p-6 '>Employee Firstname</th>
                <th className='border-4 border-slate-200 p-6'>Employee Lastname</th>
                <th className='border-4 border-slate-200 p-6'>Employee Email Id</th>
                <th className='border-4 border-slate-200 p-6'>Actions</th>
                </tr>
            </thead>
            <tbody>
              {
                this.state.employees.map(
                  employee => 
                  <tr key={employee.id}>
                      <td>{employee.firstname}</td>
                      <td>{employee.lastname}</td>
                      <td>{employee.emailid}</td>
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
