import { Link } from "react-router-dom";

import logo from "@assets/images/logo.png";
import { ROUTES } from "@/shared/constants";

export const Logo = () => (
  <Link to={ROUTES.HOME}>
    <img src={logo} alt="logo" />
  </Link>
);
