import jwt from "jsonwebtoken";

const expiresIn = process.env.NODE_ENV === "production" ? "30d" : "3000";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: expiresIn });
};

export default generateToken;
