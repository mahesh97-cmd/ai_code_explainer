const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const aiRoute=require("../server/src/routes/aiRoute")
const bodyParser=require("body-parser")
dotenv.config()
const app=express()
app.use(express.json())
app.use(bodyParser.json());
app.use(cors())


app.get("/",(req,res)=>{
    res.send("home page")
})
app.use("/api/explained",aiRoute)

PORT=process.env.PORT || 3002

app.listen(PORT,()=>{console.log(`app running on ${PORT}`)})

