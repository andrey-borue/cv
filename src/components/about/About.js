import React from 'react';

import './About.css';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// import Zoom from 'react-reveal/Zoom';
// import Fade from 'react-reveal/Fade';
// import LightSpeed from 'react-reveal/LightSpeed';
// import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';


export default class About extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div id="about">
        <div className="container pt-4">
          <div className="row justify-content-center mb-4">
            <Slide top>
              <h2 className="text-muted">About me</h2>
            </Slide>
          </div>
          <div className="row">
            <div className="col-4">
              <Slide left>
                <div>
                  <picture>
                    {/*<source srcSet="mdn-logo-wide.png" media="(min-width: 600px)">*/}
                    <img src="img/andrey-photo-01.jpg" alt="Andrey" className="photo" />
                  </picture>
                </div>
              </Slide>
            </div>
            <div className="col-8">
              <Slide right>
                <h5>Andrey Boryu</h5>
                <p>Full-stack web engineer</p>
                <p>
                  An <strong>software engineer</strong> with
                  work <strong>experience</strong> of more than <strong>10 years</strong>.
                </p>
                <p>
                  Skilled in PHP, Javascript, has to work with Golang, Ruby and Python.
                </p>
                <p>
                  Evangelist of full automated testing, continuous integration and continuous delivery.
                </p>
                <p>
                  I have experience working with projects that are being developed from scratch, and in large high-load projects.
                </p>
                <p>
                  My hobbies are traveling, scuba diving, sailing, hiking. I like to explore the world, to find new impressions and always learn something new.
                </p>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
