import React from 'react';
import styles from '@styles/pages.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to my portfolio 👋</h1>
      <p className={styles.paragraph}>This is a work in progress🛠️!</p>
    </div>
  );
};


export const pageMeta = {
  rank: 1,
  title: 'Home',
  route: '/'
};

export default Home;