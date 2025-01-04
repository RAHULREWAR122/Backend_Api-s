import { v4 as uuidv4 } from 'uuid'
const bookings = [];

export const bookingSeat = async (req, res) => {
  try {
    const { date, time, guests, name, contact } = req.body;
    if (!date || !time || !guests || !name || !contact) {
      return res.json({ error: "All fields are required" });
    }
    const existingBooking = bookings.find(
      (b) => b.date === date && b.time === time
    );
    if (existingBooking) {
      return res.json({ error: "seat already booked" });
    }

    const newBooking = {
      id: uuidv4(),
      date,
      time,
      guests,
      name,
      contact,
    };
    bookings.push(newBooking);

    res
      .status(200)
      .json({ message: "Booking successful", booking: newBooking });
  } catch (error) {
    return res.json({ message: "Something went wrong,Please try again." });
  }
};

export const allBookings = async (req, res) => {
  try {
    const { date } = req.query;
    if (date) {
      const filteredBookings = bookings.filter((b) => b.date === date);
      return res.json(filteredBookings);
    }
    return res.status(200).json(bookings);
  } catch (error) {
    return res.json({ message: "Something went wrong,Please try again." });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const index = bookings.findIndex((b) => b.id === parseInt(id));
    if (index === -1) {
      return res.json({ error: "Booking not found" });
    }
    bookings.splice(index, 1);
    return res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    return res.json({ message: "Something went wrong,Please try again." });
  }
};
