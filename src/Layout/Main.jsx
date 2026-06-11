import { Outlet, ScrollRestoration } from "react-router-dom";

const Main = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export default Main;
