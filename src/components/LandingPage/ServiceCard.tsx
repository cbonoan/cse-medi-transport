import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

interface IServiceCard {
  img: string;
  service: string;
  serviceDescription: string;
}

export const ServiceCard = ({
  img,
  service,
  serviceDescription,
}: IServiceCard) => {
  return (
    <Card
      elevation={0}
      sx={{
        maxWidth: "280px",
        backgroundColor: "transparent",
        borderRadius: "12px",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          sx={{
            height: "280px",
            borderRadius: "12px",
          }}
          image={img}
        />
      </Box>
      <CardContent
        sx={{
          textAlign: "left",
          padding: "24px 16px",
          "&:last-child": {
            paddingBottom: "24px",
          },
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "#0D141C",
            fontWeight: 600,
            fontSize: "1.5rem",
            marginBottom: "12px",
          }}
        >
          {service}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#4F7396",
            lineHeight: 1.6,
            fontSize: "1rem",
          }}
        >
          {serviceDescription}
        </Typography>
      </CardContent>
    </Card>
  );
};
