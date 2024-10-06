import { getConnection } from "../../database"
import { getFullIssuesDataQuery } from "./query/getFullIssuesDataQuery";





export async function searchIssue(desc: string) {
    const connection = await getConnection();

    const searchDescription = `%${desc}%`;
    const issues = await connection?.execute(`${getFullIssuesDataQuery()} WHERE description LIKE ?`, [searchDescription])
    const result = issues?.[0]
    return result
}



