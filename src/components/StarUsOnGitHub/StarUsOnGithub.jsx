import Button from "@mui/material/Button";
import Iconify from "src/components/iconify";
import React from "react";

const StarUsOnGithub = () => (
  <Button
    size="large"
    startIcon={<Iconify width={24} icon="carbon:star" />}
    sx={{
      textTransform: "none",
      fontSize: "0.8rem",
      fontWeight: "light",
      color: "white",
    }}
    onClick={() =>
      window.open("https://github.com/NucleoidJS/Nucleoid", "_blank")
    }
  >
    Star us on GitHub
  </Button>
);

export default StarUsOnGithub;
