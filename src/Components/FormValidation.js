import React, { useState } from "react";
import vector from "./images/vector.png";
import "../App.css";


const FormValidation = () => {
  let [userDetails, setUserDetails] = useState(() => {
    return {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  });
  console.log("userDetails", userDetails);

  let [success, setsuccess] = useState("");
  let [error, seterror] = useState("");

  let [showPassword, setShowPassword] = useState(false);
  let [showConfirmPassword, setShowConfirmPassword] = useState(false);
  function validate(event) {
    event.preventDefault();

    if (userDetails.password !== userDetails.confirmPassword) {
    setsuccess('')
      seterror(
        "Error: Please Make sure your passwords and confirm passwords match!"
      );
    } else {
      seterror('')
      setsuccess("Successfully Created!");
    }
  }

  return (
    <div>
      <form onSubmit={validate}>
        <div>
          <input
            placeholder="Full Name"
            type="text"
            onChange={(e) => {
              setUserDetails({ ...userDetails, fullname: e.target.value });
            }}
            value={userDetails.fullname}
            required
          />
        </div>
        <div>
          <input
            placeholder="Email Address"
            type="email"
            onChange={(e) => {
              setUserDetails({ ...userDetails, email: e.target.value });
            }}
            value={userDetails.email}
            required
          />
        </div>
        <div>
          <input
            placeholder="Password"
            type={showPassword? "text" :  "password"}
            onChange={(e) => {
              setUserDetails({ ...userDetails, password: e.target.value });
            }}
            value={userDetails.password}
            required
          />
          <img onClick={()=>setShowPassword(!showPassword)} src={vector} alt="img.png" />
        </div>
        <div>
          <input
            placeholder="Confirm Password"
            type={ showConfirmPassword? "text": "password"}
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                confirmPassword: e.target.value,
              });
            }}
            value={userDetails.confirmPassword}
            required
          />
          <img onClick={()=>setShowConfirmPassword(!showConfirmPassword)} src={vector} alt="img.png" />
        </div>

        <button>Create Account</button>
      </form>
      <p style={{color:'#7CD2D7'}} className='msg'>{success} </p>
      <p style={{color:'#FE597B'}} className='msg'>{error} </p>
    </div>
  );
};

export default FormValidation;
