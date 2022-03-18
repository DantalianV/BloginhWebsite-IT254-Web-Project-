import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../mycss/myheader.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar } from '@mui/material';
import logo from '../stock/logo.png'
import '../mycss/Login.css'
import InputAdornment from "@mui/material/InputAdornment";
import Input from '@mui/material/Input';
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import '../mycss/Login.css'
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Myheader() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg pt-3 pb-3" id='nav_bar'>
      <Link className="navbar-brand mx-2" to="/">
        <img
          src={logo}
          width="70vw"
          height="30vh"
        />

      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-light"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Commnities
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Sports
              </a>
              <a className="dropdown-item" href="#">
                Education
              </a>
              <a className="dropdown-item" href="#">
                External affairs
              </a>
              <a className="dropdown-item" href="#">
                Technical
              </a>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/help">
              Help
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            id="mysearch"
            type="search"
            placeholder="Search"
          />
          <SearchOutlinedIcon />
        </form>
      </div>
      {/* <button className="login__btn" onClick={() => {
        console.log("called");
        var __form = document.getElementsByClassName('form-popup');
        __form.style = "display: block";
      }}>
        Sign IN
      </button> */}
      <center><button class="login__btn" data-toggle="modal" data-target="#exampleModal1">Sign IN</button></center>
      <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <div className="form-popup" id="myForm">
                <form action="#" className="form-container">
                  <div className="icon m-2 p-2">
                    <AccountCircleIcon className="personIcon" />
                    <div className="text">LOG IN</div>
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
                  <div className="remember">
                    <input type="checkbox" className="checkbox m-2 input" id="checkbox" />
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
            </div>
          </div>
        </div>
      </div>
      <center><button class="sigup__btn" data-toggle="modal" data-target="#exampleModal2">Sign UP</button></center>
      <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
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
            </div>
          </div>
        </div>
      </div>
      <Avatar id="Avatar" />
    </nav>
  )
}

export default Myheader
