import "./Programs.css";
import program1 from "../../assets/program-1.png";
import program2 from "../../assets/program-2.png";
import program3 from "../../assets/program-3.png";
import graduationDegree from "../../assets/program-icon-1.png";
import masterDegree from "../../assets/program-icon-2.png";
import postGraduation from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program1} alt="program-1"></img>
        <div className="caption">
          <img src={graduationDegree} alt="caption-graduation-degree"></img>
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program2} alt="program-2"></img>
        <div className="caption">
          <img src={masterDegree} alt="caption-graduation-degree"></img>
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="program-3"></img>
        <div className="caption">
          <img src={postGraduation} alt="caption-graduation-degree"></img>
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
