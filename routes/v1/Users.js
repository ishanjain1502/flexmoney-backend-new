const express = require("express");
const router = express.Router();
const { auth } = require("../../middleware/v1/auth");

const {
  SignIn,
  SignUp,
  UsersUpdate,
} = require("../../controller/v1/User/index");

router.post("/sign_in", SignIn);
router.post("/sign_up", SignUp);
router.put("/update", auth, UsersUpdate);

module.exports = router;
