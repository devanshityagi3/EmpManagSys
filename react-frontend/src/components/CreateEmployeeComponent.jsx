import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateEmployeeComponent = (props) => {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
    firstname: '',
    lastname: '',
    emailId: '',
  });

  const changeFirstNameHandler = (event) => {
    setEmployee({ ...employee, firstname: event.target.value });
  };

  const changeLastNameHandler = (event) => {
    setEmployee({ ...employee, lastname: event.target.value });
  };

  const changeEmailHandler = (event) => {
    setEmployee({ ...employee, emailId: event.target.value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    console.log('employee =>', employee);
  };

  const cancel = () => {
    navigate('/employee');
  };

    return (
    <div>
      <div className="container mx-auto">
        <div className="mt-20">
          <h3 className="text-center">Add Employee</h3>
          <div className="w-full max-w-md mx-auto">
            <form>
              <div className="mb-4">
                <label
                  for="firstName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                  value={employee.firstname}
                  onChange={changeFirstNameHandler}
                />
              </div>
              <div className="mb-4">
                <label
                  for="lastName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  onChange={changeLastNameHandler}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="mb-4">
                <label
                  for="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  onChange={changeEmailHandler}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  onClick={saveEmployee}
                >
                  Add
                </button>
              </div>
              <div className="mb-6">
                <button
                  type="button"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  onClick={cancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default CreateEmployeeComponent;