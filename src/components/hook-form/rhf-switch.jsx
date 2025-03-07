import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import PropTypes from "prop-types";
import Switch from "@mui/material/Switch";

import { Controller, useFormContext } from "react-hook-form";

// ----------------------------------------------------------------------

export default function RHFSwitch({ name, helperText, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <FormControlLabel
            control={<Switch {...field} checked={field.value} />}
            {...other}
          />

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>
              {error ? error?.message : helperText}
            </FormHelperText>
          )}
        </div>
      )}
    />
  );
}

RHFSwitch.propTypes = {
  helperText: PropTypes.string,
  name: PropTypes.string,
};
