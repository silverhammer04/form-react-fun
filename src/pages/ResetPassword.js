import React from "react";

function Reset() {
    return (
      <fieldset>
        <h2>Reset Password</h2>
        <form>
          <input  
            type="text" 
            placeholder="enter registered email"/> 
            <br/>
          <textarea 
            rows="5" cols="30" 
            placeholder="Tell us why we should reset your password, then click 'Reset Password' below."/> 
            <br/>
          <input 
            type="submit" 
            value="Reset Password"/>
        </form>
      </fieldset>
    );
  }


export default Reset;