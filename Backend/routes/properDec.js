import express from "express";

import { adduser, deletelogin,  getlogin, updatelogin } from "../controllers/properDec.js";

const router = express.Router();

router.post("/",adduser);
router.get('/',getlogin);

router.delete("/:id",deletelogin);

router.put("/:id", updatelogin);

export default router;