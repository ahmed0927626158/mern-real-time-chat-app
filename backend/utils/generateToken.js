import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId },process.env.SECRET_KEY, { expiresIn: "1d" });

res.setHeader("Set-Cookie", `jwt=${token}; Max-Age=${3 * 24 * 60 * 60 * 1000}; HttpOnly; SameSite=None; Secure; Path=/`);
};

export default generateToken;
