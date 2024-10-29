import FILES from "../../../FILES.json";
import { useFileContext, useSetFileTo } from "../../Context";
import styles from "./styles-menu.module.css";
import { useToogle } from "./useToggle";
export function useSideMenu() {
  const [isOpen, setOpen] = useToogle();
  const file = useFileContext();
  const goToIndex = useSetFileTo();
  const handleClickLink = (i) => {
    setOpen();
    goToIndex(i);
  };
  const Menu = () => (
    <>
      <div className={styles.menu} data-state={isOpen}>
        <header>{file.title}</header>
        <main>
          {FILES.map((file, i) => (
            <span onClick={() => handleClickLink(i)} key={file.title}>
              {file.title}
            </span>
          ))}
        </main>
      </div>
      {isOpen && (
        <div className={styles.hide_menu} onClick={() => setOpen()}></div>
      )}
    </>
  );
  return [Menu, setOpen];
}
