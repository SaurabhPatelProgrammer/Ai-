import { Router } from "express";
import LessonsController from "../controllers/lessons.controller.js";


const router = Router();


router.get("/ping", (req, res) => res.json({ message: "pong" }));
router.get("/lessons", LessonsController.list);
router.get("/lessons/:id", LessonsController.get);


export default router;