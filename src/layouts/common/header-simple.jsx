import AppBar from "@mui/material/AppBar";
import { HEADER } from "../config-layout";
import HeaderShadow from "./header-shadow";
import Link from "@mui/material/Link";
import Logo from "src/components/logo";
import { RouterLink } from "src/routes/components";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import { bgBlur } from "src/theme/css";
import { paths } from "src/routes/paths";
import { useOffSetTop } from "src/hooks/use-off-set-top";
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function HeaderSimple() {
  const theme = useTheme();

  const offset = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar>
      <Toolbar
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(["height"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offset && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Logo />

        <Stack
          spacing={1}
          flexGrow={1}
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Link
            href={paths.support}
            component={RouterLink}
            color="inherit"
            sx={{ typography: "subtitle2" }}
          >
            Need help?
          </Link>
        </Stack>
      </Toolbar>

      {offset && <HeaderShadow />}
    </AppBar>
  );
}
