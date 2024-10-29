import { getFilePlugin } from "@react-pdf-viewer/get-file";
import styles from "../styles.module.css";
import DownloadIcon from "../Icons/Dowload";
export const useDowloadBtn = () => {
  const dowloadInstance = getFilePlugin({
    fileNameGenerator: () => {
      return "dowload.pdf";
    },
  });
  const { Download } = dowloadInstance;
  const Btn = (props) => <DownloadIcon {...props} className={styles.icon} />;
  return [
    () => <Download>{(props) => <Btn onClick={props.onClick} />}</Download>,
    dowloadInstance,
  ];
};
