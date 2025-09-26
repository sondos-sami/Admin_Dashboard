import Box from '@mui/material/Box';
import { BarChart } from '@mui/x-charts/BarChart';

interface BarChartProps {
  uData: number[];
  pData: number[];
  amtData: number[];
  xLabels: string[];
  height: number;
}

export default function BarChartComponent({ uData, pData, amtData, xLabels, height }: BarChartProps) {
  return (
    <Box sx={{ width: '100%', height }}>
      <BarChart
        series={[
          { data: pData, label: 'pv', stack: 'stack1' },
          { data: amtData, label: 'amt' },
          { data: uData, label: 'uv', stack: 'stack1' },
        ]}
        xAxis={[{ data: xLabels }]}
        yAxis={[{ width: 50 }]}
      />
    </Box>
  );
}
