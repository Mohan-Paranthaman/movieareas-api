import express from "express";
import moviesRoutes  from "./routes/movies.route.js"

const app = express();
const PORT = 6969;

app.get('/',(req, res)=>{
    res.json({ msg : "Hello students!"})
});


//CRUD functionalities of movies
app.use('/movies',moviesRoutes)

app.listen(6969 , ()=>{
    console.log(`The server is running at http://localhost:${6969}`);
})

// Dry principle - Don't repeat same code

