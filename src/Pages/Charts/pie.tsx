
import PieChartComponent from "../../Components/Charts/pie";
import {
  Typography,
  Container,
  Paper,
  Box,
  useTheme,
} from "@mui/material";

export default function Pie() {
  const theme = useTheme();

  const pieData = [
    { id: 0, value: 30, label: "Users" },
    { id: 1, value: 50, label: "Orders" },
    { id: 2, value: 20, label: "Revenue" },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, sm: 3 },
          borderRadius: 3,
          textAlign: "center",
        }}
      >
    
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: theme.palette.primary.main,
            mb: 1,
          }}
        >
          Business Distribution
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{ color: "text.secondary", mb: 3 }}
        >
          Breakdown of Users, Orders, and Revenue
        </Typography>
 
        <Box
          sx={{
            width: "100%",
            height: { xs: 300, sm: 400 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PieChartComponent data={pieData} height={350} />
        </Box>
      </Paper>
    </Container>
  );
}
