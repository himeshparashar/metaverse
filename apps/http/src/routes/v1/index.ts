import { Router } from "express";
import { userRouter } from "./user";
import { spaceRouter } from "./space";
import { adminRouter } from "./admin";

export const router = Router();

router.post("/signup", (req, res) => {
  res.send("Signup route");
});

router.post("/signin", (req, res) => {
  res.send("Signin route");
});

router.get("/elements", (req, res) => {
  res.send("Elements route");
});

router.get("/avatar", (req, res) => {
  res.send("Avatar route");
});

router.use("/user", userRouter);
router.use("/space", spaceRouter);
router.use("/admin", adminRouter);
