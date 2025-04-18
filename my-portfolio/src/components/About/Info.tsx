import React from 'react';


import aboutStyles from '../../pages/About/About.module.css';
import styles from '@styles/pages.module.css';

const Info: React.FC<{ index: number }> = ({ index }) => {
    const isOdd = index % 2 !== 0;

    return (
        <section className={`${aboutStyles.section} ${isOdd ? aboutStyles.odd : aboutStyles.even}`}>
            <h2 className={aboutStyles.header}>About this website</h2>
            <p className={styles.paragraph}>Scroll down to see how this website is made.</p>
        </section>
    );
};

export default Info;