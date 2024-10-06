import express from "express"
import { getTenants } from "./handlers/getTenants"





const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const data = await getTenants()
        res.json({Tenants: data })
    } catch (error) {
        res.send("Something went wrong")
    }
})













export { router }