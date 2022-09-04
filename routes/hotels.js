import express from "express";
import Hotel from "../models/Hotel.js";

import { createHotel, 
  deleteHotel, 
  getHotel, 
  getHotels, 
  updatedHotel } from "../controllers/controlHotel.js";


const router = express.Router();

//CREATE /POST
router.post("/", createHotel);

//UPDATE /PUT
router.put("/:id", updatedHotel)

//DELETE
router.delete("/:id", deleteHotel);

//GET
router.get("/:id", getHotel);

//GET ALL

router.get("/", getHotels);

export default router;
