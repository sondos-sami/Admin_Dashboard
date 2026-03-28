import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Topbar } from "./Topbar";
import { Sidebar } from "./Sidebar";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: "block" }}>
      <CssBaseline />
      <Topbar
        open={open}
        onMenuToggle={() => setOpen((prev) => !prev)}
        isMobile={isMobile}
      />
      <Sidebar
        open={open}
        onClose={() => setOpen(false)}
        isMobile={isMobile}
      />
    </Box>
  );
}
