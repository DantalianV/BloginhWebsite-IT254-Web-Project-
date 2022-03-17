import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../mycss/myheader.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar } from '@mui/material';
import { useHistory } from "react-router-dom";

export default class myheader extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg pt-3 pb-3" id='nav_bar'>
        <Link className="navbar-brand ml-5" to="/">
          Blogs
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
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
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
        <Link className="signin__btn" to="/sign_in">
          {/* <Link to="/sign_in"> */}
          Sign IN
          {/* </Link> */}
        </Link>
        <Avatar id="Avatar" />
      </nav>
    )
  }
}
