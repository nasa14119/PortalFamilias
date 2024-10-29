/* eslint-disable react/prop-types */
import { Worker } from "@react-pdf-viewer/core";
// Styles from plugins
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/full-screen/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";

import ViewPdf from "./ViewPdf";
const WORKER_URL =
  "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";
export function PdfViewer({ fileUrl, horizontal }) {
  return (
    <>
      <Worker workerUrl={WORKER_URL}>
        <ViewPdf fileUrl={fileUrl} horizontal={horizontal} />
      </Worker>
    </>
  );
}
