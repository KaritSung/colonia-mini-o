import { MailFilled, PhoneFilled, UserAddOutlined } from "@ant-design/icons";
import { Layout, Button, Row, Col, Typography, Form, Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";

const { Title, Text } = Typography;
const { Footer, Content } = Layout;

const RegisterFormPage = ({ forwardPage, backwardPage }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    forwardPage();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);

  // ตรวจสอบว่าผู้ใช้เลื่อนถึงจุดสุดท้ายของข้อความ
  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    // เงื่อนไขตรวจสอบว่าเลื่อนถึงจุดสิ้นสุดหรือยัง
    if (Math.ceil(scrollTop) + clientHeight >= scrollHeight) {
      console.log("Scrolled to the end");
      setIsScrolledToEnd(true); // เปิดใช้งานปุ่ม
    }
  };

  const handleAccept = () => {
    forwardPage();
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
          ลงทะเบียนเข้าใช้งาน
        </Title>

        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          className="row-col"
        >
          <Form.Item
            className="username"
            label="เบอร์โทรศัพท์"
            name="tel"
            rules={[
              {
                required: true,
                message: "กรอกเบอร์สิไอ้ควาย!! เล้ง",
              },
            ]}
          >
            <Input
              placeholder="กรอกเบอร์โทรศัพท์"
              type="tel"
              prefix={<PhoneFilled />}
            />
          </Form.Item>

          <Form.Item
            className="email"
            label="อีเมล์"
            name="email"
            rules={[
              {
                required: true,
                message: "กรุณากรอก อีเมล์",
              },
            ]}
          >
            <Input
              placeholder="กรอกอีเมล์"
              type="email"
              prefix={<MailFilled />}
            />
          </Form.Item>

          <Form.Item
            className="username"
            label="ชื่อผู้ใช้งาน"
            name="username"
            rules={[
              {
                required: true,
                message: "กรุณากรอก ชื่อผู้ใช้งาน",
              },
            ]}
          >
            <Input
              placeholder="กรอกชื่อผู้ใช้งาน"
              prefix={<UserAddOutlined />}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "100%",
                padding: 3,
                marginTop: 3,
                backgroundColor: "#57734D",
              }}
            >
              <Title style={{ color: "white" }} level={5}>
                ถัดไป
              </Title>
            </Button>
          </Form.Item>
        </Form>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="link"
            onClick={backwardPage}
            style={{
              color: "#57734D",
              fontSize: 20,
              opacity: 0.6,
              textAlign: "center",
            }}
          >
            <Link to="/sign-in" style={{ color: "#57734D" }}>
              กลับ
            </Link>
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default RegisterFormPage;
