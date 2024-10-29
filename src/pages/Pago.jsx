import React, { Fragment, useState, useEffect } from "react";
import Header from "../Components/Header";
import Form from "../Components/PayForm";
import "./css/pago.css";

const PagoExtraodinarios = () => {
  return (
    <div className="AboonoMonedero">
      <div className="row-1">
        <ul>
          <li>
            $ Total
            <br />
            <span className="descrip_recibo">00,000.00</span>
          </li>
          <li>
            <i className="fa-solid fa-dumbbell"></i>
            <span className="descrip_recibo" style={{ fontSize: "18px" }}>
              Actividad a pagar
              <br />
              <span className="fecha_recibo">Actividad</span>
            </span>
          </li>
          <li>
            <i className="fa-solid fa-circle-exclamation"></i>
            <br />
            <span className="descrip_recibo">
              Ultimo dia de pago
              <br />
              <span className="fecha_recibo">01/05/23</span>
            </span>
          </li>
        </ul>
      </div>
      <div className="row-2">
        <Form />
      </div>
    </div>
  );
};
const PagoServicios = () => {
  return (
    <div className="Colegiatura">
      <div className="row-1">
        <ul>
          <li>
            $ Total
            <br />
            <span className="descrip_recibo">00,000.00</span>
          </li>
          <li>
            <i className="fa-solid fa-receipt"></i>
            <span className="descrip_recibo">
              Tramite
              <br />
              <span className="fecha_recibo">Lorem ipsum dolor</span>
            </span>
          </li>
          <li>
            <i className="fa-solid fa-circle-exclamation"></i>
            <br />
            <span className="descrip_recibo">
              Ultimo dia de pago
              <br />
              <span className="fecha_recibo">01/05/23</span>
            </span>
          </li>
        </ul>
      </div>
      <div className="row-2">
        <Form />
      </div>
    </div>
  );
};
const AbonoMonedero = () => {
  let prevSaldo = 500;
  const [NuevoSaldo, changeSaldo] = useState(0);
  return (
    <div className="AboonoMonedero">
      <div className="row-1">
        <ul>
          <li>
            <i className="fa-solid fa-wallet"></i>
            <br />
            <span className="descrip_recibo">
              Nuevo Saldo
              <br />
              <span className="descrip_recibo">
                $ {NuevoSaldo === 0 ? "00, 000.00" : NuevoSaldo + prevSaldo}
              </span>
            </span>
          </li>
          <li>
            $ Saldo Actual
            <br />
            <span className="fecha_recibo">
              {prevSaldo === 0 ? "00,000.00" : prevSaldo}
            </span>
          </li>
          <li>
            <i className="fa-solid fa-circle-exclamation"></i>
            <br />
            <span className="descrip_recibo">
              Total a pagar
              <br />
              <span className="fecha_recibo">
                $ {NuevoSaldo === 0 ? "000.00" : NuevoSaldo}
              </span>
            </span>
          </li>
        </ul>
      </div>
      <div className="row-2">
        <div className="input_abono_conteiner">
          <input
            type="number"
            id="abono_input"
            value={NuevoSaldo === 0 ? "" : NuevoSaldo}
            max={10000000000000}
            onChange={(e) => changeSaldo(Number(e.target.value))}
            placeholder="000.00"
          />
          <label htmlFor="abono_input">Abono</label>
          <span
            style={{
              position: "absolute",
              left: "0",
              bottom: "8px",
              fontSize: "14px",
            }}
          >
            $
          </span>
        </div>
        <Form />
      </div>
    </div>
  );
};
const Colegiatura = () => {
  return (
    <div className="Colegiatura">
      <div className="row-1">
        <ul>
          <li>
            $ Total
            <br />
            <span className="descrip_recibo">00,000.00</span>
          </li>
          <li>
            <i className="fa-regular fa-calendar"></i>
            <br />
            <span className="descrip_recibo">
              Colegiatura Otoño
              <br />
              <span className="fecha_recibo">01/01/23</span>
            </span>
          </li>
          <li>
            <i className="fa-solid fa-circle-exclamation"></i>
            <br />
            <span className="descrip_recibo">
              Siguiente Pago
              <br />
              <span className="fecha_recibo">01/05/23</span>
            </span>
          </li>
        </ul>
      </div>
      <div className="row-2">
        <Form />
      </div>
    </div>
  );
};
export function Pago() {
  const semiRoutes = [
    <Colegiatura />,
    <AbonoMonedero />,
    <PagoServicios />,
    <PagoExtraodinarios />,
  ];
  const [indexPage, changeIndex] = useState("0");
  const [display_pago, changeDisplay] = useState(0);
  const navClickHandler = (element) => {
    let eleIndex = element.dataset.index;
    changeIndex((prev) => eleIndex);
  };
  useEffect(() => {
    changeDisplay(semiRoutes[indexPage]);
  }, [indexPage]);
  return (
    <Fragment>
      <Header />
      <ul className="pago_navbar">
        <li
          data-index="0"
          onClick={(e) => navClickHandler(e.target)}
          className={indexPage === "0" ? "active" : "nav_link_pago"}
        >
          Pago Colegiatura
        </li>
        <li
          data-index="1"
          onClick={(e) => navClickHandler(e.target)}
          className={indexPage === "1" ? "active" : "nav_link_pago"}
        >
          Abono monedero
        </li>
        <li
          data-index="2"
          onClick={(e) => navClickHandler(e.target)}
          className={indexPage === "2" ? "active" : "nav_link_pago"}
        >
          Pago Tramites y Servicios
        </li>
        <li
          data-index="3"
          onClick={(e) => navClickHandler(e.target)}
          className={indexPage === "3" ? "active" : "nav_link_pago"}
        >
          Pago de Actividades Extraordinarias
        </li>
      </ul>
      <main className="main_pago">{display_pago}</main>
    </Fragment>
  );
}
