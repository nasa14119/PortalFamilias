import { PdfViewer } from "../../../../Components/PdfViewer";
import { useFileContext } from "../Context";
import styles from "./styles.module.css";
export function MainContent() {
  const file = useFileContext();
  return (
    <div className={styles.mainContent}>
      <PdfViewer fileUrl={file.url} horizontal dowloadFunc={() => file.title} />
    </div>
  );
}
