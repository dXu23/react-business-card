import './App.css';

import React, { useState, useEffect, useRef, RefObject } from 'react';

import laura_smith from './assets/laura_smith.png';

import { IconName } from '@fortawesome/fontawesome-common-types';

import { library } from '@fortawesome/fontawesome-svg-core';

import {
  fab,
  faTwitter,
  faFacebookSquare,
  faGithubSquare,
  faInstagram,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { fas, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(
  fab,
  fas,
  faLinkedin,
  faEnvelope,
  faTwitter,
  faFacebookSquare,
  faInstagram,
  faFacebook
);

function ProfileMain() {
  return (
    <div className="text-content">
      <div className="profile-intro">
        <h2>Laura Smith</h2>
        <h5>Frontend Developer</h5>
        <h6>laurasmith.website</h6>
      </div>
      <div className="contact">
        <div className="email clickable"><FontAwesomeIcon icon={["fas", "envelope"]} />&nbsp; Email</div>
        <div className="linkedin clickable"><FontAwesomeIcon icon={["fab", "linkedin"]} />&nbsp; LinkedIn</div>
      </div>
      <div className="info">
        <h3>About</h3>
        <p>
          I am a frontend developer with a particular interest
          in making things simple and automating daily
          tasks. I try to keep up with security and best
          practices, and am always looking for new things to 
          learn.
        </p>
        <h3>Interests</h3>
        <p>
          Food expert. Music scholar. Reader. Internet
          fanatic. Bacon buff. Entrepreneur. Travel geek. Pop
          culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}

function useHover(): [boolean, RefObject<SVGSVGElement> ] {
    const [isHover, setIsHover] = useState(false);

    function enter() {
        setIsHover(true);
    }

    function leave() {
        setIsHover(false);
    }

    const ref = useRef<SVGSVGElement>(null);
    useEffect(() => {
        ref.current?.addEventListener('mouseenter', enter);
        ref.current?.addEventListener('mouseleave', leave);

        return (() => {
            ref.current?.removeEventListener('mouseenter', enter);
            ref.current?.removeEventListener('mouseleave', leave);
        });
    });

    return [ isHover, ref ];
}


interface BrandIconProps {
    iconString: IconName;
};

function BrandIcon({ iconString }: BrandIconProps) {
    const [ isHover, ref ] = useHover();
    return <FontAwesomeIcon icon={["fab", iconString]} size="1x" ref={ref} inverse={isHover} className="clickable"/>
}

function SocialMedia() {
  return (
    <div className="social-media">
      <BrandIcon iconString="twitter-square" />
      <BrandIcon iconString="facebook-square" />
      <BrandIcon iconString="instagram-square" />
      <BrandIcon iconString="github-square" />
    </div>
  );
}

function App() {
  return (
    <section>
      <div id="profile-image">
        <img src={laura_smith} alt="Laura Smith" />
      </div>
      <ProfileMain />
      <SocialMedia />
    </section>
  );
}


export default App;
