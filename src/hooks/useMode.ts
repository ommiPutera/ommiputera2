import React from "react";
import storage from "local-storage-fallback";

const DEFAULT_MODE = "dark";

interface IMode {
  mode: string;
  setMode: (value: string) => void;
}

function useMode() {
  const [mode, setMode] = React.useState(getInitialMode);

  React.useEffect(() => {
    storage.setItem("mode", JSON.stringify(mode));
  }, [mode]);

  function getInitialMode() {
    const savedMode = storage.getItem("mode");
    return savedMode ? JSON.parse(savedMode) : DEFAULT_MODE;
  }

  function onHandleMode() {
    let tempMode: IMode["mode"];
    if (mode === "dark") tempMode = "light";
    else tempMode = "dark";
    setMode(tempMode);
  }

  return { onHandleMode, mode, setMode };
}

export default useMode;
