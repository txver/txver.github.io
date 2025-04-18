import React from 'react';
import styles from '@styles/pages.module.css';

const Project: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to my portfolio 👋</h1>
      <p className={styles.paragraph}>This is the Projects page.</p>
    </div>
  );
};

export const pageMeta = {
  rank: 2,
  title: 'Project',
  route: '/project'
};

export default Project;