import { ScatterChart } from "@mui/x-charts/ScatterChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import Box from "@mui/material/Box";

interface ScatterChartComponentProps {
  data1: { x: number; y: number; id: number }[];
  data2?: { x: number; y: number; id: number }[];
  height?: number;
  width?: number | string;
}

export default function ScatterChartComponent({
  data1,
  data2,
  height = 300,
  width = "100%",
}: ScatterChartComponentProps) {
  return (
    <Box sx={{ width, height }}>
      <ScatterChart
        series={[
          {
            data: data1,
            yAxisId: "leftAxis",
            valueFormatter: (value: any) =>
              value && `${value.x}cm, ${value.y}kg`,
          },
          ...(data2
            ? [
                {
                  data: data2,
                  yAxisId: "rightAxis",
                  valueFormatter: (value: any) =>
                    value && `${value.x}cm, ${value.y}kg`,
                },
              ]
            : []),
        ]}
        xAxis={[{ min: 0 }]}
        yAxis={[
          { id: "leftAxis", min: 0 },
          ...(data2
            ? [{ id: "rightAxis", min: 0, position: "right" as const }]
            : []),
        ]}
        sx={{
          [`& .${axisClasses.left}`]: {
            line: { stroke: "#8884d8" },
            text: { fill: "#8884d8" },
          },
          [`& .${axisClasses.right}`]: {
            line: { stroke: "#82ca9d" },
            text: { fill: "#82ca9d" },
          },
        }}
      />
    </Box>
  );
}
