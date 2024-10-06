import { getConnection } from "../../database"



type SearchQuery = {
    category?: string,
}

export async function filterIssue(query:SearchQuery) {
    const connection = await getConnection();
    console.log(query);
    
    const filter = query?.category
    console.log(filter);
    
    const issues = await connection?.execute(`SELECT 
     building_management.issues.*, category , floor , CONCAT(firstName, ' ', lastName) AS fullName
FROM
    building_management.issues
  JOIN    building_management.issues_categories ON building_management.issues.categoryId =building_management.issues_categories.id
JOIN     building_management.tenants ON building_management.issues.tenantId = building_management.tenants.id
where category = ?`, [filter])
    const result = issues?.[0]
    return result
}