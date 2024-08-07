import "./Campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png"

const Campus = () => {
  return (
    <div className="outer-box">
      <div className="campus">
        <img src={gallery_1}></img>
        <img src={gallery_2}></img>
        <img src={gallery_3}></img>
        <img src={gallery_4}></img>
      </div>
      <button className="btn dark-btn">Click here <img src={white_arrow}></img></button>
    </div>
  );
};

export default Campus;
