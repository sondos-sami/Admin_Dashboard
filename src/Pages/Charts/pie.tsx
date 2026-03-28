
import PieChartComponent from "../../Components/Charts/pie";
import {
  Typography,
  Container,
  Paper,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";

export default function Pie() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const pieData = [
    { id: 0, value: 30, label: "Users" },
    { id: 1, value: 50, label: "Orders" },
    { id: 2, value: 20, label: "Revenue" },
  ];

  const chartHeight = isXs ? 260 : 320;

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: { xs: 2, sm: 4 },
        mb: 2,
        px: { xs: 1.5, sm: 2 },
        width: "100%",
        minWidth: 0,
        maxWidth: "100%",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 1.5, sm: 3 },
          borderRadius: 3,
          textAlign: "center",
          width: "100%",
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: theme.palette.primary.main,
            mb: 1,
            fontSize: { xs: "1.15rem", sm: "1.5rem" },
            px: { xs: 0.5, sm: 0 },
            lineHeight: 1.3,
          }}
        >
          Business Distribution
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{
            color: "text.secondary",
            mb: { xs: 2, sm: 3 },
            px: { xs: 0.5, sm: 0 },
            fontSize: { xs: "0.8rem", sm: "0.875rem" },
          }}
        >
          Breakdown of Users, Orders, and Revenue
        </Typography>

        <Box
          sx={{
            width: "100%",
            minWidth: 0,
            maxWidth: "100%",
            height: { xs: chartHeight + 40, sm: chartHeight + 60 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mx: "auto",
          }}
        >
          <PieChartComponent data={pieData} height={chartHeight} />
        </Box>
      </Paper>
    </Container>
  );
}
