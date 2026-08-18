import { Box, Typography, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      mt={10}
      sx={{
        backgroundColor: "secondary.main",
        color: "rgba(255, 255, 255, 0.85)",
        padding: { xs: "2.5rem 1.5rem", md: "4rem 3rem" },
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            component="img"
            src={Logo}
            alt="CSE Medical Transport logo"
            sx={{ width: 56, height: 56, mb: 1 }}
          />
          <Typography variant="h6" color="#ffffff" gutterBottom>
            CSE Medical Transport
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
            Providing reliable medical transportation services in Kern
            County.
          </Typography>
        </Grid>

        <Grid size={{ xs: 6, md: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ color: "primary.light", fontWeight: 700, mb: 1.5 }}
          >
            QUICK LINKS
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography
              component={Link}
              to="/reservation"
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                "&:hover": { color: "#ffffff" },
              }}
            >
              Reserve a Ride
            </Typography>
            <Typography
              component={Link}
              to="/apply"
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                "&:hover": { color: "#ffffff" },
              }}
            >
              Apply to Drive
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography
            variant="subtitle2"
            sx={{ color: "primary.light", fontWeight: 700, mb: 1.5 }}
          >
            CONTACT US
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
            Phone: (661) 932-2218
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
            Fax: (661) 932-0011
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
            Email: csemeditransport@gmail.com
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
            Address: 1601 New Stine Rd Suite 120, Bakersfield, CA, 93309
          </Typography>
        </Grid>

        <Grid size={{ xs: 6, md: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ color: "primary.light", fontWeight: 700, mb: 1.5 }}
          >
            FOLLOW US
          </Typography>
          <IconButton
            aria-label="Facebook"
            component="a"
            href="https://www.facebook.com/profile.php?id=100069495554736"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(255,255,255,0.2)",
              "&:hover": {
                backgroundColor: "primary.main",
                borderColor: "primary.main",
              },
            }}
          >
            <FacebookIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.15)",
          mt: 4,
          pt: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)" }}>
          © {new Date().getFullYear()} CSE Medical Transport. All rights
          reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
