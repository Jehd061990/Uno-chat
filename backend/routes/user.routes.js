import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebBar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebBar);

// import controllers
export default router;
