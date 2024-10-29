import { createContext, useContext } from "react";
import { max_index, useFileState } from "../hooks/useFileState";
const contextPdf = createContext(null);
export function ContextPdf({ children }) {
  const [file, setIndex, currentIndex] = useFileState();
  console.log(file, setIndex, currentIndex);
  return (
    <contextPdf.Provider
      value={{
        file,
        setIndex,
        currentIndex,
      }}
    >
      {children}
    </contextPdf.Provider>
  );
}
export const useFileContext = () => {
  const { file } = useContext(contextPdf);
  return file;
};
export const useGoNextFile = () => {
  const { setIndex, currentIndex } = useContext(contextPdf);
  const newValue = currentIndex + 1;
  return () => {
    if (newValue > max_index) {
      setIndex(0);
      return;
    }
    setIndex(() => newValue);
  };
};
export const useGoPrevFile = () => {
  const { setIndex, currentIndex } = useContext(contextPdf);
  const newValue = currentIndex - 1;
  return () => {
    if (newValue < 0) {
      setIndex(max_index);
      return;
    }
    setIndex(() => newValue);
  };
};
export const useSetFileTo = () => {
  const { setIndex } = useContext(contextPdf);
  return (newValue) => {
    setIndex(newValue);
  };
};
