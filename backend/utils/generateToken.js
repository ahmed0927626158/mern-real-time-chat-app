import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId },process.env.SECRET_KEY, { expiresIn: "1d" });

  res.cookie("jwt", token, {
    maxAge: 3 * 24 * 60 * 60 * 1000,
    httpOnly: true, //prevent XSS attacks cros-site scripting attacks
    sameSite: "strict", // CSRF attack cross-site request forgery
  });
};

export default generateToken;
