import MoreService from "../../components/moreService/MoreService";
import MoreServiceButton from "../../components/moreServiceButton/MoreServiceButton";
import styles from "./MoreServiceSection.module.css";
const {
  container_moreService,
  moreService_title,
  box_moreService,
  inner_moreService_container,
} = styles;
const MoreServiceSection = (props) => {
  const { services } = props;
  return (
    <div className={[container_moreService].join(" ")}>
      <h2 className={[moreService_title].join(" ")}>More Services</h2>
      <div className={[box_moreService].join(" ")}>
        {services.map((service) => (
          <div
            className={[inner_moreService_container].join(" ")}
            key={crypto.randomUUID()}
          >
            <MoreService service={service} />
          </div>
        ))}
      </div>
      <MoreServiceButton />
    </div>
  );
};
export default MoreServiceSection;
