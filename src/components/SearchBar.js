import React, {useState,useEffect} from 'react';
import axios from 'axios';

import SearchByName from './SearchByName';
function SearchBar() {
const [post,setPost] = useState({})
const [id,setId] = useState(1)
const [idFromButton, setIdFromButton]=useState(1)

const handleClick=() =>{
    setIdFromButton(id)
}

useEffect(()  =>{
    axios.get(`http://localhost:8067/api/v1/employees/findbyid/${idFromButton}`)
    .then(res =>{
        console.log(res)
        setPost(res.data)
    }).catch (err=> {
        alert("Employee not in the list");
      })

},[idFromButton])

    return (

        <div>

            
            <form><br/><br/>
            <input  type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button type="button" onClick={handleClick}>SearchbyId</button>
       
             </form><br/><br/>
            
            <div className="row">
                   <table className="table table-striped">
                       <thead>
                           <tr>
                               <th>Id</th>
                               <th>User Name</th>
                               <th>First Name</th>
                               <th>Last Name</th>
                               <th>Mobile Number</th>
                               <th>Email Id</th>
                               <th>DateOfBirth</th>
                               <th>Location </th>
                               <th>Department</th>
                               <th>Job Title</th>
                              
                           </tr>
                       </thead>
                       <tbody>
                                  <td> {post.id}</td> 
                                       <td>{post.userName}</td>
                                       <td>{post.firstName}</td>
                                       <td>{post.lastName}</td>
                                       <td>{post.mobileNumber}</td>
                                       <td>{post.emailId}</td>
                                       <td>{post.dateOfBirth}</td>
                                       <td>{post.location}</td>
                                       <td>{post.department}</td>
                                        <td>{post.jobTitle}</td>
                                        </tbody>
                                        </table>
                              </div>
<style>{`
input{

transition: width 0.4s ease-in-out;

z-index: -1;

top:20px;

width: 20%;

left: 8px;

font-size: 17px;

color: black;

}
`}</style>
 
 <div>
              <SearchByName/></div>

         </div>
    )
}

export default SearchBar
