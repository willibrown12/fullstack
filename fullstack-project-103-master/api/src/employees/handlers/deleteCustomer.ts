import { getConnection } from "../../db/connection"



export async function deleteEmployees(employeesId: number) {
    if (typeof employeesId !== 'number') throw new Error("employeesId must be Number")
    const query = `DELETE FROM customers WHERE (id = ?)`
    const connection = await getConnection();
    const result = await connection?.execute(query, [employeesId])
    // @ts-ignore
    return result[0].affectedRows
}