import React from 'react';
import ReactDOM from 'react-dom';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";
import icon1 from '../src/assets/LinkedIn.png';
import icon2 from '../src/assets/github.png';
import icon3 from '../src/assets/Facebook.png';
import arrow from '../src/assets/arrow.png';


const Fullpage = () => (
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section page1">
              <h2 className="name">Robert Cortez</h2>
              <img className="icon" src={icon1} alt="logo" />
              <img className="icon" src={icon2} alt="logo" />
              <img className="icon" src={icon3} alt="logo" />
              <br></br>
              <span className="button" onClick={() => fullpageApi.moveSectionDown()}>
              <img className="vert-move" src={arrow} alt="logo" />
              </span>
            </div>
            <div className="section page2">
              <h2 className="experience">Experience</h2>
                    <div className="slide" data-anchor="slide1"> 
                    <div className="pokedex">
                    <h3 className="main">MyPokedex</h3>
                    <p className="title">The App:</p>
                    <p className="title">The Code:</p>
                    <p className="title">Technologies:</p>
                    </div>
                    </div>

	                <div className="slide" data-anchor="slide2"> 
                    <div className="pokedex">
                    <h3>MyCodeCard</h3>
                    <p className="title">The App:</p>
                    <p className="title">The Code:</p>
                    <p className="title">Technologies:</p>
                    </div>
                    </div>

	                <div className="slide" data-anchor="slide3">
                    <div className="pokedex">
                    <h3>CircleOfFriends</h3>
                    <p className="title">The App:</p>
                    <p className="title">The Code:</p>
                    <p className="title">Technologies:</p>
                    </div>
                    </div>

	                <div className="slide" data-anchor="slide4">
                    <div className="pokedex">
                    <h3>To-DoList</h3>
                    <p className="title">The App: </p>
                    <p className="title">The Code:</p>
                    <p className="title">Technologies:</p>
                    </div>
                    </div>

                    <div className="slide" data-anchor="slide5">
                    <div className="pokedex">
                    <h3>DoomsdayDatabase</h3>
                    <p className="title">The App: </p>
                    <p className="title">The Code:</p>
                    <p className="title">Technologies:</p>
                    </div>
                    </div>
                </div>
            <div className="section page3">
            <h2 className="about">About Me</h2>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
  
  
  ReactDOM.render(<Fullpage />, document.getElementById('react-root'));