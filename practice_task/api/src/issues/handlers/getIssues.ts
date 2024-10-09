import { getConnection } from "../../database"
import { getFullIssuesDataQuery } from "./query/getFullIssuesDataQuery";

export async function getIssues() {
    const connection = await getConnection();
    const issues = await connection?.execute(getFullIssuesDataQuery())
    const result = issues?.[0]
    return result
}