import styled from "@emotion/styled";
import { useLocation, withRouter } from "react-router";
import React from "react";
import { appbarHeight, copylight } from "../../global";
import TitleBar from "./appBar";
import Footer from "./footer";
import Drawer from "./drawer";
const Main = styled("main")(({ theme }) => ({
  display: "flex",
  alignItems: "stretch",
  height: "100%",
  minHeight: `calc(100vh - ${copylight}px)`,
  width: "100%",
  paddingTop: `${appbarHeight}px`,
  overflowY: "hidden",
  overflowX: "hidden",
  WebkitOverflowScrolling: "auto",
  overflowScrolling: "auto",
  "& > *": {
    width: "100%",
  },
}));

type Props = {};
const Index: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <>
      {/* SPA　上部タイトルエリア */}
      <TitleBar />
      {/* SPA　サイドメニュー */}
      <Drawer />
      {/* SPA メインコンテンツ */}
      <Main id="content-wrapper">{children}</Main>
      <Footer />
    </>
  );
};

export default withRouter(Index);
