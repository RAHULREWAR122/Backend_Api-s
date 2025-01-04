import express from "express";
import { bookingSeat , allBookings , deleteBooking } from "../Controllers/BookingController.js";
const router = express.Router();


router.post("/api/book", bookingSeat);
router.get("/api/bookings", allBookings);
router.delete("/api/booking/:id", deleteBooking);


export default router;
