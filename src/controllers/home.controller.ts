import { Request, Response } from "express";


export default class HomeController {
static home(req: Request, res: Response) {
res.render("index", { title: "Sweetu App" });
}
}