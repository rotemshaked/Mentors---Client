// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import "./mentorsPage.css";

const MentorsPage = (props) => {
  // const [mentors, setMentors] = useState();
  // const { category } = useParams;

  // useEffect(() => {
  //   const mentors = axios
  //     .get(`http://localhost:8080/api/categories/${category}`)
  //     .then((categoryData) => {
  //       setMentors(categoryData.usersInCategory);
  //     });
  // }, [category]);

  // const getMentorsDetails = () => {
  //   try {
  //     axios.get("http://localhost:8080/api/users/").then((users)=>{
  //       users.map((user)=>user.id===)
  //     })
  //   } catch {}
  // };

  // const getMentors = () => {
  //   mentors.map((name) => {
  //     console.log(name);
  //     return <div key={name}>{name}</div>;
  //   });
  // };

  return (
    <div className="mentorsPage">
      <div className="mentorDiv">
        <img
          src={
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
          }
          alt="mentor"
          className="profilePicture"
        />
        <div className="name">Rotem Shaked</div>
        <div className="role">Lawyer</div>
        <div className="years">5 years of experience</div>
        <button className="messageBtn">Send a message</button>
      </div>
      <div className="mentorDiv">
        <img
          src={
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
          }
          alt="mentor"
          className="profilePicture"
        />
        <div className="name">Rotem Shaked</div>
        <div className="role">Lawyer</div>
        <div className="years">5 years of experience</div>
        <button className="messageBtn">Send a message</button>
      </div>
      <div className="mentorDiv">
        <img
          src={
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
          }
          alt="mentor"
          className="profilePicture"
        />
        <div className="name">Rotem Shaked</div>
        <div className="role">Lawyer</div>
        <div className="years">5 years of experience</div>
        <button className="messageBtn">Send a message</button>
      </div>
      <div className="mentorDiv">
        <img
          src={
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
          }
          alt="mentor"
          className="profilePicture"
        />
        <div className="name">Rotem Shaked</div>
        <div className="role">Lawyer</div>
        <div className="years">5 years of experience</div>
        <button className="messageBtn">Send a message</button>
      </div>
      <div className="mentorDiv">
        <img
          src={
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
          }
          alt="mentor"
          className="profilePicture"
        />
        <div className="name">Rotem Shaked</div>
        <div className="role">Lawyer</div>
        <div className="years">5 years of experience</div>
        <button className="messageBtn">Send a message</button>
      </div>
    </div>
  );
};

export default MentorsPage;
