import { styled, alpha } from "@mui/material/styles";
import MuiAppBar, { type AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Box, Stack } from "@mui/material";
import { useThemeContext } from "../../Context/ThemeContext"; 
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

 
const drawerWidth = 240;

 
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  isMobile?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "isMobile",
})<AppBarProps & { isMobile: boolean }>(({ theme, open, isMobile }) => ({
  height: 64,
  justifyContent: "center",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open &&
    !isMobile && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
}));

 
type TopbarProps = {
  open: boolean;
  onMenuToggle: () => void;
  isMobile: boolean;
};

export function Topbar({ open, onMenuToggle, isMobile }: TopbarProps) {
  const { mode, toggleMode } = useThemeContext();

  const showMenuButton = !open || isMobile;

  return (
    <AppBar position="fixed" open={open} isMobile={isMobile}>
      <Toolbar
        sx={{
          gap: { xs: 0.5, sm: 1 },
          px: { xs: 1, sm: 2 },
          flexWrap: "nowrap",
        }}
      >
        <IconButton
          color="inherit"
          aria-label={open && isMobile ? "close drawer" : "open drawer"}
          onClick={onMenuToggle}
          edge="start"
          sx={{
            mr: { xs: 1, sm: 2 },
            display: showMenuButton ? "flex" : "none",
          }}
        >
          <MenuIcon />
        </IconButton>

        <Search sx={{ flex: { xs: "1 1 auto", sm: "0 1 auto" }, minWidth: 0 }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
        </Search>

        <Box sx={{ flexGrow: { xs: 0, md: 4 }, flexShrink: 0 }} />

        <Stack direction="row" spacing={{ xs: 0.5, sm: 1 }} sx={{ flexShrink: 0 }}>
          <IconButton color="inherit" onClick={toggleMode} size="small" sx={{ p: { xs: 0.75, sm: 1 } }}>
            {mode === "light" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
          </IconButton>

          <IconButton color="inherit" sx={{ display: { xs: "none", sm: "inline-flex" } }}>
            <Person2OutlinedIcon />
          </IconButton>
          <IconButton color="inherit" sx={{ display: { xs: "none", md: "inline-flex" } }}>
            <NotificationsNoneOutlinedIcon />
          </IconButton>
          <IconButton color="inherit" sx={{ display: { xs: "none", md: "inline-flex" } }}>
            <SettingsOutlinedIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
