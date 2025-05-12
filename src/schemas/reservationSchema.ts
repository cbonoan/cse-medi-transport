import { z } from "zod";

export type ReservationFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  pickupDateTime: string;
  pickupLocation: string;
  dropoffLocation: string;
  transportType: string;
  tripType: string;
};

export const reservationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(1, "Phone number is required"),
  pickupDateTime: z.string().min(1, "Pickup date and time is required"),
  pickupLocation: z.string().min(1, "Pickup location is required"),
  dropoffLocation: z.string().min(1, "Dropoff location is required"),
  transportType: z.string().min(1, "Transport type is required"),
  tripType: z.string().min(1, "Trip type is required"),
});
