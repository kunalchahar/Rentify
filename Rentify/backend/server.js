const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db.js")
const userRouter = require("./routes/userRoutes.js")
const propertyRouter = require("./routes/propertyRoutes.js")

const app = express()
const port = 4000


app.use(express.json())

app.use(cors())

app.use("/api/user", userRouter)
app.use("/api/properties", propertyRouter)

connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log(`Server started on http://localhost:${port}`)
    })
}).catch((error)=>{
    console.log("Error Connecting Database: ", error);
})

app.get("/", (req, res)=>{
    res.send("API Working");
})



// mongodb+srv://prabhat:<password>@cluster0.jh851qg.mongodb.net/?