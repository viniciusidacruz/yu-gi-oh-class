import { Fragment } from "react";
import { Header } from "../Header";
import { Outlet } from "react-router-dom";

export const Layout = () => (
  <Fragment>
    <Header />

    <main>
      <Outlet />
    </main>
  </Fragment>
);
