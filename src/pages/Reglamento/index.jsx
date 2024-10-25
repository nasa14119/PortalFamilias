import React, { Fragment, useState, useEffect } from "react";
import Header from "../../Components/Header";
import { Worker } from "@react-pdf-viewer/core";
import PdfViewer from "../../Components/PdfViewer";
export function Reglamento() {
  const BASICURL = "Data_reglamento/";
  const obj = {
    "00": {
      file: `${BASICURL}00 Reglamento General Prepa Ibero 2021_2022.pdf`,
      title: "Reglamento General",
    },
    "01": {
      file: `${BASICURL}01 Reglamento de transporte 2021_2022.pdf`,
      title: "Reglamento de transporte",
    },
    "02": {
      file: `${BASICURL}02 Reglamento del gimnasio de aparatos y pesas.pdf`,
      title: "Reglamento del gimnasio de aparatos y pesas",
    },
    "03": {
      file: `${BASICURL}03 Reglamento de los laboratorios de cómputo y los servicios de telecomunicaciones.pdf`,
      title:
        "Reglamento de los laboratorios de cómputo y los servicios de telecomunicaciones",
    },
    "04": {
      file: `${BASICURL}04 Reglamento de la Biblioteca.pdf`,
      title: "Reglamento de la Biblioteca",
    },
    "05": {
      file: `${BASICURL}05 Reglamento de talleres y equipos representativos.pdf`,
      title: "Reglamento de talleres y equipos representativos",
    },
    "06": {
      file: `${BASICURL}06 Reglamento de intercambios y movilidad estudiantil.pdf`,
      title: "Reglamento de intercambios y movilidad estudiantil",
    },
    "07": {
      file: `${BASICURL}07 Reglamento de laboratorios de ciencias experimentales.pdf`,
      title: "Reglamento de laboratorios de ciencias experimentales",
    },
    "08": {
      file: `${BASICURL}08 Reglamento de idiomas 2021_2022.pdf`,
      title: "Reglamento de idiomas",
    },
    "09": {
      file: `${BASICURL}09 Protocolo de Atencion para Casos de Violencia de Genero de Prepa Ibero.pdf`,
      title:
        "Protocolo de Atencion para Casos de Violencia de Genero de Prepa Ibero",
    },
    "010": {
      file: `${BASICURL}10 Anexo 1 Conceptos sobre Protocolo Casos Violencia de Genero Prepa Ibero.pdf`,
      title:
        "Anexo 1 Conceptos sobre Protocolo Casos Violencia de Genero Prepa Ibero",
    },
    "011": {
      file: `${BASICURL}11 Anexo 2 Glosario Definiciones y Marco Conceptual Protocolo Violencia Genero Prepa Ibero.pdf`,
      title:
        "Anexo 2 Glosario Definiciones y Marco Conceptual Protocolo Violencia Genero",
    },
  };
  const TotalFiles = Object.keys(obj).length;
  const [menuReglamento, openMenu] = useState(false);
  const [file, switchFile] = useState("00");
  const Index_format = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "010",
    "011",
  ];
  const [index_Display, setIndexDisplay] = useState(
    Index_format.findIndex((iterator) => iterator === file) + 1
  );
  useEffect(() => {
    setIndexDisplay(
      Index_format.findIndex((iterator) => iterator === file) + 1
    );
  }, [file]);
  const handleCarruselRight = () => {
    let index;
    index = Index_format.findIndex((iterator) => iterator === file);
    index++;
    if (index >= TotalFiles) {
      switchFile("00");
      return;
    }
    switchFile(`0${index}`.toString());
  };
  const handleCarruselLeft = () => {
    let index;
    index = Index_format.findIndex((iterator) => iterator === file);
    index--;
    if (index < 0) {
      index = TotalFiles - 1;
      switchFile(`0${index.toString()}`);
      return;
    }
    switchFile(`0${index}`);
  };
  return (
    <Fragment>
      <Header />
      <main className="main-reglamento">
        <nav>
          <div className="index_display">
            <i
              className="fa-solid fa-chevron-left"
              onClick={handleCarruselLeft}
            ></i>
            {` ${index_Display} / ${TotalFiles} `}
            <i
              className="fa-solid fa-chevron-right"
              onClick={handleCarruselRight}
            ></i>
          </div>
          <div className="reglamento_conteiner">
            <i
              className="fa-solid fa-bars"
              onClick={() => {
                openMenu((prev) => !prev);
              }}
            ></i>
            <span>{obj[file].title}</span>
          </div>
          <div className="selectIndex">
            {Object.entries(obj).map((iteration, index) => {
              return (
                <div
                  key={`${iteration[1].title} numero ${index}`}
                  onClick={() => switchFile(iteration[0])}
                >
                  {iteration[1].title}
                </div>
              );
            })}
          </div>
          {/* Phone view only */}
          <article className="selectIndexPhone" data-show-menu={menuReglamento}>
            <header>
              <span>{obj[file].title}</span>
              <i
                className="fa-solid fa-x"
                onClick={() => openMenu((prev) => !prev)}
              ></i>
            </header>
            <main onClick={() => openMenu((prev) => !prev)}>
              {Object.entries(obj).map((iteration, index) => {
                return (
                  <div
                    key={`${iteration[1].title} numero ${index}`}
                    onClick={() => switchFile(iteration[0])}
                  >
                    {iteration[1].title}
                  </div>
                );
              })}
            </main>
          </article>
        </nav>
        <section className="Pdf_viewer">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
            <PdfViewer fileUrl={obj[file].file} />
          </Worker>
        </section>
      </main>
    </Fragment>
  );
}
