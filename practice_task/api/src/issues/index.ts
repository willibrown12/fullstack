import express from "express"
import { getIssues } from "./handlers/getIssues"
import { searchIssue } from "./handlers/searchIssues"

import { filterIssue } from "./handlers/filterIssues"
import { createIssue } from "./handlers/createIssue"
import { z } from "zod"
import { log } from "console"

// import { createCustomer, CustomerType } from "./handlers/createCustomer"
// import { deleteCustomer } from "./handlers/deleteCustomer"
// import { updateCustomer } from "./handlers/updateCustomer"
// import { searchCustomers } from "./handlers/searchCustomers"

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const data = await getIssues()
        res.json({issues: data })
    } catch (error) {
        res.send("Something went wrong")
    }
})





router.get("/search", async (req, res, next) => {
    try {
        const queryParams = req.query
        const { description } = queryParams
         const data = await searchIssue(description as string)
       res.json({ issues: data })
    } catch (error) {
        console.log(error)
        res.send("Something went wrong")
    }
})





router.get("/filter", async (req, res, next) => {
    try {
        const queryParams = req.query
        const { category } = queryParams
         const data = await filterIssue(queryParams)
       res.json({ issues: data })
    } catch (error) {
        console.log(error)
        res.send("Something went wrong")
    }
})


router.post("/", async (req, res, next) => {

console.log(req.body);


    try {newIssueSchema.parse(req.body)
       
        
        const newIssue: issueType = extractIssue(req.body)
        const result = await createIssue(newIssue)
        res.json({ result })
    } catch (error) {
        console.log(error);
        
        return res.status(400).json({ error: "something went wrong" })
    }
})


function extractIssue(body: any): issueType {
    const {  description, categoryid , tenantId} = body;
    return {  description, categoryid, tenantId};
}


export type issueType = {

    description: string,
    categoryid: number,
    tenantId :number
}



const descriptionScheme = z.string().min(5).max(100)
const categoryScheme = z.number()
const tenantScheme = z.number()

const newIssueSchema = z.object({
    description: descriptionScheme,
    categoryid : categoryScheme,
    tenantId : tenantScheme
})





export { router }