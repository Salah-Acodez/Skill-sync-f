import React from "react";
import "./Navbar.css";
import imgUrl from "../../assets/logo.png";
import settings_logo from "../../assets/setting-2.svg";
import notification_logo from "../../assets/notification-icon.svg";
import profile_pic from "../../assets/profile-pic.png";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_left">
        <div className="navbar_logo">
          <img src={imgUrl} alt="logo" />
        </div>
      </div>
      <div className="navbar_right">
        <ul>
          <li>
            <div className="navbar_icon">
              <img src={settings_logo} alt="settings" className="svg_icon" />
            </div>
          </li>
          <li>
            <div className="navbar_icon">
              <img src={notification_logo} alt="notification" className="svg_icon"/>
            </div>
          </li>
          <li>
            <div className="profile_pic">
              <img src={profile_pic} alt="profile" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
