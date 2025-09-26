 
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import Header from "../Components/Header";

interface TeamMember {
  id: number;
  name: string;
  age: number;
  email: string;
  role: "admin" | "user" | "manager";
  phone: string;
}

const rows: TeamMember[] = [
  { id: 1, name: "John Doe", age: 28, email: "john@example.com", role: "admin", phone: "123-456-7890" },
  { id: 2, name: "Jane Smith", age: 32, email: "jane@example.com", role: "user", phone: "987-654-3210" },
  { id: 3, name: "Robert Brown", age: 41, email: "robert@example.com", role: "manager", phone: "555-111-2222" },
  { id: 4, name: "Emily Davis", age: 25, email: "emily@example.com", role: "user", phone: "444-333-2222" },
  { id: 5, name: "Michael Johnson", age: 37, email: "michael@example.com", role: "admin", phone: "999-888-7777" },
];

export default function Team() {
  return (
    <Box sx={{ p: 2 }}>
        <Header title="Team Members" subtitle="Managing Team Members"/>
  

      <TableContainer component={Paper} sx={{ width: "100%", overflowX: "auto" }}>
        <Table aria-label="team table" sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell><b>ID</b></TableCell>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Age</b></TableCell>
              <TableCell><b>Email</b></TableCell>
              <TableCell><b>Role</b></TableCell>
              <TableCell><b>Phone</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} hover>
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
