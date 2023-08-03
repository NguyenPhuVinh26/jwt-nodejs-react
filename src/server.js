import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();
import bodyParser from "body-parser";



const app = express();
const PORT = process.env.PORT || 9090;

configViewEngine(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initWebRoutes(app);


app.listen(PORT, () => {
    console.log(">>> JWT Backend is running on the port = " + PORT);
})