import projectButtonArrowImage from "../../../public/images/sliderSectionGallery/projectButtonArrow.png";
import styles from "./ProjectButton.module.css";
import { useNavigate } from "react-router-dom";
const { box_button, inner_button } = styles;
const ProjectButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // This goes back to the previous page in history
  };
  return (
    <div className={[box_button].join(" ")}>
      <button className={[inner_button].join(" ")} onClick={goBack}>
        <img src={projectButtonArrowImage} />
        Back
      </button>
    </div>
  );
};
export default ProjectButton;
