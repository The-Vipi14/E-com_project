// require App in the server
const app = require('./App/App');

// Environmental variable setup
const dotenv = require('dotenv')
dotenv.config({ path: "./config/config.env" });
const port = process.env.PORT;

// Database connection
const Data_Base_Conn = require('./database/conn');
Data_Base_Conn();

// Listen the app 
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
})




