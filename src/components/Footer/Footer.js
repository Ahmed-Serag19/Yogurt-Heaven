import React from 'react';
import classes from './Footer.module.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/A7med.Serag/"
          >
            <FaFacebookSquare />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ahmed-mohamed-41b081186/"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Ahmed-Serag19"
          >
            <FaGithubSquare />
          </a>
        </li>
      </ul>
      <p className="fs-6 fw-light">
        © 2023 Freeeze. All Rights Reserved to Ahmed Mohamed
      </p>
    </footer>
  );
}
