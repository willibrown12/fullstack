import express from "express"
import dotenv from "dotenv"
import { router as customersRouter } from "./customers"
import bodyParser from "body-parser"
dotenv.config()
const app = express()

app.use(bodyParser.json())

app.get("/health-check", (req, res, next) => {
    return res.json({ message: "Ok" })
})

app.use("/customers", customersRouter)

app.use("/employees", customersRouter)



app.listen(process.env.PORT)