import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => res.send("Welcome to the Users API!"));

app.post("/post", (req, res) => {
    
    res.send("Send post request success API!")
    console.log("Data: ",req.body.temperature)
});

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));