import React from "react";
import { Link } from 'react-router-dom'

function Register(props) {
  return (
    
    <fieldset>
      <h2>New User Registration</h2>
      <button onClick={() => props.addUser({ name: "You" })}>Add You</button>
      <form>
          <input 
              type="text" 
              placeholder="enter first name"/>
              <br/>
          <input 
              type="text" 
              placeholder="enter last name"/> 
              <br/>
          <input 
              type="text" 
              placeholder="enter valid email"/>
              <br/> 
          <input 
              type="text" 
              placeholder="555-867-5309"/>
              <br/> 
          <select type="dropdown"> 
              <option value="o1">less than 18</option>
              <option value="o2">19-50</option>
              <option value="o3">50-80</option>
              <option value="o4">80-RIP</option> 
          </select>
              <br/>
          <input type="password"/> 
              <br/>
          <input type="password"/>
              <br/>
          <input type="submit"></input>  
              <br/> 
      </form>
      <Link className="link" to="/SightIn">Sign In</Link>
    </fieldset>  
  );
}
export default Register;