const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// Set up mongoose connection
mongoose.connect("mongodb://mongo:27017/mydatabase", {});
// mongoose.connect("mongodb://mongo(this mongo here is name you give when running mongo in container with network ):27017/mydatabase", {});

const EntrySchema = new mongoose.Schema({
  text: String,
  date: { type: Date, default: Date.now },
});

const Entry = mongoose.model("Entry", EntrySchema);

app.get("/", async (req, res) => {
  try {
    const entry = new Entry({ text: "This is an entry by krishna" });
    await entry.save();
    res.send("Entry added!");
  } catch (err) {
    res.status(500).send("Error occurred");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
