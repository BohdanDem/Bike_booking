import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000;

app.listen(PORT, async () => {
    console.log(`Server has successfully started on PORT ${PORT}`);
});
