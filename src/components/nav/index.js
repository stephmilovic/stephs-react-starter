import React from 'react';
import styles from './nav.scss';

export default () => (
    <nav className={styles['main-nav']}>
        <ul>
            <li>
                <a className="scroll-on-page-link" href="#scroll-skills">
                    Skills
                </a>
            </li>
            <li>
                <a className="scroll-on-page-link" href="#scroll-work">
          Work
                </a>
            </li>
            <li>
                <a className="scroll-on-page-link" href="#scroll-extras">
          Extracurriculars
                </a>
            </li>
            <li>
                <a className="scroll-on-page-link" href="#scroll-about">
          About Me
                </a>
            </li>
            <li>
                <a className="scroll-on-page-link" href="#scroll-contact">
          Get In Touch
                </a>
            </li>
        </ul>
    </nav>
);
