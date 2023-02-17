import { AccountCircle, DarkMode, LightMode } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../lib/auth";
import { useColorMode } from "../../../ThemeWraper";

export default function TeacherDashboard() {
  const { authenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!authenticated()) navigate("/login");
  });
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  const [selectedTab, setSelectedTab] = useState(0);
  const sideWidths = 300;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <AppBar
        sx={{
          display: "flex",
          flexDirection: "row",
          bgcolor: "background.paper",
          alignItems: "center",
          px: 3,
        }}
      >
        {/* <Toolbar
          sx={{
            bgcolor: "background.paper",
            display: "flex",
            height: "48px !important",
            minHeight: 0,
          }}
        > */}
        <Box sx={{ width: sideWidths }}>
          <Typography variant="h6" whiteSpace="nowrap" color="text.secondary">
            Teacher dashboard
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Tabs
            value={selectedTab}
            onChange={(_, newValue) => setSelectedTab(newValue)}
            centered
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Box>
        <Box
          sx={{
            width: sideWidths,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <IconButton onClick={() => toggleColorMode()}>
            {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>
          <IconButton onClick={handleMenu} size="large">
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </Box>
        {/* </Toolbar> */}
      </AppBar>
      <Box sx={{ flexGrow: 1, overflow: "auto" }}>hi</Box>
    </Box>
  );
}
