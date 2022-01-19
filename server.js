import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.json({
        connected : true
    })
})


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started at Port ${port}`));