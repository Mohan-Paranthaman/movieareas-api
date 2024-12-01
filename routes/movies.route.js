import express from "express";


const router = express.Router();

// R - For Reading
router.get('/',(req,res)=>{
    res.send("Get all movie lists")
})

//C - For creating 
router.post('/' , (req,res)=>{
    res.send("Create a movie")
})


//U - For updating 
router.put('/:id',(req,res)=>{
    res.send("Update a movie")
})

router.delete('/:id',(req,res)=>{
    res.send("Delete a movie")
})

export default router;

