import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import expressLayouts from "express-ejs-layouts";
import webRoutes from "./routes/web.js";
import apiRoutes from "./routes/api.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(expressLayouts);
app.set("layout", "layouts/main");


app.use("/", webRoutes);
app.use("/api", apiRoutes);


export default app;