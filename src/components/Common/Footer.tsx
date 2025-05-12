import { Box, Typography, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Box
      component="footer"
      mt={10}
      sx={{
        backgroundColor: "#F2F2F2",
        padding: { xs: "2rem 1rem", md: "3rem 2rem" },
      }}
    >
      <Grid container spacing={3} justifyContent="space-between">
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h6" color="black" gutterBottom>
            CSE Medical Transport
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Providing reliable medical transportation services in Kern County.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h6" color="black" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone: (661) 932-2218
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fax: (661) 932-0011
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: csemeditransport@gmail.com
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address: 1601 New Stine Rd Suite 120, Bakersfield, CA, 93309
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h6" color="black" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <IconButton
              color="primary"
              aria-label="Facebook"
              component="a"
              href="https://www.facebook.com/profile.php?id=100069495554736"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon fontSize="large" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          borderTop: 1,
          borderColor: "divider",
          mt: 3,
          pt: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} CSE Medical Transport. All rights
          reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
