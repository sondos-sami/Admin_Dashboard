 
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        bgcolor: "background.default",
        px: 2,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "6rem", sm: "10rem" },
          fontWeight: "bold",
          color: "primary.main",
        }}
      >
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
        The page you’re looking for doesn’t exist or has been moved.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
        sx={{ borderRadius: 2, textTransform: "none" }}
      >
        Go Back Home
      </Button>
    </Box>
  );
}
