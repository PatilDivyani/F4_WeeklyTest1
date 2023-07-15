import FormValidation from "./Components/FormValidation";
import abstraction from "./Components/images/abstraction.png";
import googleicon from "./Components/images/googleicon.png";
import facebookicon from "./Components/images/facebook-1.png";

import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="display">
        <div className="object">
          <h2>Find 3D Objects, Mockups and Ilustration here</h2>
          <img src={abstraction} alt="abstraction" />
        </div>
        <div className="container">
          <h1 className="title">Create Account</h1>
          <div className="btn">
            <div>
              <img src={googleicon} alt="googleIcon" />
              <p>Sign up with Google</p>
            </div>
            <div>
              <img src={facebookicon} alt="facebookIcon" />
              <p>Sign up with Facebook</p>
            </div>
          </div>
          <p>- OR -</p>
          <FormValidation />
        </div>
      </div>
    </div>
  );
}

export default App;
