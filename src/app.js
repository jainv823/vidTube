import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(process.env.PORT);
  
});

export { app };
