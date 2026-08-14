import { useEffect, useState } from 'react';
import { App as AntdApp, ConfigProvider, Layout } from 'antd';
import SiteHeader from './components/SiteHeader';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import SiteFooter from './components/SiteFooter';
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
    document.body.style.background = mode === 'dark'
      ? 'linear-gradient(180deg, #0b1220 0%, #141414 45%)'
      : 'linear-gradient(180deg, #eef4ff 0%, #f5f5f5 40%)';
    document.body.style.backgroundAttachment = 'fixed';
  }, [mode]);

  const toggleTheme = () => setMode((m) => (m === 'dark' ? 'light' : 'dark'));

  return (
    <ConfigProvider theme={getTheme(mode)}>
      <AntdApp>
        <Layout style={{ minHeight: '100vh', background: 'transparent' }}>
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
