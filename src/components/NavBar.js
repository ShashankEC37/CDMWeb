import Logo from "../assets/img/Logo.png";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {InstagramIcon} from "./Home/Instagram";
import {FacebookIcon} from "./Home/Facebook"
import {LinkedInIcon} from "./Home/Linkedin"
import { PhoneNumberDisplay } from './Home/Call';
import { MailIcon } from "./Home/Mail";
import Location from "./Home/Location";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./navbar.css";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        setScrolled(true); // Set the navbar background to black on mobile
      } else {
        setScrolled(false); // Reset the navbar background to default on desktop
      }
    };

    // Initial check
    handleMediaQueryChange(mediaQuery);

    // Add event listener for media query changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Clean up event listener
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const navbarStyle =  {
    padding: isMenuOpen ? '0' : '', // Set padding to '0' when the menu is open (for mobile)
    minHeight: scrolled ? '30px' : '',
  }

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Navbar expand="sm" style={scrolled ? { ...navbarStyle, ...{ background: "black" } } : navbarStyle}>
      <Container style={{ paddingTop: 0 , paddingBottom:0}}>
  <Navbar.Brand href="/">
    <img src={Logo} alt="Logo" className="logo" />
  </Navbar.Brand>
  <Navbar.Toggle
    aria-controls="basic-navbar-nav"
    onClick={() => {
      setIsMenuOpen(!isMenuOpen);
      setScrolled(true); // Set the background to black when the toggle is clicked
    }}
  >
    {/* Toggle content */}
  </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className={isMenuOpen ? "show" : ""}>
          <Nav className={isMenuOpen ? "flex-column align-items-center" : "ms-auto"}>
            <Nav.Link
              href="/"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/about"
              className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('about')}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="/services"
              className={activeLink === 'ServicesList' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('ServicesList')}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="/portfolio"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Portfolio
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
          <button
  className={`vvd ${isMenuOpen ? 'mobile-button' : ''}`}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  onClick={() => (window.location.href = '/#connect')}
  style={{ width: '150px' }}
>
  <span>Let's Connect</span>
  {isHovered && (
    <span
      style={{
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div style={{ textAlign: 'center' }}>
      <div className="connect-links">
      <div className="row1">
        <PhoneNumberDisplay />
        <MailIcon />
        <Location />
      </div>
      <div className="row2">
        <LinkedInIcon />
        <FacebookIcon />
        <InstagramIcon />
      </div>
    </div>
      </div>
    </span>
  )}
</button>


          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
