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
              <p>
                Hi, my name is Andrey and  I'm an <strong>software engineer</strong> with
                work <strong>experience</strong> of more than <strong>10 years</strong>.
              </p>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
