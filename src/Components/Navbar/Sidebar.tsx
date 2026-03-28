import {
  styled,
  type Theme,
  type CSSObject,
  useTheme,
} from "@mui/material/styles";
import React from "react";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const DesktopDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

type SidebarProps = {
  open: boolean;
  onClose: () => void;
  isMobile: boolean;
};

const array1 = [
  { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
  { text: "Manage Team", icon: <PeopleOutlineOutlinedIcon />, path: "/team" },
  { text: "Contact", icon: <ContactsOutlinedIcon />, path: "/contact" },
  { text: "Invoice Balances", icon: <ReceiptOutlinedIcon />, path: "/invoices" },
];

const array2 = [
  { text: "Profile Form", icon: <PersonOutlineOutlinedIcon />, path: "/form" },
  { text: "Calendar", icon: <CalendarTodayOutlinedIcon />, path: "/calendar" },
  { text: "FAQ Page", icon: <HelpOutlineOutlinedIcon />, path: "/faq" },
];

const array3 = [
  { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
  { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
  { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" },
  { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/geography" },
];

export function Sidebar({ open, onClose, isMobile }: SidebarProps) {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    if (isMobile) onClose();
  };

  const drawerContent = (
    <>
      <DrawerHeader>
        <IconButton onClick={onClose} aria-label="collapse navigation">
          {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>

      <Avatar
        sx={{
          mx: "auto",
          my: 1,
          width: open || isMobile ? 64 : 40,
          height: open || isMobile ? 64 : 40,
          transition: "all 0.3s ease",
        }}
        alt="Sondos Sami"
        src="/static/images/avatar/1.jpg"
      />
      <Typography
        align="center"
        sx={{
          fontSize: open || isMobile ? 15 : 0,
          opacity: open || isMobile ? 1 : 0,
          transition: "all 0.3s ease",
        }}
      >
        Sondos Sami
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: open || isMobile ? 14 : 0,
          opacity: open || isMobile ? 1 : 0,
          transition: "all 0.3s ease",
          color: theme.palette.info.main,
        }}
      >
        Admin
      </Typography>

      <Divider />

      {[array1, array2, array3].map((array, idx) => (
        <React.Fragment key={idx}>
          <List>
            {array.map((item) => (
              <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                    justifyContent: open || isMobile ? "initial" : "center",
                    transition: "all 0.3s ease",
                    bgcolor:
                      location.pathname === item.path
                        ? theme.palette.mode === "dark"
                          ? grey[800]
                          : grey[300]
                        : "transparent",
                  }}
                  onClick={() => handleNavigate(item.path)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open || isMobile ? 3 : "auto",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      opacity: open || isMobile ? 1 : 0,
                      transition: "all 0.3s ease",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </React.Fragment>
      ))}
    </>
  );

  if (isMobile) {
    return (
      <MuiDrawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {drawerContent}
      </MuiDrawer>
    );
  }

  return (
    <DesktopDrawer variant="permanent" open={open}>
      {drawerContent}
    </DesktopDrawer>
  );
}
