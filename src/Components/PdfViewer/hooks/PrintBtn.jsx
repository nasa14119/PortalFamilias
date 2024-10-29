import { printPlugin } from "@react-pdf-viewer/print";
import styles from "../styles.module.css";
import PrinterIcon from "../Icons/Print";
export const usePrintBtn = () => {
  const printInstance = printPlugin();
  const { Print } = printInstance;
  const Btn = (props) => <PrinterIcon {...props} className={styles.icon} />;
  return [
    () => <Print>{(props) => <Btn onClick={props.onClick} />}</Print>,
    printInstance,
  ];
};
