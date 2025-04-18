import React from 'react';

import { SiCssmodules } from 'react-icons/si';
import { LuImages as LucideImages } from 'react-icons/lu';

import aboutStyles from '../../pages/About/About.module.css';
import devStyle from './Development.module.css';
import styles from '@styles/pages.module.css';
import Images from '@assets/Images';

const Development: React.FC<{ index: number }> = ({ index }) => {
    const isOdd = index % 2 !== 0;

    return (
        <section className={`${aboutStyles.section} ${isOdd ? aboutStyles.odd : aboutStyles.even}`}>
            <h2 className={aboutStyles.header}>Development</h2>
            <p className={styles.paragraph}>This website is developed with the following technologies.</p>
            <div className={devStyle.grid}>
                <div className={devStyle.quadrant}>
                    <img src={Images.vite} alt="Vite" className={devStyle.icon} />
                    <h3 className={styles.paragraph}>Vite for blazing fast development</h3>
                    <p className={styles.paragraph}>Vite enables instant HMR and builds optimized for speed, making development snappy and efficient.</p>
                </div>

                <div className={devStyle.quadrant}>
                <img src={Images.react} alt="React" className={devStyle.icon} />
                    <h3 className={styles.paragraph}>Component-driven UI with React</h3>
                    <p className={styles.paragraph}>Using React promotes modular UI design and state management, enhancing reusability and maintainability.</p>
                </div>

                <div className={devStyle.quadrant}>
                    <SiCssmodules size={32} className={devStyle.icon} />
                    <h3 className={styles.paragraph}>Scoped styling with CSS Modules</h3>
                    <p className={styles.paragraph}>CSS Modules allow for locally scoped styles, eliminating naming collisions and keeping styles tightly coupled to components.</p>
                </div>

                <div className={devStyle.quadrant}>
                    <LucideImages size={32} className={devStyle.icon} />
                    <h3 className={styles.paragraph}>Iconography via React Icons and Lucide-React</h3>
                    <p className={styles.paragraph}>Using <code>react-icons</code> and <code>Lucide-React</code> ensures flexible, consistent icon usage across the app.</p>
                </div>
            </div>
        </section>
    );
};

export default Development;