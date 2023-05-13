import { Router } from "express";
import { countCharactersController } from "../controllers/countCharactersController";
import { generateFakePersonController } from "../controllers/generateFakePersonController";
import { getRandomNumberController } from "../controllers/getRandomNumberController";

const router = new Router();

router.get("/random-number", getRandomNumberController);
router.get("/fake-person", generateFakePersonController);
router.get("/count-chars", countCharactersController);

export default router;
