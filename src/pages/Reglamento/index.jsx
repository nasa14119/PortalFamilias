import React, { Fragment, useState, useEffect } from "react";
import Header from "../../Components/Header";
import { Worker } from "@react-pdf-viewer/core";
import FILES from "./FILES.json";
import PdfViewer from "../../Components/PdfViewer";
import "./styles.css";
export function Reglamento() {
  const TotalFiles = Object.keys(FILES).length;
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
            <span>{FILES[file].title}</span>
          </div>
          <div className="selectIndex">
            {Object.entries(FILES).map((iteration, index) => {
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
              <span>{FILES[file].title}</span>
              <i
                className="fa-solid fa-x"
                onClick={() => openMenu((prev) => !prev)}
              ></i>
            </header>
            <main onClick={() => openMenu((prev) => !prev)}>
              {Object.entries(FILES).map((iteration, index) => {
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
            <PdfViewer fileUrl={`Data_reglamento/${FILES[file].file}`} />
          </Worker>
        </section>
      </main>
    </Fragment>
  );
}
