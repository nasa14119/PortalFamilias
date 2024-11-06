import React, { Fragment } from "react";
import "./styles.css";
import { PhoneView } from "./components/PhoneView";
import { ContextPdf } from "./components/Context";
import DesktopView from "./components/DesktopView";
export function Reglamento() {
  return (
    <Fragment>
      <ContextPdf>
        <PhoneView />
        <DesktopView />
      </ContextPdf>
    </Fragment>
  );
}
