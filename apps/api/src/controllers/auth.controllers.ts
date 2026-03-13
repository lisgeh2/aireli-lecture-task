import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { PlatformUser } from "@enterprise-commerce/core/platform/types"
import { createUser } from "../models/User"

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "Email and password are required" });
    return;
  }
  const createdUser = await createUser(email, password);

  createUser(email, password);

  res.status(201).json({
    id: createdUser.id,
    email: createdUser.email
  });
  // please finish this function

};