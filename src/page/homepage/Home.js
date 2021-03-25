import { React, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import View from "../views/View";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import "./Home.scss";
import MeoThumbnail from "../../assets/videos/MeoThumbnail.PNG";
import picture2 from "../../assets/images/somepic.jpg";
import logo from "../../assets/images/youtube.png";
import Video from "../../components/videos/Video";
const { Header, Content, Footer, Sider } = Layout;

const Home = () => {
  const [collapsed, setCollapse] = useState(false);
  const toggle = () => {
    setCollapse(!collapsed);
  };
  return (
    <div>
      <Router>
        <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item
                key="1"
                icon={<MenuFoldOutlined />}
                onClick={() => toggle()}
              ></Menu.Item>
              <Menu.Item key="2">
                <img src={logo} alt="logo"></img>
                <a
                  href="https://www.youtube.com/"
                  target="blank"
                  rel="referrer"
                >
                  Youtube advanced
                </a>
              </Menu.Item>
            </Menu>
          </Header>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{
              paddingTop: "60px",
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
            }}
          >
            <Menu theme="light" mode="inline" defaultSelectedKeys={["4"]}>
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link to="/home">Home</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                Trending
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                Subscriptions
              </Menu.Item>
              <Menu.Item key="4" icon={<BarChartOutlined />}>
                Gaming
              </Menu.Item>
              <Menu.Item key="5">Music</Menu.Item>
              <Menu.Item key="6">League of Legends</Menu.Item>
              <Menu.Item key="7">Movies</Menu.Item>
              <Menu.Item key="9">Settings</Menu.Item>
              <Menu.Item key="10">Report</Menu.Item>
              <Menu.Item key="11">History</Menu.Item>
              <Menu.Item key="12">Help</Menu.Item>
              <Menu.Item key="13">Send feedback</Menu.Item>
              <Menu.Item key="14">Live</Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <div
                className="site-layout-background"
                style={{ padding: 24, textAlign: "center" }}
              >
                {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
                <Switch>
                  <Route path="/" exact="true">
                    <Video
                      name="The cat was surprised by its owner"
                      src={MeoThumbnail}
                    />
                    <Video
                      name="The cat was surprised by its owner"
                      src={MeoThumbnail}
                    />
                  </Route>
                  <Route path="/home" exact="true">
                    <Video
                      name="The cat was surprised by its owner"
                      src={MeoThumbnail}
                    />
                    <Video
                      name="The cat was surprised by its owner"
                      src={MeoThumbnail}
                    />
                    <Video
                      name="The cat was surprised by its owner"
                      src={MeoThumbnail}
                    />
                    <Video
                      name="The cat was surprised by its owner"
                      src={MeoThumbnail}
                    />
                    <Video
                      name="The cat was surprised by its owner"
                      src={MeoThumbnail}
                    />
                    <Video
                      name="The cat was surprised by its owner"
                      src={MeoThumbnail}
                    />
                    <Video
                      name="The cat was surprised by its owner"
                      src={MeoThumbnail}
                    />
                    <Video
                      name="The cat was surprised by its owner"
                      src={MeoThumbnail}
                    />
                  </Route>
                  <Route path="/video" exact="true">
                    <View />
                  </Route>
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Bryan
            </Footer>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
};

export default Home;
