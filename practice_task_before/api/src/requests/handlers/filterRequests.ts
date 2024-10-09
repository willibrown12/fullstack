import { getConnection } from "../../database"
import { getFullRequestDataQuery } from "./query/getFullRequestData";



export async function filterRequest(filter: string) {
    const connection = await getConnection();
    
    const issues = await connection?.execute(`${getFullRequestDataQuery()}
where name = ?`, [filter])
    const result = issues?.[0]
    return result
}