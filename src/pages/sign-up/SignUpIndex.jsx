import { Layout, Typography } from "antd";
import mainImg from "../../assets/images/main_bg.png";
import TermAndConditionPage from "./term-and-condition/TermAndCondition";
import { useState } from "react";
import RegisterFormPage from "./register-form/RegisterForm";
import OtpPage from "./otp/OTP";

const { Text, Title } = Typography;
const { Content } = Layout;

const SignUpIndex = () => {
  const [stage, setStage] = useState(1);
  const forwardPage = () => {
    setStage(stage + 1);
  };

  const backwardPage = () => {
    setStage(stage - 1);
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
        {/* <TermAndConditionPage forwardPage={forwardPage} /> */}

        {stage === 1 ? (
          <TermAndConditionPage forwardPage={forwardPage} />
        ) : stage === 2 ? (
          <RegisterFormPage
            forwardPage={forwardPage}
            backwardPage={backwardPage}
          />
        ) : stage === 3 ? (
          <OtpPage forwardPage={forwardPage} backwardPage={backwardPage} />
        ) : null}
      </Content>
    </Layout>
  );
};

export default SignUpIndex;
