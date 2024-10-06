import { issueType } from "..";
import { getConnection } from "../../database"


export async function createIssue(issue: issueType) {

    
    const query = `INSERT INTO building_management.issues ( tenantId, description, categoryId) VALUES ( ?,?, ?);`
    const connection = await getConnection();
    const result = await connection?.execute(query,
        [issue.tenantId,issue.description, issue.categoryid])
console.log(result);

    // @ts-ignore
    return result[0].insertId
}



