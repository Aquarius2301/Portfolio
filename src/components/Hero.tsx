import { Button, Space, Typography, theme as antdTheme } from 'antd';
import { ArrowRightOutlined, MailOutlined } from '@ant-design/icons';
import { profile } from '../data/content';
import { scrollToSection } from '../utils/scroll';

const { Title, Paragraph } = Typography;

export default function Hero() {
  const { token } = antdTheme.useToken();

  return (
    <section
      id="hero"
      style={{
        maxWidth: 880,
        margin: '0 auto',
        padding: '72px 24px 56px',
        textAlign: 'center',
      }}
    >
      <Title
        level={1}
        style={{
          fontSize: 'clamp(32px, 6vw, 52px)',
          marginBottom: 16,
          backgroundImage: `linear-gradient(90deg, ${token.colorPrimary}, #69b1ff)`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
        }}
      >
        {profile.headline}
      </Title>
      <Paragraph
        style={{
          fontSize: 18,
          color: token.colorTextSecondary,
          marginBottom: 32,
        }}
      >
        {profile.subHeadline}
      </Paragraph>
      <Space size="middle" wrap style={{ justifyContent: 'center' }}>
        <Button type="primary" size="large" icon={<ArrowRightOutlined />} onClick={() => scrollToSection('#projects')}>
          See Projects
        </Button>
        <Button size="large" icon={<MailOutlined />} onClick={() => scrollToSection('#contact')}>
          Contact me
        </Button>
      </Space>
    </section>
  );
}
