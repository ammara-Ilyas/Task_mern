import mongoose from "mongoose";

const childSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const guardianSchema = new mongoose.Schema({
  name: { type: String, required: true },
  relationship: { type: String, required: true },
});

const willSchema = new mongoose.Schema({
  hasChildren: { type: Boolean, required: true },
  children: [childSchema],
  underageChildren: { type: Boolean, required: true },
  guardians: [guardianSchema],
});

export const Will = mongoose.model("Will", willSchema);
