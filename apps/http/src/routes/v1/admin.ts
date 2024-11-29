import { Router } from "express";

export const adminRouter = Router();

adminRouter.post("/element", (req, res) => {
  res.send("create element");
});

adminRouter.put("/element/:elementId", (req, res) => {
  res.send("get element by id");
});

adminRouter.post("/avatar", (req, res) => {
  res.send("Admin route");
});

adminRouter.get("/map", (req, res) => {
  res.send("Admin route");
});
