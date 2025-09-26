// Layout.tsx
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Box from "@mui/material/Box"

const drawerWidth = 240;

export default function Layout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />

    
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: "64px", 
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}
