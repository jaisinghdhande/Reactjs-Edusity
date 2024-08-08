import React, { useRef } from "react";
import "./Testimonial.css";
import nextIcon from "../../assets/next-icon.png";
import backIcon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonial = () => {
  const slider = useRef();

  let tx = 0;

  const goForward = () => {
    if (tx > -50) {
      tx = tx - 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const goBack = () => {
    if (tx < 0) {
      tx = tx + 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonial">
      <img className="next-btn" src={nextIcon} onClick={goForward}></img>
      <img className="back-btn" src={backIcon} onClick={goBack}></img>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1}></img>
                <div>
                  <h3>Jaisingh Dhande1</h3>
                  <span>Texas,USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I&apos;ve ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2}></img>
                <div>
                  <h3>Jaisingh Dhande2</h3>
                  <p>Texas,USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I&apos;ve ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3}></img>
                <div>
                  <h3>Jaisingh Dhande3</h3>
                  <p>Texas,USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I&apos;ve ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4}></img>
                <div>
                  <h3>Jaisingh Dhande4</h3>
                  <p>Texas,USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I&apos;ve ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
