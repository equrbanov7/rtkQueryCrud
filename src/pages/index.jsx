import { Outlet } from "react-router-dom";
import Header from "./Layout/Header";

const ClinetLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default ClinetLayout;