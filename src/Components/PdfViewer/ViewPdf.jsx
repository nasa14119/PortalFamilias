/* eslint-disable react/prop-types */
import { Viewer } from "@react-pdf-viewer/core";
import styles from "./styles.module.css";
import { useFullScreen } from "./hooks/FullScreenBtn";
import { useDowloadBtn } from "./hooks/DowloadBtn";
import useZoomBtn from "./hooks/ZoomBtn";
import { usePageNav } from "./hooks/PageNav";
import { usePrintBtn } from "./hooks/PrintBtn";
function ViewPdf({ fileUrl, horizontal, style }) {
  const [FullScreenBtn, fullScreenPlugin] = useFullScreen();
  const [DowloadBtn, dowloadPlugin] = useDowloadBtn();
  const [ZoomContainer, zoomPlugin] = useZoomBtn();
  const [Nav, pagePlugin] = usePageNav();
  const [PrintBtn, printPlugin] = usePrintBtn();
  return (
    <div
      className={styles.pdfViewer}
      style={style}
      data-horizontal={typeof horizontal !== "undefined"}
    >
      <div className={styles.toolbar}>
        <Nav />
        <ZoomContainer />
        <div className={styles.lastItems}>
          <DowloadBtn />
          <PrintBtn />
          <FullScreenBtn />
        </div>
      </div>
      <Viewer
        fileUrl={fileUrl}
        theme="auto"
        plugins={[
          fullScreenPlugin,
          dowloadPlugin,
          zoomPlugin,
          pagePlugin,
          printPlugin,
        ]}
      />
    </div>
  );
}

export default ViewPdf;
