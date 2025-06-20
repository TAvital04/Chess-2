// Objects
    import express from "express";
    import morgan from "morgan";

    import {router} from "./router.js"

    export const app = express();

// Middleware
    app.use(morgan("dev"));

    app.use("/", router);

