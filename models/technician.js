const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const technicianSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  company: {type: String, required: true},
  description: {type: String, required: true},
  profile_picture: {type}
});

const Technician = mongoose.model("Customer", technicianSchema);

module.exports = Technician;