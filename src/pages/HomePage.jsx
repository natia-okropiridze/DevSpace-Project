import ServiceSection from "../partials/serviceSection/ServiceSection";
import MoreServiceSection from "../partials/moreServiceSection/MoreServiceSection";
import database from "../../database/database";
const HomePage = () => {
  return (
    <div className="container">
      <ServiceSection />
      <MoreServiceSection services={database.services} />
    </div>
  );
};
export default HomePage;
