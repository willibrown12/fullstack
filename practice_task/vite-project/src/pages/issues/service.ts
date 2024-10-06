import axios from "axios";


export type IssueApi = typeof template

export type IssueUI = {
id: number,
tenantId : number,
description: string,
categoryId: string,
createdAt : string
category: string,
floor: number,
fullName: string

}


export async function SendtoapiIssues() {
   
  const url = `http://localhost:3002/issues`;
    console.log(url); 
    const result = await axios.get<{ issues: IssueApi[] }>(url)
    console.log(result);
    
    const data = result?.data?.issues.map(c => {
      return {
        id: c.id,
        tenantId : c.tenantId,
        description: c.description,
        categoryId: c.categoryId,
        createdAt : new Date(c.createdAt).toLocaleString(),
        category: c.category,
         floor: c.floor,
        fullName: c.fullName
      }})
     
      
      return data;
     }





     export async function SendtoapiSearch(input:string, isChecked:boolean) {
   
      const urlFilter= `http://localhost:3002/issues/filter?category=${input}`;
      const urlSearch= `http://localhost:3002/issues/search?description=${input}`;
    
      const result = isChecked 
      ? await axios.get<{ issues: IssueApi[] }>(urlFilter) 
      : await axios.get<{ issues: IssueApi[] }>(urlSearch);
        const data = result?.data?.issues.map(c => {
          return {
            id: c.id,
            tenantId : c.tenantId,
            description: c.description,
            categoryId: c.categoryId,
            createdAt: new Date(c.createdAt).toLocaleString(),
            category: c.category,
             floor: c.floor,
            fullName: c.fullName
          }})
         
          
          return data;
         }
    

const template = {
  "id": 1,
  "tenantId": 1,
  "description": "The hallway needs cleaning.",
  "categoryId": 1,
  "createdAt": "2024-10-02T14:14:19.000Z",
  "category": "Cleaning",
  "floor": 1,
  "fullName": "John Doe"
}


