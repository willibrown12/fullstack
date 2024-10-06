import express from "express"
import dotenv from "dotenv"
import { router as issuesRouter } from "./issues"
import { router as categoryRouter } from "./categories"
import { router as tenantsRouter } from "./tenants"
import bodyParser from "body-parser"
import cors from "cors"
dotenv.config()
const app = express()
console.log("Application Start")
app.use(cors())
app.use(bodyParser.json())

app.get("/health-check", (req:any, res:any, next) => {
    return res.json({ message: "Server is up" })
})

app.use("/issues", issuesRouter)
app.use("/categories", categoryRouter)
app.use("/tenants", tenantsRouter)
app.listen(process.env.PORT, () => {
    console.log(`Application Listen to Port: ${process.env.PORT}`)
})