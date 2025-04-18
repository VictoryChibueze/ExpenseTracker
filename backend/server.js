const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
