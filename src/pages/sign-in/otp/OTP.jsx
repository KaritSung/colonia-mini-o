import { Layout, Button, Row, Col, Typography, Form } from "antd";
import Swal from "sweetalert2";
import { InputOTP } from "antd-input-otp"; // Don't forget to import this too!
import { useState, useEffect } from "react";

const { Title, Text } = Typography;
const { Footer, Content } = Layout;

const OtpPage = ({ backwardPage }) => {
  const correctOtp = "123456"; // OTP ที่ถูกต้องสำหรับการทดสอบ
  const [form] = Form.useForm();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // เก็บสถานะของปุ่ม
  const [isResendDisabled, setIsResendDisabled] = useState(false); // ใช้เพื่อ disable ปุ่มส่งรหัสใหม่
  const [countdown, setCountdown] = useState(30); // countdown เวลา 30 วินาที

  useEffect(() => {
    let timer;
    if (countdown > 0 && isResendDisabled) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsResendDisabled(false); // เปิดใช้งานปุ่มส่งรหัสใหม่เมื่อเวลาหมด
    }
    return () => clearInterval(timer); // เคลียร์ timer เมื่อ component ถูก unmount
  }, [countdown, isResendDisabled]);

  const onFinish = (values) => {
    const enteredOtp = values.otp.join(""); // แปลง array เป็น string
    console.log("Entered OTP:", enteredOtp);

    if (enteredOtp === correctOtp) {
      Swal.fire({
        title: "ยืนยันสำเร็จ",
        text: "OTP ถูกต้องแล้ว! เก่งมากครับน้องอัง",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "รหัส OTP ผิด",
        text: "เอ้ยผิดอะ ใส่ใจหน่อยดิ น้องอัง ก็มีหัวใจเป่า",
        icon: "error",
      });
    }
    form.resetFields(); // เคลียร์ฟอร์มหลังจาก OTP ถูกต้อง
  };

  const onOtpChange = (value) => {
    setIsButtonDisabled(value.length !== 6); // ถ้าจำนวนหลักไม่ครบ 6 หลัก จะทำให้ปุ่ม disabled
  };

  const resendOtp = () => {
    setIsResendDisabled(true); // ปิดปุ่มส่ง OTP ใหม่
    setCountdown(30); // รีเซ็ต countdown เป็น 30 วินาที
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
          ยืนยันตัวตนด้วย <br /> Email OTP
        </Title>
        <Title
          style={{
            textAlign: "center",
            fontSize: 18,
            opacity: 0.6,
            color: "#57734D",
          }}
          className="mb-10"
        >
          กรอกรหัสยืนยันตัวตนด้วย OTP
        </Title>
        <Form
          form={form} // ผูก ref กับฟอร์ม
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          className="row-col"
        >
          <Form.Item
            className="username"
            name="otp"
            rules={[
              {
                required: true,
                message: "กรุณากรอกรหัส OTP",
              },
            ]}
          >
            <InputOTP
              name="otp"
              style={{ fontSize: 30, height: 50 }}
              inputType="numeric"
              onChange={onOtpChange}
            />
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            {isResendDisabled ? (
              <Text style={{ color: "#57734D" }}>
                โปรดรอ {countdown} วินาที เพื่อขอ OTP ใหม่อีกครั้ง
              </Text>
            ) : (
              <Button
                type="link"
                onClick={resendOtp}
                style={{ color: "#57734D", fontSize: 24, opacity: 0.6 }}
              >
                <Text underline style={{ color: "#57734D" }}>
                  ส่งรหัสยืนยันใหม่อีกครั้ง
                </Text>
              </Button>
            )}
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              disabled={isButtonDisabled}
              htmlType="submit"
              style={{
                width: "100%",
                marginTop: "5rem",
                padding: 3,
                backgroundColor: "#57734D",
              }}
            >
              <Title style={{ color: "white" }} level={5}>
                ยืนยัน
              </Title>
            </Button>
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Button
              type="link"
              onClick={backwardPage}
              style={{ color: "#57734D", fontSize: 20, opacity: 0.6 }}
            >
              <Text style={{ color: "#57734D" }}>กลับ</Text>
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default OtpPage;
