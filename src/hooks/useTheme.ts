import React from "react";
import storage from "local-storage-fallback";

const DEFAULT_THEME = "dark";

interface ITheme {
  mode: "light" | "dark";
  theme: { mode: ITheme["mode"] };
  setTheme: (value: { mode: ITheme["mode"] }) => void;
}

function useTheme() {
  const [theme, setTheme] = React.useState<ITheme>(getInitialTheme);

  React.useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  function getInitialTheme() {
    const savedTheme = storage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : { mode: DEFAULT_THEME };
  }

  function onHandleTheme() {
    let tempTheme: ITheme["mode"];
    const { mode } = theme;
    if (mode === "dark") tempTheme = "light";
    else tempTheme = "dark";

    const newTheme: ITheme = {
      mode: tempTheme,
      theme: {
        mode: tempTheme,
      },
      setTheme: function (value: { mode: "dark" | "light" }): void {
        throw new Error("Function not implemented.");
      },
    };
    setTheme(newTheme);
  }

  return { onHandleTheme, theme, setTheme };
}

export default useTheme;
