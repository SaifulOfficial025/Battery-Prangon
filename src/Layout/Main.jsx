import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, ScrollRestoration } from "react-router-dom";

const Main = () => {
  const lang = useSelector((state) => state.lang.lang);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export default Main;

