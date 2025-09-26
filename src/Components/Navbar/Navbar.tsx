import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Topbar } from "./Topbar";
import { Sidebar } from "./Sidebar";
 
 

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: "fixed" }}>
      <CssBaseline />
     
 <Topbar open={open} onOpen={() => setOpen(true)} />
   
     
      <Sidebar open={open} onClose={() => setOpen(false)} />
     
    </Box>
  );
}
