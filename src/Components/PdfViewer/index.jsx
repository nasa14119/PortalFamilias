import { Worker } from "@react-pdf-viewer/core";
import PropType from "prop-types";
// Styles from plugins
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/full-screen/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";

import ViewPdf from "./ViewPdf";
const WORKER_URL =
  "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";
PdfViewer.prototype = {
  fileUrl: PropType.string.isRequired,
  style: PropType.object,
  horizontal: PropType.bool,
  dowloadFunc: PropType.func,
};
export function PdfViewer({ fileUrl, horizontal, style, dowloadFunc }) {
  return (
    <>
      <Worker workerUrl={WORKER_URL}>
        <ViewPdf
          fileUrl={fileUrl}
          horizontal={horizontal}
          style={style}
          dowloadFunc={dowloadFunc}
        />
      </Worker>
    </>
  );
}
