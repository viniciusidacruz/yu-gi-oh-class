import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = () => (
  <Fragment>
    <Header />

    <main className="min-h-[calc(100vh-350px)]">
      <Outlet />
    </main>

    <Footer />
  </Fragment>
);
