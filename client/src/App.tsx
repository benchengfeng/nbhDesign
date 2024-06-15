// App.js
import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import AppHeader from "./components/common/header";
import AppFooter from "./components/common/footer";
import { Layout } from "antd";
import AppHome from "./views/home";
// import FetcherHook from "./api/fetcher";
// import UnderConstruction from "./components/common/underConstruction";
// import AppRouter from "./routes/appRouter";

const { Header, Content, Footer } = Layout;

function App() {
  // const isBrandEnabled = FetcherHook()

  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
         {/* {isBrandEnabled[1].enabled ?  <AppHome /> : <UnderConstruction/> } */}
     
         <AppHome />
        {/* Include AppRouter here to render different views */}
        {/* <AppRouter /> */}
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
