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
  reservationSchema,
  type ReservationFormData,
} from "../../schemas/reservationSchema";
import axios from "axios";
import { useState } from "react";

const ReservationForm = () => {
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [alertSeverity, setAlertSeverity] = useState<
    "error" | "success" | "info"
  >("info");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      pickupDateTime: "",
      pickupLocation: "",
      dropoffLocation: "",
      transportType: "",
      tripType: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    axios
      .post("/api/reservation", data)
      .then((response) => {
        setResponseMessage(response.data.message);
        setAlertSeverity("success");
      })
      .catch((error) => {
        setResponseMessage(error.response.data);
        setAlertSeverity("error");
      });
  });

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 10 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Transportation Reservation
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
              name="pickupDateTime"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  fullWidth
                  label="Pickup Date and Time"
                  type="datetime-local"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                  error={!!errors.pickupDateTime}
                  helperText={errors.pickupDateTime?.message}
                />
              )}
            />

            <Controller
              name="pickupLocation"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  fullWidth
                  label="Pickup Location"
                  error={!!errors.pickupLocation}
                  helperText={errors.pickupLocation?.message}
                />
              )}
            />

            <Controller
              name="dropoffLocation"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  fullWidth
                  label="Dropoff Location"
                  error={!!errors.dropoffLocation}
                  helperText={errors.dropoffLocation?.message}
                />
              )}
            />

            <Controller
              name="transportType"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.transportType}>
                  <InputLabel>Type of Transport Service</InputLabel>
                  <Select {...field} label="Type of Transport Service">
                    <MenuItem value="gurney">Gurney</MenuItem>
                    <MenuItem value="wheelchair">Wheelchair</MenuItem>
                    <MenuItem value="ambulatory">Ambulatory</MenuItem>
                  </Select>
                  {errors.transportType && (
                    <FormHelperText>
                      {errors.transportType.message}
                    </FormHelperText>
                  )}
                </FormControl>
              )}
            />

            <Controller
              name="tripType"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.tripType}>
                  <InputLabel>Trip Type</InputLabel>
                  <Select {...field} label="Trip Type">
                    <MenuItem value="one-way">One-way</MenuItem>
                    <MenuItem value="roundtrip">Roundtrip</MenuItem>
                  </Select>
                  {errors.tripType && (
                    <FormHelperText>{errors.tripType.message}</FormHelperText>
                  )}
                </FormControl>
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
              Reserve Ride
            </Button>
          </Stack>
        </Box>
        {responseMessage && (
          <Alert sx={{ mt: 2 }} severity={alertSeverity}>
            {responseMessage}
          </Alert>
        )}
      </Paper>
    </Container>
  );
};

export default ReservationForm;
