import PropTypes from "prop-types";
import { SettingsContext } from "./settings-context";
import isEqual from "lodash.isequal";
import { useLocalStorage } from "src/hooks/use-local-storage";

import { useCallback, useMemo, useState } from "react";

// ----------------------------------------------------------------------

const STORAGE_KEY = "settings";

export function SettingsProvider({ children, defaultSettings }) {
  const { state, update, reset } = useLocalStorage(
    STORAGE_KEY,
    defaultSettings,
  );

  const [openDrawer, setOpenDrawer] = useState(false);

  // Drawer
  const onToggleDrawer = useCallback(() => {
    setOpenDrawer((prev) => !prev);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setOpenDrawer(false);
  }, []);

  const canReset = !isEqual(state, defaultSettings);

  const memoizedValue = useMemo(
    () => ({
      ...state,
      onUpdate: update,
      // Reset
      canReset,
      onReset: reset,
      // Drawer
      open: openDrawer,
      onToggle: onToggleDrawer,
      onClose: onCloseDrawer,
    }),
    [canReset, onCloseDrawer, onToggleDrawer, openDrawer, reset, state, update],
  );

  return (
    <SettingsContext.Provider value={memoizedValue}>
      {children}
    </SettingsContext.Provider>
  );
}

SettingsProvider.propTypes = {
  children: PropTypes.node,
  defaultSettings: PropTypes.object,
};
