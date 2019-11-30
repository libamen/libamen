import { createContext } from 'preact';
export const themes = {
    light: {
        className: "light-theme"
    },
    dark: {
        className: "dark-theme"
    }
}

  export const ThemeContext = createContext(
    themes.light // default value
  );