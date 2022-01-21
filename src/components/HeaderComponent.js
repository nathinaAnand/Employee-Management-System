import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-dark bg-primary">
                       
                    <div><h2 className="navbar-brand">Employee Management System</h2></div>
                    <Link to='/employees'><h3  className="navbar-brand"> Home</h3></Link>
                    <Link to='/employeelist'><h3  className="navbar-brand"> Employee List</h3></Link>
                    <Link to='/download'><h3  className="navbar-brand"> Download Data</h3></Link>
                    <Link to='/upload'><h3  className="navbar-brand"> Upload File</h3></Link>
                    <Link to='/SearchBar'><h3  className="navbar-brand"> Search</h3></Link>
                    </nav>
                </header>

                <style>{`
                h3{
                    text-color:black;
                    align:right;
                    float:right;
                    display:block;
                }
                
                `}
                </style>
            </div>
        )
    }
}

export default HeaderComponent