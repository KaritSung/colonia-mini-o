/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, { Component } from "react";
import mainImg from "../assets/images/main_bg.png";
import { Link } from "react-router-dom";
import {
  Layout,
  Menu,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Switch,
  Space,
} from "antd";
import signinbg from "../assets/images/img-signin.jpg";
import Swal from "sweetalert2";
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import logo from "../assets/images/logo.png";
function onChange(checked) {
  console.log(`switch to ${checked}`);
}
const { Title } = Typography;
const { Header, Footer, Content } = Layout;

export default class SignIn extends Component {
  render() {
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
      <>
        <Layout
          className="layout-default layout-signin"
          style={{
            backgroundImage: `url(${mainImg})`,
            backgroundSize: "cover", // ปรับให้รูปเต็มพื้นที่โดยไม่บิดเบือน
            backgroundPosition: "center", // จัดให้อยู่กึ่งกลาง
            backgroundRepeat: "no-repeat", // ไม่ให้รูปซ้ำ
            minHeight: "100vh", // ความสูงเต็มหน้าจอ
            width: "100%", // ความกว้างเต็มหน้าจอ
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
                    label="
                    เบอร์โทรศัพท์ / อีเมล์"
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
              <Menu.Item>Company</Menu.Item>
              <Menu.Item>About Us</Menu.Item>
              <Menu.Item>Teams</Menu.Item>
              <Menu.Item>Products</Menu.Item>
              <Menu.Item>Blogs</Menu.Item>
              <Menu.Item>Pricing</Menu.Item>
            </Menu>
            <Menu mode="horizontal" className="menu-nav-social">
              <Menu.Item>
                <Link to="#">{<DribbbleOutlined />}</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">{<TwitterOutlined />}</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">{<InstagramOutlined />}</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">
                  <svg
                    width="18"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path>
                  </svg>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">{<GithubOutlined />}</Link>
              </Menu.Item>
            </Menu>
          </Footer>
        </Layout>
      </>
    );
  }
}
