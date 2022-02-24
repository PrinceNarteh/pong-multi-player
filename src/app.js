const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`🚀 Server up and running on port ${PORT}`);
});
