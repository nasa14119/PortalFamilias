import FILES from "../FILES.json";
import { useEffect, useState } from "react";
export const max_index = FILES.length;
export const useFileState = () => {
  const [index, setIndex] = useState(0);
  const [state, setState] = useState(FILES[0]);
  const setToIndex = (param) => {
    if (typeof index === "undefined") {
      setIndex((prev_index) =>
        prev_index + 1 > max_index ? 0 : prev_index + 1
      );
    }
    setIndex(param);
  };
  useEffect(() => {
    setState(FILES[index]);
  }, [index]);
  return [{ ...state, url: `Data_reglamento/${state.url}` }, setToIndex, index];
};
