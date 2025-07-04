import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Iconify from "../components/iconify/index.js";
import React from "react";
import Typography from "@mui/material/Typography";
import { useResponsive } from "src/hooks/use-responsive";
import { alpha, useTheme } from "@mui/material/styles";

export default function MarketingLandingConsultingHero() {
  const theme = useTheme();

  // eslint-disable-next-line no-unused-vars
  const smUp = useResponsive("up", "sm");

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: { md: "100vh" },
      }}
    >
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="https://cdn.nucleoid.com/media/60d6f6fa-cd94-4a0d-9ecc-764bdea35f84.png"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source
          src="http://cdn.nucleoid.com/media/0756b0a7-3921-4981-a59c-48201b8790bf.mp4"
          type="video/mp4"
        />
      </video>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: alpha(theme.palette.background.default, 0.7),
          zIndex: -1,
        }}
      />
      <Container
        sx={{
          mt: 0,
          display: { md: "flex" },
          alignItems: { md: "center" },
          justifyContent: { md: "center" },
          height: { md: `100vh` },
        }}
      >
        <Grid container>
          <Grid
            xs={12}
            md={12}
            lg={12}
            sx={{
              mt: -4,
              textAlign: { xs: "center", md: "center" },
            }}
          >
            <Typography
              variant="overline"
              sx={{ color: "secondary.main" }}
            ></Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Typography
                fontSize={smUp ? 60 : 50}
                sx={{ textShadow: "4px 4px 6px rgba(0,0,0,1)" }}
              >
                {smUp && "Your Supervised AI Colleague"}
                {!smUp && (
                  <>
                    Your&nbsp;Supervised
                    <br />
                    AI&nbsp;Colleague
                  </>
                )}
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  textShadow: "2px 2px 4px rgba(0,0,0,1)",
                  fontSize: smUp ? 28 : 26,
                }}
              >
                Supervised&nbsp;AI&nbsp;Agents&nbsp;for Enterprise
              </Typography>
              <br />
              <Button
                variant="contained"
                color="inherit"
                size="large"
                startIcon={<Iconify width={24} icon="fe:calendar" />}
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLScV79niYlvgktcItuIhUPc0DBFi1i1sBvxp7LdXMVyTUZBZsQ/viewform?usp=dialog",
                    "_blank",
                  )
                }
              >
                Book a Demo
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
