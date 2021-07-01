const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json())

var temperature = {}

app.get("/", (req, res) => {res.send(temperature)});

app.post("/post", (req, res) => {
    
    res.send("Send post request success API!")
    temperature = req.body
    console.log("Data: ",req.body)
});

app.listen(process.env.PORT || PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));