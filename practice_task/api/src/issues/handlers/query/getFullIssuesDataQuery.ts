export function getFullIssuesDataQuery(): string {
    const query = `SELECT 
    building_management.issues.*,
    category,
    floor,
    CONCAT(firstName, ' ', lastName, ' ', email) AS fullName
    FROM
    building_management.issues
        JOIN
    building_management.issues_categories ON building_management.issues.categoryId = building_management.issues_categories.id
        JOIN
    building_management.tenants ON building_management.issues.tenantId = building_management.tenants.id`
    return query;
}