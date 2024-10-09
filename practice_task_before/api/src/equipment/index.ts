import express from "express"
import { getCategories } from "./handlers/getCategories"



const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const data = await getCategories()
        res.json({Categories: data })
    } catch (error) {
        res.send("Something went wrong")
    }
})













export { router }