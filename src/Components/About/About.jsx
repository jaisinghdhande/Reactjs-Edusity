import "./About.css";
import aboutImage from "../../assets/about.png";
import playIcon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={aboutImage} alt="about-image" className="about-image"></img>
        <img src={playIcon} alt="play-icon" className="play-icon"></img>
      </div>
      <div className="about-right"></div>
    </div>
  );
};

export default About;
