import { createTheme } from "@fluentui/react";
import themeDefs from "./themeDefs";

const list = themeDefs.themes;
const themes = list.reduce((obj, themeId) => {
    obj[themeId] = createTheme(themeDefs[themeId] || {});
    return obj;
}, {});

export { themes, list };
