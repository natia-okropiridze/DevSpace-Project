import styles from "./MoreServiceButton.module.css";
import buttonIcon from "../../../public/images/moreServiceGallery/buttonIcon.png";
import { useState } from "react";
const { box_button, inner_button, loadMore_text_box, loadMore_text } = styles;

const MoreServiceButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {isVisible ? (
        <div className={[loadMore_text_box].join(" ")}>
          <p className={[loadMore_text].join(" ")}>
            Your About Us page is one of the first supporting pages you’ll
            likely design when building your website, regardless of the industry
            you’re in. It may go by different labels—About, Story, Mission—but
            these types of pages serve the same key purpose: to be the page for
            a brand to say, “This is who we are.” When a visitor wants to learn
            more about you or your business, the About page is what they’ll look
            for. Learn how to craft the perfect page for your business, with
            About Us page examples from successful brands to inspire you. It may
            go by different labels—About, Story, Mission—but these types of
            pages serve the same key purpose: to be the page for a brand to say,
            “This is who we are.” When a visitor wants to learn more abou
          </p>
        </div>
      ) : null}
      <div className={[box_button].join(" ")}>
        <button
          className={[inner_button].join(" ")}
          disabled={isVisible}
          onClick={() => setIsVisible(true)}
        >
          <img src={buttonIcon} />
          Load More
        </button>
      </div>
    </>
  );
};
export default MoreServiceButton;
