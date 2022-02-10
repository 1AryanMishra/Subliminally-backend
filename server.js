import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';

//Importing Home Route
import Home from './routes/Home/Home.js';

//Importing AuthorPage Route;
import AuthorPage from './routes/AuthorPage/AuthorPage.js';

const app = express();

app.use(cors({
    origin : 'https://subliminally.netlify.app/'
}))

app.use(express.json({limit : '15mb'}));


//Connecting to Database
mongoose.connect("mongodb+srv://admin:2SgBBsMtGyJJKVjf@blogs.w9t8v.mongodb.net/blogs?retryWrites=true&w=majority").then(() => console.log("Database Connected!")).catch((err) => console.error(err));


//Setting Route and Controller for Author Page
app.use('/AuthorPage', AuthorPage);


//Setting Route and Controller for Home
app.use('/', Home);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started at Port ${port}`));