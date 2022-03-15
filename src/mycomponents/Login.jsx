import React, { Component } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@material-ui/core/Input";
import { Checkbox, Divider, FormControlLabel, TextField } from "@mui/material";
import '../mycss/Login.css'

class Login extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="form-popup" id="myForm">
          <form action="#" className="form-container">
            <div className="icon m-2 p-2">
              <AccountCircleIcon className="personIcon" />
              <div className="text">LOG IN</div>
            </div>
            <br />
            <div className="row m-2">
              <Input
                className="inputs"
                startAdornment={
                  <InputAdornment position="start">
                    <EmailIcon className="insideIcon" />
                  </InputAdornment>
                }
                id="email"
                type="text"
                variant="outlined"
                placeholder="Email"
                fullWidth
              />
            </div>
            <br />
            <div className="row m-2">
              <Input
                className="inputs"
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon className="insideIcon" />
                  </InputAdornment>
                }
                id="email"
                type="text"
                variant="outlined"
                placeholder="Password"
                fullWidth
                endAdornment={
                  <InputAdornment position="end">
                    <VisibilityOffIcon />
                  </InputAdornment>
                }
              />
            </div>
            <br />
            <div className="remember">
              <input type="checkbox" className="checkbox m-2" id="checkbox" />
              <label htmlFor="checkbox" className="checkbox m-1">
                <strong className="strongBlue">Remember me </strong> 
              </label>
              <div className="forgot">
                <a href="#" htmlFor="checkbox">
                  <strong className="strongBlue">Forgot password?</strong> 
                </a>
              </div>
            </div>
            <br />
            <div className="center">
              <button
                variant="contained"
                className="m-2 signupButton"
                color="primary"
              >
                LOG IN
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
