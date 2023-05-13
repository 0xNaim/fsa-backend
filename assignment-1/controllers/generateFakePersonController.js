import { generateFakePerson } from "../services/generate-fake-person";

export const generateFakePersonController = (req, res) => {
  try {
    let { properties } = req.query;
    console.log("Properties: ", properties);

    if (!properties) {
      res.status(400).json({ error: "Invalid properties" });
    }

    res.status(200).json(generateFakePerson(properties));
  } catch (error) {
    res.status(400).json({ error: "Invalid properties" });
  }
};
