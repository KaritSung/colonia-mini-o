import { UserAddOutlined } from "@ant-design/icons";
import { Layout, Button, Row, Col, Typography, Avatar, Space } from "antd";

const { Title } = Typography;

const HomePage = ({ forwardPage }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    forwardPage();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onLogout = () => {
    // ลบ token ออกจาก localStorage
    localStorage.removeItem("token");

    // คุณสามารถเพิ่มการรีเฟรชหน้า หรือ redirect ไปยังหน้าอื่น เช่น หน้า Sign In
    window.location.href = "/sign-in"; // เปลี่ยนเส้นทางไปยังหน้าล็อกอิน
    // หรือ
    // history.push("/sign-in"); // หากใช้ react-router-dom
  };

  return (
    <Row gutter={[24, 0]} justify="center" style={{ backgroundColor: "red" }}>
      <Col
        span={24}
        style={{ textAlign: "center", width: "100%", backgroundColor: "blue" }}
      >
        <Space
          direction="vertical" // จัดเรียงในแนวตั้ง
          size="large" // ระยะห่างระหว่างแต่ละองค์ประกอบ
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Avatar
            size={{ xs: 100, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            icon={<UserAddOutlined />}
          />
          <Button
            type="primary"
            style={{
              width: "100%", // ให้ปุ่มกว้างเต็มที่
              backgroundColor: "#57734D",
            }}
          >
            <Title level={5} style={{ color: "white" }}>
              กระถางของฉัน
            </Title>
          </Button>

          <Button
            type="primary"
            style={{
              width: "100%", // ให้ปุ่มกว้างเต็มที่
              backgroundColor: "#57734D",
            }}
          >
            <Title level={5} style={{ color: "white" }}>
              ติดต่อเรา
            </Title>
          </Button>

          <Button
            type="primary"
            onClick={onLogout}
            style={{
              width: "100%", // ให้ปุ่มกว้างเต็มที่
              backgroundColor: "#57734D",
            }}
          >
            <Title level={5} style={{ color: "white" }}>
              ออกจากระบบเหี้ยไรก็ชั่ง
            </Title>
          </Button>
        </Space>
      </Col>
    </Row>
  );
};

export default HomePage;
