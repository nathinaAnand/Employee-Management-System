import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import './Table1.css'


class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            employees:[]
             
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees:res.data});
        });
    }
    
    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    
   render(){
       return(
           <div>
              <br/> <br/>
               <div className="row">
                   <button className="btn btn-primary rounded-circle" onClick={this.addEmployee}>Add Employee</button>
                </div>    
                 <br/>
                <div className="row">
                   <table className="table table-striped table-bordered">
                       <thead>
                           <tr>
                              
                               <th>User Name</th>
                               <th>First Name</th>
                               <th>Last Name</th>
                               <th>Mobile Number</th>
                               <th>Email Id</th>
                               <th>DateOfBirth</th>
                               <th>Location </th>
                               <th>Department</th>
                               <th>Job Title</th>
                               <th>Actions</th>
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

                                        <td>
                                        <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                        </td>
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

export default ListEmployeeComponent