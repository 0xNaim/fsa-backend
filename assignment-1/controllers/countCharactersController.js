import { countChars } from "../services/count-characters";

export const countCharactersController = (req, res) => {
  try {
    const { string } = req.query;
    res.status(200).json(countChars(string));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
