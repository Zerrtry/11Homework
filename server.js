const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./public/"));

router.routes(app);

app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});