import jwt from "jsonwebtoken";

const jwtAuthentication = async (req, res, next) => {
  // console.log(req.headers);
  const authHeader = req.headers["authorization"];
  // console.log("authHeader",authHeader)
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ success: false, message: "No token found" });
  }
try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;
    req.isSeller = decoded.isSeller;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ success: false, message: "Token expired, please login again" });
    }
    return res.status(403).json({ success: false, message: "Invalid token" });
  }
};

export default jwtAuthentication;
