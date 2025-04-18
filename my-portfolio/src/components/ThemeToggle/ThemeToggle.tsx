import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Load theme from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  // Toggle and persist theme
  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  return (
    <div className={styles.toggleWrapper} onClick={toggleTheme}>
      <div className={`${styles.toggleKnob} ${styles[theme]}`} />
      <div className={styles.iconWrapper}>
        <Sun className={styles.sun} />
        <Moon className={styles.moon} />
      </div>
    </div>
  );
};

export default ThemeToggle;