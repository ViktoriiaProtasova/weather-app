import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="Footer">
      This project was coded by{' '}
      <a href="https://www.linkedin.com/in/vprotasova/" target="_blank">
        Viktoriia Protasova
      </a>{' '}
      and is open-sourced on{' '}
      <a
        href="https://github.com/ViktoriiaProtasova/weather-app"
        target="_blank"
      >
        GitHub
      </a>{' '}
      and hosted on{' '}
      <a href="https://weatherprovide.netlify.app/" target="_blank">
        Netlify
      </a>
    </div>
  );
}
