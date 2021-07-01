const express = require('express');
const app = express();
const PORT = 3000;


var aTem = []

app.get("/", (req, res) => {res.send("Welcome to the Users API! ",aTem[aTem.length-1])});

app.post("/post", (req, res) => {
    
    res.send("Send post request success API!")
    let temperature = req.body.temperature
    aTem.push(temperature)
    console.log("Data: ",req.body.temperature)
});

app.listen(process.env.PORT || PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));