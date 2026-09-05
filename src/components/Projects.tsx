import { Divider, Flex, List, Space, Tag, Typography, theme as antdTheme } from 'antd';
import { GithubOutlined, GlobalOutlined } from '@ant-design/icons';
import { projects } from '../data/content';
import { getSkillIcon } from '../data/skillIcons';

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
      <div className="glass" style={{ padding: '8px 24px 24px', marginBottom: 24 }}>
        {projects.map((p, i) => (
          <div key={p.name}>
            {i > 0 && <Divider />}
            <Space style={{ width: '100%', justifyContent: 'space-between' }} align="start">
              <Space direction="vertical" size={6}>
                <Text strong style={{ fontSize: 20 }}>
                  {p.name}
                </Text>
                <Text type="secondary" style={{ fontSize: 13 }}>
                  {p.stack} · {p.period}
                </Text>
              </Space>
              <Space size="middle">
                {p.demoUrl && (
                  <Link href={p.demoUrl} target="_blank" rel="noopener noreferrer">
                    <GlobalOutlined /> Live Demo
                  </Link>
                )}
                <Link href={p.repoUrl} target="_blank" rel="noopener noreferrer">
                  <GithubOutlined /> GitHub
                </Link>
              </Space>
            </Space>
            <Paragraph style={{ color: token.colorTextSecondary, marginTop: 12 }}>
              {p.summary}
            </Paragraph>
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
              {p.tags.map((t) => {
                const Icon = getSkillIcon(t);
                return (
                  <Tag key={t} style={{ margin: 0, padding: '4px 10px', fontSize: 13 }}>
                    <Flex align="center" gap={6} component="span">
                      <Icon style={{ fontSize: 14 }} />
                      {t}
                    </Flex>
                  </Tag>
                );
              })}
            </Space>
          </div>
        ))}
      </div>
    </section>
  );
}
