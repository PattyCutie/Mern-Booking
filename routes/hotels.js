import express from "express";
import Hotel from "../models/hotel.js";
import { creatError } from "../utils/error.js";

const router = express.Router();

//CREATE /POST
router.post("/", async (req, res) => {
  
});

//UPDATE /PUT
router.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(
        req.params.id
    );

    res.status(200).json("Hotel has been deleted!!");
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(
        req.params.id
    );

    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET ALL 

router.get("/", async (req, res, next) => {

    try {
      const hotels = await Hotel.find();
  
      res.status(200).json(hotels);
    } catch (err) {
      next(err)
    }
  });


export default router;