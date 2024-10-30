import { getFilePlugin } from "@react-pdf-viewer/get-file";
import styles from "../styles.module.css";
import DownloadIcon from "../Icons/Dowload";
export const useDowloadBtn = (
  { dowloadNameFunc } = { dowloadNameFunc: () => "dowload.pdf" }
) => {
  const dowloadInstance = getFilePlugin({
    fileNameGenerator: dowloadNameFunc,
  });
  const { Download } = dowloadInstance;
  const Btn = (props) => <DownloadIcon {...props} className={styles.icon} />;
  return [
    () => <Download>{(props) => <Btn onClick={props.onClick} />}</Download>,
    dowloadInstance,
  ];
};
