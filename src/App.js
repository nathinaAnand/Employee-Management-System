import React from 'react'

import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import SearchBar from './components/SearchBar';
import EmployeeList from './components/EmployeeList';
import Download from './components/DownloadPage';
import File1 from './components/File1';



function App() {
  return (
    <div className="bgimg">
 
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch>
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/SearchBar" component = {SearchBar}></Route>
                          <Route path = "/employeelist" component = {EmployeeList}></Route>
                           <Route path = "/upload" component = {File1}></Route>
                          <Route path = "/download" component = {Download}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router> 
    </div>
    
  );  
}

export default App;