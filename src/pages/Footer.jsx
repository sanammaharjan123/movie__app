import React from 'react'
import './footer.css'
import fb from "../images/movies/instagram.png";
import twitter from "../images/movies/facebook.png";
import linkedin from "../images/movies/twitter.png";
import insta from "../images/movies/youtube.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            
            <a href="/employer">
              <p>Audio Description</p>
            </a>
            <a href="/healthplan">
              <p>Investor Relations</p>
            </a>
            <a href="/individual">
              <p>Privacy</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <a href="/resource">
              <p>Contact Us</p>
            </a>
            <a href="/resource">
              <p>Help Center</p>
            </a>
            <a href="/resource">
              <p>Jobs</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <a href="/employer">
              <p>Legal Noticesr</p>
            </a>
            <a href="/healthplan">
              <p>Ad Choices</p>
            </a>
            <a href="/individual">
              <p>Gift Cards</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <a href="/employer">
              <p>Media Center</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Terms of Use</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <div className="socialmedia">
              <p>
                <img src={fb} alt="" />
              </p>
              <p>
                <img src={twitter} alt="" />
              </p>
              <p>
                <img src={linkedin} alt="" />
              </p>
              <p>
                <img src={insta} alt="" />
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>@{new Date().getFullYear()} Movie App. All right reserved.</p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
