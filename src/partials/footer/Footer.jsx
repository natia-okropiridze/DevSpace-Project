import { Link } from "react-router-dom";
import footerInnerImage from "../../../public/images/footerGallery/footerInnerImage.png";
import facebookIcon from "../../../public/images/footerGallery/facebook.png";
import instagramIcon from "../../../public/images/footerGallery/Isolation_Mode.png";
import footerIcon from "../../../public/images/footerGallery/Subtract.png";
import linkedinIcon from "../../../public/images/footerGallery/linkedin.png";
import styles from "./Footer.module.css";
const {
  footer_container,
  footer_box,
  footer_inner_text_privacy,
  footer_text,
  footer_inner_image_text,
  footer_inner_image,
  footer_text_underline,
  footer_box_icon,
} = styles;
const Footer = () => {
  return (
    <div className={[footer_container].join(" ")}>
      <div className={[footer_box].join(" ")}>
        <div className={[footer_inner_text_privacy].join(" ")}>
          <p className={[footer_text, footer_text_underline].join(" ")}>
            Privacy policy <br /> Cookie privacy preferences
          </p>
        </div>
        <div className={[footer_inner_image_text].join(" ")}>
          <img
            className={[footer_inner_image].join(" ")}
            src={footerInnerImage}
          />
          <p className={[footer_text].join(" ")}>Copyright Devspace</p>
        </div>
        <div className={[footer_box_icon].join(" ")}>
          <Link to="https://www.facebook.com/" target="_blank">
            <img src={facebookIcon} />
          </Link>
          <Link to="https://www.instagram.com/" target="_blank">
            <img src={instagramIcon} />
          </Link>
          <Link to="https://x.com/" target="_blank">
            <img src={footerIcon} />
          </Link>
          <Link to="www.https://www.linkedin.com/" target="_blank">
            <img src={linkedinIcon} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
