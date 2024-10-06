import { getConnection } from "../../database"





export async function searchIssue(desc: string) {
    const connection = await getConnection();
  
    const searchDescription = `%${desc}%`;
    const issues = await connection?.execute(`SELECT 
     building_management.issues.*, category , floor , CONCAT(firstName, ' ', lastName) AS fullName
FROM
    building_management.issues
  JOIN    building_management.issues_categories ON building_management.issues.categoryId =building_management.issues_categories.id
JOIN     building_management.tenants ON building_management.issues.tenantId = building_management.tenants.id
        WHERE description LIKE ?`, [searchDescription])
    const result = issues?.[0]
    return result
}



