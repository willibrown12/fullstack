export function getFullRequestDataQuery(): string {
    const query = `SELECT 
    office_repairs.requests.id, 
    office_repairs.requests.description, 
    office_repairs.equipment.name ,
        office_repairs.requests.createdAt
FROM 
    office_repairs.requests
JOIN 
    office_repairs.equipment 
ON 
    office_repairs.equipment.id = office_repairs.requests.equipmentid
ORDER BY 
    office_repairs.requests.createdAt DESC;`
    return query;
}