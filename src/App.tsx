import { useEffect, useState } from 'react';
import { App as AntdApp, ConfigProvider, Layout } from 'antd';
import SiteHeader from './components/SiteHeader';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import SiteFooter from './components/SiteFooter';
import Background from './components/Background';
import './components/Glass.css';
import { getTheme, type ThemeMode } from './theme';

const { Content } = Layout;
const STORAGE_KEY = 'portfolio-theme';

function getInitialMode(): ThemeMode {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export default function App() {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode);
    document.body.style.background = 'transparent';
    document.body.classList.toggle('theme-dark', mode === 'dark');
  }, [mode]);

  const toggleTheme = () => setMode((m) => (m === 'dark' ? 'light' : 'dark'));

  return (
    <ConfigProvider theme={getTheme(mode)}>
      <AntdApp>
        <Background mode={mode} />
        <Layout style={{ minHeight: '100vh', background: 'transparent', position: 'relative', zIndex: 1 }}>
          <SiteHeader mode={mode} onToggleTheme={toggleTheme} />
          <Content>
            <Hero />
            <About />
            <Projects />
            <Education />
            <Contact />
          </Content>
          <SiteFooter />
        </Layout>
      </AntdApp>
    </ConfigProvider>
  );
}
