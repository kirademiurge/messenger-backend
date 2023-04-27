import express, {Express} from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "./shared";
import { routes } from "./routes";

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);

app.listen(config.port, () => console.log(`server is running at http://localhost:${config.port}`));
