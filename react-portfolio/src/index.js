import React from 'react';
import ReactDOM from 'react-dom';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";
import icon1 from '../src/assets/LinkedIn.png';
import icon2 from '../src/assets/github.png';
import icon3 from '../src/assets/Facebook.png';
import arrow from '../src/assets/arrow.png';
import {Card, CardTitle} from 'react-materialize'


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
              <img className="vert-move" src={arrow} alt="logo" />
              </span>
            </div>
            <div className="section page2">
              <p>Experience</p>
                    <div class="slide" data-anchor="slide1"> 
                    <div>
                    <Card class="card" header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                        title="Card Title"reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
    <                   p><a href="https://github.com/rcortez1775/MyPokeDex">This is a link</a></p>
                    </Card>
                    </div>
                    </div>
	                <div class="slide" data-anchor="slide2"> Slide 2 </div>
	                <div class="slide" data-anchor="slide3"> Slide 3 </div>
	                <div class="slide" data-anchor="slide4"> Slide 4 </div>
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