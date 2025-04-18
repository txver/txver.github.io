import React from 'react';
import styles from '@styles/pages.module.css';

const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to my portfolio 👋</h1>
      <p className={styles.paragraph}>This is the Contact page.</p>
    </div>
  );
};

export const pageMeta = {
  rank: 4,
  title: 'Contact',
  route: '/contact'
};

export default Contact;