import React, {useContext} from "react";
import Logo from "../../public/Prepa_Ibero.svg"
import useTheme from "./useTheme";
import { Link } from "react-router-dom";
function Header() {
  const Toggle = useTheme();
  return (
    <header className="header">
      <Link to="/PortalFamilias_Redisen-o">
        <img src={Logo} alt="Brnad_logo" />
      </Link>
      <h2>
        <Link to="/PortalFamilias_Redisen-o">Portal<br/>Familias</Link>
      </h2>
      <Toggle style="OtherToggle"/>
    </header>
  );
}

export default Header;