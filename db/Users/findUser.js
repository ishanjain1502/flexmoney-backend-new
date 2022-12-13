const { UserModal } = require("../../models/v1/Schema");

const isFound = async (user) => {
  const { name, email } = user;

  const isEmailExits = await UserModal.findOne({ email: email });
  const isNameExits = await UserModal.findOne({ name: name });

  console.log(isEmailExits, isNameExits);

  if (isEmailExits != null || isNameExits != null) {
    return true;
  }

  return false;
};

exports.isFound = isFound;
