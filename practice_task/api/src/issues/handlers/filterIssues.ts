import { getConnection } from "../../database"
import { getFullIssuesDataQuery } from "./query/getFullIssuesDataQuery";



type SearchQuery = {
    category?: string,
}

export async function filterIssue(query: SearchQuery) {
    const connection = await getConnection();
    console.log(query);

    const filter = query?.category
    console.log(filter);

    const issues = await connection?.execute(`${getFullIssuesDataQuery()} where category = ?`, [filter])
    const result = issues?.[0]
    return result
}