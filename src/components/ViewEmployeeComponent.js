import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'


class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    
                    <div className = "card-body">

                        <div className = "row">
                        
                            <label><b> Employee User Name:</b> { this.state.employee.userName }</label>                      
                        </div>

                        <div className = "row">
                            <label><b> Employee First Name:</b> { this.state.employee.firstName }</label>                        
                        </div>

                        <div className = "row">
                            <label><b> Employee Last Name:</b> { this.state.employee.lastName } </label>
                        </div>

                        <div className = "row">
                            <label> <b>Employee Email ID:</b> { this.state.employee.emailId } </label>              
                        </div>

                        <div className = "row">
                            <label> <b>Employee mobile Number:</b> { this.state.employee.mobileNumber} </label>
                        </div>
                    

                        <div className = "row">
                            <label> <b>Employee Date Of Birth:</b> { this.state.employee.dateOfBirth }</label>
                        </div>

                        <div className = "row">
                            <label> <b>Employee Location:</b> {this.state.employee.location }</label>
                        </div>

                        <div className = "row">
                            <label> <b>Employee Department:</b> { this.state.employee.department}</label>
                        </div>

                        <div className = "row">
                            <label> <b>Employee Job Title:</b> { this.state.employee.jobTitle }</label>
                        </div>

                </div>
            </div>

       
            </div>
        )
    }
}

export default ViewEmployeeComponent