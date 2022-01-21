import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import './Table1.css'

class EmployeeList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            employees:[]
             
        }
       
    }
    
    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees:res.data});
        });
    }


 
   render(){
       return(
           <div>
               <h2 className="text-center">Employee List</h2>
               <div className="row">
               
                   <table className="table table-striped table-bordered" id="emp-table">
                       <thead>
                           <tr>
                              
                               <th>User Name</th>
                               <th>First Name</th>
                               <th>Last Name</th>
                               <th>Mobile Number</th>
                               <th>Email Id</th>
                               <th> Date of Birth</th>
                               <th>Location </th>
                               <th>Department</th>
                               <th>Job Title</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.employees.map(
                                   employee =>
                                   <tr key= {employee.id}>
                                       <td>{employee.userName}</td>
                                       <td>{employee.firstName}</td>
                                       <td>{employee.lastName}</td>
                                       <td>{employee.mobileNumber}</td>
                                       <td>{employee.emailId}</td>
                                       <td>{employee.dateOfBirth}</td>
                                       <td>{employee.location}</td>
                                       <td>{employee.department}</td>
                                        <td>{employee.jobTitle}</td>
                                    </tr>      
                                   
                               )
                           }
                       </tbody>
                   </table><br/><br/>
                   <div className="col-12">
                   <ReactHTMLTableToExcel className="btn btn-info mx-auto d-block"  table="emp-table" filename="Emp Excel file" sheet="Sheet"  buttonText="Export to Excel"/>
                   <br/>
                   <br/>
                   </div>
               </div>
           </div>

       )
   }
}
    export default EmployeeList