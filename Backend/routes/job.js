import express from "express";
import { addjob, deletejob, getJob, updatejob } from "../controllers/Job.js";
const router = express.Router();


router.post("/", addjob);
router.get("/", getJob );

router.delete("/:id", deletejob);

router.put("/:id", updatejob);


export default router;

