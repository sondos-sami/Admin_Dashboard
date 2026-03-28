import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Checkbox,
  Stack,
  Typography,
  Chip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Header from "../Components/Header";

interface InvoiceRow {
  id: number;
  name: string;
  age: number;
  email: string;
  role: "admin" | "user" | "manager";
  phone: string;
}

const rows: InvoiceRow[] = [
  { id: 1, name: "John Doe", age: 28, email: "john@example.com", role: "admin", phone: "123-456-7890" },
  { id: 2, name: "Jane Smith", age: 32, email: "jane@example.com", role: "user", phone: "987-654-3210" },
  { id: 3, name: "Robert Brown", age: 41, email: "robert@example.com", role: "manager", phone: "555-111-2222" },
  { id: 4, name: "Emily Davis", age: 25, email: "emily@example.com", role: "user", phone: "444-333-2222" },
  { id: 5, name: "Michael Johnson", age: 37, email: "michael@example.com", role: "admin", phone: "999-888-7777" },
];

function roleChipColor(role: InvoiceRow["role"]) {
  if (role === "admin") return "error";
  if (role === "manager") return "primary";
  return "success";
}

export default function Invoices() {
  const theme = useTheme();
  const isNarrow = useMediaQuery(theme.breakpoints.down("md"));
  const [selected, setSelected] = useState<number[]>([]);

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelected(rows.map((row) => row.id));
    } else {
      setSelected([]);
    }
  };

  const handleSelectRow = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  if (isNarrow) {
    return (
      <Box sx={{ p: { xs: 1, sm: 2 }, width: "100%", minWidth: 0, maxWidth: "100%" }}>
        <Header title="Invoices" subtitle="" />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 1.5 }}>
          <Checkbox
            checked={selected.length === rows.length && rows.length > 0}
            indeterminate={selected.length > 0 && selected.length < rows.length}
            onChange={handleSelectAll}
            inputProps={{ "aria-label": "select all invoices" }}
          />
          <Typography variant="body2" color="text.secondary">
            Select all
          </Typography>
        </Box>
        <Stack spacing={1.5}>
          {rows.map((row) => (
            <Paper
              key={row.id}
              elevation={1}
              sx={{
                p: 2,
                borderRadius: 2,
                border: 1,
                borderColor: "divider",
              }}
            >
              <Stack spacing={1}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                  <Checkbox
                    checked={selected.includes(row.id)}
                    onChange={() => handleSelectRow(row.id)}
                    inputProps={{ "aria-label": `select ${row.name}` }}
                  />
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 1,
                        flexWrap: "wrap",
                      }}
                    >
                      <Typography variant="subtitle1" fontWeight={600}>
                        {row.name}
                      </Typography>
                      <Chip
                        label={row.role}
                        size="small"
                        color={roleChipColor(row.role)}
                        variant="outlined"
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, wordBreak: "break-word" }}>
                      {row.email}
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={2} sx={{ mt: 1 }} useFlexGap>
                      <Typography variant="body2">
                        <Box component="span" color="text.secondary">
                          ID{" "}
                        </Box>
                        {row.id}
                      </Typography>
                      <Typography variant="body2">
                        <Box component="span" color="text.secondary">
                          Age{" "}
                        </Box>
                        {row.age}
                      </Typography>
                      <Typography variant="body2" sx={{ wordBreak: "break-all" }}>
                        <Box component="span" color="text.secondary">
                          Phone{" "}
                        </Box>
                        {row.phone}
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2, width: "100%", minWidth: 0, maxWidth: "100%" }}>
      <Header title="Invoices" subtitle="" />
      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          maxWidth: "100%",
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <Table aria-label="invoices table" sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selected.length === rows.length}
                  indeterminate={selected.length > 0 && selected.length < rows.length}
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell>
                <b>ID</b>
              </TableCell>
              <TableCell>
                <b>Name</b>
              </TableCell>
              <TableCell>
                <b>Age</b>
              </TableCell>
              <TableCell>
                <b>Email</b>
              </TableCell>
              <TableCell>
                <b>Role</b>
              </TableCell>
              <TableCell>
                <b>Phone</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selected.includes(row.id)}
                    onChange={() => handleSelectRow(row.id)}
                  />
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell
                  sx={{
                    color:
                      row.role === "admin"
                        ? "red"
                        : row.role === "manager"
                          ? "blue"
                          : "green",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  {row.role}
                </TableCell>
                <TableCell>{row.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
