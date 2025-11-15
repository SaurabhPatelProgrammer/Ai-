import { Request, Response } from "express";
import LessonsService from "../services/lessons.service.js";


export default class LessonsController {
static list(req: Request, res: Response) {
res.json(LessonsService.getAll());
}


static get(req: Request, res: Response) {
const lesson = LessonsService.getById(req.params.id);
if (!lesson) return res.status(404).json({ message: "Lesson not found" });
res.json(lesson);
}


static renderList(req: Request, res: Response) {
const lessons = LessonsService.getAll();
res.render("lessons/list", { title: "Lessons", lessons });
}
}