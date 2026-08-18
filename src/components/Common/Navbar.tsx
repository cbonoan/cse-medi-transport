import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router";
import Logo from "../../assets/images/logo.png";
import { CustomButton } from "./CustomButton";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Apply to Drive", to: "/apply" },
];

const PHONE_NUMBER = "(661) 932-2218";
const PHONE_HREF = "tel:+16619322218";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <AppBar component="nav" position="sticky">
      <Toolbar>
        <Box
          width="100%"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <Box
              component="img"
              src={Logo}
              alt="CSE Medical Transport logo"
              sx={{ width: 56, height: 56, display: "block" }}
            />
          </Link>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            <Button
              component="a"
              href={PHONE_HREF}
              variant="text"
              startIcon={<PhoneIcon fontSize="small" />}
              sx={{ color: "text.primary" }}
            >
              {PHONE_NUMBER}
            </Button>
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to}>
                <Button variant="text" sx={{ color: "text.primary" }}>
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link to="/reservation">
              <CustomButton size="medium">Reserve a Ride</CustomButton>
            </Link>
          </Box>

          <IconButton
            aria-label="Open navigation menu"
            onClick={() => setMobileOpen(true)}
            sx={{ display: { xs: "inline-flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 260 }} role="presentation">
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 1,
            }}
          >
            <IconButton
              aria-label="Close navigation menu"
              onClick={() => setMobileOpen(false)}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <Box sx={{ px: 2, py: 1 }}>
            <Button
              component="a"
              href={PHONE_HREF}
              variant="text"
              fullWidth
              startIcon={<PhoneIcon fontSize="small" />}
              sx={{ justifyContent: "flex-start", color: "text.primary" }}
            >
              {PHONE_NUMBER}
            </Button>
          </Box>
          <Divider />
          <List>
            {NAV_LINKS.map((link) => (
              <ListItem key={link.to} disablePadding>
                <ListItemButton
                  component={Link}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{ p: 2 }}>
            <Link to="/reservation" onClick={() => setMobileOpen(false)}>
              <CustomButton fullWidth>Reserve a Ride</CustomButton>
            </Link>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};
