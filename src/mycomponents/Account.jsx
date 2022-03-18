import React, { Component } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import OpacityIcon from "@mui/icons-material/Opacity";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';
import '../mycss/Account.css'

class Account extends Component {
  state = {
    profileImg:
      "https://www.freeiconspng.com/uploads/add-user-icon--icon-search-engine-28.png",
  };
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const profileImg = this.state.profileImg;
    // print(profileImg)
    return (
      <React.Fragment>
        <div className="navbars">
          <ul>
            <li>
              <a href="#home">OverView</a>
            </li>
            <li>
              <a href="#news">Posts</a>
            </li>
            <li>
              <a href="#contact">Comments</a>
            </li>
            <li>
              <a href="#about">UpVoted</a>
            </li>
            <li>
              <a href="#about">DownVoted</a>
            </li>
          </ul>
        </div>
        <div className="rows">
          <div className="Left">
            <div className="subNavBar">
              <ul>
                <li>
                  <a href="#home"><NewReleasesIcon /> New</a>
                </li>
                <li>
                  <a href="#news"><OpacityIcon /> Hot</a>
                </li>
                <li>
                  <a href="#contact"><EqualizerIcon /> Top</a>
                </li>
              </ul>
            </div>
            <div className="mainBody">
              <div className="post">
                <KeyboardDoubleArrowUpRoundedIcon />
                <br />
                <KeyboardDoubleArrowDownRoundedIcon />
              </div>
              <div className="post">
                <KeyboardDoubleArrowUpRoundedIcon />
                <br />
                <KeyboardDoubleArrowDownRoundedIcon />
              </div>
              <div className="post">
                <KeyboardDoubleArrowUpRoundedIcon />
                <br />
                <KeyboardDoubleArrowDownRoundedIcon />
              </div>
              <div className="post">
                <KeyboardDoubleArrowUpRoundedIcon />
                <br />
                <KeyboardDoubleArrowDownRoundedIcon />
              </div>
              <div className="post">
                <KeyboardDoubleArrowUpRoundedIcon />
                <br />
                <KeyboardDoubleArrowDownRoundedIcon />
              </div>
              <div className="post">
                <KeyboardDoubleArrowUpRoundedIcon />
                <br />
                <KeyboardDoubleArrowDownRoundedIcon />
              </div>
              <div className="post">
                <KeyboardDoubleArrowUpRoundedIcon />
                <br />
                <h4 className="center">
                  hmm... userName hasn't posted anything
                </h4>
                <br />
                <KeyboardDoubleArrowDownRoundedIcon />
              </div>
              <div className="post">
                <KeyboardDoubleArrowUpRoundedIcon />
                <br />
                <KeyboardDoubleArrowDownRoundedIcon />
              </div>
              <div className="post">
                <KeyboardDoubleArrowUpRoundedIcon />
                <br />
                <KeyboardDoubleArrowDownRoundedIcon />
              </div>
              <div className="post">
                <KeyboardDoubleArrowUpRoundedIcon />
                <br />
                <KeyboardDoubleArrowDownRoundedIcon />
              </div>
              <div className="post">
                <KeyboardDoubleArrowUpRoundedIcon />
                <br />
                <KeyboardDoubleArrowDownRoundedIcon />
              </div>
              <div className="post">
                <KeyboardDoubleArrowUpRoundedIcon />
                <br />
                <KeyboardDoubleArrowDownRoundedIcon />
              </div>
              <div className="post">
                <KeyboardDoubleArrowUpRoundedIcon />
                <br />
                <KeyboardDoubleArrowDownRoundedIcon />
              </div>
              <div className="post">
                <KeyboardDoubleArrowUpRoundedIcon />
                <br />
                <KeyboardDoubleArrowDownRoundedIcon />
              </div>
            </div>
          </div>
          <div className="Right1">
            <div className="Right">
              {/* <h5 className="heading">Add your Image</h5> */}
              <div className="img-holder">
                <img src={profileImg} alt="error" id="img" className="img" />
              </div>
              <input
                type="file"
                className="imageUpload"
                accept="image/*"
                id="image"
                name="image-upload"
                onChange={this.imageHandler}
              />
              <label htmlFor="image" className="imageUpload">
                <AddAPhotoIcon className="color" />
              </label>
            </div>
            <h6 className="userName">UserName</h6>
            <br />
            <button className="createAvatar">
              Create Avatar <ArrowRightIcon />{" "}
            </button>
            <br />
            <button className="newPost"> New Post</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Account;
