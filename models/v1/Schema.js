const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
      default: false,
    },
    Batch: {
      type: String,
      default: "NA",
    },
    mobile: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const BillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    paymentDetails: {
      type: String,
    },
  },
  { timestamps: true }
);

exports.UserModal = mongoose.model("flexmoney.UserModal", UserSchema);
exports.BillModal = mongoose.model("flexmoney.BillModal", BillSchema);
