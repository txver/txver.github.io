import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HeaderBar from './components/HeaderBar/HeaderBar';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import styles from './App.module.css';
import Error404 from './internalPages/404Error/404Error';

// Auto-import all .tsx files in /pages (including subfolders)
const pageModules = import.meta.glob('./pages/**/*.tsx', { eager: true });

const pageEntries = Object.entries(pageModules).map(([path, module]) => {
  const name = path
    .split('/')
    .pop()
    ?.replace(/\.tsx$/, '') ?? 'Unknown';

  const pageMeta = (module as any).pageMeta || {};

  return {
    name,
    path: pageMeta.route ?? '/' + name.toLowerCase(),
    component: (module as any).default,
    rank: pageMeta.rank ?? Infinity,
    title: pageMeta.title ?? name
  };
});



// Sort pages by rank
const pages = pageEntries.sort((a, b) => a.rank - b.rank);
const hasRootPage = pages.some(p => p.path === '/');

function AppContent() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isValidPath = pages.some(page => page.path === currentPath);
  const showHeader = isValidPath;

  return (
    <div className={styles.appWrapper}>
      {showHeader && <HeaderBar pages={pages} />}

      <Routes>
        {/* Only add redirect if no page uses "/" */}
        {!hasRootPage && (
          <Route path="/" element={<Navigate to={pages[0].path} replace />} />
        )}

        {/* Auto-generated routes */}
        {pages.map(({ path, component: Component, name }) => (
          <Route key={name} path={path} element={<Component />} />
        ))}

        {/* Fallback */}
        <Route path="*" element={<Error404 />} />
      </Routes>

      <ThemeToggle />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}