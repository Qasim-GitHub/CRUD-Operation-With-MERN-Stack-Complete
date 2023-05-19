const express=require('express')
const app=express();
app.use(express.json());
const cors= require('cors');
const port=4000;
const routes= require('./api/routes/routes')
const db= require('./api/helper/mongodb')
db();
app.use(cors());
app.use('/api',routes)








app.listen(port,()=>{
    console.log(`app working on port ${port}`);
})