import { Router } from "express";

export const userRouter = Router();

userRouter.post("/metadata", (req, res) => {
  res.send("Signup route");
});

userRouter.get("/metadata/bulk", (req, res) => {
  res.send("Signin route");
});
