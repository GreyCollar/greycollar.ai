import { INTEGRATION } from "src/_mock/_integrations";
import Iconify from "src/components/iconify";
import React from "react";

import { Box, Card, CardContent, Typography } from "@mui/material";

export default function MarketingIntegrationsList() {
  return (
    <>
      <Typography variant="h3" textAlign={"center"} sx={{ mb: 2 }}>
        Our Integrations
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 1,
          position: "relative",
          maxWidth: "1300px",
          maxHeight: "100%",
          margin: "0 auto",
          overflow: "hidden",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: 0,
            height: "100%",
            width: "55px",
            background:
              "linear-gradient(to right, rgba(22, 28, 36, 1), rgba(22, 28, 36, .8))",
            zIndex: 1,
          },
          "&::before": { left: 0 },
          "&::after": {
            right: 0,
            transform: "rotate(180deg)",
          },
          "@media (max-width: 900px)": {
            "&::before, &::after": {
              display: "none",
            },
            maxHeight: "320px",
            overflowY: "hidden",
          },
        }}
      >
        {INTEGRATION.map((integration) => (
          <Card
            key={integration.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": { cursor: "pointer" },
              m: 0.5,
              position: "relative",
              overflow: "hidden",
              width: 90,
              height: 90,
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                zIndex: 2,
              }}
            >
              <Iconify icon={integration.icon} width={40} height={40} />
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}
