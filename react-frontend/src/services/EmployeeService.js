import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

//rest-client code
class EmployeeService {
    
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL); //here we are simply returning a response of get method 
    } 
}

// eslint-disable-next-line
export default new EmployeeService() //we are going to export object of this class so that we can directly
                                     //  use object of this class