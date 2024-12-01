import React from "react";
import mainImg from "../../assets/images/main_bg.png";
import { Link } from "react-router-dom";
import { Layout, Menu, Button, Row, Col, Typography, Form, Input } from "antd";
import Swal from "sweetalert2";
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";

import facebook from "../../assets/images/facebook.png";
import line from "../../assets/images/line.png";
import gmail from "../../assets/images/gmail.png";

const { Title, Text } = Typography;
const { Footer, Content } = Layout;

const SignInIndex = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
    Swal.fire({
      title: "ตัวอย่าง Aleart",
      text: "เก่งมากแม่เล้งงง !!!",
      icon: "success",
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout
      className="layout-default layout-signin"
      style={{
        backgroundImage: `url(${mainImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        padding: 20,
      }}
    >
      <Content className="signin" style={{ marginTop: "20px" }}>
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
      </Content>
      <Footer>
        <Menu mode="horizontal">
          <Menu.Item>
            <Text style={{ color: "#57734D" }} underline>
              ติดต่อเรา
            </Text>
          </Menu.Item>
        </Menu>
        <Menu mode="horizontal" className="menu-nav-social">
          <Menu.Item>
            <a
              href="mailto:example@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gmail} alt="gmail" width={55} />
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              href="http://line.me/ti/p/~karit1150"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={line} alt="Line" width={55} />
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              href="https://www.facebook.com/SinAsmoDeus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" width={55} />
            </a>
          </Menu.Item>
        </Menu>
      </Footer>
    </Layout>
  );
};

export default SignInIndex;
