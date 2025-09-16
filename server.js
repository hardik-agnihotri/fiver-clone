import express from "express";
import dotenv from "dotenv"
import { dbConnection } from "./db/connection.js";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import conversationRoute from "./routes/conversation.route.js";
import orderRoute from "./routes/order.route.js";
import messageRoute from "./routes/message.route.js"
import reviewRoute from "./routes/review.route.js"
import authRoute from "./routes/auth.routes.js"
import cookieParser from "cookie-parser";


dotenv.config()
const app = express();

app.use(cookieParser());
app.use(express.json());


app.use("/api/auth",authRoute)
app.use("/api/users",userRoute);
app.use("/api/gigs",gigRoute);
app.use("/api/orders",orderRoute);
app.use("/api/conversations",conversationRoute);
app.use("/api/reviews",reviewRoute);
app.use("/api/messages",messageRoute);

app.listen(8800,()=>{
    dbConnection();
    console.log(`backend is running on the port ${8800} ok`)
}); 
