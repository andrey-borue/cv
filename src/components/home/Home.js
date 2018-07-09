import React from 'react';
// import CSSModules from 'react-css-modules';

// import { CSSTransition } from 'react-transition-group'
// var CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup') // ES5 with npm
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// import { Parallax, Background } from 'react-parallax';
import { Parallax } from 'react-parallax';

import './Home.css';

// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Link } from 'react-scroll'

import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown'
// import {
//   angelList
// } from `@fortawesome/fontawesome`

// const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
const image1 = "/img/home.jpg";



export default class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div id="home">
      <Parallax bgImage={image1} strength={500} bgClassName={"image"}>
        <div className="content">
          <div>
            <ReactCSSTransitionGroup transitionName="anim-fast" transitionAppear={true} transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false}>
              <h1 className="display-3">I am <strong>Andrey Boryu</strong></h1>
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup transitionName="anim-slow" transitionAppear={true} transitionAppearTimeout={1000} transitionEnter={false} transitionLeave={false}>
              <p className="lead"><span>Software Engineer</span></p>

              <Link activeClass="active" className="btn btn-down mt-5" offset={-50} to="about" spy={true} smooth={true} duration={500} hashSpy={true} >
                <FontAwesomeIcon icon={faAngleDown}/>
              </Link>
            </ReactCSSTransitionGroup>
          </div>
        </div>
      </Parallax>
      </div>
    );
  }
}
