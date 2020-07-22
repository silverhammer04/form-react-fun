import React from "react";

function SignIn() {
  return (
    <fieldset>
        <h2>Sign In</h2>
        <form>
            <input 
              type="text" 
              placeholder="enter registered email"/> 
              <br/>
            <input 
              type="password"/>
              <br/>
            <input 
            type="submit" 
            value="Submit"/> 
        </form>
    </fieldset>
  );
}

export default SignIn;