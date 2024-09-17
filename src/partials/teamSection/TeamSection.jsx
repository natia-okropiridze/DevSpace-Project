import { useState, useEffect } from "react";
import teamImage from "../../../public/images/teamSectionGallery/teamImage.png";
import styles from "./TeamSection.module.css";
import TeamPerson from "../../components/teamPerson/TeamPerson";
import {
  MdKeyboardDoubleArrowLeft,
  MdOutlineKeyboardArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
} from "react-icons/md";

const {
  container_team,
  box_image,
  inner_team,
  team_list_pagination,
  inner_team_box,
  active,
} = styles;
const TeamSection = (props) => {
  const { teams } = props;
  const pageButtons = [];
  const prePage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [displayItems, setDisplayItems] = useState(teams);
  const [renderItems, setRenderItems] = useState(
    displayItems.slice(0, prePage)
  );
  const [pagesCount, setPagesCount] = useState(
    Math.ceil(displayItems.length / prePage)
  );

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Determine how many page buttons to show based on screen width
  const visiblePages = windowWidth > 650 ? 6 : 3;

  // Calculate the start and end page numbers to show in the pagination
  const startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
  const endPage = Math.min(startPage + visiblePages - 1, pagesCount);

  // If the range goes beyond the total page count, adjust the start page
  const adjustedStartPage =
    endPage - startPage < visiblePages - 1
      ? Math.max(endPage - visiblePages + 1, 1)
      : startPage;
  const paginator = (page) => {
    const start = (page - 1) * prePage;
    const end = page * prePage;
    setRenderItems(displayItems.slice(start, end));
    setCurrentPage(page);
  };

  for (let i = adjustedStartPage; i <= endPage; i++) {
    pageButtons.push(
      <li
        key={crypto.randomUUID()}
        className={[currentPage === i ? active : ""].join(" ")}
      >
        <button onClick={() => paginator(i)}>{i}</button>
      </li>
    );
  }

  const prevPage = () => {
    let page = currentPage;
    if (currentPage > 1) page = page - 1;
    const start = (page - 1) * prePage;
    const end = page * prePage;
    setRenderItems(displayItems.slice(start, end));
    setCurrentPage(page);
  };
  const nextPage = () => {
    let page = currentPage;
    if (currentPage < pagesCount) page = page + 1;
    const start = (page - 1) * prePage;
    const end = page * prePage;
    setRenderItems(displayItems.slice(start, end));
    setCurrentPage(page);
  };
  const firstPage = () => {
    setCurrentPage(1);
    setRenderItems(displayItems.slice(0, prePage));
  };

  const lastPage = () => {
    const start = (pagesCount - 1) * prePage;
    const end = pagesCount * prePage;
    setCurrentPage(pagesCount);
    setRenderItems(displayItems.slice(start, end));
  };
  return (
    <div className={[container_team].join(" ")}>
      <div className={[box_image].join(" ")}>
        <img src={teamImage} />
      </div>
      <div className={[inner_team].join(" ")}>
        {renderItems.map((team) => (
          <div className={[inner_team_box].join(" ")} key={crypto.randomUUID()}>
            <TeamPerson team={team} />
          </div>
        ))}
      </div>
      <ul className={[team_list_pagination].join(" ")}>
        <li>
          <button onClick={firstPage}>
            <MdKeyboardDoubleArrowLeft />
          </button>
        </li>
        <li>
          <button onClick={prevPage}>
            <MdOutlineKeyboardArrowLeft />
          </button>
        </li>
        {pageButtons}
        <li>
          <button onClick={nextPage}>
            <MdKeyboardArrowRight />
          </button>
        </li>
        <li>
          <button onClick={lastPage}>
            <MdKeyboardDoubleArrowRight />
          </button>
        </li>
      </ul>
    </div>
  );
};
export default TeamSection;
