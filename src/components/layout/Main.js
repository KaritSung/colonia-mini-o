import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import mainImg from "../../assets/images/main_bg.png";

const Main = ({ children }) => {
  useEffect(() => {
    const token = localStorage.getItem("token"); // ตรวจสอบ token จาก localStorage
    if (!token) {
      // ถ้าไม่มี token, ทำการ redirect ไปที่หน้า sign-in
      window.location.href = "/sign-in";
    }
  }, []);

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
        {children}
      </Content>
    </Layout>
  );
};

export default Main;
