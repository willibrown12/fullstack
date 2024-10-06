import { getConnection } from "../../database"

export async function getTenants() {
    const connection = await getConnection();
    const Tenants = await connection?.execute("SELECT * FROM building_management.tenants;")
    const result = Tenants?.[0]
    return result
}