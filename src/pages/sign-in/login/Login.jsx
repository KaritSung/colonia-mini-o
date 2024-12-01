import { Layout, Button, Row, Col, Typography, Form, Input } from "antd";
import Swal from "sweetalert2";

const { Title, Text } = Typography;
const { Footer, Content } = Layout;

const LoginPage = ({ forwardPage }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    forwardPage();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row gutter={[24, 0]} justify="space-around">
      <Col
        xs={{ span: 24, offset: 0 }}
        lg={{ span: 6, offset: 0 }}
        md={{ span: 12 }}
      >
        <Title
          style={{
            textAlign: "center",
            fontSize: 34,
            color: "#57734D",
          }}
          className="mb-10"
        >
          ลงชื่อเข้าใช้งาน
        </Title>

        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          className="row-col"
        >
          <Form.Item
            className="username"
            label="เบอร์โทรศัพท์ / อีเมล์"
            name="tel"
            rules={[
              {
                required: true,
                message: "กรอกเบอร์สิไอ้ควาย!! เล้ง",
              },
            ]}
          >
            <Input placeholder="กรอกข้อมูลผู้ใช้งาน" type="tel" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "100%",
                padding: 3,
                backgroundColor: "#57734D",
              }}
            >
              <Title style={{ color: "white" }} level={5}>
                เข้าสู่ระบบ
              </Title>
            </Button>
          </Form.Item>
        </Form>
        <Title
          style={{
            textAlign: "center",
            fontSize: 16,
            color: "#57734D",
          }}
        >
          ลงทะเบียนเข้าใช้งาน
        </Title>
      </Col>
    </Row>
  );
};

export default LoginPage;
