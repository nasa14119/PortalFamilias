import { PdfViewer } from "../../Components/PdfViewer";
import Calendario from "/Calendario Prepa 2022.pdf";
import { useState } from "react";
export function Calendar() {
  const [state, setState] = useState(null);
  const handleClick = () => {
    if (state === null) {
      return setState(true);
    }
    setState((prev) => !prev);
  };
  return (
    <section className="pdf_caldendario_sec">
      <div className="open_calendar" onClick={handleClick}>
        <h3>
          {state ? (
            <i className="fa-solid fa-chevron-down"></i>
          ) : (
            <i className="fa-solid fa-chevron-right"></i>
          )}
          &nbsp;Eventos importantes
        </h3>
      </div>
      <div className="pdf_conteiner" data-state={state}>
        <div
          className="pdf_caldanrio_pdfViewer"
          onAnimationEnd={() => {
            window.scrollTo({
              top: document.body.offsetHeight,
              behavior: "smooth",
            });
          }}
        >
          <PdfViewer fileUrl={Calendario} horizontal />
        </div>
      </div>
    </section>
  );
}
