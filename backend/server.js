// Import required modules
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require('path');
const fileuploader = require("express-fileupload");
var cloudinary=require("cloudinary").v2;

// Import custom modules
const connectDB = require("../backend/DB/index");
const AboutRouter = require("../backend/Router/About");
const ServiceRouter=require("../backend/Router/Service");
const ProductRouter=require("../backend/Router/Product");
const Crouselrouter=require("../backend/Router/Crouselimg")
const PetRouter=require("../backend/Router/Pet");
const ApplicationRouter=require("../backend/Router/Application");
const AppointmentRouter=require("../backend/Router/Appointments");
const SignupRouter=require("../backend/Router/Signup");
const CartRouter=require("../backend/Router/AddToCart");
const OrderRouter=require("../backend/Router/order");
const router =require("../backend/Router/SellPetModal")
// Initialize express app
const app = express();
// Load environment variables
dotenv.config();

// Middleware setup
app.use(express.static("public"));
app.use(fileuploader());
 app.use(cors({   origin:['https://pawconnect1.netlify.app','http://localhost:5173']  
}));
app.use(express.json());


// Connect to the database
connectDB().then(() => {
    // Start the server if database connection is successful
    const port = process.env.PORT|| 8080;
    app.listen(port, () => {
        console.log(`Server is running at ${port}`);
    });
}).catch(() => {
    // Handle database connection failure
    console.error("Failed to connect to the database");
});
cloudinary.config({ 
    cloud_name: 'dmbbcpnrc', 
    api_key: '617526675641691', 
    api_secret: 'FZRURtJh2JalrEr5O5GMsVFbEqA' // Click 'View API Keys' above to copy your API secret
});

// Set up routes
app.use('/About', AboutRouter);
app.use('/Service',ServiceRouter);
app.use('/Product',ProductRouter);
app.use('/Crousel',Crouselrouter);
app.use('/pet',PetRouter);
app.use('/Application',ApplicationRouter);
app.use('/Appointment',AppointmentRouter);
app.use('/Signup',SignupRouter);
app.use('/Cart',CartRouter);
app.use('/Order',OrderRouter);
app.use('/SellPet',router);


