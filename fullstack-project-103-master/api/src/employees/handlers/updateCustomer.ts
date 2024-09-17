import { getConnection } from "../../db/connection"
import {  EmployeeType } from "./createCustomer";



export async function updateEmployees(customerId: number, Employee: EmployeeType) {
    const query = `UPDATE employees
    SET company = ?, job_title = ?, first_name = ?, last_name = ?, email_address = ? 
    WHERE (id = ?)`
    const connection = await getConnection();
    const result = await connection?.execute(query,
        [Employee.company, Employee.jobTitle, Employee.firstName,
            Employee.lastName, Employee.email, Employee])
    // @ts-ignore
    return result[0]
}


