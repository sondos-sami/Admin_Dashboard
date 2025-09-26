 
 
import ScatterChartComponent from "../../Components/Charts/Scatter";
import { Typography, Container } from "@mui/material";

const data1 = [
  { x: 100, y: 200, id: 1 },
  { x: 120, y: 100, id: 2 },
  { x: 170, y: 300, id: 3 },
  { x: 140, y: 250, id: 4 },
  { x: 150, y: 400, id: 5 },
  { x: 110, y: 280, id: 6 },
];

const data2 = [
  { x: 300, y: 300, id: 1 },
  { x: 400, y: 500, id: 2 },
  { x: 200, y: 700, id: 3 },
  { x: 340, y: 350, id: 4 },
  { x: 560, y: 500, id: 5 },
  { x: 230, y: 780, id: 6 },
  { x: 500, y: 400, id: 7 },
];

export default function Scatter() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Scatter Chart 
      </Typography>
      <ScatterChartComponent data1={data1} data2={data2} height={400} />
    </Container>
  );
}
