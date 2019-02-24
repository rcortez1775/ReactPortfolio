import React from 'react';
import ReactDOM from 'react-dom';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";
import icon1 from '../src/assets/LinkedIn.png';
import icon2 from '../src/assets/github.png';
import icon3 from '../src/assets/Facebook.png';
import arrow from '../src/assets/arrow.png';
import poke from '../src/assets/poke.jpg';
import codecard from '../src/assets/mycode.jpg';
import circle from '../src/assets/circleof.jpg';
import earth from '../src/assets/earth.jpg';
import list from '../src/assets/list.jpg';
import me from '../src/assets/me.jpg';
import Octocat from '../src/assets/Octocat.png';
import pup from '../src/assets/keeppup.jpg';

const Fullpage = () => (
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section page1 fp-auto-height-responsive">
              <h2 className="name">Robert Cortez</h2>
              <img className="icon" src={icon1} alt="logo" onClick={() => window.open("https://www.linkedin.com/in/robert-cortez-bb5537a5/", "_blank")}/>
              <img className="icon" src={icon2} alt="logo" onClick={() => window.open("https://github.com/rcortez1775", "_blank")}/>
              <img className="icon" src={icon3} alt="logo" onClick={() => window.open("https://www.facebook.com/robert.a.cortez.9", "_blank")}/>
              <br></br>
              <span className="button" onClick={() => fullpageApi.moveSectionDown()}>
              <img className="vert-move" src={arrow} alt="logo" />
              </span>
            </div>
            <div className="section page2 fp-auto-height-responsive">
            <h2 className="about">Simply Me</h2>
            <div className="aboutMe">
            <img src={me} alt="ash" className="me"></img>
                <p>I'm Robert. A Southern California based Developer with a passion to problem-solve and create. 
                    I'm a Marine Corps Veteran with years of experience in Sales/Operations Management. In my previous role within a tech start-up, 
                    I launched multiple showrooms and framed the execution of Field Operations in Los Angeles. 
                    I experienced first hand how tech transformed a start-up 
                    into a billion dollar business, turning my focus to Development. 
                    The most rewarding and exciting aspect of Development is to take an idea and build it into a reality. So keep scrolling and check me out!
                </p>
            </div>
            </div>
            <div className="section page3 fp-auto-height-responsive">
            <h2 className="resume">Skills & Work</h2>
            <div className="qual">
                <p><span className="sentence">Technical Skills: </span>
                    ES6 Javascript, HTML(5), CSS(3), GIT, React.JS, Node.JS, Nightmare, Express, MySQL, JS, MongoDB, jQuery, Heroku, Firebase
                </p>
                <p><span className="sentence">Education & Military Service: </span><span>UC Irvine coding bootcamp: 4.2018-7.2018</span><br></br><span>Sabio Pre-Work: 1.2018-2.2018</span><br></br> 
                <span>CodeAcademy & Udemy: 11.2017-Present</span><br></br>
                    <span>U.S. Marine Corps 08.2005-09.2009</span>
                </p>
                <p><span className="sentence">Professional Experience: </span>
                <span>OnePeloton | Field Operations Supervisor | 08.2014-08.2017</span><br></br>
                <span>24 Hour Fitness | Asst. Operations Manager | 2.2011-5.2014</span><br></br>
                </p>
            </div>
            </div>
            <div className="section page4 fp-auto-height-responsive">
              <h2 className="experience">My Projects</h2>

              <div className="slide pokeslide" data-anchor="slide1"> 
                    <div className="pokedex">
                    <img src={pup} alt="ash" className="ash" onClick={()=> window.open("https://rcortez1775.github.io/eBoba/", "_blank")}></img>
                    <p className="title"><span className="sentence">Made with: </span>Javascript and Material-UI</p>
                    <img className="git" src={Octocat} alt="logo" onClick={() => window.open("https://github.com/rcortez1775/eBoba", "_blank")}/>
                    </div>
                    </div>

                    <div className="slide pokeslide" data-anchor="slide1"> 
                    <div className="pokedex">
                    <img src={poke} alt="ash" className="ash" onClick={()=> window.open("https://mypokedex1.herokuapp.com/", "_blank")}></img>
                    <p className="title"><span className="sentence">Made with: </span>React, Node.js and Material-UI</p>
                    <img className="git" src={Octocat} alt="logo" onClick={() => window.open("https://github.com/rcortez1775/MyPokeDex", "_blank")}/>
                    </div>
                    </div>

	                <div className="slide" data-anchor="slide2"> 
                    <img src={codecard} alt="code" className="ash" onClick={()=> window.open("https://my-code-card.herokuapp.com/", "_blank")}></img>
                    <p className="title"><span className="sentence">Made with: </span>MongoDB, Express, React, Node.js and Material-UI</p>
                    <div className="pokedex">
                    <img className="git" src={Octocat} alt="logo" onClick={() => window.open("https://github.com/The-Gummy-Bears/CodeCards", "_blank")}/>
                    </div>
                    </div>

	                <div className="slide" data-anchor="slide3">
                    <img src={circle} alt="code" className="ash" onClick={()=> window.open("https://circle-of-friends.herokuapp.com/", "_blank")}></img>
                    <p className="title"><span className="sentence">Made with: </span>MySql, Express, Node.js, Javascript/jQuery and Materialize</p>
                    <div className="pokedex">
                    <img className="git" src={Octocat} alt="logo" onClick={() => window.open("https://github.com/The-Real-Tardigrades/Contextual-Geolocation", "_blank")}/>
                    </div>
                    </div>

	                <div className="slide" data-anchor="slide4">
                    <img src={list} alt="list" className="ash" onClick={()=> window.open("https://rcortez1775.github.io/MyToDoList/", "_blank")}></img>
                    <p className="title"><span className="sentence">Made with: </span>Javascript</p>
                    <div className="pokedex">
                    <img className="git" src={Octocat} alt="logo" onClick={() => window.open("https://github.com/rcortez1775/MyToDoList", "_blank")}/>
                    </div>
                    </div>

                    <div className="slide" data-anchor="slide5">
                    <img src={earth} alt="earth" className="ash" onClick={()=> window.open("https://rcortez1775.github.io/project1/", "_blank")}></img>
                    <p className="title"><span className="sentence">Made with: </span>Javascript and Google API</p>
                    <div className="pokedex">
                    <img className="git" src={Octocat} alt="logo" onClick={() => window.open("https://github.com/rcortez1775/project1", "_blank")}/>
                    </div>
                    </div>
                </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
  
  
  ReactDOM.render(<Fullpage />, document.getElementById('react-root'));