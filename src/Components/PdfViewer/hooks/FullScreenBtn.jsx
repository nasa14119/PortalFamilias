/* eslint-disable react/prop-types */
import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";
import FullScreenIcon from "../Icons/EnterFullScreen";
import styles from "../styles.module.css";
import ExitFullScreen from "../Icons/ExitFullScreen";
export function useFullScreen() {
  const fullScreenPluginInstance = fullScreenPlugin({
    renderExitFullScreenButton: (props) => (
      <div
        style={{
          bottom: "1rem",
          position: "fixed",
          right: "5%",
          zIndex: 1,
        }}
      >
        <ExitFullScreen className={styles.icon} onClick={props.onClick} />
      </div>
    ),
  });
  const { EnterFullScreen } = fullScreenPluginInstance;
  const Btn = ({ onClick }) => (
    <FullScreenIcon
      className={`${styles.icon} ${styles.hide_mobile} `}
      onClick={onClick}
    />
  );
  return [
    () => (
      <EnterFullScreen>
        {(props) => <Btn onClick={props.onClick} />}
      </EnterFullScreen>
    ),
    fullScreenPluginInstance,
  ];
}
