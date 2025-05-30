import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "src/components/image";
import Label from "src/components/label";
import Link from "@mui/material/Link";
import ListSubheader from "@mui/material/ListSubheader";
import NavItem from "./nav-item";
import Paper from "@mui/material/Paper";
import Portal from "@mui/material/Portal";
import PropTypes from "prop-types";
import { RouterLink } from "src/routes/components";
import Stack from "@mui/material/Stack";
import { useActiveLink } from "src/routes/hooks/use-active-link";
import { useBoolean } from "src/hooks/use-boolean";
import { usePathname } from "src/routes/hooks";

import { useCallback, useEffect } from "react";

// ----------------------------------------------------------------------

export default function NavList({ data }) {
  const pathname = usePathname();

  const menuOpen = useBoolean();

  const active = useActiveLink(data.path, !!data.children);

  const mainList = data.children
    ? data.children.filter((list) => list.subheader !== "Common")
    : [];

  useEffect(() => {
    if (menuOpen.value) {
      menuOpen.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = useCallback(() => {
    if (data.children) {
      menuOpen.onTrue();
    }
  }, [data.children, menuOpen]);

  return (
    <>
      <NavItem
        open={menuOpen.value}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={menuOpen.onFalse}
        //
        title={data.title}
        path={data.path}
        //
        active={active}
        hasChild={!!data.children}
        externalLink={data.path.includes("http")}
      />

      {!!data.children && menuOpen.value && (
        <Portal>
          <Fade in={menuOpen.value}>
            <Paper
              onMouseEnter={handleOpenMenu}
              onMouseLeave={menuOpen.onFalse}
              sx={{
                top: 62,
                width: 1,
                borderRadius: 0,
                position: "fixed",
                bgcolor: "background.default",
                zIndex: (theme) => theme.zIndex.modal,
                boxShadow: (theme) => theme.customShadows.dialog,
              }}
            >
              <Grid container columns={15}>
                <Grid xs={12}>
                  <Box
                    gap={5}
                    display="grid"
                    gridTemplateColumns="repeat(5, 1fr)"
                    sx={{
                      p: 5,
                      height: 1,
                      position: "relative",
                      bgcolor: "background.neutral",
                    }}
                  >
                    {mainList.map((list) => (
                      <NavSubList
                        key={list.subheader}
                        subheader={list.subheader}
                        cover={list.cover}
                        items={list.items}
                        isNew={list.isNew}
                      />
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Fade>
        </Portal>
      )}
    </>
  );
}

NavList.propTypes = {
  data: PropTypes.object,
};

// ----------------------------------------------------------------------

function NavSubList({ subheader, isNew, cover, items }) {
  const pathname = usePathname();

  const coverPath = items.length ? items[0].path : "";

  const commonList = subheader === "Common";

  return (
    <Stack spacing={2}>
      <ListSubheader
        sx={{
          p: 0,
          typography: "h6",
          color: "text.primary",
          bgcolor: "transparent",
        }}
      >
        {subheader}
        {isNew && (
          <Label color="info" sx={{ ml: 1 }}>
            NEW
          </Label>
        )}
      </ListSubheader>

      {!commonList && (
        <Link component={RouterLink} href={coverPath}>
          <Image
            disabledEffect
            alt={cover}
            src={cover || "/assets/placeholder.svg"}
            ratio="16/9"
            sx={{
              borderRadius: 1,
              cursor: "pointer",
              boxShadow: (theme) => theme.customShadows.z8,
              transition: (theme) => theme.transitions.create("all"),
              "&:hover": {
                opacity: 0.8,
                boxShadow: (theme) => theme.customShadows.z24,
              },
            }}
          />
        </Link>
      )}

      <Stack spacing={1.5} alignItems="flex-start">
        {items.map((item) => {
          const active = pathname === item.path || pathname === `${item.path}/`;

          return (
            <NavItem
              key={item.title}
              title={item.title}
              path={item.path}
              active={active}
              subItem
            />
          );
        })}
      </Stack>
    </Stack>
  );
}

NavSubList.propTypes = {
  cover: PropTypes.string,
  isNew: PropTypes.bool,
  items: PropTypes.array,
  subheader: PropTypes.string,
};
