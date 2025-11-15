import { Router } from "express";
import HomeController from "../controllers/home.controller.js";
import LessonsController from "../controllers/lessons.controller.js";


const router = Router();


router.get("/", HomeController.home);
router.get("/lessons", LessonsController.renderList);


export default router;