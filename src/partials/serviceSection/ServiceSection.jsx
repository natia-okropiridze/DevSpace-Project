import styles from "./ServiceSection.module.css";
import serviceImage from "../../../public/images/serviceSectionGallery/serviceImage.png";
import developmentIcon from "../../../public/images/serviceSectionGallery/developmentIcon.png";
const {
  container_service,
  box_service,
  container_development,
  development_text,
  box_text,
  box_inner_text,
  container_development_img_box,
} = styles;
const ServiceSection = () => {
  return (
    <div className={[container_service].join(" ")}>
      <div className={[box_service].join(" ")}>
        <img src={serviceImage} />
      </div>
      <div className={[container_development].join(" ")}>
        <div className={[container_development_img_box].join(" ")}>
          <img src={developmentIcon} />
        </div>
        <div>
          <h2 className={[development_text].join(" ")}>Web Development</h2>
        </div>
      </div>
      <div className={[box_text].join(" ")}>
        <p className={[box_inner_text].join(" ")}>
          Your About Us page is one of the first supporting pages you’ll likely
          design when building your website, regardless of the industry you’re
          in. It may go by different labels—About, Story, Mission—but these
          types of pages serve the same key purpose: to be the page for a brand
          to say, “This is who we are.” When a visitor wants to learn more about
          you or your business, the About page is what they’ll look for. Learn
          how to craft the perfect page for your business, with About Us page
          examples from successful brands to inspire you. It may go by different
          labels—About, Story, Mission—but these types of pages serve the same
          key purpose: to be the page for a brand to say, “This is who we are.”
          When a visitor wants to learn more abou
        </p>
      </div>
    </div>
  );
};
export default ServiceSection;
