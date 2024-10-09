import { getConnection } from "../../database"
import { getFullRequestDataQuery } from "./query/getFullRequestData";

export async function getRequests() {
    const connection = await getConnection();
    const Requests = await connection?.execute(getFullRequestDataQuery())
    const result = Requests?.[0]
    return result
}