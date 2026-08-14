import { Button, Card, Space, Typography, theme as antdTheme } from "antd";
import {
  DownloadOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { assets, contact } from "../data/content";

const { Title, Text, Link } = Typography;

export default function Contact() {
  const { token } = antdTheme.useToken();

  return (
    <section
      id="contact"
      style={{
        maxWidth: 980,
        margin: "0 auto",
        padding: "24px 24px 56px",
        scrollMarginTop: 80,
      }}
    >
      <Title level={2}>Contact</Title>
      <Card className="glass" styles={{ body: { padding: 24 } }}>
        <Space direction="vertical" size={20} style={{ width: "100%" }}>
          <Space align="center" wrap size={12}>
            <MailOutlined style={{ color: token.colorPrimary, fontSize: 18 }} />
            <Text copyable={{ text: contact.email }} style={{ fontSize: 15 }}>
              {contact.email}
            </Text>
          </Space>

          <Space align="center" wrap size={12}>
            <LinkedinOutlined
              style={{ color: token.colorPrimary, fontSize: 18 }}
            />
            <Link
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </Space>

          <Space align="center" wrap size={12}>
            <GithubOutlined
              style={{ color: token.colorPrimary, fontSize: 18 }}
            />
            <Link
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </Space>

          <Space wrap size={12}>
            <Button icon={<DownloadOutlined />} href={assets.cvUrl} download>
              Download CV
            </Button>
          </Space>
        </Space>
      </Card>
    </section>
  );
}
