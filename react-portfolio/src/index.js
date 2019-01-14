import React from 'react';
import ReactDOM from 'react-dom';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";
import icon1 from '../src/assets/LinkedIn.png';
import icon2 from '../src/assets/github.png';
import icon3 from '../src/assets/Facebook.png';

const Fullpage = () => (
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section page1">
              <p>Robert Cortez</p>
              <img className="icon" src={icon1} alt="logo" />
              <img className="icon" src={icon2} alt="logo" />
              <img className="icon" src={icon3} alt="logo" />
              <br></br>
              <span className="button" onClick={() => fullpageApi.moveSectionDown()}>
                Click Me
              </span>
            </div>
            <div className="section page2">
              <p>Experience</p>
            </div>
            <div className="section page3">
              <p>About Me</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
  
  ReactDOM.render(<Fullpage />, document.getElementById('react-root'));