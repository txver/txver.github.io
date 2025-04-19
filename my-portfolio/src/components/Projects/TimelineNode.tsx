
import { useEffect, useRef, useState } from 'react';
import styles from '../../pages/Projects/Projects.module.css';
import pStyles from '@styles/pages.module.css';

export interface ProjectType {
    title: string;
    description: string;
    tags: string[];
    images: string[];
};

const TimelineNode = ({ project, align }: { project: ProjectType; align: 'left' | 'right' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.75 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`${styles.nodeWrapper} ${styles[align]} ${isVisible ? styles.expand : styles.collapse}`}
            onClick={() => console.log("Clicked project:", project.title)} // placeholder for future action
        >
            <div className={styles.node}></div>
            <div className={styles.card}>
                <div className={styles.arrow}></div>

                <div className={styles.cardContent}>
                    {project.images?.length > 0 && (
                        <img
                            src={project.images[0]}
                            alt={project.title}
                            className={`${styles.projectImage} ${styles[align + 'Image']}`}
                        />
                    )}

                    <div className={styles.cardText}>
                        <h3 className={pStyles.heading}>{project.title}</h3>

                        <div className={styles.tagContainer}>
                            {project.tags.map((tag, index) => (
                                <span key={index} className={styles.tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p>
                            {project.description.split('\n').map((line, idx) => (
                                <span key={idx}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimelineNode;