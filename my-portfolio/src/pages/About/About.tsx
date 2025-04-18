import React, { useEffect } from 'react';
import aboutStyles from './About.module.css';

import Info from '@components/About/Info';
import Development from '@components/About/Development';
import Deployment from '@components/About/Deployment';

const About: React.FC = () => {
  useEffect(() => {
    // Lock body scroll only while on this page
    document.body.style.overflow = 'hidden';

    return () => {
      // Re-enable scroll when leaving
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={aboutStyles.contentWrapper}>
      <div className={aboutStyles.scrollWrapper}>
        <div className={aboutStyles.spacer} />
        <Info index={0} />
        <Development index={1} />
        <Deployment index={2} />
        <div className={`${aboutStyles.spacer} ${aboutStyles.odd}`} />
      </div>
    </div>
  );
};

export const pageMeta = {
  rank: 5,
  title: 'About',
  route: '/about'
};

export default About;