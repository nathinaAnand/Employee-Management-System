
import React, {useState,useEffect} from 'react';
import axios from 'axios';

function SearchByName() {
const [post,setPost] = useState({})
const [userName,setUserName] = useState("nathina")
const [userNameFromButton, setUserNameFromButton]=useState("nathina")

const handleClick=() =>{
    setUserNameFromButton(userName)
}


useEffect(()  =>{
    axios.get(`http://localhost:8067/api/v1//employees/findbyname/${userNameFromButton}`)
    .then(res =>{
        console.log(res)
        setPost(res.data)
    })
    .catch (err=> {
        alert("Employee not in the list");
      });
},[userNameFromButton])

    return (

        <div>
            
            <form><br/><br/>
            <input  type="text" value={userName} onChange={e => setUserName(e.target.value)}/>
            <button type="button" onClick={handleClick}>SearchByName</button>
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
 

         </div>
    )
}


export default SearchByName
