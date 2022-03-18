import React, { Component } from 'react'
import '../mycss/myheader.css'
import logo from '../stock/logo.png'

export default class myheader extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg pt-3 pb-3">
        <a className="navbar-brand mx-2" href="#">
            <img
            src={logo}
            width="70vw"
            height="30vh"
            />
            
        </a>
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
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
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
              <a className="nav-link text-light" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Help
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              id = "mysearch"
              type="search"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    )
  }
}
