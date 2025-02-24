import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { HEADER } from "../config-layout";
import HeaderShadow from "../common/header-shadow";
import Logo from "src/components/logo";
import NavDesktop from "./nav/desktop";
import NavMobile from "./nav/mobile";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import StarUsOnGithub from "src/components/StarUsOnGitHub";
import Toolbar from "@mui/material/Toolbar";
import { bgBlur } from "src/theme/css";
import { navConfig } from "./config-navigation";
import { useOffSetTop } from "src/hooks/use-off-set-top";
import { useResponsive } from "src/hooks/use-responsive";
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Header({ headerOnDark }) {
  const theme = useTheme();

  const offset = useOffSetTop();

  const mdUp = useResponsive("up", "md");

  const renderContent = (
    <>
      <Box sx={{ lineHeight: 0, position: "relative" }}>
        <Logo />
      </Box>

      <>
        <Stack
          flexGrow={1}
          alignItems="center"
          sx={{
            height: 1,
            display: { xs: "none", md: "flex" },
          }}
        >
          <NavDesktop data={navConfig} />
        </Stack>

        <Box sx={{ flexGrow: { xs: 1, md: "unset" } }} />
      </>

      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Stack spacing={1} direction="row" alignItems="center">
          <Button
            variant="contained"
            onClick={() => window.location.assign("https://land.nucleoid.com")}
            sx={{
              mx: 1,
              color: "white",
              textTransform: "none",
              background:
                "linear-gradient(135deg, rgba(0,141,114,1) 0%, rgba(32,153,88,1) 100%)",
              display: { xs: "none", md: "block" },
            }}
          >
            Go to Dashboard
          </Button>
          <StarUsOnGithub />
        </Stack>
      </Stack>

      {!mdUp && <NavMobile data={navConfig} />}
    </>
  );

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(["height", "background-color"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: "common.white",
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: "text.primary",
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{
            height: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {renderContent}
        </Container>
      </Toolbar>

      {offset && <HeaderShadow />}
    </AppBar>
  );
}

Header.propTypes = {
  headerOnDark: PropTypes.bool,
};
