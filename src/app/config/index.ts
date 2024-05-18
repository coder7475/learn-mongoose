import dotenv from "dotenv";
import path from "path";

const directory = path.join(process.cwd(), ".env")
dotenv.config({path: directory})