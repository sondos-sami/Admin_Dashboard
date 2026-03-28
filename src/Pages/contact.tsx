import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  DataGrid,
  type GridColDef,
  Toolbar,
  ToolbarButton,
  ColumnsPanelTrigger,
  FilterPanelTrigger,
  ExportCsv,
  ExportPrint,
  QuickFilter,
  QuickFilterControl,
  QuickFilterClear,
  QuickFilterTrigger,
} from "@mui/x-data-grid";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import FilterListIcon from "@mui/icons-material/FilterList";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import CancelIcon from "@mui/icons-material/Cancel";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Header from "../Components/Header";

interface ContactRow {
  id: number;
  name: string;
  email: string;
  phone: string;
  age: number;
  zipCode: string;
  city: string;
  address: string;
}

const contactRows: ContactRow[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    age: 28,
    zipCode: "10001",
    city: "New York",
    address: "123 Main St",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
    age: 34,
    zipCode: "90001",
    city: "Los Angeles",
    address: "456 Sunset Blvd",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael@example.com",
    phone: "555-123-4567",
    age: 41,
    zipCode: "60601",
    city: "Chicago",
    address: "789 Lake Shore Dr",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@example.com",
    phone: "333-444-5555",
    age: 25,
    zipCode: "77001",
    city: "Houston",
    address: "101 Pine St",
  },
  {
    id: 5,
    name: "Robert Brown",
    email: "robert@example.com",
    phone: "222-111-9999",
    age: 38,
    zipCode: "85001",
    city: "Phoenix",
    address: "202 Desert Rd",
  },
];

// ---------- STYLES ----------
type OwnerState = {
  expanded: boolean;
};

const StyledQuickFilter = styled(QuickFilter)({
  display: "grid",
  alignItems: "center",
});

const StyledToolbarButton = styled(ToolbarButton)<{ ownerState: OwnerState }>(
  ({ theme, ownerState }) => ({
    gridArea: "1 / 1",
    width: "min-content",
    height: "min-content",
    zIndex: 1,
    opacity: ownerState.expanded ? 0 : 1,
    pointerEvents: ownerState.expanded ? "none" : "auto",
    transition: theme.transitions.create(["opacity"]),
  })
);

const StyledTextField = styled(TextField)<{
  ownerState: OwnerState;
}>(({ theme, ownerState }) => ({
  gridArea: "1 / 1",
  overflowX: "clip",
  width: ownerState.expanded ? "min(260px, calc(100vw - 120px))" : "var(--trigger-width)",
  opacity: ownerState.expanded ? 1 : 0,
  transition: theme.transitions.create(["width", "opacity"]),
}));

/** MUI X Toolbar — required parent for ToolbarButton, QuickFilter, etc. (provides context). */
const StyledGridToolbar = styled(Toolbar)(({ theme }) => ({
  flexWrap: "wrap",
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  minHeight: "auto !important",
  width: "100%",
  alignItems: "center",
  rowGap: theme.spacing(1),
  justifyContent: "flex-start",
}));

