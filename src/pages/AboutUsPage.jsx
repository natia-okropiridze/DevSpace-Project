import AboutUsSection from "../partials/aboutUsSection/AboutUsSection";
import TeamSection from "../partials/teamSection/TeamSection";
import database from "../../database/database";
const AboutUsPage = () => {
  return (
    <div className="container">
      <AboutUsSection />
      <TeamSection teams={database.teams} />
    </div>
  );
};
export default AboutUsPage;
