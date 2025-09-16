import bcrypt from "bcrypt";
import userModel from "../db/models/user.model";

export const register = async (req, res) => {
  try {
    const { username, email, password, country } = req.body;

    if (!username || !email || !password || !country) {
      return res
        .status(401)
        .json({ success: false, message: "All Fields are required" });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      username,
      email,
      password: hashpassword,
      country,
    });

    return res
      .status(201)
      .json({
        success: true,
        message: "user created successfully",
        data: newUser,
      });
  } catch (error) {
    console.log("Register error",error);
  }
};

export const login = async (req, res) => {};

export const logout = async (req, res) => {};
