import "./mentorCardComponent.css";

const MentorCard = (props) => {
  return (
    <div className="mentor-container">
      <div className={`image-container ${props.classNameImage}`}>
        {props.mentorsName}
      </div>
    </div>
  );
};

export default MentorCard;
