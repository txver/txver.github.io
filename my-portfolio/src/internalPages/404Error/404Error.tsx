import React from 'react';
import styles from './404Error.module.css';
import { Link } from 'react-router-dom';
import { Bold } from 'lucide-react';

const Error404: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>🚧Error 404🚧</h1>
      <p className={styles.paragraph}>How did you get here? I don't remember making this page!</p>
      <p className={styles.paragraph}>Click <Link to="/" className={styles.linkBold}>HERE</Link> to return to the home page.</p>
    </div>
  );
};

export default Error404;