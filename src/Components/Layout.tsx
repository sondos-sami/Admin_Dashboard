// Layout.tsx
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Box from "@mui/material/Box"


export default function Layout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />

    
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minWidth: 0,
          width: "100%",
          p: { xs: 1.5, sm: 2, md: 3 },
          mt: "64px",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}