// ---------- TOOLBAR ----------
function CustomToolbar() {
  const [exportMenuOpen, setExportMenuOpen] = React.useState(false);
  const exportMenuTriggerRef = React.useRef<HTMLButtonElement>(null);

  return (
    <StyledGridToolbar>
      <Typography fontWeight="medium" sx={{ flex: "1 1 120px", mx: 0.5, minWidth: 0 }}>
        Contacts
      </Typography>

      <Tooltip title="Columns">
        <ColumnsPanelTrigger render={<ToolbarButton />}>
          <ViewColumnIcon fontSize="small" />
        </ColumnsPanelTrigger>
      </Tooltip>

      <Tooltip title="Filters">
        <FilterPanelTrigger
          render={(props, state) => (
            <ToolbarButton {...props} color="default">
              <Badge
                badgeContent={state.filterCount}
                color="primary"
                variant="dot"
              >
                <FilterListIcon fontSize="small" />
              </Badge>
            </ToolbarButton>
          )}
        />
      </Tooltip>

      <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 0.5 }} />

      <Tooltip title="Export">
        <ToolbarButton
          ref={exportMenuTriggerRef}
          id="export-menu-trigger"
          aria-controls="export-menu"
          aria-haspopup="true"
          aria-expanded={exportMenuOpen ? "true" : undefined}
          onClick={() => setExportMenuOpen(true)}
        >
          <FileDownloadIcon fontSize="small" />
        </ToolbarButton>
      </Tooltip>

      <Menu
        id="export-menu"
        anchorEl={exportMenuTriggerRef.current}
        open={exportMenuOpen}
        onClose={() => setExportMenuOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          list: {
            "aria-labelledby": "export-menu-trigger",
          },
        }}
      >
        <ExportPrint render={<MenuItem />} onClick={() => setExportMenuOpen(false)}>
          Print
        </ExportPrint>
        <ExportCsv render={<MenuItem />} onClick={() => setExportMenuOpen(false)}>
          Download as CSV
        </ExportCsv>
      </Menu>

      <StyledQuickFilter>
        <QuickFilterTrigger
          render={(triggerProps, state) => (
            <Tooltip title="Search" enterDelay={0}>
              <StyledToolbarButton
                {...triggerProps}
                ownerState={{ expanded: state.expanded }}
                color="default"
                aria-disabled={state.expanded}
              >
                <SearchIcon fontSize="small" />
              </StyledToolbarButton>
            </Tooltip>
          )}
        />
        <QuickFilterControl
          render={({ ref, ...controlProps }, state) => (
            <StyledTextField
              {...controlProps}
              ownerState={{ expanded: state.expanded }}
              inputRef={ref}
              aria-label="Search"
              placeholder="Search..."
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                  endAdornment: state.value ? (
                    <InputAdornment position="end">
                      <QuickFilterClear
                        edge="end"
                        size="small"
                        aria-label="Clear search"
                        material={{ sx: { marginRight: -0.75 } }}
                      >
                        <CancelIcon fontSize="small" />
                      </QuickFilterClear>
                    </InputAdornment>
                  ) : null,
                  ...controlProps.slotProps?.input,
                },
                ...controlProps.slotProps,
              }}
            />
          )}
        />
      </StyledQuickFilter>
    </StyledGridToolbar>
  );
}

 
function ContactMobileCards({ rows }: { rows: ContactRow[] }) {
  return (
    <Stack spacing={1.5} sx={{ mt: 1 }}>
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
            <Typography variant="subtitle1" fontWeight={600}>
              {row.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ wordBreak: "break-word" }}>
              {row.email}
            </Typography>
            <Typography variant="body2">{row.phone}</Typography>
            <Stack direction="row" flexWrap="wrap" gap={2} useFlexGap>
              <Typography variant="body2" color="text.secondary">
                Age {row.age}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {row.city}, {row.zipCode}
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
              {row.address}
            </Typography>
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
}

export default function Contact() {
  const theme = useTheme();
  const isNarrow = useMediaQuery(theme.breakpoints.down("md"));

  const columns: GridColDef<ContactRow>[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1.5 },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "age", headerName: "Age", width: 100 },
    { field: "zipCode", headerName: "Zip Code", width: 120 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "address", headerName: "Address", flex: 2 },
  ];

  const rows = contactRows;

  if (isNarrow) {
    return (
      <Box sx={{ p: { xs: 1, sm: 2 }, width: "100%", minWidth: 0, maxWidth: "100%" }}>
        <Header title="Contact" subtitle="" />
        <ContactMobileCards rows={rows} />
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", minWidth: 0, maxWidth: "100%" }}>
      <Header title="Contact" subtitle="" />
      <Box
        sx={{
          height: { md: "min(58vh, 440px)", lg: "min(62vh, 480px)" },
          width: "100%",
          minHeight: 360,
          "& .MuiDataGrid-root": { border: "none" },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10]}
          disableRowSelectionOnClick
          slots={{ toolbar: CustomToolbar }}
          showToolbar
          sx={{
            width: "100%",
            height: "100%",
            "& .MuiDataGrid-main": { overflow: "auto" },
            "& .MuiDataGrid-virtualScroller": { minHeight: 200 },
          }}
        />
      </Box>
    </Box>
  );
}
