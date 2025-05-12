import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Stack,
  Alert,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  applicationSchema,
  type ApplicationFormData,
} from "../../schemas/applicationSchema";
import axios from "axios";
import { useState } from "react";

const ApplicationForm = () => {
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [alertSeverity, setAlertSeverity] = useState<
    "error" | "success" | "info"
  >("info");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      experience: "",
      availability: "",
      resume: null,
    },
  });

  const onSubmit = handleSubmit((data) => {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("experience", data.experience);
    formData.append("availability", data.availability);
    formData.append("resume", data.resume as Blob);

    axios
      .post("/api/application", formData)
      .then((data) => {
        setResponseMessage(data.data.message);
        setAlertSeverity("success");
      })
      .catch((err) => {
        setResponseMessage(err.response.data);
        setAlertSeverity("error");
      });
  });

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 10 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Job Application
        </Typography>
        <Box component="form" onSubmit={onSubmit} noValidate>
          <Stack spacing={3}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      required
                      fullWidth
                      label="First Name"
                      error={!!errors.firstName}
                      helperText={errors.firstName?.message}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      required
                      fullWidth
                      label="Last Name"
                      error={!!errors.lastName}
                      helperText={errors.lastName?.message}
                    />
                  )}
                />
              </Grid>
            </Grid>

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  fullWidth
                  label="Email"
                  type="email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />

            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  fullWidth
                  label="Phone Number"
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              )}
            />

            <Controller
              name="experience"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.experience}>
                  <InputLabel required>Years of Experience</InputLabel>
                  <Select {...field} label="Years of Experience">
                    <MenuItem value="0-1">0-1 years</MenuItem>
                    <MenuItem value="1-3">1-3 years</MenuItem>
                    <MenuItem value="3-5">3-5 years</MenuItem>
                    <MenuItem value="5+">5+ years</MenuItem>
                  </Select>
                  {errors.experience && (
                    <FormHelperText>{errors.experience.message}</FormHelperText>
                  )}
                </FormControl>
              )}
            />

            <Controller
              name="availability"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.availability}>
                  <InputLabel required>Availability</InputLabel>
                  <Select {...field} label="Availability">
                    <MenuItem value="full-time">Full Time</MenuItem>
                    <MenuItem value="part-time">Part Time</MenuItem>
                    <MenuItem value="weekends">Weekends Only</MenuItem>
                    <MenuItem value="on-call">On Call</MenuItem>
                  </Select>
                  {errors.availability && (
                    <FormHelperText>
                      {errors.availability.message}
                    </FormHelperText>
                  )}
                </FormControl>
              )}
            />

            <Controller
              name="resume"
              control={control}
              render={({ field }) => (
                <TextField
                  required
                  type="file"
                  fullWidth
                  slotProps={{
                    htmlInput: {
                      accept: ".pdf",
                    },
                  }}
                  onChange={(e) => {
                    const file = (e.target as HTMLInputElement).files?.[0];
                    field.onChange(file);
                  }}
                  error={!!errors.resume}
                  helperText={errors.resume?.message}
                />
              )}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{ mt: 2 }}
              disabled={Object.keys(errors).length > 0}
            >
              Submit Application
            </Button>
          </Stack>
          {responseMessage && (
            <Alert severity={alertSeverity} sx={{ mt: 2 }}>
              {responseMessage}
            </Alert>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default ApplicationForm;
