import { useState } from "react";
import {
  Button,
  Card,
  List,
  Modal,
  Typography,
  theme as antdTheme,
} from "antd";
import { DownloadOutlined, EyeOutlined } from "@ant-design/icons";
import { certifications } from "../data/content";
import { getSkillIcon } from "../data/skillIcons";

const { Title, Text, Paragraph } = Typography;

export default function Certifications() {
  const { token } = antdTheme.useToken();
  const [viewUrl, setViewUrl] = useState<string | null>(null);

  return (
    <section
      id="certifications"
      style={{
        maxWidth: 980,
        margin: "0 auto",
        padding: "24px 24px 56px",
        scrollMarginTop: 80,
      }}
    >
      <Title level={2}>Certifications</Title>
      <Card className="glass" styles={{ body: { padding: 24 } }}>
        <List
          size="small"
          itemLayout="vertical"
          dataSource={certifications}
          renderItem={(cert) => {
            const Icon = getSkillIcon(cert.title);
            return (
              <List.Item key={cert.title} style={{ padding: "16px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Icon style={{ fontSize: 28, color: token.colorPrimary }} />
                  <div>
                    <Text strong style={{ fontSize: 17 }}>
                      {cert.title}
                    </Text>
                    <div>
                      <Text type="secondary">
                        {cert.issuer} · {cert.year}
                      </Text>
                    </div>
                  </div>
                </div>
                <Paragraph
                  style={{
                    margin: "12px 0 0",
                    color: token.colorTextSecondary,
                  }}
                >
                  {cert.description}
                </Paragraph>
                {cert.certUrl && (
                  <div
                    style={{
                      marginTop: 12,
                      display: "flex",
                      gap: 12,
                      flexWrap: "wrap",
                    }}
                  >
                    <Button
                      icon={<EyeOutlined />}
                      onClick={() => setViewUrl(cert.certUrl!)}
                    >
                      View
                    </Button>
                  </div>
                )}
              </List.Item>
            );
          }}
        />
      </Card>

      <Modal
        title="Certificate"
        open={viewUrl !== null}
        onCancel={() => setViewUrl(null)}
        footer={[
          <Button
            key="download"
            icon={<DownloadOutlined />}
            href={viewUrl ?? undefined}
            download
          >
            Download
          </Button>,
          <Button key="close" type="primary" onClick={() => setViewUrl(null)}>
            Close
          </Button>,
        ]}
        width={800}
        style={{ top: 24 }}
        styles={{ body: { padding: 0 } }}
      >
        {viewUrl && (
          <iframe
            src={viewUrl}
            title="Certificate"
            style={{ width: "100%", height: "80vh", border: 0 }}
          />
        )}
      </Modal>
    </section>
  );
}
