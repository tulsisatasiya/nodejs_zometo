const { restaurants_ownerSchema } = require("../models");


// Create a new owner
const addOwner = (body) => {
  return restaurants_ownerSchema.create(body);
};

// Get all owners
// const getAllOwners = async () => {
//   return restaurants_ownerSchema.find().populate("admin");
// };

const getAllOwners = async () => {
    return restaurants_ownerSchema.find().populate({
      path: "admin",
      select: "admin admin_level",
    });
  };
  


// Update owner by ID
const updateOwner = (ownerId, body) => {
  return restaurants_ownerSchema.findByIdAndUpdate(ownerId, { $set: body });
};

// Delete owner by ID
const deleteOwner = (ownerId) => {
  return restaurants_ownerSchema.findByIdAndDelete(ownerId);
};

module.exports = {
  addOwner,
  getAllOwners,
  updateOwner,
  deleteOwner,
};
