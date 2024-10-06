import { getConnection } from "../../database"

export async function getCategories() {
    const connection = await getConnection();
    const Categories = await connection?.execute("SELECT * FROM building_management.issues_categories;")
    const result = Categories?.[0]
    return result
}