import React from 'react';
import styles from '@styles/pages.module.css';
import projectStyles from './Projects.module.css';
import TimelineNode from '@components/Projects/TimelineNode';
import ProjectNodes from '@components/Projects/ProjectNodes';


const Projects: React.FC = () => {
  return (
    <section className={projectStyles.pageWrapper}>
      <h2 className={styles.heading}>Projects</h2>

      <h3 className={styles.heading}>Present</h3>

      <div className={projectStyles.timeline}>
        <div className={projectStyles.nodeBaselineTop}></div>
        <div className={projectStyles.nodeLine}></div>
        <div className={projectStyles.nodeBaselineBottom}></div>

        {ProjectNodes.map((project, index) => (
          <TimelineNode
            key={index}
            project={project}
            align={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}

      </div>
    </section>
  );
};

export const pageMeta = {
  rank: 2,
  title: 'Projects',
  route: '/projects'
};

export default Projects;