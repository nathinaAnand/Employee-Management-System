import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class view extends Component {
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
                        
                            <label> Employee User Name: </label>
                            <div> { this.state.employee.userName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee First Name: </label>
                            <div> { this.state.employee.firstName }</div>
                        </div>
                        <div className = "row">
                            <      label> Employee Last Name: </label>
                            <div> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Email ID: </label>
                            <div> { this.state.employee.emailId }</div>                
                        </div>

                        <div className = "row">
                            <label> Employee mobile Number: </label>
                            <div> { this.state.employee.mobileNumber}</div>
                        </div>
                    

                        <div className = "row">
                            <label> Employee Date Of Birth: </label>
                            <div> { this.state.employee.dateOfBirth }</div>
                        </div>

                        <div className = "row">
                            <label> Employee Location: </label>
                            <div> { this.state.employee.location }</div>
                        </div>

                        <div className = "row">
                            <label> Employee Department: </label>
                            <div> { this.state.employee.department }</div>
                        </div>

                        <div className = "row">
                            <label> Employee Job Title: </label>
                            <div> { this.state.employee.jobTitle }</div>
                        </div>

                </div>
            </div>
            </div>
        )
    }
}

export default view