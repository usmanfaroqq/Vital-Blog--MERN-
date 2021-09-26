// dependencies
const express = require("express");
const dbConnect = require("./config/database");
const authRouter = require('./routes/userRoutes');
const bodyParser = require('body-parser')
const cors = require('cors')
const postRouter = require('./routes/postRoutes');
const profileRouter = require("./routes/profileRoutes");
const path = require('path');

// Calling a function
const app = express();
require('dotenv').config();
dbConnect();
app.use(bodyParser.json());
app.use(cors())

// // Routes
// app.get("/", (req, res) => {
//   res.send("Welcome to vital Blog");
// }); // Home Route

app.use('/', authRouter) // Register/login Function
app.use('/', postRouter) // post/get Route
app.use('/', profileRouter) // post/get Route









// Server configuration
const PORT = process.env.PORT || 4000;
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, `./../frontend/build/`)));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
