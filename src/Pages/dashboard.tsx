import { Box, Button, Stack } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Row1 from "../Components/Dashboard/Row1";
import Row2 from "../Components/Dashboard/Row2";
import Row3 from "../Components/Dashboard/Row3";
import Header from "../Components/Header";

export default function Dashboard() {
  return (
    <>
       
    
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "stretch", sm: "center" },
          gap: { xs: 2, sm: 0 },
          mb: 3,
        }}
      >
        <Header title="Dashboard" subtitle="Welcome to Dashboard" />
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          sx={{
            textTransform: "none",
            borderRadius: 2,
            alignSelf: { xs: "stretch", sm: "auto" },
          }}
        >
          Download Reports
        </Button>
      </Box>

      {/* Rows */}
    <Stack direction="column" spacing={2}>
  <Row1 />
  <Row2 />
  <Box sx={{ width: "100%" }}>
    <Row3 />
  </Box>
</Stack>

    </>
  );
}
