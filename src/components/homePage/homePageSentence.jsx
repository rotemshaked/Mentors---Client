import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./homePage.css";

const HomePageSentence = (props) => {
  return (
    <div className="homePageSentence">
      <p className="firstLine">{props.firstLine}</p>
      <p className="secondLine">
        {props.secondLine} <FontAwesomeIcon icon={faArrowDown} />
      </p>
    </div>
  );
};

export default HomePageSentence;
