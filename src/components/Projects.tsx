import { Card, List, Space, Tag, Typography, theme as antdTheme } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { projects } from '../data/content';

const { Title, Paragraph, Text, Link } = Typography;

export default function Projects() {
  const { token } = antdTheme.useToken();

  return (
    <section
      id="projects"
      style={{
        maxWidth: 980,
        margin: '0 auto',
        padding: '24px 24px 56px',
        scrollMarginTop: 80,
      }}
    >
      <Title level={2}>Project</Title>
      <Space direction="vertical" size={24} style={{ width: '100%' }}>
        {projects.map((p) => (
          <Card
            key={p.name}
            hoverable
            className="glass"
            styles={{ header: { padding: '16px 24px' }, body: { padding: 24 } }}
            title={
              <Space direction="vertical" size={6}>
                <Text strong style={{ fontSize: 20 }}>
                  {p.name}
                </Text>
                <Text type="secondary" style={{ fontSize: 13 }}>
                  {p.stack} · {p.period}
                </Text>
              </Space>
            }
            extra={
              <Link href={p.repoUrl} target="_blank" rel="noopener noreferrer">
                <GithubOutlined /> GitHub
              </Link>
            }
          >
            <Paragraph style={{ color: token.colorTextSecondary }}>{p.summary}</Paragraph>
            <List
              size="small"
              dataSource={p.highlights}
              renderItem={(item) => (
                <List.Item style={{ display: 'list-item', listStyleType: 'disc', marginLeft: 20 }}>
                  {item}
                </List.Item>
              )}
            />
            <Space wrap size={8} style={{ marginTop: 12 }}>
              {p.tags.map((t) => (
                <Tag key={t} style={{ margin: 0 }}>
                  {t}
                </Tag>
              ))}
            </Space>
          </Card>
        ))}
      </Space>
    </section>
  );
}
