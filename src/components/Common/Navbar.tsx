import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { Link } from "react-router";
import Logo from "../../assets/images/logo.png";

export const Navbar = () => {
  return (
    <Box display="flex" mb={8}>
      <AppBar component="nav" sx={{ bgcolor: "#F2F2F2" }}>
        <Toolbar>
          <Box
            width="100%"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link to="/">
              <IconButton>
                <Box
                  component="img"
                  src={Logo}
                  alt="logo"
                  sx={{
                    width: { xs: "50px" },
                    height: { xs: "50px" },
                  }}
                />
              </IconButton>
            </Link>
            <Box>
              <Link to="/apply">
                <Button variant="text" sx={{ color: "text.secondary" }}>
                  Apply
                </Button>
              </Link>
              <Link to="/reservation">
                <Button variant="text" sx={{ color: "text.secondary" }}>
                  Reserve
                </Button>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
