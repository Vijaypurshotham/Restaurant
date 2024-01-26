import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { images } from "../../constants";
import "./Footer.css";
import FooterOverlay from "./../../components/Footer/FooterOverlay";
import Newsletter from "./../../components/Footer/Newsletter";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1
          className="app__footer-headtext"
          style={{ letterSpacing: "0.04em" }}
        >
          Contact Us
        </h1>
        <p
          className="p__opensans"
          style={{ marginBottom: "0.8rem", fontSize: "24px" }}
        >
          9 W 53rd St, New York, NY 10019, USA
        </p>
        <p className="p__opensans" style={{ fontSize: "24px" }}>
          +1 212-344-1230
        </p>
        <p className="p__opensans" style={{ fontSize: "24px" }}>
          +1 212-555-1230
        </p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p
          className="p__opensans"
          style={{ fontFamily: "Times New Roman Times, serif" }}
        >
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1
          className="app__footer-headtext"
          style={{ letterSpacing: "0.05em" }}
        >
          Working Hours
        </h1>
        <p className="p__opensans" style={{ fontSize: "24px" }}>
          Monday-Friday:
        </p>
        <p className="p__opensans" style={{ fontSize: "24px" }}>
          08:00 am - 12:00 am
        </p>
        <p className="p__opensans" style={{ fontSize: "24px" }}>
          Saturday-Sunday:
        </p>
        <p className="p__opensans" style={{ fontSize: "24px" }}>
          07:00 am - 11:00 pm
        </p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Gericht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
