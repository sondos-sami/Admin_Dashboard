import { PieChart } from "@mui/x-charts/PieChart";
import Box from "@mui/material/Box";
import { useChartWidth } from "../../hooks/useChartWidth";

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
  width: widthProp,
}: PieChartComponentProps) {
  const [containerRef, measuredWidth] = useChartWidth();
  const chartWidth =
    typeof widthProp === "number" ? widthProp : Math.min(measuredWidth, 360);
  const outer = Math.min(chartWidth * 0.36, 120);
  const inner = outer * 0.45;

  return (
    <Box
      ref={containerRef}
      sx={{
        width: widthProp ?? "100%",
        height,
        minWidth: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <PieChart
        series={[
          {
            data,
            innerRadius: inner,
            outerRadius: outer,
            paddingAngle: 5,
            cornerRadius: 5,
          },
        ]}
        width={chartWidth}
        height={height}
      />
    </Box>
  );
}
