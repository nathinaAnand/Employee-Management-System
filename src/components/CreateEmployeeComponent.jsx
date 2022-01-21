import React, { Component } from 'react';

import EmployeeService from '../services/EmployeeService';

class  CreateEmployeeComponent extends Component {
constructor(props) {
    super(props)

    this.state = {
      
        id:this.props.match.params.id,
        userName:'',
        firstName:'',
        lastName:'',
        mobileNumber:'',
        emailId:'',
        dateOfBirth:'',
        location:'',
        department:'',
        jobTitle:''
    }
   
    this.changeUserNameHandler=this.changeUserNameHandler.bind(this);
    this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
    this.changeMobileNumberHandler=this.changeMobileNumberHandler.bind(this);
    this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
    this.changeDateOfBirthHandler=this.changeDateOfBirthHandler.bind(this);
    this.changeLocationHandler=this.changeLocationHandler.bind(this);
    this.changeDepartmentHandler=this.changeDepartmentHandler.bind(this);
    this.changeJobTitleHandler=this.changeJobTitleHandler.bind(this);
    this.saveOrUpdateEmployee=this.saveOrUpdateEmployee.bind(this);

}

componentDidMount(){
    if(this.state.id ==='_add'){
        return
    }else{
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({
                userName:employee.userName,
                firstName: employee.firstName,
                lastName: employee.lastName,
                mobileNumber:employee.mobileNumber,
                emailId : employee.emailId,
                dateOfBirth:employee.dateOfBirth,
                location:employee.location,
                department:employee.department,
                jobTitle:employee.jobTitle
            });
        });
    }        
}

saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    let employee={userName:this.state.userName, firstName:this.state.firstName, lastName:this.state.lastName, mobileNumber:this.state.mobileNumber, emailId:this.state.emailId, dateOfBirth:this.state.dateOfBirth, location:this.state.location, department:this.state.department, jobTitle:this.state.jobTitle};
    console.log('employee => ' + JSON.stringify(employee));
     
    if(this.state.id === '_add'){
        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push('/employees');
        });
    }else{
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    }
}


  changeUserNameHandler= (event) =>{
      this.setState({userName:event.target.value});
  }

  changeFirstNameHandler= (event) =>{
    this.setState({firstName:event.target.value});
}

changeLastNameHandler= (event) =>{
    this.setState({lastName:event.target.value});
}

changeMobileNumberHandler= (event) =>{
    this.setState({mobileNumber:event.target.value});
}

changeEmailIdHandler= (event) =>{
    this.setState({emailId:event.target.value});
}

changeDateOfBirthHandler= (event) =>{
    this.setState({dateOfBirth:event.target.value});
}

changeLocationHandler= (event) =>{
    this.setState({location:event.target.value});
}

changeDepartmentHandler= (event) =>{
    this.setState({department:event.target.value});
}

changeJobTitleHandler= (event) =>{
    this.setState({jobTitle:event.target.value});
}

cancel(){
    this.props.history.push('/employees');
}

getTitle(){
    if(this.state.id === '_add'){
        return <h3 className="text-center">Add Employee</h3>
    }else{
        return <h3 className="text-center">Update Employee</h3>
    }
}

    render() {
        return (
            <div>
                <br/>
               <div className= "container">
                   <div className= "row">
                       <div className="card col-md-6 offset-md-3 offset-md-3">
                           {
                               this.getTitle()
                           } 
                           
                           <div className="card-body">
                               <form>
                                    
                                   <div className="form-group">
                                   <i className="material-icons prefix">account_circle</i>
                                       <label>User Name</label>
                                       <input placeholder="User Name" name="userName" className="form-control" 
                                        value={this.state.userName} onChange={this.changeUserNameHandler}/>
                                   </div>

                                   <div className="form-group">
                                   <i className="material-icons prefix">create</i>
                                       <label>First Name</label>
                                       <input placeholder="First Name" name="firstName" className="form-control" 
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                   </div>

                                   <div className="form-group">
                                   <i className="material-icons prefix">create</i>
                                       <label>Last Name</label>
                                       <input placeholder="Last Name" name="lastName" className="form-control" 
                                        value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                   </div>

                                   <div className="form-group">
                                   <i className="material-icons prefix">call</i>
                                       <label>Mobile Number</label>
                                       <input placeholder="Mobile Number" name="mobileNumber" className="form-control" 
                                        value={this.state.mobileNumber} onChange={this.changeMobileNumberHandler}/>
                                   </div>

                                   <div className="form-group">
                                   <i className="material-icons prefix">email</i>
                                       <label>Email Id</label>
                                       <input placeholder="Email Id" name="emailId" className="form-control" 
                                        value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                   </div>

                                   <div className="form-group">
                                   <i className="material-icons prefix">date_range</i>
                                       <label>Date Of Birth</label>
                                       <input placeholder="DateOfBirth" name="DateOfBirth" className="form-control" 
                                        value={this.state.dateOfBirth} onChange={this.changeDateOfBirthHandler}/>
                                   </div>

                                   <div className="form-group">
                                   <i className="material-icons prefix">location_on</i>
                                       <label>Location</label>
                                       <input placeholder="Location" name="location" className="form-control" 
                                        value={this.state.location} onChange={this.changeLocationHandler}/>
                                   </div>

                                   <div className="form-group">
                                   <i className="material-icons prefix">domain</i>
                                       <label>Department</label>
                                       <input placeholder="Department" name="department" className="form-control" 
                                        value={this.state.department} onChange={this.changeDepartmentHandler}/>
                                   </div>

                                   <div className="form-group">
                                   <i className="material-icons prefix">work</i>
                                       <label>Job Title</label>
                                       <input placeholder="Job Title" name="jobTitle" className="form-control" 
                                        value={this.state.jobTitle} onChange={this.changeJobTitleHandler}/>
                                   </div>

                                   <br/> <br/>

                                   <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                   <button className="btn btn-danger"  onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel </button>
                               </form>
                               
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent