import storage from "local-storage-fallback";
import React from "react";
import { useThemeStore } from "../store";

function useMode() {
  const { themeMode, setThemeMode } = useThemeStore((state) => state);

  React.useEffect(() => {
    storage.setItem("mode", JSON.stringify(themeMode));
  }, [themeMode]);

  function onHandleMode() {
    let tempMode;
    if (themeMode === "dark") tempMode = "light";
    else tempMode = "dark";
    setThemeMode(tempMode);
  }

  const mode = themeMode;
  return { onHandleMode, mode };
}

export default useMode;
