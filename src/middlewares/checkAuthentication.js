const admin = require("firebase-admin");
const checkAuthentication = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      status: false,
      message: "Unauthorized access",
    });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      status: false,
      message: "Token not found",
    });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: "Unauthorized access",
    });
  }
};

module.exports = checkAuthentication;
