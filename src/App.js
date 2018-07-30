import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Experience from './components/experience/Experience';

// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Element } from 'react-scroll'


class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Element name="home">
            <Navbar />
            <Home />
          </Element>
        </header>
        <main>
          <Element name="about">
            <About />
          </Element>
          <Element name="experience">
            <Experience />
          </Element>
        </main>
        1<br />
        1<br />
        1<br />
        1<br />
        1<br />
        1<br />
        1<br />
        1<br />
        1<br />
        1<br />
        1<br />
        1<br />
        1<br />
        1<br />
        1<br />
        1<br />
        1<br />
        1<br />
        1<br />
      </div>    );
  }
}

export default App;
