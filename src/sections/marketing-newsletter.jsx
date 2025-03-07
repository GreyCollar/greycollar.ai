import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputAdornment from "@mui/material/InputAdornment";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import SvgColor from "src/components/svg-color";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// ----------------------------------------------------------------------

export default function MarketingNewsletter({ sx, ...other }) {
  return (
    <Box sx={{ py: 8, bgcolor: "background.neutral", ...sx }} {...other}>
      <Container>
        <Stack
          spacing={3}
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", md: "row" }}
        >
          <Stack
            spacing={3}
            alignItems="center"
            direction={{ xs: "column", md: "row" }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <SvgColor
              src="/assets/icons/ic_newsletter.svg"
              sx={{ width: 80, height: 80, color: "primary.main" }}
            />

            <Stack spacing={1}>
              <Typography variant="h4">Sign up for Newsletter</Typography>

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Learn more about upcoming features
              </Typography>
            </Stack>
          </Stack>

          <TextField
            fullWidth
            hiddenLabel
            placeholder="Enter your email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    size="large"
                    color="inherit"
                    variant="contained"
                    sx={{
                      height: 54,
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                  >
                    Sign Up
                  </Button>
                </InputAdornment>
              ),
              sx: { pr: 0 },
            }}
            sx={{ maxWidth: 466 }}
          />
        </Stack>
      </Container>
    </Box>
  );
}

MarketingNewsletter.propTypes = {
  sx: PropTypes.object,
};
