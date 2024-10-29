import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import styles from "../styles.module.css";
export const usePageNav = () => {
  const navInstance = pageNavigationPlugin();
  const { NumberOfPages, CurrentPageInput } = navInstance;
  const Btn = () => (
    <div className={styles.pageNumbers}>
      <span className={styles.pageItem}>
        <CurrentPageInput />
      </span>
      <span className={styles.pageItem}>/</span>
      <span className={styles.pageItem}>
        <NumberOfPages />
      </span>
    </div>
  );
  return [() => <Btn />, navInstance];
};
