import { Worker } from "@react-pdf-viewer/core";
import PdfViewer from "../../Components/PdfViewer";
import Calendario from "/Calendario Prepa 2022.pdf";
import { useState } from "react";
export function Calendar() {
  const [state, setState] = useState(false);
  const Calendar = () => {
    return (
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
        <PdfViewer fileUrl={Calendario} />
      </Worker>
    );
  };
  return (
    <section className="pdf_caldendario_sec">
      <div className="open_calendar" onClick={() => setState((prev) => !prev)}>
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
        {
          state && (
          <div className="pdf_caldanrio_pdfViewer">
            <Calendar />
          </div>
          )
        }
      </div>
    </section>
  );
}
