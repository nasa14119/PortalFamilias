/* eslint-disable react/prop-types */
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import styles from "../styles.module.css";
import { ZoomInIcon, ZoomOutIcon } from "../Icons/Zoom";
const useZoomBtn = () => {
  const zoomInstance = zoomPlugin();
  const { ZoomIn, ZoomOut, ZoomPopover } = zoomInstance;
  const Btn = () => (
    <div className={styles.zoomBtnContainer}>
      <ZoomIn>
        {(props) => (
          <ZoomInIcon className={styles.icon} onClick={props.onClick} />
        )}
      </ZoomIn>
      <span>
        <ZoomPopover />
      </span>
      <ZoomOut>
        {(props) => (
          <ZoomOutIcon className={styles.icon} onClick={props.onClick} />
        )}
      </ZoomOut>
    </div>
  );
  return [Btn, zoomInstance];
};

export default useZoomBtn;
