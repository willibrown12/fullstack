import express from "express"
import {  getEmployees } from "./handlers/getCustomers"
import {  createEmployees, EmployeeType } from "./handlers/createCustomer"
import {  deleteEmployees } from "./handlers/deleteCustomer"
import { updateEmployees } from "./handlers/updateCustomer"
import {  searchEmployees } from "./handlers/searchCustomers"

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const data = await getEmployees()
        res.json({ employees: data })
    } catch (error) {
        res.send("Something went wrong")
    }
})
router.get("/search", async (req, res, next) => {
    try {
        const queryParams = req.query
        const { job_title, city, country_region } = queryParams
        const data = await searchEmployees({ job_title, city, country_region } as any)
        res.json({ employees: data })
    } catch (error) {
        console.log(error)
        res.send("Something went wrong")
    }
})
router.post("/", async (req, res, next) => {
    try {
        const newEmployees: EmployeeType = extractEmployees(req.body)
        const result = await createEmployees(newEmployees)
        res.json({ result })
    } catch (error) {
        res.send("Something went wrong")
    }
})
router.delete("/:idToDelete", async (req, res, next) => {
    try {
        const affectedRows = await deleteEmployees(+req.params.idToDelete)
        res.json({ affectedRows })
    } catch (error) {
        res.send("Something went wrong")
    }
})
router.put("/:idToUpdate", async (req, res, next) => {
    try {
        console.log("put")
        const employeeToUpdate = extractEmployees(req.body)
        console.log(employeeToUpdate, req.params.idToUpdate)
        const affectedRows = await updateEmployees(+req.params.idToUpdate, employeeToUpdate)
        res.json({ affectedRows })
    } catch (error) {
        console.log(error)
        res.send("Something went wrong")
    }
})


function extractEmployees(body: any): EmployeeType {
    const { firstName, lastName, company, email, jobTitle } = body;
    return { firstName, lastName, company, email, jobTitle };
}

export { router }