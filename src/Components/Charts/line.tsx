import Box from "@mui/material/Box";
import { LineChart } from "@mui/x-charts/LineChart";
import { useChartWidth } from "../../hooks/useChartWidth";

interface LineChartComponentProps {
  uData?: number[];
  pData?: number[];
  xLabels?: string[];
  height?: number;
  width?: number | string;
}

export default function LineChartComponent({
  uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490],
  pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300],
  xLabels = ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F", "Page G"],
  height = 300,
  width: widthProp,
}: LineChartComponentProps) {
  const [containerRef, measuredWidth] = useChartWidth();
  const margin = { right: 24 };
  const chartWidth =
    typeof widthProp === "number" ? widthProp : measuredWidth;

  return (
    <Box ref={containerRef} sx={{ width: widthProp ?? "100%", height, minWidth: 0 }}>
      <LineChart
        width={chartWidth}
        height={height}
        series={[
          { data: pData, label: "pv", color: "#1976d2" },
          { data: uData, label: "uv", color: "#9c27b0" },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        yAxis={[{ width: 50 }]}
        margin={margin}
      />
    </Box>
  );
}
