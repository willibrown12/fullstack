import { getConnection } from "../../db/connection"

export async function getEmployees() {
    const connection = await getConnection();
    const EmployeeS = await connection?.execute("SELECT * FROM employees ", [])
    const result = EmployeeS?.[0]
    return result
}