import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Login.css";
import Home from "./Home.js"

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '599544277603-0c2eulbcoado0mput59it2hvbmabbque.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
    //window.location = '/Home';
    return (Home());

  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    //window.location = '/Home';
    //return (Home());
    // alert(
    //   `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    // );
  };

  return (
    <div className="login">
      <center>
      <div className="content">
        <Card className="titleCard">
          <Card.Header className="headerCard">
          <div className="titleText"> a l l i e s  </div>
          <div className="subtitle">we're in this together </div> 
          </Card.Header>
          <div className="supportText2">
              Bruin Edition - Sign-in with ucla@edu 
          </div> 
          <Card.Body className="bodyCard">
              <GoogleLogin
              clientId={clientId}
              buttonText="Login (UCLA)"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              style={{ marginTop: '80px' }}
              isSignedIn={true}
            />

            <div className="supportText">
              First time? &nbsp;
              <a href="https://accounts.google.com/SignUp?hl=en" target="_blank">
                  Learn more
              </a> here.
            </div>
          </Card.Body>
        </Card>
      </div>
      </center>
    </div>
  );
}

export default Login;
