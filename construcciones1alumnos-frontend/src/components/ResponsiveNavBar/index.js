import React, { useState, useEffect } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { Link, NavLink, BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import MobileNav from "./MobileNav";
library.add(fab);

export const ReactNavbar = ({ color, logo, menu, social }) => {
  const [navLinks, setNavLinks] = useState([
    { name: "HOME", to: "/" },
    { name: "ARTICLES", to: "/articles" },
    { name: "ABOUT ME", to: "/about" },
    { name: "CONTACT", to: "/contact" },
  ]);
  const [socialIcon, setSocialIcon] = useState([
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/nazeh-taha/",
      icon: ["fab", "linkedin-in"],
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/nazeh200/",
      icon: ["fab", "facebook-f"],
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/nazeh_taha/",
      icon: ["fab", "instagram"],
    },
    {
      name: "Twitter",
      url: "http://nazehtaha.herokuapp.com/",
      icon: ["fab", "twitter"],
    },
  ]);
  const [background, setBackground] = useState("rgb(25, 25, 25)");
  const [logoUrl, setLogoUrl] = useState("https://svgshare.com/i/KHh.svg");
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    if (menu) setNavLinks(menu);
    if (color) setBackground(color);
    if (logo) setLogoUrl(logo);
    if (social) setSocialIcon(social);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  return (
    <div>
      {width < 1150 ? (
        <MobileNav
          width={width}
          logoUrl={logoUrl}
          background={background}
          navLinks={navLinks}
          socialIcon={socialIcon}
        />
      ) : (
        <Controller>
          <Scene triggerHook="onLeave" duration={300} pin>
            {(progress) => (
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ height: "150px" }}
                  to={{ height: "80px", background: background }}
                >
                  <div className="header">
                    <div className="navLogo">
                      <Router>
                        <Link to="">
                          <div className="logo-container">
                            <Timeline totalProgress={progress} paused>
                              <Tween
                                from={{ height: "150px" }}
                                to={{ height: "70px" }}
                              >
                                <img
                                  className="LogoImg"
                                  src={logoUrl}
                                  alt="logo"
                                />
                              </Tween>
                            </Timeline>
                          </div>
                        </Link>
                      </Router>
                    </div>

                    <div className="navLinks">
                      <Router>
                        <ul>
                          {navLinks.map((link, i) => (
                            <li key={i}>
                              <NavLink
                                exact
                                to={link.to}
                                activeClassName="home"
                              >
                                {link.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </Router>
                    </div>
                    <div className="navSocial">
                      <ul>
                        {socialIcon.map((icon, i) => (
                          <li key={i}>
                            <a target="_blank" href={icon.url}>
                              <FontAwesomeIcon icon={icon.icon} />
                            </a>
                            <span className="tooltiptext">
                              {icon.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Tween>
              </Timeline>
            )}
          </Scene>
        </Controller>
      )}
    </div>
  );
};
