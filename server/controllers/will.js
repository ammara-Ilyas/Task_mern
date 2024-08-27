import { Will } from "../model/Will.js";
import { sanitizeWillData } from "../utils/sanitizewilldata.js";

export const createWill = async (req, res) => {
  const { hasChildren, children, underageChildren, guardians } = req.body;
  // console.log("req", req.body);

  try {
    const senitizedData = sanitizeWillData({
      hasChildren,
      children,
      underageChildren,
      guardians,
    });
    const newWill = new Will(senitizedData);
    // console.log("ok 1");

    const savedWill = await newWill.save();
    // console.log("ok 2");
    res.status(201).json(savedWill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
