import Divider from "@mui/material/Divider";
import Masonry from "@mui/lab/Masonry";
import MenuMoreLink from "../common/menu-more-link";
import MenuProducts from "../common/menu-products";
import MenuTags from "../common/menu-tags";
import NavItem from "./nav-item";
import NavSubList from "../common/nav-sub-list";
import Popover from "@mui/material/Popover";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import { hideScroll } from "src/theme/css";

import { useActiveLink, usePathname } from "src/routes/hooks";
import { useCallback, useEffect, useRef, useState } from "react";

// ----------------------------------------------------------------------

export default function NavList({ data, slotProps }) {
  const navRef = useRef(null);

  const pathname = usePathname();

  const active = useActiveLink(data.path, !!data.children);

  const singleList = data.children?.length === 1;

  const [openMenu, setOpenMenu] = useState(false);

  const [rectTop, setRectTop] = useState(0);

  useEffect(() => {
    if (openMenu) {
      handleCloseMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const element = navRef.current;

      if (element) {
        const clientRect = element.getBoundingClientRect();

        setRectTop(clientRect.top + clientRect.height);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenMenu = useCallback(() => {
    if (data.children) {
      setOpenMenu(true);
    }
  }, [data.children]);

  const handleCloseMenu = useCallback(() => {
    setOpenMenu(false);
  }, []);

  return (
    <>
      <NavItem
        ref={navRef}
        open={openMenu}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={handleCloseMenu}
        //
        title={data.title}
        path={data.path}
        icon={data.icon}
        //
        hasChild={!!data.children}
        externalLink={data.path.includes("http")}
        //
        active={active}
        className={active ? "active" : ""}
        sx={slotProps?.rootItem}
      />

      {!!data.children && (
        <Popover
          disableScrollLock
          open={openMenu}
          anchorEl={navRef.current}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          slotProps={{
            paper: {
              onMouseEnter: handleOpenMenu,
              onMouseLeave: handleCloseMenu,
              sx: {
                ...hideScroll.y,
                p: 3,
                right: 0,
                mx: "auto",
                mt: "-2px",
                left: "0 !important",
                top: `${rectTop}px !important`,
                maxWidth: (theme) => theme.breakpoints.values.lg,
                ...(singleList && {
                  p: 2,
                  minWidth: 160,
                  left: "auto",
                  right: "auto",
                }),
                ...(openMenu && {
                  pointerEvents: "auto",
                }),
              },
            },
          }}
          sx={{
            pointerEvents: "none",
          }}
        >
          {singleList ? (
            <NavSubList data={data.children} slotProps={slotProps} />
          ) : (
            <Masonry
              columns={4}
              spacing={3}
              defaultColumns={4}
              defaultSpacing={3}
            >
              <NavSubList
                data={data.children}
                slotProps={slotProps}
                sx={{ mb: 2.5 }}
              />
            </Masonry>
          )}

          <Stack spacing={3}>
            {!!data.moreLink && (
              <MenuMoreLink
                path={data.moreLink.path}
                title={data.moreLink.title}
              />
            )}

            {!!data.products && (
              <>
                <Divider sx={{ borderStyle: "dashed" }} />
                <MenuProducts
                  products={data.products}
                  displayProduct={slotProps?.displayProduct}
                />
              </>
            )}

            {!!data.tags && (
              <>
                <Divider sx={{ borderStyle: "dashed" }} />
                <MenuTags tags={data.tags} />
              </>
            )}
          </Stack>
        </Popover>
      )}
    </>
  );
}

NavList.propTypes = {
  data: PropTypes.object,
  slotProps: PropTypes.object,
};
