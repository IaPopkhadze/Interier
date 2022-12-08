import React from "react";
import "./footer.css";
import Icon from "../Assets/navigationLeftIcon.svg";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="first_content">
          <img src={Icon} alt="" />
          <p>
            Shady <br />
            Rhymes
          </p>
        </div>
        <div className="content">
          <p className="title">Feature</p>
          <p>Our Feature</p>
          <p>Pricing</p>
          <p>Affiliate Program</p>
          <p>Press kit</p>
        </div>
        <div>
          <p className="title">Support</p>
          <p>Account</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>
        <div>
          <p className="title">Legal</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
        <div>
          <p className="title">Social Media</p>
          <p>Twitter</p>
          <p>Product Hunt</p>
          <p>Instagram</p>
          <p>Github</p>
        </div>
      </div>
      <p className="copyRight">Copyright 2021 ©Popkhadze Ia</p>
    </div>
  );
}

export default Footer;
