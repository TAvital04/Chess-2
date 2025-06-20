// Constants
    import {Router} from "express";

    export const router = Router();

// Routes
    router.get("/", (req, res) => {
        res.send("Home");
    });