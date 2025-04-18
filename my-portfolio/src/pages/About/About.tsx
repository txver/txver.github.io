import React from 'react';
import styles from '@styles/pages.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to my portfolio 👋</h1>
      <p className={styles.paragraph}>This is the About page.</p>
    </div>
  );
};

export const pageMeta = {
  rank: 5,
  title: 'About',
  route: '/about'
};

export default About;