import { Divider, Flex, Tag, Typography, theme as antdTheme } from 'antd';
import { about, skills } from '../data/content';

const { Title, Paragraph, Text } = Typography;

export default function About() {
  const { token } = antdTheme.useToken();

  return (
    <section id="about" style={{ maxWidth: 980, margin: '0 auto', padding: '24px 24px 56px' }}>
      <Title level={2}>About me</Title>
      <Paragraph style={{ fontSize: 17, color: token.colorTextSecondary, lineHeight: 1.7 }}>
        {about.intro}
      </Paragraph>

      <div id="skills" style={{ scrollMarginTop: 80 }}>
        <Divider orientation="left" style={{ marginTop: 40 }}>
          <Text strong>Skills</Text>
        </Divider>
        <Flex vertical gap={20}>
          {skills.map((group) => (
            <Flex key={group.category} vertical gap={10}>
              <Text strong style={{ fontSize: 15 }}>
                {group.category}
              </Text>
              <Flex wrap gap={8}>
                {group.items.map((item) => (
                  <Tag key={item} color="blue" style={{ margin: 0, padding: '4px 10px', fontSize: 13 }}>
                    {item}
                  </Tag>
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
      </div>
    </section>
  );
}
