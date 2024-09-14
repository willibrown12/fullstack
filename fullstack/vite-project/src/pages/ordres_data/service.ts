import axios from "axios";

export async function Sendtoapiorders(statusname:string) {
    const url = `http://localhost:3500/orders/${statusname}`;
    console.log(url);
    
      const response = await axios.get(url);
     
      
      return response;
     }




