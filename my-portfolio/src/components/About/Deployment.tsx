import React from 'react';

import styles from '@styles/pages.module.css';
import aboutStyles from '../../pages/About/About.module.css';
import deployStyles from './Deployment.module.css';


import Images from '@assets/Images';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { MdOutlineArrowCircleRight  } from 'react-icons/md';

const Deployment: React.FC<{ index: number }> = ({ index }) => {
    const isOdd = index % 2 !== 0;

    return (
        <section className={`${aboutStyles.section} ${isOdd ? aboutStyles.odd : aboutStyles.even}`}>
            <h2 className={aboutStyles.header}>Deployment</h2>

            <div className={deployStyles.diagramWrapper}>

                <div className={deployStyles.stackItem}>
                    <p>
                        <img src={Images.react} alt="React" />
                        <img src={Images.vite} alt="Vite" />
                    </p>
                    <h3 className={styles.paragraph}>React + Vite</h3>
                    <p className={styles.paragraph}>Component-driven UI, built and bundled with Vite.</p>
                </div>

                <MdOutlineArrowCircleRight className={deployStyles.arrow} />

                <div className={deployStyles.stackItem}>
                    <FaGithub className={deployStyles.icon}/>
                    <h3 className={styles.paragraph}>GitHub Pages</h3>
                    <p className={styles.paragraph}>Serves static site directly from the repository.</p>
                </div>

                <MdOutlineArrowCircleRight className={deployStyles.arrow} />

                <div className={deployStyles.stackItem}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Cloudflare_Logo.png" alt="Cloudflare DNS" />
                    <h3 className={styles.paragraph}>Cloudflare</h3>
                    <p className={styles.paragraph}>Manages DNS and protects domain.</p>
                </div>

                <MdOutlineArrowCircleRight className={deployStyles.arrow} />

                <div className={deployStyles.stackItem}>
                    <FaGlobe className={deployStyles.icon}/>
                    <h3 className={styles.paragraph}>Internet</h3>
                    <p className={styles.paragraph}>Public access via custom subdomain.</p>
                </div>
            </div>


        </section>
    );
};

export default Deployment;