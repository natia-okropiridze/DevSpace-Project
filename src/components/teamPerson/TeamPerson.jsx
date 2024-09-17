import styles from "./TeamPerson.module.css";
const {
  box_team,
  inner_team_image,
  team_overlay,
  team_surname,
  team_position,
} = styles;
const TeamPerson = (props) => {
  const { team } = props;
  const { id, surname, position, image } = team;
  return (
    <div className={[box_team].join(" ")}>
      <div className={[inner_team_image].join(" ")}>
        <img src={["images", "teamSectionGallery", image].join("/")} />
      </div>
      <div className={[team_overlay].join(" ")}>
        <p className={[team_surname].join(" ")}>{surname}</p>
        <p className={[team_position].join(" ")}>{position}</p>
      </div>
    </div>
  );
};
export default TeamPerson;
