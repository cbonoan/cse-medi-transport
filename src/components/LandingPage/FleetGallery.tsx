import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import vanFrontImg from "../../assets/images/IMG_0213.JPG";
import vanSideImg from "../../assets/images/IMG_5444.JPG";
import teamImg from "../../assets/images/IMG_6251.jpg";

const PHOTOS = [
  { src: vanFrontImg, alt: "CSE Medical Transport van" },
  { src: vanSideImg, alt: "CSE Medical Transport wheelchair-accessible van" },
  { src: teamImg, alt: "The CSE Medical Transport team" },
];

export const FleetGallery = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 1.5,
            color: "text.primary",
            fontWeight: 600,
          }}
        >
          Our Fleet & Team
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mb: 6,
            maxWidth: "700px",
            mx: "auto",
            color: "text.secondary",
            lineHeight: 1.8,
            fontSize: "1.1rem",
          }}
        >
          Real vehicles, real drivers. Our team is trained, equipped, and
          ready to get you where you need to go safely.
        </Typography>
        <Grid container spacing={3}>
          {PHOTOS.map((photo) => (
            <Grid key={photo.src} size={{ xs: 12, sm: 4 }}>
              <Box
                component="img"
                src={photo.src}
                alt={photo.alt}
                sx={{
                  width: "100%",
                  height: { xs: 260, sm: 300 },
                  objectFit: "cover",
                  borderRadius: 3,
                  display: "block",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
