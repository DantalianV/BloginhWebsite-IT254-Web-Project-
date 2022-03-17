import React, { Component } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InputAdornment from "@mui/material/InputAdornment";
import Input from '@mui/material/Input';
import { Checkbox, Divider, FormControlLabel, TextField } from "@mui/material";
import '../mycss/Signin.css'

class Signin extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="form-popup" id="myForm">
          <form action="#" className="form-container">
            <div className="icon m-2 p-2">
              <PersonAddIcon className="personIcon" />
              <div className="text">SIGN UP</div>
            </div>
            <br />
            <div className="row m-2">
              {/* <i><PersonIcon/></i> */}
              <Input
                className="inputs input"
                startAdornment={
                  <InputAdornment position="start">
                    <PersonIcon className="insideIcon" />
                  </InputAdornment>
                }
                id="firstName"
                type="text"
                variant="outlined"
                placeholder="Name"
                fullWidth
              />
              <br />
            </div>
            <br />
            <div className="row m-2">
              <Input
                className="inputs input"
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
                className="inputs input"
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
            <div className="center">
              <input
                type="checkbox"
                className="m-2 checkbox input"
                value="agree"
                id="checkbox"
              />
              <label htmlFor="checkbox" className="checkbox m-1">
                I read and agree to{" "}
                <strong className="strongBlue">terms and conditions</strong>
              </label>
            </div>
            <br />
            <div className="center">
              <button
                variant="contained"
                className="m-2 signupButton"
                color="primary"
              >
                CREATE ACCOUNT
              </button>
            </div>
            <div class="separator">
              <div class="line"></div>
              <h6 className="m-2">Or</h6>
              <div class="line"></div>
              <br />
            </div>
            <div className="logo">
              <GoogleIcon className="m-4 goborders gologo fs" />
              <FacebookIcon className="m-4 faborders galogo fs" />
              <LinkedInIcon className="m-4 liborders lilogo fs" />
            </div>
            <div class="separator">
              <div class="line"></div>
              <br />
              <h6 className="m-2">Or</h6>
              <div class="line"></div>
            </div>
            <div className="Exist">
              <h5 className="center">
                Already have a account?
                <strong className="strongBlue"> &nbsp; Sign In</strong>
              </h5>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Signin;
