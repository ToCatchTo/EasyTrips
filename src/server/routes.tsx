import express from "express";
import User from "../models/User";

const router = express.Router();

// Create User
router.post("/users", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

// Get All Users
router.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

export default router;
