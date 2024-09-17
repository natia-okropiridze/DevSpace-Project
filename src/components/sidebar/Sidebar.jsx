import styles from "./Sidebar.module.css";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

const {
  sidebar_container,
  sidebar_container_show,
  header_list_group,
  header_link_item,
  header_link_item_color,
} = styles;
function Sidebar(props) {
  const { toggleSidebar, setToggle } = props;
  const classes = [
    sidebar_container,
    header_list_group,
    header_link_item,
    header_link_item_color,
  ];
  if (toggleSidebar) classes.push(sidebar_container_show);
  return (
    <>
      <div className={classes.join(" ")}>
        <button onClick={() => setToggle(false)}>
          <CgClose />
        </button>
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
      </div>
    </>
  );
}
export default Sidebar;
