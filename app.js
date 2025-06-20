// Objects
    import express from "express";
    import morgan from "morgan";

    import {router} from "./router.js"

    import {fileURLToPath} from "url";
    import path from "path";
    import methodOverride from "method-override";

    export const app = express();

// View engine (ejs)
    app.set("view engine", "ejs");
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    app.set("views", path.join(__dirname, "public"));

    app.use(express.static(path.join(__dirname, "public")));
    
    app.use(methodOverride("_method"));

// Middleware
    app.use(morgan("dev"));

    app.use("/", router);

