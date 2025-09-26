 
import BarChartComponent from "../../Components/Charts/Bar";
import { Container, Typography } from "@mui/material";

export default function Bar() {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];

  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Bar Chart  
      </Typography>
      <BarChartComponent
        uData={uData}
        pData={pData}
        amtData={amtData}
        xLabels={xLabels}
        height={400}
      />
    </Container>
  );
}
