import Header from "../../../../Components/Header";
import styles from "./styles.module.css";
import { PdfViewer } from "../../../../Components/PdfViewer";
import { useFileContext } from "../Context";
import { useSideMenu } from "./SideMenu/useSideMenu";
export function PhoneView() {
  const file = useFileContext();
  const [SideMenu, openMenu] = useSideMenu();
  if (!file) return null;
  return (
    <>
      <main className={styles.main}>
        <Header />
        <section className={styles.content}>
          <header
            onClick={() => {
              openMenu((prev) => !prev);
            }}
          >
            <i className="fa-solid fa-bars" style={{ fontSize: "7vw" }}></i>
            <span>{file.title}</span>
          </header>
          <div className={styles.viewing}>
            <PdfViewer
              fileUrl={file.url}
              style={{ width: "100%" }}
              dowloadFunc={() => file.title}
            />
          </div>
        </section>
      </main>
      <SideMenu />
    </>
  );
}
