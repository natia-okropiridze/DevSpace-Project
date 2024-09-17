import styles from "./Header.module.css";
import group1 from "../../../public/images/headerGallery/group1.png";
import vector1 from "../../../public/images/headerGallery/vector1.png";
import vector2 from "../../../public/images/headerGallery/vector2.png";
import vector3 from "../../../public/images/headerGallery/vector3.png";
import vector4 from "../../../public/images/headerGallery/vector4.png";
import vector5 from "../../../public/images/headerGallery/vector5.png";
import vector6 from "../../../public/images/headerGallery/vector6.png";
import vector7 from "../../../public/images/headerGallery/vector7.png";
import vector8 from "../../../public/images/headerGallery/vector8.png";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const {
  header_container,
  header_image,
  header_inner,
  header_text_image,
  align_bottom,
  align_top,
  header_link_item,
  header_link_item_color,
  header_list_group,
  menu_toggle,
  menu_toggle_box,
} = styles;
const Header = (props) => {
  const { setToggle } = props;
  return (
    <header>
      <div className={[header_container].join(" ")}>
        <div className={[header_inner].join(" ")}>
          <div className={[header_image].join(" ")}>
            <img src={group1} />
          </div>
          <div>
            <img className={[header_text_image].join(" ")} src={vector1} />
            <img className={[header_text_image].join(" ")} src={vector2} />
            <img
              className={[header_text_image, align_bottom].join(" ")}
              src={vector3}
            />
            <img className={[header_text_image].join(" ")} src={vector4} />
            <img
              className={[header_text_image, align_top].join(" ")}
              src={vector5}
            />
            <img className={[header_text_image].join(" ")} src={vector6} />
            <img className={[header_text_image].join(" ")} src={vector7} />
            <img className={[header_text_image].join(" ")} src={vector8} />
          </div>
        </div>
        <div>
          <ul className={[header_list_group].join(" ")}>
            <li>
              <Link
                className={[header_link_item, header_link_item_color].join(" ")}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link className={[header_link_item].join(" ")} to="/service">
                Services
              </Link>
            </li>
            <li>
              <Link className={[header_link_item].join(" ")} to="/project">
                Projects
              </Link>
            </li>
            <li>
              <Link className={[header_link_item].join(" ")} to="/partner">
                Partners
              </Link>
            </li>
            <li>
              <Link className={[header_link_item].join(" ")} to="/aboutUs">
                About Us
              </Link>
            </li>
            <li>
              <Link className={[header_link_item].join(" ")} to="/contact">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        <div className={[menu_toggle_box].join(" ")}>
          <button
            className={[menu_toggle].join(" ")}
            onClick={() => setToggle(true)}
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
