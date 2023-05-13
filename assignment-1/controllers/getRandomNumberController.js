import { getRandomNumber } from "../services/get-random-number";

export const getRandomNumberController = (req, res) => {
  try {
    const { start, end } = req.query;

    if (Number.isInteger(+start) && Number.isInteger(+end)) {
      return res.status(200).json(getRandomNumber(+start, +end));
    }

    res.status(400).json({ error: "Start & End query must be number!" });
  } catch (error) {
    res.status(400).json({ error: "Start & End query must be number!" });
  }
};
