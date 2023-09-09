import { Link } from "react-router-dom";

export function Notification(){
  return (
    <div className="notification_conteiner">
      <span className="noti_asig">
        <i className="fa-solid fa-bell"></i>
        NOTIFICACIONES
      </span>
      <div>
        <a href="/evaluacion/tutor">
          Evaluacion de tutores&nbsp;
          <i className="fa-solid fa-angles-right"></i>
        </a>
      </div>
      <div>
        <a href="/evaluacion/profesor">
          La evaluacion de profesores ya esta aquí&nbsp;
          <i className="fa-solid fa-angles-right"></i>
        </a>
      </div>
      <div>
        <a href="#">
          Inscripcion de talleres&nbsp;
          <i className="fa-solid fa-angles-right"></i>
        </a>
      </div>
      <div>
        <Link to="/pago">
          Pago de colegiaturas&nbsp;
          <i className="fa-solid fa-angles-right"></i>
        </Link>
      </div>
      <a href="#" id="Hist_incidentes">
        Historial de incidentes
        <i className="fa-solid fa-angles-right"></i>
      </a>
    </div>
  );
}