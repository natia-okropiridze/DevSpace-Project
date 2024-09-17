import styles from "./MoreService.module.css";
const {
  inner_moreService,
  box_image,
  inner_image,
  inner_icon,
  moreService_image,
  moreService_icon,
  moreService_subtitle,
  moreService_text,
  arrow_icon,
} = styles;
const MoreService = (props) => {
  const { service } = props;
  const { id, title, description, image1, image2, icon, bgColor } = service;
  return (
    <>
      <div className={[inner_moreService].join(" ")}>
        <div className={[box_image].join(" ")}>
          <div
            className={[inner_image].join(" ")}
            style={{
              backgroundColor: bgColor,
            }}
          >
            <img
              className={[moreService_image].join(" ")}
              src={["images", "moreServiceGallery", image1].join("/")}
            />
          </div>
          <div className={[inner_icon].join(" ")}>
            <img
              className={[moreService_icon].join(" ")}
              src={["images", "moreServiceGallery", image2].join("/")}
            />
          </div>
        </div>
        <h3 className={[moreService_subtitle].join(" ")}>{title}</h3>
        <p className={[moreService_text].join(" ")}>{description}</p>
        <img
          className={[arrow_icon].join(" ")}
          src={["images", "moreServiceGallery", icon].join("/")}
        />
      </div>
      {/* <div className={[box_button].join(" ")}>
        <button className={[inner_button].join(" ")}>
          <img src={buttonIcon} />
          Load More
        </button>
      </div> */}
    </>
  );
};
export default MoreService;
