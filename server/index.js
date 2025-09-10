require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./Config/DB');
const app = express();

const { PORT } = process.env;

app.use(cors({
    origin: function(origin,callback){
        if(!origin || origin.includes('localhost') || origin.includes('0.0.1') || origin === process.env.CLIENT_URI){
            return callback(null,true)
        }
        return callback(new Error("Not allowed"),false)
    },
    methods: ["GET","POST","PUT","PATCH","DELETE"],
    credentials: true,
    optionsSuccessStatus: 200
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/profile-photo',express.static('./Imgs/EmployeePfp'));

app.use('/employee',require('./Routers/Employee'));

db.authenticate().then(async()=>{
    await db.sync();
    app.listen(PORT,console.log(`Server is running on ${PORT}`))
})