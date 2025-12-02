import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const Data = ["blue", "pink", "purple"];

app.get("/data", (req, res) => {
    res.json(Data);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
