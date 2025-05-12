import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import blsImg from "../../assets/images/bls.png";
import gurneyServiceImg from "../../assets/images/gurney-transport.jpg";
import bariatricServiceImg from "../../assets/images/bariatric-transport.jpg";
import wheelchairServiceImg from "../../assets/images/wheelchair-transport.jpg";
import { ServiceCard } from "./ServiceCard";

const SERVICES = [
  {
    service: "Basic Life Support",
    img: blsImg,
    description:
      "Non-emergency transportation for patients who require basic medical support.",
  },
  {
    service: "Wheelchair Transport",
    img: wheelchairServiceImg,
    description:
      "Comfortable and convenient transportation for non-emergency medical appointments.",
  },
  {
    service: "Gurney Transport",
    img: gurneyServiceImg,
    description:
      "Safe and secure transportation for patients who cannot sit up during travel.",
  },
  {
    service: "Bariatric Transport",
    img: bariatricServiceImg,
    description:
      "Specialized transportation for patients who are obese or have limited mobility.",
  },
];

export const ServiceCards = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#F8FAFC" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 4,
            color: "#0D141C",
            fontWeight: 600,
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mb: 6,
            maxWidth: "800px",
            mx: "auto",
            color: "#4F7396",
            lineHeight: 1.8,
            fontSize: "1.1rem",
          }}
        >
          We provide a range of transport options, including wheelchair
          transport, stretcher transport, basic life support, and bariatric
          transport. Whether you need assistance with non-emergency travel or
          require more extensive medical support, our team is here to help.
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          sx={{
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {SERVICES.map((service) => (
            <Grid
              key={service.service}
              size={{ xs: 12, sm: 6, md: 3 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: 2,
              }}
            >
              <ServiceCard
                service={service.service}
                img={service.img}
                serviceDescription={service.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
