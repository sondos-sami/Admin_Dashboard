import { Paper, Stack } from "@mui/material";
 
import ScatterChartComponent from "../Charts/Scatter";
import PieChartComponent from "../Charts/pie";
import BarChartComponent from "../Charts/Bar";

export default function Row3() {
  const pieData = [
    { id: 0, value: 30, label: "Users" },
    { id: 1, value: 50, label: "Orders" },
    { id: 2, value: 20, label: "Revenue" },
  ];

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

  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];

  const xLabels = ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F", "Page G"];

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      gap={1}
      justifyContent="space-between"
    >
      <Paper
        sx={{
          flex: { xs: "1 1 100%", sm: "1 1 32%" },
          p: 2,
        }}
      >
        <PieChartComponent data={pieData} height={400} />
      </Paper>

      <Paper
        sx={{
          flex: { xs: "1 1 100%", sm: "1 1 32%" },
          p: 2,
        }}
      >
        <ScatterChartComponent data1={data1} data2={data2} height={400} />
      </Paper>

      <Paper
        sx={{
          flex: { xs: "1 1 100%", sm: "1 1 32%" },
          p: 2,
        }}
      >
        <BarChartComponent
          uData={uData}
          pData={pData}
          amtData={amtData}
          xLabels={xLabels}
          height={400}
        />
      </Paper>
    </Stack>
  );
}
