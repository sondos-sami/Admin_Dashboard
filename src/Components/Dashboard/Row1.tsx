import { Paper, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
 
import { PieChart } from "@mui/x-charts/PieChart";

 
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function Row1() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const pieSize = isXs ? 120 : 150;

  const items = [
    {
      icon: <AttachMoneyIcon fontSize="large" color="success" />,
      title: "Revenue",
      subtitle: "$12,500",
      increase: 15,
      chartData: [
        { id: 0, value: 60 },
        { id: 1, value: 25 },
        { id: 2, value: 15 },
      ],
    },
    {
      icon: <PeopleAltIcon fontSize="large" color="primary" />,
      title: "Users",
      subtitle: "8,430",
      increase: 8,
      chartData: [
        { id: 0, value: 70 },
        { id: 1, value: 30 },
      ],
    },
    {
      icon: <ShoppingCartIcon fontSize="large" color="secondary" />,
      title: "Orders",
      subtitle: "2,310",
      increase: 22,
      chartData: [
        { id: 0, value: 40 },
        { id: 1, value: 35 },
        { id: 2, value: 25 },
      ],
    },
    {
      icon: <TrendingUpIcon fontSize="large" color="error" />,
      title: "Growth",
      subtitle: "72%",
      increase: -5,
      chartData: [
        { id: 0, value: 50 },
        { id: 1, value: 50 },
      ],
    },
  ];

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      gap={1}
      justifyContent={{ sm: "space-between", xs: "center" }}
    >
      {items.map((item, index) => (
        <Paper
          key={index}
          sx={{
            minWidth: "333px",
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flex: "1 1 333px",
          }}
        >
          {/* Left Section */}
          <Stack direction="column" spacing={0.5}>
            {item.icon}
            <Typography variant="subtitle2" color="text.secondary">
              {item.title}
            </Typography>
            <Typography variant="h6">{item.subtitle}</Typography>
            <Typography
              variant="body2"
              sx={{ color: item.increase >= 0 ? "success.main" : "error.main" }}
            >
              {item.increase >= 0 ? `+${item.increase}%` : `${item.increase}%`}
            </Typography>
          </Stack>

          
          <PieChart
            series={[
              {
                data: item.chartData,
                innerRadius: isXs ? 40 : 50,
                outerRadius: isXs ? 55 : 80,
                arcLabel: (item) => item.value.toString(),
              },
            ]}
            width={pieSize}
            height={pieSize}
          />
        </Paper>
      ))}
    </Stack>
  );
}
