import { Timeline, Typography, theme as antdTheme } from 'antd';
import { education } from '../data/content';

const { Title, Text } = Typography;

export default function Education() {
  const { token } = antdTheme.useToken();

  return (
    <section id="education" style={{ maxWidth: 980, margin: '0 auto', padding: '24px 24px 56px' }}>
      <Title level={2}>Education & Experience</Title>
      <Timeline
        items={education.map((entry) => ({
          children: (
            <div>
              <Text strong style={{ fontSize: 16 }}>
                {entry.title}
              </Text>
              <div>
                <Text type="secondary">{entry.subtitle}</Text>
              </div>
              <div style={{ margin: '2px 0 8px' }}>
                <Text type="secondary" italic>
                  {entry.period}
                </Text>
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, color: token.colorTextSecondary }}>
                {entry.details.map((d, i) => (
                  <li key={i} style={{ marginBottom: 4 }}>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ),
        }))}
      />
    </section>
  );
}
