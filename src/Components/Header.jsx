import React, {useContext} from "react";
import useTheme from "./useTheme";
import { Link } from "react-router-dom";
function Header() {
  const Toggle = useTheme();
  return (
    <header className="header">
      <Link to="/">
        <img src="/Prepa_Ibero.svg" alt="Brnad_logo" height="100%" width="100%"/>
      </Link>
      <h2>
        <Link to="/">Portal<br/>Familias</Link>
      </h2>
      <Toggle style="OtherToggle"/>
    </header>
  );
}

export default Header;
