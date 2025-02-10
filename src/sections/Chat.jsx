import Container from "@mui/material/Container";
import React from "react";
import { useResponsive } from "../hooks/use-responsive";

import { Button, Grid } from "@mui/material";

// ----------------------------------------------------------------------

export default function Chat() {
  // eslint-disable-next-line no-unused-vars
  const mdUp = useResponsive("up", "md");
  return (
    <Container
      sx={{
        display: { md: "flex" },
        justifyContent: { md: "center" },
        alignItems: { md: "center" },
        pt: 8,
      }}
    >
      <Grid xs={12} md={6} lg={7}>
        <Grid item>
          <div
            style={{
              width: "100%",
              maxWidth: 820,
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid #222",
              background: "#222",
              boxShadow: "16px 16px 12px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Browser Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 12px",
                background: "#333",
                borderBottom: "1px solid #444",
              }}
            >
              {/* Browser Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    background: "#ff5f57",
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    background: "#ffbc2f",
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    background: "#28c840",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
            </div>

            {/* Video Container */}
            <video
              loop
              autoPlay
              muted
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                borderColor: "#222",
                borderStyle: "solid",
                borderWidth: "0px 1px 1px 2px",
                background: "#464646",
              }}
              poster="https://cdn.nucleoid.com/media/thumbnail-1.png"
            >
              <source src="/assets/af1771e7-9a0c-456d-900d-3a6ca92d6c29.mp4" />
            </video>
          </div>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 5,
          }}
        >
          <Button
            size="large"
            variant="outlined"
            onClick={() => {
              window.location.assign("https://nucleoid.com/ide/chat");
            }}
            sx={{
              mx: 1,
              textTransform: "none",
              color: "white",
            }}
          >
            Try GreyCollar Dashboard
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
