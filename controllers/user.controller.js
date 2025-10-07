import userModel from "../db/models/user.model.js";

export const getUser = async (req, res) => {
  try {
    const user = req.userId;
    const userRole = req.isSellar;
    const userDetails = await userModel.findById( user );

    return res
      .status(200)
      .json({ success: true, message: "User details", data: userDetails });
  } catch (error) {
    console.error("Register error", error);
  }
};
