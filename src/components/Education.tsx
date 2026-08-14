import { Col, Divider, Row, Timeline, Typography, theme as antdTheme } from "antd";
import { education, experience } from "../data/content";
import type { TimelineEntry } from "../data/content";

const { Title, Text } = Typography;

function renderTimeline(entries: TimelineEntry[], token: { colorTextSecondary: string }) {
  return (
    <Timeline
      items={entries.map((entry) => ({
        children: (
          <div>
            <Text strong style={{ fontSize: 16 }}>
              {entry.title}
            </Text>
            <div>
              <Text type="secondary">{entry.subtitle}</Text>
            </div>
            <div style={{ margin: "2px 0 8px" }}>
              <Text type="secondary" italic>
                {entry.period}
              </Text>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 18,
                color: token.colorTextSecondary,
              }}
            >
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
  );
}

export default function Education() {
  const { token } = antdTheme.useToken();

  return (
    <section
      id="education"
      style={{ maxWidth: 980, margin: "0 auto", padding: "24px 24px 56px" }}
    >
      <Title level={2}>Education & Experience</Title>
      <div className="glass" style={{ padding: "8px 24px 24px", marginBottom: 24 }}>
        <Row gutter={[32, 24]}>
          <Col xs={24} md={12}>
            <Divider orientation="left" style={{ marginTop: 16 }}>
              <Text strong>Education</Text>
            </Divider>
            {renderTimeline(education, token)}
          </Col>
          <Col xs={24} md={12}>
            <Divider orientation="left" style={{ marginTop: 16 }}>
              <Text strong>Experience</Text>
            </Divider>
            {renderTimeline(experience, token)}
          </Col>
        </Row>
      </div>
    </section>
  );
}
