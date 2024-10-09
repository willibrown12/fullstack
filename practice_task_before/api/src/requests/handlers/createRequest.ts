import { RequestType } from "..";
import { getConnection } from "../../database"


export async function createRequest(request: RequestType) {

    
    const query = `INSERT INTO office_repairs.requests (description, equipmentid) VALUES (?, ?);`
    const connection = await getConnection();
    const result = await connection?.execute(query,
        [request.description, request.equipmentid])
console.log(result);

    // @ts-ignore
    return result[0].insertId
}



