import mainImg from "../../assets/images/main_bg.png";
import { Layout, Menu, Typography } from "antd";
import Swal from "sweetalert2";

import facebook from "../../assets/images/facebook.png";
import line from "../../assets/images/line.png";
import gmail from "../../assets/images/gmail.png";
import LoginPage from "./login/Login.jsx";
import { useState } from "react";
import OtpPage from "./otp/OTP.jsx";

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

  const forwardPage = () => {
    console.log("ddatata");
    setStage(stage + 1);
  };

  const backwardPage = () => {
    setStage(stage - 1);
  };

  const [stage, setStage] = useState(1);

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
        {stage === 1 ? (
          <LoginPage forwardPage={forwardPage} />
        ) : stage === 2 ? (
          <OtpPage backwardPage={backwardPage} />
        ) : null}
      </Content>

      {stage == 1 ? (
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
      ) : null}
    </Layout>
  );
};

export default SignInIndex;
