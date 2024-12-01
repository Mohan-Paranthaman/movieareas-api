import express from "express";
import { MovieIndex, MovieCreate , MovieUpdate , MovieDelete} from "../controllers/movies.controller";


const router = express.Router();

// R - For Reading
router.get('/',MovieIndex)

//C - For creating 
router.post('/' , MovieCreate)

//U - For updating 
router.put('/:id',MovieUpdate)

router.delete('/:id',MovieDelete)

export default router;

