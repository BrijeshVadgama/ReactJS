const express = require("express");
const mongoose = require("mongoose");
const travelers = require("./models/TravelersDetails");
const cors = require("cors");
const PORT = 6000;

// connect with database

mongoose
  .connect("mongodb://localhost:27017/travel_booking_system")
  .then(() => {
    console.log("Connected with Database..!");
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors());

    //  Routes Start

    //  check server is running or not

    app.get("/", (req, res) => {
      res.send("Server Started");
    });

    // get all travelers

    app.get("/travelers", async (req, res) => {
      try {
        const findTravelers = await travelers.find();
        res.json(findTravelers);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
    });

    // get traveler by id

    app.get("/travelers/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const findTravelersByID = await travelers.findOne({ BookingID: id });
        // if user not found
        if (!findTravelersByID) {
          return res.json({ message: "Traveler not found" });
        }
        res.send(findTravelersByID);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
    });

    // add traveler

    app.post("/travelers", async (req, res) => {
      try {
        // find latest booking id
        let lastBooking = await travelers.findOne().sort({ BookingID: -1 });
        // create new booking id
        let newID;
        if (lastBooking) {
          newID = parseInt(lastBooking.BookingID) + 1;
        } else {
          newID = 1;
        }
        // new traveler create with calculated booking id
        const traveler = await travelers.create({
          ...req.body,
          BookingID: newID,
        });
        res.json(traveler);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
    });

    // update traveler

    app.put("/travelers/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const updateTraveler = await travelers.findOneAndUpdate(
          { BookingID: id },
          req.body
        );
        // if user not founed
        if (!updateTraveler) {
          return res.json({ message: "Traveler not found" });
        }
        res.json(updateTraveler);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
    });

    // delete traveler

    app.delete("/travelers/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const deleteTraveler = await travelers.findOneAndDelete({
          BookingID: id,
        });
        // if user not found
        if (!deleteTraveler) {
          return res.json({ message: "Traveler not found" });
        }
        res.json({ message: "Traveler deleted successfully..!" });
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
    });

    // Routes End

    // check server is running or not

    app.listen(PORT, () => {
      console.log(`Server is running at PORT ${PORT}`);
    });
  })

  // check database is connected or not

  .catch((err) => {
    console.log("Error while connecting with Database..!" + err);
  });
