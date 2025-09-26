 
import LineChartComponent from "../../Components/Charts/line";
import { Typography, Container } from "@mui/material";

export default function Line() {
  const uData = [1200, 3000, 2500, 3100, 4100, 2900, 3500];
  const pData = [2000, 1800, 2200, 4000, 3200, 3700, 4300];
  const xLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Line Chart 
      </Typography>
      <LineChartComponent uData={uData} pData={pData} xLabels={xLabels} height={400} />
    </Container>
  );
}
