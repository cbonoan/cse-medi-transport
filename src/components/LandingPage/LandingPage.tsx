import { Box, Typography } from "@mui/material";
import "../../styles/LandingPage.scss";
import { OurServices } from "./OurServices";
import { CustomButton } from "../Common/CustomButton";
import { Link } from "react-router";

export const LandingPage = () => {
  return (
    <Box id="landing-page-container">
      <Box id="hero-section">
        <Typography variant="h4" sx={{ fontWeight: "bolder" }}>
          CSE Medical Transport
        </Typography>
        <div>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bolder" }}
            gutterBottom
          >
            Kern County's most reliable medical transportation service. Our
            professional drivers are trained and ready to deliver safe,
            efficient service.
          </Typography>

          <Link to="/reservation">
            <CustomButton>Reserve A Ride</CustomButton>
          </Link>
        </div>
      </Box>
      <OurServices />

      <Box
        textAlign="center"
        padding="4rem"
        sx={{
          margin: "2rem auto",
          maxWidth: "800px",
        }}
      >
        <Typography
          variant="h3"
          mb={3}
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(45deg, #1976d2, #42a5f5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Ready to book your ride?
        </Typography>
        <Link to="/reservation">
          <CustomButton>Book now</CustomButton>
        </Link>
      </Box>
    </Box>
  );
};
