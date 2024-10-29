import Header from "../../../../Components/Header";
import {
  useFileContext,
  useGoNextFile,
  useGoPrevFile,
  useSetFileTo,
} from "../Context";
import styles from "./styles.module.css";
import FILES from "../../FILES.json";
import { LeftIcon, RightIcon } from "../Icons/Controls";
import { MainContent } from "./MainContent";
DesktopView.propTypes = {};

function DesktopView(props) {
  const file = useFileContext();
  const goToIndex = useSetFileTo();
  const goToNext = useGoNextFile();
  const goToPrev = useGoPrevFile();
  return (
    <main className={styles.reglamento}>
      <Header />
      <main>
        <aside className={styles.aside}>
          <header>
            <h3>{file.title}</h3>
            <span className={styles.controls}>
              <LeftIcon className={styles.icon} onClick={() => goToPrev()} />
              <RightIcon className={styles.icon} onClick={() => goToNext()} />
            </span>
          </header>
          <ul>
            {FILES.map((value, i) => (
              <li key={i} onClick={() => goToIndex(i)}>
                {value.title}
              </li>
            ))}
          </ul>
        </aside>
        <MainContent />
      </main>
    </main>
  );
}

export default DesktopView;
