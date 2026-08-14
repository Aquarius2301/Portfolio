import { Layout, Typography, theme as antdTheme } from 'antd';
import { profile } from '../data/content';

const { Footer } = Layout;
const { Text } = Typography;

export default function SiteFooter() {
  const { token } = antdTheme.useToken();
  const year = new Date().getFullYear();

  return (
    <Footer style={{ textAlign: 'center', background: token.colorBgContainer, borderTop: `1px solid ${token.colorBorderSecondary}` }}>
      <Text type="secondary">
        © {year} {profile.name}. Built with React + Ant Design.
      </Text>
    </Footer>
  );
}
