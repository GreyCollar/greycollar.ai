import CssBaseline from "@mui/material/CssBaseline";
import PropTypes from "prop-types";
import RTL from "./options/right-to-left";
import { componentsOverrides } from "./overrides";
import { createPresets } from "./options/presets";
import { customShadows } from "./custom-shadows";
import { palette } from "./palette";
import { shadows } from "./shadows";
import { typography } from "./typography";
import { useMemo } from "react";
import { useSettingsContext } from "src/components/settings";

import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function ThemeProvider({ children }) {
  const settings = useSettingsContext();

  const presets = createPresets(settings.themeColorPresets);

  const memoizedValue = useMemo(
    () => ({
      palette: {
        ...palette(settings.themeMode),
        ...presets.palette,
      },
      customShadows: {
        ...customShadows(settings.themeMode),
        ...presets.customShadows,
      },
      direction: settings.themeDirection,
      shadows: shadows(settings.themeMode),
      shape: { borderRadius: 8 },
      typography,
    }),
    [
      settings.themeMode,
      settings.themeDirection,
      presets.palette,
      presets.customShadows,
    ],
  );

  const theme = createTheme(memoizedValue);

  theme.components = componentsOverrides(theme);

  return (
    <MuiThemeProvider theme={theme}>
      <RTL themeDirection={settings.themeDirection}>
        <CssBaseline />
        {children}
      </RTL>
    </MuiThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
