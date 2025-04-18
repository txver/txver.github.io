import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';  // Importing icons

import styles from '@styles/pages.module.css'
import contactStyles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <div className={contactStyles.pageWrapper}>
      <div className={contactStyles.trapezoidTop}></div>
      <div className={contactStyles.contentWrapper}>
        <div className={contactStyles.contactDetails}>
          <h1 className={styles.heading}>Contact Me</h1>

          <p className={styles.paragraph}>You can find me business contacts and socials here!</p>

          <div className={contactStyles.contactInfo}>
            <div className={contactStyles.contactItem}>
              <FaEnvelope className={contactStyles.icon} />
              <span>chuatingxuan@gmail.com</span>
            </div>

            <div className={contactStyles.contactItem}>
              <FaLinkedin className={contactStyles.icon} />
              <a href="https://www.linkedin.com/in/chua-ting-xuan" target="_blank" rel="noopener noreferrer">My LinkedIn</a>
            </div>

            <div className={contactStyles.contactItem}>
              <FaGithub className={contactStyles.icon} />
              <a href="https://github.com/txver" target="_blank" rel="noopener noreferrer">My GitHub</a>
            </div>
          </div>
        </div>
      </div>
      <div className={contactStyles.trapezoidBottom}></div>
    </div>
  );
};


export const pageMeta = {
  rank: 4,
  title: 'Contact',
  route: '/contact'
};

export default Contact;