const express = require("express");
const db = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes"));

db.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout",
    {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });

app.listen(PORT, () => {console.log(`App listening on PORT ${PORT}`)});

