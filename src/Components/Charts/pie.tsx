 
 
import { PieChart } from "@mui/x-charts/PieChart";
import Box from "@mui/material/Box";

interface PieChartComponentProps {
  data?: { id: number; value: number; label: string }[];
  height?: number;
  width?: number | string;
}

export default function PieChartComponent({
  data = [
    { id: 0, value: 10, label: "A" },
    { id: 1, value: 20, label: "B" },
    { id: 2, value: 30, label: "C" },
  ],
  height = 300,
  width = "100%",
}: PieChartComponentProps) {
  return (
    <Box sx={{ width, height }}>
      <PieChart
        series={[
          {
            data,
            innerRadius: 40,  
            outerRadius: 120,
            paddingAngle: 5,
            cornerRadius: 5,
          },
        ]}
        width={300}
        height={height}
      />
    </Box>
  );
}
