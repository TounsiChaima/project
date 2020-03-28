//import "./login.css";

import React, { Component } from 'react';
import { useState } from 'react';
//import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from '../pages/SignUpForm';
import SignInForm from '../pages/SignInForm';
import '../pages/termsOfService';

import '../App.css';

// import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';

class Login extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
		
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>

        </div>
      </Router>
	  
    );
  }
}

export default Login;


// export default function Login(props) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // function validateForm() {
    // return email.length > 0 && password.length > 0;
  // }

  // function handleSubmit(event) {
    // event.preventDefault();
  // }
  
  
  // class App extends Component {

  // render() {

    // const responseFacebook = (response) => {
      // console.log(response);
    // }

    // const responseGoogle = (response) => {
      // console.log(response);
    // }

    // return (
      // <div className="App">
        // <h5>LOGIN WITH FACEBOOK AND GOOGLE</h5>
		// new app1();
      // <FacebookLogin
        // appId="204292690941905" //APP ID NOT CREATED YET
        // fields="name,email,picture"
        // callback={responseFacebook}
      // />
      // <br />
      // <br />


      // <GoogleLogin
        // clientId="309956018035-f5c6uo5lrek6cdm5fm547igr94ievunv.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
		//code: QYkYqc3cu3ZN00hRhRDczS1F
        // buttonText="LOGIN WITH GOOGLE"
        // onSuccess={responseGoogle}
        // onFailure={responseGoogle}
      // />
	  // <Router basename="/react-auth-ui/">
        // <div className="App">
		
          // <div className="App__Aside"></div>
          // <div className="App__Form">
            // <div className="PageSwitcher">
                // <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                // <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              // </div>

              // <div className="FormTitle">
                  // <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              // </div>

              // <Route exact path="/" component={SignUpForm}>
              // </Route>
              // <Route path="/sign-in" component={SignInForm}>
              // </Route>
          // </div>

        // </div>
      // </Router>

      // </div>
    // );
  // }
// }

  // return (new App());
 
// }