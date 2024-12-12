import { Router } from "express";
import { userRouter } from "./user";
import { spaceRouter } from "./space";
import { adminRouter } from "./admin";
import { SignupSchema } from "../../types";
import client from "@repo/db/client";

export const router = Router();

router.post("/signup", async (req, res) => {
  const parsedData = SignupSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(400).json({ error: parsedData.error.message });
    return;
  }

  try {
    const user = await client.user.create({
      data: {
        username: parsedData.data.username,
        password: parsedData.data.password,
        role: parsedData.data.type === "admin" ? "Admin" : "User",
      },
    });
    res.json({
      userId: user.id,
    });
  } catch (error) {
    res.status(400).json({ error: "Username already exists" });
  }
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
