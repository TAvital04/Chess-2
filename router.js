// Constants
    import {Router} from "express";

    export const router = Router();

// Routes
    router.get("/", (req, res) => {
        res.render("home", {title: "Home"});
    });

    // Create