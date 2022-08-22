import express from 'express';
import './Database-connection/index'
import user_router from './routes/user';


const app = express();
const port = process.env.PORT || 3000;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

// Routing Section
app.use('/user', user_router)

// End Routing Section


app.listen(port, () => {
    console.log(`Server started on port ${port} ✔❤❤❤`);
})