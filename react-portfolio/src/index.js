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
              <h2 className="experience">Experience</h2>
                    <div className="slide pokeslide" data-anchor="slide1"> 
                    <div className="pokedex">
                    <img src={poke} alt="ash" className="ash" onClick={()=> window.open("https://mypokedex1.herokuapp.com/", "_blank")}></img>
                    <p className="title">React, Node.js and Material-UI</p>
                    <img className="git" src={Octocat} alt="logo" onClick={() => window.open("https://github.com/rcortez1775/MyPokeDex", "_blank")}/>
                    </div>
                    </div>

	                <div className="slide" data-anchor="slide2"> 
                    <img src={codecard} alt="code" className="ash" onClick={()=> window.open("https://my-code-card.herokuapp.com/", "_blank")}></img>
                    <p className="title">MongoDB, Express, React, Node.js and Material-UI</p>
                    <div className="pokedex">
                    <img className="git" src={Octocat} alt="logo" onClick={() => window.open("https://github.com/The-Gummy-Bears/CodeCards", "_blank")}/>
                    </div>
                    </div>

	                <div className="slide" data-anchor="slide3">
                    <img src={circle} alt="code" className="ash" onClick={()=> window.open("https://circle-of-friends.herokuapp.com/", "_blank")}></img>
                    <p className="title">MySql, Express, Node.js, Javascript/jQuery and Materialize</p>
                    <div className="pokedex">
                    <img className="git" src={Octocat} alt="logo" onClick={() => window.open("https://github.com/The-Real-Tardigrades/Contextual-Geolocation", "_blank")}/>
                    </div>
                    </div>

	                <div className="slide" data-anchor="slide4">
                    <img src={list} alt="list" className="ash" onClick={()=> window.open("https://rcortez1775.github.io/MyToDoList/", "_blank")}></img>
                    <p className="title">Javascript</p>
                    <div className="pokedex">
                    <img className="git" src={Octocat} alt="logo" onClick={() => window.open("https://github.com/rcortez1775/MyToDoList", "_blank")}/>
                    </div>
                    </div>

                    <div className="slide" data-anchor="slide5">
                    <img src={earth} alt="earth" className="ash" onClick={()=> window.open("https://rcortez1775.github.io/project1/", "_blank")}></img>
                    <p className="title">Javascript and Google API</p>
                    <div className="pokedex">
                    <img className="git" src={Octocat} alt="logo" onClick={() => window.open("https://github.com/rcortez1775/project1", "_blank")}/>
                    </div>
                    </div>
                </div>
            <div className="section page3 fp-auto-height-responsive">
            <h2 className="resume">Resume</h2>
            <div className="qual">
                <h4>Qualifications</h4>
                <p>Knowledge in JavaScript, HTML, CSS, React.js, Heroku, Git, Node.js and Databases. 
                    Experience in object-oriented programming; developing, testing and debugging code; 
                    designing interfaces; and administering systems and networks. Experience with Sales 
                    and Operation procedures and systems.
                </p>
                <h4>Education & Military Service</h4>
                <p>UC Irvine coding bootcamp Sabio coding pre-work CodeAcademy & Udemy
                    Diamond Bar High School
                    U.S. Marine Corps 08.2005-09.2007
                    4.2018-7.2018 1.2018-2.2018 11.2017-Present
                    1.2001-6.2005</p>
            </div>
            </div>
            <div className="section page4 fp-auto-height-responsive">
            <h2 className="about">About Me</h2>
            <div className="aboutMe">
            <img src={me} alt="ash" className="me"></img>
            
                <p>I'm Robert Cortez. Fellow Coder and United States Marine
                    Corps Veteran. After working within a tech start-up
                    in sales and operations, I've wanted to understand the "behind the scenes" of tech. That pushed me
                    to
                    complete free online courses but left me wanting a better grasp of these high level concepts. I
                    wanted
                    a more suited environment of like minded individuals to learn by creation. That's when I began my
                    bootcamp
                    search.
                </p>
                <p>Fast forward a year, I completed the Coding Bootcamp at
                    the University of California Irvine. A challenging
                    coding course that demanded constant self-education to push the boundaries of what I knew on any
                    given
                    day. Working in teams and led by amazing instructors, I was able to gain a deeper understanding of
                    development
                    and create some pretty awesome projects. Though my knowledge is a tiny seed buried deep beneath the
                    many
                    layers of information, with constant nurturing, it will soon sprout.
                </p>
            </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
  
  
  ReactDOM.render(<Fullpage />, document.getElementById('react-root'));