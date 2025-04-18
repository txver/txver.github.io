import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react'; // Hamburger icon
import { useState } from 'react';

import styles from './HeaderBar.module.css';
import Images from '@assets/Images';


interface HeaderProps {
  pages: {
    name: string;
    path: string;
    component: any;
    rank: number;
    title: string;
  }[];
}

const HeaderBar: React.FC<HeaderProps> = ({ pages }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  console.log(location.pathname);
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContent}>
        <div className={styles.profileSection}>
          <img src={Images.profile} alt="Profile" className={styles.profileImage} />
          <div className={styles.nameSection}>
            <h2 className={styles.name}>Chua Ting Xuan</h2>
            <p className={styles.title}>Software Developer</p>
          </div>
        </div>

        <nav className={styles.navSection}>
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              style={{ textDecoration: 'none' }}
              className={location.pathname === page.path ? styles.activeNavItem : styles.navItem}
            >
              {page.title}
            </Link>
          ))}
        </nav>

        <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={24} />
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              style={{ textDecoration: 'none' }}
              className={location.pathname === page.path ? styles.activeNavItem : styles.navItem}
              onClick={() => setMenuOpen(false)}
            >
              {page.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default HeaderBar;
