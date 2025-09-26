  import { Paper, Stack, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from "@mui/material";
import LineChartComponent from "../Charts/line";
import React from "react";
 
export default function Row2() {
  const uData = [1200, 3000, 2500, 3100, 4100, 2900, 3500];
  const pData = [2000, 1800, 2200, 4000, 3200, 3700, 4300];
  const xLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

 
  const transactions = [
    { id: 1, name: "John Doe", detail: "Bought iPhone 15", amount: "-$1,200", avatar: "J" },
    { id: 2, name: "Emma Watson", detail: "Subscription Renewed", amount: "-$99", avatar: "E" },
    { id: 3, name: "Ali Hassan", detail: "Payment Received", amount: "+$2,500", avatar: "A" },
    { id: 4, name: "Sophia Lee", detail: "Bought Laptop", amount: "-$1,500", avatar: "S" },
  ];

  return (
    <Stack direction="row" gap={1} flexWrap={"wrap"} justifyContent={{sm:"center"}}>
       
      <Paper sx={{flexGrow:1,   p: 2 }}>
        <LineChartComponent uData={uData} pData={pData} xLabels={xLabels} height={400} />
      </Paper>

  
      <Paper sx={{ flexGrow:1,  p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Recent Transactions
        </Typography>
        <List>
          {transactions.map((tx, index) => (
            <React.Fragment key={tx.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>{tx.avatar}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={tx.name}
                  secondary={tx.detail}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    color: tx.amount.startsWith("+") ? "success.main" : "error.main",
                  }}
                >
                  {tx.amount}
                </Typography>
              </ListItem>
              {index < transactions.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Stack>
  );
}
