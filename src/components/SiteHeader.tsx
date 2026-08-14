import { useState } from 'react';
import { Layout, Menu, Switch, Button, Drawer, Grid, theme as antdTheme } from 'antd';
import { MenuOutlined, MoonFilled, SunFilled } from '@ant-design/icons';
import { navSections, profile } from '../data/content';
import { scrollToSection } from '../utils/scroll';
import type { ThemeMode } from '../theme';

const { Header } = Layout;
const { useBreakpoint } = Grid;

interface Props {
  mode: ThemeMode;
  onToggleTheme: () => void;
}

export default function SiteHeader({ mode, onToggleTheme }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const screens = useBreakpoint();
  const { token } = antdTheme.useToken();
  const isDark = mode === 'dark';

  const menuItems = navSections.map((s) => ({ key: s.key, label: s.label }));

  const handleClick = (anchor: string) => {
    scrollToSection(anchor);
    setDrawerOpen(false);
  };

  const menuNode = (
    <Menu
      mode="horizontal"
      selectedKeys={[]}
      items={menuItems}
      onClick={(e) => {
        const section = navSections.find((s) => s.key === e.key);
        if (section) handleClick(section.anchor);
      }}
      style={{ flex: 1, minWidth: 0, border: 'none', background: 'transparent' }}
    />
  );

  const themeSwitch = (
    <Switch
      checked={isDark}
      onChange={onToggleTheme}
      checkedChildren={<MoonFilled />}
      unCheckedChildren={<SunFilled />}
      aria-label="Toggle color theme"
    />
  );

  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '0 24px',
        background: token.colorBgContainer,
        borderBottom: `1px solid ${token.colorBorderSecondary}`,
      }}
    >
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          handleClick('#about');
        }}
        style={{
          fontWeight: 700,
          fontSize: 18,
          color: token.colorText,
          whiteSpace: 'nowrap',
          textDecoration: 'none',
        }}
      >
        {profile.name}
      </a>

      {screens.lg ? (
        <>
          {menuNode}
          {themeSwitch}
        </>
      ) : (
        <>
          <div style={{ flex: 1 }} />
          {themeSwitch}
          <Button
            type="text"
            icon={<MenuOutlined />}
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
          />
          <Drawer
            title={profile.name}
            placement="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            styles={{ body: { padding: 0 } }}
          >
            <Menu
              mode="vertical"
              selectedKeys={[]}
              items={menuItems}
              onClick={(e) => {
                const section = navSections.find((s) => s.key === e.key);
                if (section) handleClick(section.anchor);
              }}
            />
          </Drawer>
        </>
      )}
    </Header>
  );
}
