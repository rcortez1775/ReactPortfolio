import React from 'react';
import ReactDOM from 'react-dom';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";

const Fullpage = () => (
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section page1">
              <p>Robert Cortez</p>
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