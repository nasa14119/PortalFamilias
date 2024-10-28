import Header from "../../../../Components/Header";
import styles from "./styles.module.css";
import { useFileContext } from "../Context";
export function PhoneView() {
  const file = useFileContext();
  console.log(file);
  if (!file) return null;
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.content}>
        <header>
          <i
            className="fa-solid fa-bars"
            style={{ fontSize: "7vw" }}
            onClick={() => {
              openMenu((prev) => !prev);
            }}
          ></i>
          <span>{file.title}</span>
        </header>
        <div className={styles.viewing}></div>
      </section>
    </main>
  );
}
