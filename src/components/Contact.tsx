import { useState } from 'react';
import { Button, Card, Modal, Space, Typography, theme as antdTheme } from 'antd';
import {
  DownloadOutlined,
  EyeOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { assets, contact } from '../data/content';

const { Title, Text, Link } = Typography;

export default function Contact() {
  const { token } = antdTheme.useToken();
  const [certOpen, setCertOpen] = useState(false);

  return (
    <section
      id="contact"
      style={{
        maxWidth: 980,
        margin: '0 auto',
        padding: '24px 24px 56px',
        scrollMarginTop: 80,
      }}
    >
      <Title level={2}>Contact</Title>
      <Card styles={{ body: { padding: 24 } }}>
        <Space direction="vertical" size={20} style={{ width: '100%' }}>
          <Space align="center" wrap size={12}>
            <MailOutlined style={{ color: token.colorPrimary, fontSize: 18 }} />
            <Text copyable={{ text: contact.email }} style={{ fontSize: 15 }}>
              {contact.email}
            </Text>
          </Space>

          <Space align="center" wrap size={12}>
            <LinkedinOutlined style={{ color: token.colorPrimary, fontSize: 18 }} />
            <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
          </Space>

          <Space align="center" wrap size={12}>
            <GithubOutlined style={{ color: token.colorPrimary, fontSize: 18 }} />
            <Link href={contact.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          </Space>

          <Space wrap size={12}>
            <Button icon={<DownloadOutlined />} href={assets.cvUrl} download>
              Download CV
            </Button>
            <Button icon={<EyeOutlined />} onClick={() => setCertOpen(true)}>
              View Certificate
            </Button>
          </Space>
        </Space>
      </Card>

      <Modal
        title="Google Certified Gemini Educator"
        open={certOpen}
        onCancel={() => setCertOpen(false)}
        footer={[
          <Button key="download" icon={<DownloadOutlined />} href={assets.certUrl} download>
            Download
          </Button>,
          <Button key="close" type="primary" onClick={() => setCertOpen(false)}>
            Close
          </Button>,
        ]}
        width={800}
        style={{ top: 24 }}
        styles={{ body: { padding: 0 } }}
      >
        <iframe
          src={assets.certUrl}
          title="Google Certificate"
          style={{ width: '100%', height: '80vh', border: 0 }}
        />
      </Modal>
    </section>
  );
}
