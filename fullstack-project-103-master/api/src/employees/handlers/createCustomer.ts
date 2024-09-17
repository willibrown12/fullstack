import { getConnection } from "../../db/connection"

export type  EmployeeType = {
    company: string,
    firstName: string,
    lastName: string,
    email: string,
    jobTitle: string,
}

export async function createEmployees(Employee: EmployeeType) {
    const query = `INSERT INTO employees 
    (company, last_name, first_name, email_address, job_title)
     VALUES (?, ?, ?, ?, ?);`
    const connection = await getConnection();
    const result = await connection?.execute(query,
        [ Employee.company,  Employee.firstName,  Employee.lastName,  Employee.email,  Employee.jobTitle])

    // @ts-ignore
    return result[0].insertId
}