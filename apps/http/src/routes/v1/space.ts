import { Router } from "express";

export const spaceRouter = Router();

spaceRouter.post("/", (req, res) => {
  res.send("get space");
});

spaceRouter.delete("/:spaceId", (req, res) => {
  res.send("delete space");
});

spaceRouter.get("/all", (req, res) => {
  res.send("get all spaces");
});

spaceRouter.post("/element", (req, res) => {
  res.send("create element");
});

spaceRouter.delete("/element", (req, res) => {
  res.send("delete element");
});

spaceRouter.get("/:spaceId", (req, res) => {
  res.send("get space by id");
});
