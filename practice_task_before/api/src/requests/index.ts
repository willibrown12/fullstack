import express from "express"
import { getRequests } from "./handlers/getRequests"
import {  createRequest } from "./handlers/createRequest"
import { z } from "zod"
import { filterRequest } from "./handlers/filterRequests"


// import { createCustomer, CustomerType } from "./handlers/createCustomer"
// import { deleteCustomer } from "./handlers/deleteCustomer"
// import { updateCustomer } from "./handlers/updateCustomer"
// import { searchCustomers } from "./handlers/searchCustomers"

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const data = await getRequests ()
        res.json({issues: data })
    } catch (error) {
        res.send("Something went wrong")
    }
})





router.get("/filter", async (req, res, next) => {
    try {
        const queryParams = req.query
        const { filter } = queryParams
         const data = await filterRequest(filter as string)
       res.json({ issues: data })
    } catch (error) {
        console.log(error)
        res.send("Something went wrong")
    }
})


router.post("/", async (req, res, next) => {


    try {newRequestSchema.parse(req.body)
       
        const newRequest: RequestType = extractRequest(req.body)
        const result = await createRequest(newRequest)
        res.json({ result })
    } catch (error:any) {
      
        console.log(error?.errors, res.getHeader("x-request-id"))
        return res.status(400).json({ error: "something went wrong" })
    }
})


function extractRequest(body: any): RequestType {
    const {  description, equipmentid } = body;
    return {  description, equipmentid};
}


export type RequestType = {

    description: string,
    equipmentid: number,
  
}



const descriptionScheme = z.string().min(5).max(100)
const equipmentScheme = z.number()



const newRequestSchema = z.object({
    description: descriptionScheme,
    equipmentid : equipmentScheme,
})





export { router }

function createIssue(newRequest: RequestType) {
    throw new Error("Function not implemented.")
}
