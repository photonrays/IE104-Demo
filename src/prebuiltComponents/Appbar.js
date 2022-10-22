import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";
import { PersonAdd, Settings, Logout, ShoppingCart } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Home", "Categories", "Products", "About us", "Contact us"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h3"
          noWrap
          component="a"
          href="/"
          sx={{
            padding: "4px",
            fontWeight: "Bold",
            color: "#594545",
            textDecoration: "none",
            display: { xs: "none", md: "flex" },
            mr: 1,
          }}
        >
          LOGO
        </Typography>

        {/* desktop view control */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map((page, index) => (
            <Button key={index} onClick={handleCloseNavMenu}>
              {page}
            </Button>
          ))}
        </Box>

        {/* mobile menu button */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={handleOpenNavMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page, index) => (
              <MenuItem key={index} onClick={handleCloseNavMenu}>
                <Typography sx={{ color: "#000" }}>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* mobile logo */}
        <Typography
          variant="h4"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "#594545",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>

        {/* Avatar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <IconButton sx={{ mr: 2 }}>
            <ShoppingCart fontSize="small" />
          </IconButton>

          <Tooltip title="Account settings">
            <IconButton onClick={handleClick}>
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          PaperProps={{
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,

              // tạo mũi tên chỉ đến element mở menu
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
              },
            },
          }}
        >
          <MenuItem>
            <Avatar sx={{ width: 32, height: 32, mr: 1 }} /> Profile
          </MenuItem>
          <MenuItem>
            <Avatar sx={{ width: 32, height: 32, mr: 1 }} /> My account
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
