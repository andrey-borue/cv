import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import { Link } from 'react-scroll'

import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebookF";
import faLinkedIn from "@fortawesome/fontawesome-free-brands/faLinkedinIn";
import './Navbar.css';
// import faAngleDown from "@fortawesome/fontawesome-free-solid/faAngleDown";
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


export default class HomeNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      color: 'transparent',
      showBrand: false,
      className: 'navbar-transparent'
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  scrollHandler() {
    if (window.pageYOffset > document.getElementById('home').offsetHeight - 60) {
      this.setState({
        color: 'dark',
        className: 'navbar-dark',
        showBrand: true
      })
    } else {
      this.setState({
        color: 'transparent',
        className: 'navbar-transparent',
        showBrand: false
      })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler.bind(this));
  }


  render() {


    let brand = '';
    if (this.state.showBrand) {
      brand = (
        <Link activeClass="active" className="navbar-brand" offset={0} to="home" spy={true} smooth={true} duration={500} hashSpy={true} >
          Andrey Boryu
        </Link>
      )
    }
    //

    return (
      <div id="navbar">
        <Navbar color={this.state.color} expand="md" dark fixed={"top"} className={this.state.className}>
          <Container>
            {brand}
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <Link activeClass="active" className="nav-link" offset={-50} to="about" spy={true} smooth={true} duration={500} hashSpy={true} >
                    About
                  </Link>
                </NavItem>
                <NavItem>
                  <Link activeClass="active" className="nav-link" offset={-50} to="experience" spy={true} smooth={true} duration={500} hashSpy={true} >
                    Experience
                  </Link>
                </NavItem>
              </Nav>
              <Nav className="" navbar>
                <NavItem>
                  <NavLink href="/components/">
                    <FontAwesomeIcon icon={faFacebook} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">
                    <FontAwesomeIcon icon={faLinkedIn} />
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
