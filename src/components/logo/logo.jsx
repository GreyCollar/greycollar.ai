import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import PropTypes from "prop-types";
import { RouterLink } from "src/routes/components";
import Typography from "@mui/material/Typography";
import { memo } from "react";

// ----------------------------------------------------------------------

function Logo({ single = false, sx }) {
  const singleLogo = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <img
        src="https://cdn.nucleoid.com/greycollar/media/icon.png"
        alt="GreyCollar"
      />
    </Box>
  );

  const fullLogo = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <img
        src="https://cdn.nucleoid.com/greycollar/media/icon.png"
        alt="GreyCollar"
        width={40}
        height={40}
      />
      <Typography fontSize="20px" fontWeight={400}>
        &nbsp;&nbsp;GreyCollar
      </Typography>
    </Box>
  );

  return (
    <Link
      component={RouterLink}
      href="/"
      color="inherit"
      aria-label="go to homepage"
      sx={{ lineHeight: 0 }}
    >
      <Box
        sx={{
          width: single ? 64 : 75,
          lineHeight: 0,
          cursor: "pointer",
          display: "inline-flex",
          ...sx,
        }}
      >
        {single ? singleLogo : fullLogo}
      </Box>
    </Link>
  );
}

Logo.propTypes = {
  single: PropTypes.bool,
  sx: PropTypes.object,
};

export default memo(Logo);
