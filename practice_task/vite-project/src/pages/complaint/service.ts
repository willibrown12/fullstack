import axios from "axios";


export type categoryApi = typeof template
export type tenantsApi = typeof template2

export type categoryUI = {
  id: number,
  category: string,

}

export type tenantsUI = {
  id: number,
  fullname: string,

}


export async function SendtoapiCategory() {

  const url = `http://localhost:3002/categories`;

  const result = await axios.get<{ Categories: categoryApi[] }>(url)
  const data = result?.data?.Categories?.map(c => {
    return {
      id :c.id,
      category: c.category,
    }
  })
  console.log(data);


  return data;
}





export async function SendtoapiTenants() {

  const url = `http://localhost:3002/Tenants`;

  const result = await axios.get<{
    Tenants
    : tenantsApi[]
  }>(url)


  const data = result?.data?.Tenants?.map(c => {
    return {
      id: c.id,
      fullname: c.firstName+ " "+ c.lastName
    }
  })
  console.log(data);


  return data;
}




export type Issue = {

  tenantId : string,
  description: string,
  categoryid: string,
 
  
  }


const BASE_URL = `http://localhost:3002/issues`

export async function registerApi(Issue: Issue) {
const issuePost = {
  tenantId : parseInt(Issue.tenantId),
  description: Issue.description,
  categoryid : parseInt(Issue.categoryid)
}

console.log(issuePost);

    const result = await axios.post(BASE_URL,
      issuePost,
        { headers: { "content-type": "application/json" } })
    return result
}







const template = {
  "id": 1,
  "category": "Cleaning"
}

const template2 = {
  "id": 1,
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "1234567890",
  "apartmentNumber": "101",
  "floor": 1
}

